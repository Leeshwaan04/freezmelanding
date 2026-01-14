-- Enable UUID extension
create extension if not exists "uuid-ossp";

-- Create user_profiles table
create table public.user_profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  name text,
  email text,
  phone text,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  updated_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Create transactions table for tracking user activities
create table public.transactions (
  id uuid primary key default uuid_generate_v4(),
  user_id uuid not null references public.user_profiles(id) on delete cascade,
  transaction_type text not null check (transaction_type in ('application_fee', 'introduction_payment', 'assessment', 'other')),
  amount numeric(10,2) not null,
  currency text default 'INR' not null,
  status text not null check (status in ('pending', 'completed', 'failed', 'refunded')),
  payment_id text,
  order_id text,
  description text,
  metadata jsonb default '{}'::jsonb,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  updated_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Enable Row Level Security
alter table public.user_profiles enable row level security;
alter table public.transactions enable row level security;

-- User Profiles Policies
create policy "Users can view their own profile"
  on public.user_profiles for select
  using (auth.uid() = id);

create policy "Users can update their own profile"
  on public.user_profiles for update
  using (auth.uid() = id);

create policy "Users can insert their own profile"
  on public.user_profiles for insert
  with check (auth.uid() = id);

-- Transactions Policies
create policy "Users can view their own transactions"
  on public.transactions for select
  using (auth.uid() = user_id);

create policy "Users can insert their own transactions"
  on public.transactions for insert
  with check (auth.uid() = user_id);

-- Admins can view all transactions
create policy "Admins can view all transactions"
  on public.transactions for select
  using (
    exists (
      select 1 from public.user_profiles
      where id = auth.uid()
      and metadata->>'role' = 'admin'
    )
  );

-- Function to automatically create user profile on signup
create or replace function public.handle_new_user()
returns trigger as $$
begin
  insert into public.user_profiles (id, email, name)
  values (new.id, new.email, new.raw_user_meta_data->>'name');
  return new;
end;
$$ language plpgsql security definer;

-- Trigger to create profile on user signup
create trigger on_auth_user_created
  after insert on auth.users
  for each row execute procedure public.handle_new_user();

-- Function to update updated_at timestamp
create or replace function public.handle_updated_at()
returns trigger as $$
begin
  new.updated_at = timezone('utc'::text, now());
  return new;
end;
$$ language plpgsql;

-- Triggers for updated_at
create trigger handle_user_profiles_updated_at
  before update on public.user_profiles
  for each row execute procedure public.handle_updated_at();

create trigger handle_transactions_updated_at
  before update on public.transactions
  for each row execute procedure public.handle_updated_at();

-- Create indexes for better query performance
create index idx_transactions_user_id on public.transactions(user_id);
create index idx_transactions_status on public.transactions(status);
create index idx_transactions_created_at on public.transactions(created_at desc);
create index idx_user_profiles_email on public.user_profiles(email);