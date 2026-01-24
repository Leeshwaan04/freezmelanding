# 🧹 Freezme Cleanup Instructions

## Database Migration
✅ **COMPLETED**: Migration file created to drop all auth/user management tables
- **File**: `supabase/migrations/20260113182447_restore_to_launch_state.sql`
- **Action**: Migration will auto-apply when detected by system

## Manual Cleanup Required

### 1. Delete Route Directories
**Location**: `src/app/`

```bash
# Delete these entire directories:
rm -rf src/app/admin-dashboard
rm -rf src/app/admin-payments
rm -rf src/app/login
rm -rf src/app/member-portal
rm -rf src/app/payment-dashboard
rm -rf src/app/profile
rm -rf src/app/profile-completion
rm -rf src/app/signup
rm -rf src/app/transaction-history
rm -rf src/app/transactions
```

**Routes to DELETE**:
- ❌ `/admin-dashboard` - Admin management portal
- ❌ `/admin-payments` - Admin payment tracking
- ❌ `/login` - User authentication
- ❌ `/member-portal` - Member dashboard
- ❌ `/payment-dashboard` - Payment management
- ❌ `/profile` - User profile management
- ❌ `/profile-completion` - Profile setup wizard
- ❌ `/signup` - User registration
- ❌ `/transaction-history` - Transaction records
- ❌ `/transactions` - Transaction management

### 2. Delete Service Files
**Location**: `src/services/`

```bash
rm src/services/adminService.ts
rm src/services/introductionService.ts
```

**Files to DELETE**:
- ❌ `adminService.ts` - Admin operations
- ❌ `introductionService.ts` - Introduction logic

### 3. Delete API Routes
**Location**: `src/app/api/`

```bash
rm -rf src/app/api/payments
```

**API Routes to DELETE**:
- ❌ `/api/payments/` - Payment processing endpoints

### 4. Delete Auth Context
**Location**: `src/contexts/`

```bash
rm src/contexts/AuthContext.tsx
```

**Context to DELETE**:
- ❌ `AuthContext.tsx` - Authentication state management

### 5. Delete Integration Libraries
**Location**: `src/lib/`

```bash
rm src/lib/razorpay.ts
```

**Libraries to DELETE**:
- ❌ `razorpay.ts` - Payment integration

### 6. Delete Type Definitions
**Location**: `src/types/`

```bash
rm src/types/introduction.types.ts
```

**Types to DELETE**:
- ❌ `introduction.types.ts` - Introduction type definitions

## ✅ Preserved Files (DO NOT DELETE)

### Keep These Routes:
- ✅ `/homepage` - Landing page
- ✅ `/about` - About page
- ✅ `/pricing` - Pricing information
- ✅ `/how-it-works` - Process explanation
- ✅ `/privacy-and-security` - Privacy policy
- ✅ `/application` - Application form (without auth)

### Keep These Components:
- ✅ `src/components/common/Header.tsx` - Already cleaned navigation
- ✅ `src/components/ui/` - UI components
- ✅ `src/lib/supabase.ts` - Supabase client (for future use)

## Verification Steps

After cleanup, verify:
1. ✅ No routes exist for auth/admin/payments
2. ✅ No service files for admin/introduction
3. ✅ No API routes for payments
4. ✅ Navigation only shows 7 original screens
5. ✅ Database contains no user management tables

## Final State

**Remaining Routes** (7 screens):
1. `/homepage` - Home
2. `/about` - About
3. `/pricing` - Pricing
4. `/how-it-works` - How It Works
5. `/privacy-and-security` - Privacy & Security
6. `/application` - Application Form
7. Root `/` - Redirects to homepage

**Clean Database**:
- No user_profiles table
- No transactions table
- No partner_preferences table
- No introduction functions
- No auth-related ENUMs