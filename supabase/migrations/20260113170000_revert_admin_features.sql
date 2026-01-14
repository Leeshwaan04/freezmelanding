-- Revert all admin dashboard features and related tables
-- Migration: 20260113170000_revert_admin_features.sql

-- Drop admin-related tables in correct order (respecting foreign key dependencies)
DROP TABLE IF EXISTS admin_activity_logs CASCADE;
DROP TABLE IF EXISTS match_introductions CASCADE;
DROP TABLE IF EXISTS application_statuses CASCADE;
DROP TABLE IF EXISTS admin_dashboard_stats CASCADE;

-- Note: Keep core tables (user_profiles, matchmaking_profiles, partner_preferences, transactions)
-- as these are part of the original application structure