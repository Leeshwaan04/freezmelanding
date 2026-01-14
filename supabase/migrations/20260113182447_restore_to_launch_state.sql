-- Location: supabase/migrations/20260113182447_restore_to_launch_state.sql
-- Migration Type: DESTRUCTIVE - Complete removal of auth/user management features
-- Purpose: Restore Freezme to original 7-screen launched state

-- Step 1: Drop RLS policies (before dropping tables)
DROP POLICY IF EXISTS "users_manage_own_user_profiles" ON public.user_profiles;
DROP POLICY IF EXISTS "users_manage_own_transactions" ON public.transactions;
DROP POLICY IF EXISTS "users_manage_own_partner_preferences" ON public.partner_preferences;

-- Step 2: Drop triggers (before dropping functions)
DROP TRIGGER IF EXISTS handle_new_user_trigger ON auth.users;
DROP TRIGGER IF EXISTS set_updated_at_user_profiles ON public.user_profiles;
DROP TRIGGER IF EXISTS set_updated_at_transactions ON public.transactions;
DROP TRIGGER IF EXISTS set_updated_at_partner_preferences ON public.partner_preferences;
DROP TRIGGER IF EXISTS update_profile_completion_trigger ON public.user_profiles;

-- Step 3: Drop dependent tables first (children before parents)
DROP TABLE IF EXISTS public.partner_preferences CASCADE;
DROP TABLE IF EXISTS public.transactions CASCADE;

-- Step 4: Drop parent table
DROP TABLE IF EXISTS public.user_profiles CASCADE;

-- Step 5: Drop functions
DROP FUNCTION IF EXISTS public.handle_new_user() CASCADE;
DROP FUNCTION IF EXISTS public.handle_updated_at() CASCADE;
DROP FUNCTION IF EXISTS public.handle_updated_at_timestamp() CASCADE;
DROP FUNCTION IF EXISTS public.calculate_profile_completion(uuid) CASCADE;
DROP FUNCTION IF EXISTS public.update_profile_completion() CASCADE;
DROP FUNCTION IF EXISTS public.is_admin() CASCADE;
DROP FUNCTION IF EXISTS public.get_sample_rows(text, integer) CASCADE;

-- Step 6: Drop custom ENUM types
DROP TYPE IF EXISTS public.user_role CASCADE;
DROP TYPE IF EXISTS public.drinking_preference CASCADE;
DROP TYPE IF EXISTS public.education_level_type CASCADE;
DROP TYPE IF EXISTS public.gender_type CASCADE;
DROP TYPE IF EXISTS public.lifestyle_type CASCADE;
DROP TYPE IF EXISTS public.relationship_goal_type CASCADE;
DROP TYPE IF EXISTS public.smoking_preference CASCADE;