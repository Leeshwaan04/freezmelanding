-- Location: supabase/migrations/20260113164829_add_admin_dashboard.sql
-- Schema Analysis: Existing tables: user_profiles, matchmaking_profiles, partner_preferences, transactions
-- Integration Type: Addition - Adding admin-specific tracking tables
-- Dependencies: user_profiles (existing)

-- 1. Add admin role to existing user_profiles if not exists
DO $$
BEGIN
    IF NOT EXISTS (
        SELECT 1 FROM pg_type WHERE typname = 'user_role'
    ) THEN
        CREATE TYPE public.user_role AS ENUM ('admin', 'user');
    END IF;
END $$;

-- Add role column to user_profiles if it doesn't exist
DO $$
BEGIN
    IF NOT EXISTS (
        SELECT 1 FROM information_schema.columns 
        WHERE table_schema = 'public' 
        AND table_name = 'user_profiles' 
        AND column_name = 'role'
    ) THEN
        ALTER TABLE public.user_profiles
        ADD COLUMN role public.user_role DEFAULT 'user'::public.user_role;
    END IF;
END $$;

-- 2. Create application_statuses table for tracking user applications
CREATE TABLE IF NOT EXISTS public.application_statuses (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID NOT NULL REFERENCES public.user_profiles(id) ON DELETE CASCADE,
    application_status TEXT NOT NULL DEFAULT 'pending',
    submission_date TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP,
    review_date TIMESTAMPTZ,
    reviewer_notes TEXT,
    reviewed_by UUID REFERENCES public.user_profiles(id) ON DELETE SET NULL,
    payment_status TEXT DEFAULT 'unpaid',
    payment_date TIMESTAMPTZ,
    created_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP
);

-- 3. Create match_introductions table for tracking matchmaker introductions
CREATE TABLE IF NOT EXISTS public.match_introductions (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user1_id UUID NOT NULL REFERENCES public.user_profiles(id) ON DELETE CASCADE,
    user2_id UUID NOT NULL REFERENCES public.user_profiles(id) ON DELETE CASCADE,
    matchmaker_id UUID REFERENCES public.user_profiles(id) ON DELETE SET NULL,
    introduction_date TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP,
    status TEXT DEFAULT 'pending',
    match_score INTEGER CHECK (match_score >= 0 AND match_score <= 100),
    notes TEXT,
    feedback_user1 TEXT,
    feedback_user2 TEXT,
    outcome TEXT,
    created_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP
);

-- 4. Create admin_activity_logs table for audit trail
CREATE TABLE IF NOT EXISTS public.admin_activity_logs (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    admin_id UUID NOT NULL REFERENCES public.user_profiles(id) ON DELETE CASCADE,
    action_type TEXT NOT NULL,
    target_user_id UUID REFERENCES public.user_profiles(id) ON DELETE SET NULL,
    description TEXT NOT NULL,
    metadata JSONB DEFAULT '{}'::jsonb,
    created_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP
);

-- 5. Create indexes for performance
CREATE INDEX IF NOT EXISTS idx_application_statuses_user_id ON public.application_statuses(user_id);
CREATE INDEX IF NOT EXISTS idx_application_statuses_status ON public.application_statuses(application_status);
CREATE INDEX IF NOT EXISTS idx_match_introductions_user1 ON public.match_introductions(user1_id);
CREATE INDEX IF NOT EXISTS idx_match_introductions_user2 ON public.match_introductions(user2_id);
CREATE INDEX IF NOT EXISTS idx_match_introductions_status ON public.match_introductions(status);
CREATE INDEX IF NOT EXISTS idx_admin_activity_logs_admin_id ON public.admin_activity_logs(admin_id);
CREATE INDEX IF NOT EXISTS idx_admin_activity_logs_created_at ON public.admin_activity_logs(created_at);

-- 6. Create helper functions BEFORE RLS policies
CREATE OR REPLACE FUNCTION public.is_admin()
RETURNS BOOLEAN
LANGUAGE sql
STABLE
SECURITY DEFINER
AS $$
SELECT EXISTS (
    SELECT 1 FROM public.user_profiles up
    WHERE up.id = auth.uid() AND up.role = 'admin'::public.user_role
)
$$;

-- 7. Enable RLS
ALTER TABLE public.application_statuses ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.match_introductions ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.admin_activity_logs ENABLE ROW LEVEL SECURITY;

-- 8. RLS Policies - Pattern 2 for user ownership + admin access
CREATE POLICY "users_view_own_application_status"
ON public.application_statuses
FOR SELECT
TO authenticated
USING (user_id = auth.uid() OR public.is_admin());

CREATE POLICY "admins_manage_application_statuses"
ON public.application_statuses
FOR ALL
TO authenticated
USING (public.is_admin())
WITH CHECK (public.is_admin());

CREATE POLICY "users_view_own_match_introductions"
ON public.match_introductions
FOR SELECT
TO authenticated
USING (user1_id = auth.uid() OR user2_id = auth.uid() OR public.is_admin());

CREATE POLICY "admins_manage_match_introductions"
ON public.match_introductions
FOR ALL
TO authenticated
USING (public.is_admin())
WITH CHECK (public.is_admin());

CREATE POLICY "admins_manage_activity_logs"
ON public.admin_activity_logs
FOR ALL
TO authenticated
USING (public.is_admin())
WITH CHECK (public.is_admin());

-- 9. Create trigger function for updated_at
CREATE OR REPLACE FUNCTION public.handle_updated_at_timestamp()
RETURNS TRIGGER
SECURITY DEFINER
LANGUAGE plpgsql
AS $$
BEGIN
    NEW.updated_at = CURRENT_TIMESTAMP;
    RETURN NEW;
END;
$$;

-- 10. Add triggers for updated_at
DROP TRIGGER IF EXISTS update_application_statuses_updated_at ON public.application_statuses;
CREATE TRIGGER update_application_statuses_updated_at
    BEFORE UPDATE ON public.application_statuses
    FOR EACH ROW
    EXECUTE FUNCTION public.handle_updated_at_timestamp();

DROP TRIGGER IF EXISTS update_match_introductions_updated_at ON public.match_introductions;
CREATE TRIGGER update_match_introductions_updated_at
    BEFORE UPDATE ON public.match_introductions
    FOR EACH ROW
    EXECUTE FUNCTION public.handle_updated_at_timestamp();

-- 11. Mock data for admin dashboard testing
DO $$
DECLARE
    admin_user_id UUID;
    regular_user_id1 UUID;
    regular_user_id2 UUID;
    application_id UUID;
    match_id UUID;
BEGIN
    -- Get existing user IDs
    SELECT id INTO admin_user_id FROM public.user_profiles WHERE email LIKE '%admin%' LIMIT 1;
    SELECT id INTO regular_user_id1 FROM public.user_profiles WHERE email NOT LIKE '%admin%' LIMIT 1;
    SELECT id INTO regular_user_id2 FROM public.user_profiles WHERE email NOT LIKE '%admin%' OFFSET 1 LIMIT 1;
    
    -- Set one user as admin if exists
    IF admin_user_id IS NOT NULL THEN
        UPDATE public.user_profiles SET role = 'admin'::public.user_role WHERE id = admin_user_id;
    END IF;
    
    -- Create application statuses if users exist
    IF regular_user_id1 IS NOT NULL THEN
        INSERT INTO public.application_statuses (user_id, application_status, payment_status, reviewer_notes)
        VALUES 
            (regular_user_id1, 'approved', 'paid', 'Excellent profile, approved for matching'),
            (regular_user_id1, 'pending', 'unpaid', NULL);
    END IF;
    
    -- Create match introductions if multiple users exist
    IF regular_user_id1 IS NOT NULL AND regular_user_id2 IS NOT NULL THEN
        INSERT INTO public.match_introductions (user1_id, user2_id, matchmaker_id, status, match_score, notes)
        VALUES 
            (regular_user_id1, regular_user_id2, admin_user_id, 'active', 85, 'Highly compatible based on preferences'),
            (regular_user_id1, regular_user_id2, admin_user_id, 'completed', 92, 'Successful match, both parties interested');
    END IF;
    
    -- Create admin activity logs
    IF admin_user_id IS NOT NULL THEN
        INSERT INTO public.admin_activity_logs (admin_id, action_type, target_user_id, description, metadata)
        VALUES 
            (admin_user_id, 'application_review', regular_user_id1, 'Reviewed and approved application', '{"decision": "approved", "notes": "Excellent candidate"}'::jsonb),
            (admin_user_id, 'match_creation', regular_user_id1, 'Created new match introduction', '{"match_score": 85, "compatibility": "high"}'::jsonb);
    END IF;
END $$;

-- 12. Create view for admin dashboard statistics
CREATE OR REPLACE VIEW public.admin_dashboard_stats AS
SELECT 
    (SELECT COUNT(*) FROM public.user_profiles) as total_users,
    (SELECT COUNT(*) FROM public.matchmaking_profiles WHERE profile_completion_percentage = 100) as complete_profiles,
    (SELECT COUNT(*) FROM public.application_statuses WHERE application_status = 'pending') as pending_applications,
    (SELECT COUNT(*) FROM public.application_statuses WHERE application_status = 'approved') as approved_applications,
    (SELECT COUNT(*) FROM public.match_introductions WHERE status = 'active') as active_matches,
    (SELECT COUNT(*) FROM public.match_introductions WHERE outcome = 'success') as successful_matches,
    (SELECT COALESCE(SUM(amount), 0) FROM public.transactions WHERE status = 'success') as total_revenue,
    (SELECT COALESCE(SUM(amount), 0) FROM public.transactions WHERE status = 'success' AND created_at >= CURRENT_DATE - INTERVAL '30 days') as monthly_revenue,
    (SELECT COUNT(*) FROM public.transactions WHERE status = 'pending') as pending_payments;