# Razorpay Integration Setup Guide

## Overview
This guide will help you set up real Razorpay payments for your CrowdFundIn application by replacing the mock payment system.

## ✅ Changes Made

### Backend Changes
1. **Removed mock payment logic** from `/backend/routes/donations.js`
2. **Updated environment** to production mode in `/backend/.env`
3. **Simplified payment flow** to use only real Razorpay payments

### Frontend Changes
1. **Removed mock payment handling** from `/frontend/src/components/DonationForm.jsx`
2. **Updated environment** with placeholder Razorpay key in `/frontend/.env`

## 🔑 Required: Get Your Razorpay Keys

### Step 1: Create Razorpay Account
1. Go to [https://razorpay.com](https://razorpay.com)
2. Sign up for a free account
3. Complete verification process

### Step 2: Get API Keys
1. Login to Razorpay Dashboard
2. Go to **Settings** → **API Keys**
3. Generate **Test Mode** keys for development
4. Copy the **Key ID** and **Key Secret**

### Step 3: Update Environment Files

**Backend** (`/backend/.env`):
```env
RAZORPAY_KEY_ID=rzp_test_YOUR_ACTUAL_KEY_ID
RAZORPAY_KEY_SECRET=YOUR_ACTUAL_KEY_SECRET
NODE_ENV=production
```

**Frontend** (`/frontend/.env`):
```env
REACT_APP_RAZORPAY_KEY_ID=rzp_test_YOUR_ACTUAL_KEY_ID
```

## 🚀 Testing Real Payments

### Test Mode Features
- Uses test cards (no real money charged)
- Full payment flow validation
- Webhook testing available

### Test Card Numbers
```
Success: 4111 1111 1111 1111
Failure: 4000 0000 0000 0002
CVV: Any 3 digits
Expiry: Any future date
```

## 🔒 Security Considerations

### Environment Variables
- Never commit real keys to version control
- Use different keys for test/production
- Rotate keys regularly

### Webhook Security
- Verify webhook signatures
- Use HTTPS endpoints only
- Implement idempotency

## 📋 Payment Flow

### 1. Order Creation
```javascript
// Frontend initiates payment
const orderData = await donationService.createOrder({
  campaignId,
  amount,
  comment,
  isAnonymous
});
```

### 2. Razorpay Checkout
```javascript
// Razorpay modal opens
const razorpay = new window.Razorpay({
  key: orderData.keyId,
  amount: orderData.amount,
  order_id: orderData.orderId,
  handler: handlePaymentSuccess
});
```

### 3. Payment Verification
```javascript
// Backend verifies signature
const expectedSignature = crypto
  .createHmac("sha256", RAZORPAY_KEY_SECRET)
  .update(order_id + "|" + payment_id)
  .digest("hex");
```

## 🛠 Production Setup

### Live Mode Configuration
1. Complete Razorpay KYC verification
2. Switch to **Live Mode** in dashboard
3. Generate live API keys
4. Update environment variables
5. Test with small amounts first

### Webhook Setup (Optional but Recommended)
1. Create webhook endpoint: `/api/webhooks/razorpay`
2. Handle events: `payment.captured`, `payment.failed`
3. Update database based on webhook events
4. Implement retry mechanism

## 🧪 Verification Checklist

Before going live:
- [ ] Test successful payments
- [ ] Test failed payments
- [ ] Verify order creation
- [ ] Confirm payment verification
- [ ] Check database updates
- [ ] Test campaign completion
- [ ] Verify email notifications (if implemented)

## 🚨 Important Notes

1. **Replace placeholder keys** with actual Razorpay keys
2. **Test thoroughly** before accepting real payments
3. **Monitor transactions** in Razorpay dashboard
4. **Set up webhooks** for production reliability
5. **Implement proper error handling** for all edge cases

## 📞 Support

- **Razorpay Docs**: https://razorpay.com/docs
- **Integration Guide**: https://razorpay.com/docs/payments
- **Support**: https://razorpay.com/support

---

Your application is now configured for real Razorpay payments! 
Make sure to replace the placeholder keys with your actual Razorpay credentials.