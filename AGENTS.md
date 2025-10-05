# CrowdFundIn Admin System Documentation

## Project Overview
CrowdFundIn is a MERN stack crowdfunding platform with a comprehensive admin dashboard for managing users, campaigns, and reports.

## Quick Commands
```bash
# Backend (Port 5000)
cd backend && npm run dev

# Frontend (Port 3000)  
cd frontend && npm start

# Test API Health
curl http://localhost:5000/api/health
```

## Admin System Architecture

### Backend API Routes

#### Health Check
- `GET /api/health` - Returns `{status: "ok"}` if backend is working

#### Admin Authentication
- `POST /api/auth/admin/register` - Admin signup (requires admin key)
- `POST /api/auth/admin/login` - Admin login

#### Admin Management APIs
- `GET /api/admin/stats` - Dashboard statistics
- `GET /api/admin/users` - All users with pagination/filtering
- `PUT /api/admin/users/:id` - Update user role/verification
- `PUT /api/admin/users/:id/verify` - Approve/reject user verification
- `GET /api/admin/donors/unverified` - Unverified donors
- `GET /api/admin/campaigns` - All campaigns with pagination/filtering
- `PUT /api/admin/campaigns/:id/status` - Update campaign status
- `PUT /api/admin/campaigns/:id/verify` - Approve/reject campaign
- `GET /api/admin/campaigns/unverified` - Unverified campaigns
- `GET /api/admin/reports` - All reports/complaints
- `PUT /api/admin/complaints/:id` - Update complaint status
- `GET /api/admin/donor-history` - Complete donation records

### Frontend Admin Routes

#### Public Admin Access
- `/admin/login` - Admin login page
- `/admin/signup` - Admin registration page

#### Protected Admin Dashboard (requires admin role)
- `/admin/dashboard` - Main dashboard with stats and quick actions
- `/admin/users` - User management with role assignment
- `/admin/campaigns` - Campaign management with status control
- `/admin/reports` - Reports and complaints management
- `/admin/verify-donors` - Donor verification workflow
- `/admin/verify-campaigns` - Campaign verification workflow
- `/admin/complaints` - Detailed complaint management
- `/admin/donor-history` - Complete donation analytics

## Admin Features

### Authentication & Security
- JWT-based authentication with 30-day expiration
- Role-based access control (admin/campaign_owner/donor)
- Admin registration requires secret key (env: `ADMIN_REGISTRATION_KEY`)
- Protected routes with automatic redirect to login
- Secure password hashing with bcrypt

### Dashboard Features
- Real-time health status monitoring
- Key metrics: users, campaigns, donations, revenue
- Quick action cards for pending verifications
- User and campaign statistics breakdowns
- System status indicators
- Monthly signup trends chart

### User Management
- Complete user list with search and filtering
- Role assignment (donor → campaign_owner → admin)
- User verification approval/rejection workflow
- User activity tracking (campaigns, donations)
- Profile information and contact details

### Campaign Management
- Campaign list with status and progress tracking
- Campaign approval/rejection workflow
- Status management (pending → active → completed/cancelled)
- Financial progress visualization
- Owner information and verification status

### Reports & Complaints
- User-submitted complaints and reports
- Status tracking (pending → in_review → resolved/dismissed)
- Admin notes and resolution tracking
- Campaign and user context for each report
- Filtering by status and date

### Analytics & History
- Complete donation history with filtering
- Donor verification status and activity
- Financial analytics and trends
- Export-ready data views
- Date range filtering and sorting

## Technical Implementation

### Backend Architecture
- **Models**: User, Campaign, Donation, Complaint with proper relationships
- **Middleware**: JWT authentication, role authorization, file upload
- **Validation**: Express-validator for input sanitization
- **Database**: MongoDB with Mongoose ODM
- **Security**: Helmet, CORS, bcrypt password hashing

### Frontend Architecture
- **Layout**: Professional AdminLayoutProfessional with collapsible sidebar and top bar
- **Icons**: Lucide React icons for professional, consistent iconography
- **Routing**: Protected routes with role-based access and admin-specific redirects
- **State**: React hooks for local state, Context for auth
- **UI**: Modern blue/gray/white color palette with clean design
- **Data**: Direct API calls with proper error handling and loading states

### Key Design Patterns
- **AdminLayout**: Reusable layout with sidebar navigation
- **Protected Routes**: Automatic redirection for unauthorized access
- **Error Handling**: Graceful error states with retry options
- **Loading States**: Professional loading spinners and skeletons
- **Pagination**: Consistent pagination across all data tables
- **Modals**: Reusable modal components for actions

## Environment Variables

### Backend (.env)
```
JWT_SECRET=your_jwt_secret_key
ADMIN_REGISTRATION_KEY=admin123
MONGODB_URI=mongodb://localhost:27017/crowdfundin
PORT=5000
```

### Frontend (.env)
```
REACT_APP_API_URL=http://localhost:5000
REACT_APP_STRIPE_PUBLISHABLE_KEY=your_stripe_key
```

## Setup Instructions

### 1. Initial Setup
```bash
# Install dependencies
cd backend && npm install
cd ../frontend && npm install

# Start development servers
cd backend && npm run dev
cd ../frontend && npm start
```

### 2. Create First Admin
1. Go to `http://localhost:3000/admin/signup`
2. Use admin key: `admin123` (or your custom key)
3. Complete registration
4. Access dashboard at `http://localhost:3000/admin/dashboard`

### 3. Access Admin Panel
- **From Navbar**: Click "🔐 Admin" dropdown → Admin Login
- **Direct URL**: `http://localhost:3000/admin/login`
- **Dashboard**: `http://localhost:3000/admin/dashboard`

## Common Development Tasks

### Adding New Admin Features
1. Create backend route in `/backend/routes/admin.js`
2. Add frontend service method in `/frontend/src/services/adminService.js`
3. Create React component in `/frontend/src/pages/`
4. Add route to `/frontend/src/App.jsx`
5. Update sidebar navigation in `/frontend/src/components/AdminLayout.jsx`

### Testing Admin APIs
```bash
# Get admin token first
curl -X POST http://localhost:5000/api/auth/admin/login \
  -H "Content-Type: application/json" \
  -d '{"email":"admin@example.com","password":"password123"}'

# Use token in subsequent requests
curl -H "Authorization: Bearer YOUR_TOKEN" \
  http://localhost:5000/api/admin/stats
```

### Debugging Common Issues
- **403 Forbidden**: Check user role and JWT token
- **401 Unauthorized**: Verify token in localStorage and headers
- **CORS Errors**: Ensure backend CORS allows frontend origin
- **API Not Found**: Check backend server is running on port 5000

## Code Style & Conventions

### Backend
- Use async/await for database operations
- Validate all inputs with express-validator
- Return consistent JSON responses with status/data/message
- Use try/catch blocks with proper error handling
- Follow RESTful API conventions

### Frontend
- Use functional components with hooks
- Implement loading and error states for all API calls
- Follow consistent naming: PascalCase for components, camelCase for functions
- Use AdminLayout wrapper for all admin pages
- Implement responsive design with CSS Grid/Flexbox

### Database
- Use proper Mongoose schemas with validation
- Implement soft deletes where appropriate
- Add indexes for frequently queried fields
- Use population for related data

## Production Considerations

### Security
- Change default admin registration key
- Use strong JWT secrets
- Implement rate limiting
- Add request logging
- Use HTTPS in production

### Performance
- Add Redis for caching
- Implement database indexing
- Optimize image uploads
- Use CDN for static assets
- Implement pagination for large datasets

### Monitoring
- Add error tracking (Sentry)
- Implement health checks
- Monitor database performance
- Track API response times
- Set up logging aggregation

This admin system provides a complete foundation for managing a crowdfunding platform with professional UI/UX and robust backend architecture.
