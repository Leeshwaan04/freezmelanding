-- Location: supabase/migrations/20260113133736_add_matchmaking_profiles.sql
-- Schema Analysis: Existing user_profiles table with basic fields
-- Integration Type: NEW_MODULE - Adding matchmaking profile functionality
-- Dependencies: user_profiles table

-- 1. Create ENUMs for profile preferences
CREATE TYPE public.gender_type AS ENUM ('male', 'female', 'non_binary', 'prefer_not_to_say');
CREATE TYPE public.relationship_goal_type AS ENUM ('marriage', 'long_term', 'dating', 'friendship', 'not_sure');
CREATE TYPE public.education_level_type AS ENUM ('high_school', 'bachelors', 'masters', 'doctorate', 'other');
CREATE TYPE public.lifestyle_type AS ENUM ('active', 'moderate', 'relaxed');
CREATE TYPE public.smoking_preference AS ENUM ('never', 'occasionally', 'regularly', 'prefer_not_to_say');
CREATE TYPE public.drinking_preference AS ENUM ('never', 'socially', 'regularly', 'prefer_not_to_say');

-- 2. Create matchmaking_profiles table
CREATE TABLE public.matchmaking_profiles (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID REFERENCES public.user_profiles(id) ON DELETE CASCADE,
    
    -- Demographics
    date_of_birth DATE,
    gender public.gender_type,
    location_city TEXT,
    location_state TEXT,
    location_country TEXT DEFAULT 'USA',
    
    -- Physical attributes
    height_inches INTEGER,
    
    -- Background
    education_level public.education_level_type,
    occupation TEXT,
    religion TEXT,
    ethnicity TEXT,
    
    -- Lifestyle
    lifestyle_activity public.lifestyle_type,
    smoking public.smoking_preference,
    drinking public.drinking_preference,
    has_children BOOLEAN,
    wants_children BOOLEAN,
    
    -- Interests (stored as text array)
    hobbies TEXT[],
    interests TEXT[],
    
    -- Relationship goals
    relationship_goal public.relationship_goal_type,
    ideal_partner_description TEXT,
    deal_breakers TEXT,
    
    -- About
    bio TEXT,
    
    -- Visibility settings
    is_visible_to_matchmakers BOOLEAN DEFAULT true,
    profile_completion_percentage INTEGER DEFAULT 0,
    
    -- Timestamps
    created_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP,
    
    -- Constraints
    UNIQUE(user_id)
);

-- 3. Create partner_preferences table
CREATE TABLE public.partner_preferences (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    matchmaking_profile_id UUID REFERENCES public.matchmaking_profiles(id) ON DELETE CASCADE,
    
    -- Preferred demographics
    preferred_age_min INTEGER,
    preferred_age_max INTEGER,
    preferred_gender public.gender_type[],
    preferred_location_distance_miles INTEGER,
    
    -- Preferred background
    preferred_education_levels public.education_level_type[],
    preferred_religions TEXT[],
    
    -- Preferred lifestyle
    preferred_lifestyle public.lifestyle_type[],
    preferred_smoking public.smoking_preference[],
    preferred_drinking public.drinking_preference[],
    preferred_has_children BOOLEAN,
    preferred_wants_children BOOLEAN,
    
    -- Timestamps
    created_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP,
    
    -- Constraints
    UNIQUE(matchmaking_profile_id)
);

-- 4. Create indexes
CREATE INDEX idx_matchmaking_profiles_user_id ON public.matchmaking_profiles(user_id);
CREATE INDEX idx_matchmaking_profiles_visible ON public.matchmaking_profiles(is_visible_to_matchmakers) WHERE is_visible_to_matchmakers = true;
CREATE INDEX idx_matchmaking_profiles_completion ON public.matchmaking_profiles(profile_completion_percentage);
CREATE INDEX idx_partner_preferences_profile_id ON public.partner_preferences(matchmaking_profile_id);

-- 5. Enable RLS
ALTER TABLE public.matchmaking_profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.partner_preferences ENABLE ROW LEVEL SECURITY;

-- 6. Create RLS policies using Pattern 2 (Simple User Ownership)
CREATE POLICY "users_manage_own_matchmaking_profiles"
ON public.matchmaking_profiles
FOR ALL
TO authenticated
USING (user_id = auth.uid())
WITH CHECK (user_id = auth.uid());

-- Partner preferences policy using relationship through matchmaking_profiles
CREATE POLICY "users_manage_own_partner_preferences"
ON public.partner_preferences
FOR ALL
TO authenticated
USING (
    matchmaking_profile_id IN (
        SELECT id FROM public.matchmaking_profiles WHERE user_id = auth.uid()
    )
)
WITH CHECK (
    matchmaking_profile_id IN (
        SELECT id FROM public.matchmaking_profiles WHERE user_id = auth.uid()
    )
);

-- 7. Create function to calculate profile completion
CREATE OR REPLACE FUNCTION public.calculate_profile_completion(profile_id UUID)
RETURNS INTEGER
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
DECLARE
    completion_score INTEGER := 0;
    total_fields INTEGER := 18;
    profile_record RECORD;
BEGIN
    SELECT * INTO profile_record FROM public.matchmaking_profiles WHERE id = profile_id;
    
    IF profile_record IS NULL THEN
        RETURN 0;
    END IF;
    
    -- Count completed required fields
    IF profile_record.date_of_birth IS NOT NULL THEN completion_score := completion_score + 1; END IF;
    IF profile_record.gender IS NOT NULL THEN completion_score := completion_score + 1; END IF;
    IF profile_record.location_city IS NOT NULL THEN completion_score := completion_score + 1; END IF;
    IF profile_record.location_state IS NOT NULL THEN completion_score := completion_score + 1; END IF;
    IF profile_record.height_inches IS NOT NULL THEN completion_score := completion_score + 1; END IF;
    IF profile_record.education_level IS NOT NULL THEN completion_score := completion_score + 1; END IF;
    IF profile_record.occupation IS NOT NULL THEN completion_score := completion_score + 1; END IF;
    IF profile_record.lifestyle_activity IS NOT NULL THEN completion_score := completion_score + 1; END IF;
    IF profile_record.smoking IS NOT NULL THEN completion_score := completion_score + 1; END IF;
    IF profile_record.drinking IS NOT NULL THEN completion_score := completion_score + 1; END IF;
    IF profile_record.has_children IS NOT NULL THEN completion_score := completion_score + 1; END IF;
    IF profile_record.wants_children IS NOT NULL THEN completion_score := completion_score + 1; END IF;
    IF profile_record.hobbies IS NOT NULL AND array_length(profile_record.hobbies, 1) > 0 THEN completion_score := completion_score + 1; END IF;
    IF profile_record.interests IS NOT NULL AND array_length(profile_record.interests, 1) > 0 THEN completion_score := completion_score + 1; END IF;
    IF profile_record.relationship_goal IS NOT NULL THEN completion_score := completion_score + 1; END IF;
    IF profile_record.ideal_partner_description IS NOT NULL AND length(profile_record.ideal_partner_description) > 20 THEN completion_score := completion_score + 1; END IF;
    IF profile_record.bio IS NOT NULL AND length(profile_record.bio) > 50 THEN completion_score := completion_score + 1; END IF;
    IF profile_record.is_visible_to_matchmakers IS NOT NULL THEN completion_score := completion_score + 1; END IF;
    
    RETURN (completion_score * 100 / total_fields);
END;
$$;

-- 8. Create trigger to auto-update profile completion percentage
CREATE OR REPLACE FUNCTION public.update_profile_completion()
RETURNS TRIGGER
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
BEGIN
    NEW.profile_completion_percentage := public.calculate_profile_completion(NEW.id);
    NEW.updated_at := CURRENT_TIMESTAMP;
    RETURN NEW;
END;
$$;

CREATE TRIGGER trigger_update_profile_completion
BEFORE INSERT OR UPDATE ON public.matchmaking_profiles
FOR EACH ROW
EXECUTE FUNCTION public.update_profile_completion();

-- 9. Create trigger for partner_preferences updated_at
CREATE TRIGGER handle_partner_preferences_updated_at
BEFORE UPDATE ON public.partner_preferences
FOR EACH ROW
EXECUTE FUNCTION public.handle_updated_at();

-- 10. Mock data for testing
DO $$
DECLARE
    existing_user_id UUID;
    profile_id UUID;
BEGIN
    -- Get existing user from user_profiles
    SELECT id INTO existing_user_id FROM public.user_profiles LIMIT 1;
    
    IF existing_user_id IS NOT NULL THEN
        -- Create sample matchmaking profile
        INSERT INTO public.matchmaking_profiles (
            id,
            user_id,
            date_of_birth,
            gender,
            location_city,
            location_state,
            height_inches,
            education_level,
            occupation,
            religion,
            ethnicity,
            lifestyle_activity,
            smoking,
            drinking,
            has_children,
            wants_children,
            hobbies,
            interests,
            relationship_goal,
            ideal_partner_description,
            bio,
            is_visible_to_matchmakers
        ) VALUES (
            gen_random_uuid(),
            existing_user_id,
            '1990-01-15'::DATE,
            'female'::public.gender_type,
            'San Francisco',
            'California',
            65,
            'bachelors'::public.education_level_type,
            'Software Engineer',
            'Spiritual',
            'Asian American',
            'active'::public.lifestyle_type,
            'never'::public.smoking_preference,
            'socially'::public.drinking_preference,
            false,
            true,
            ARRAY['hiking', 'reading', 'cooking'],
            ARRAY['technology', 'travel', 'fitness'],
            'marriage'::public.relationship_goal_type,
            'Looking for someone who shares my values of family, growth, and adventure. Must be kind, ambitious, and have a good sense of humor.',
            'I am a passionate software engineer who loves outdoor activities and exploring new places. Family-oriented and looking for a meaningful connection that leads to marriage.',
            true
        )
        RETURNING id INTO profile_id;
        
        -- Create sample partner preferences
        INSERT INTO public.partner_preferences (
            matchmaking_profile_id,
            preferred_age_min,
            preferred_age_max,
            preferred_gender,
            preferred_location_distance_miles,
            preferred_education_levels,
            preferred_religions,
            preferred_lifestyle,
            preferred_smoking,
            preferred_drinking,
            preferred_has_children,
            preferred_wants_children
        ) VALUES (
            profile_id,
            28,
            38,
            ARRAY['male'::public.gender_type],
            50,
            ARRAY['bachelors'::public.education_level_type, 'masters'::public.education_level_type, 'doctorate'::public.education_level_type],
            ARRAY['Spiritual', 'Agnostic', 'Open'],
            ARRAY['active'::public.lifestyle_type, 'moderate'::public.lifestyle_type],
            ARRAY['never'::public.smoking_preference],
            ARRAY['never'::public.drinking_preference, 'socially'::public.drinking_preference],
            false,
            true
        );
    ELSE
        RAISE NOTICE 'No existing users found. Create user profiles first.';
    END IF;
END $$;