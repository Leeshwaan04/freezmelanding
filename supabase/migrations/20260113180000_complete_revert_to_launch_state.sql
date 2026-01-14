-- Complete revert to original Freezme launch state
-- Removes all authentication, admin, payment, and member portal features

-- Drop all tables that were added after launch
DROP TABLE IF EXISTS matchmaking_profiles CASCADE;
DROP TABLE IF EXISTS user_transactions CASCADE;
DROP TABLE IF EXISTS users CASCADE;

-- Note: Keep core application-related tables if they exist
-- This migration focuses on removing authentication and feature additions