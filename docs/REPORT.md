# ITDS560 - Web and Mobile Application Development
# Project Report: EIU Student Task Manager

**Student:** Samuel Afolabi  
**Email:** samuelafolabi48@gmail.com  
**Course:** ITDS560 - Web and Mobile Application Development  
**Institution:** European International University  
**Submission Date:** January 2026

---

## 1. Introduction

### 1.1 Background

As a student juggling multiple courses, I often found myself losing track of assignment deadlines and project milestones. While there are many task management apps available, most are either too complex for simple academic use or require paid subscriptions for basic features.

This motivated me to build EIU Student Task Manager - a straightforward web application specifically designed for students to organize their coursework, assignments, and projects.

### 1.2 Objectives

The main goals for this project were:

1. Create a user-friendly task management system tailored for students
2. Implement secure user authentication
3. Build a responsive interface that works on both desktop and mobile
4. Apply modern web development practices learned in this course
5. Gain hands-on experience with full-stack development

### 1.3 Scope

The application allows users to:
- Create an account and securely log in
- Add, edit, and delete tasks
- Set priorities (Low, Medium, High) and due dates
- Track task status (Pending, In Progress, Completed)
- View a dashboard with task statistics
- Search and filter tasks

---

## 2. Technology Choices

### 2.1 Why Next.js?

I chose Next.js 16 as the framework for several reasons:

- **Full-stack capability**: Next.js handles both frontend React components and backend API routes in one project, which simplified development considerably.
- **App Router**: The new App Router provides a cleaner file-based routing system.
- **Built-in optimizations**: Automatic code splitting, image optimization, and fast refresh during development.
- **Industry relevance**: Next.js is widely used in the industry, so learning it has practical career value.

### 2.2 Database: SQLite with Prisma

For the database, I used SQLite with Prisma ORM:

- **SQLite**: Perfect for development and small-scale applications. No need to set up a separate database server.
- **Prisma**: Provides type-safe database queries and auto-generates TypeScript types from the schema. This caught many bugs during development.

For a production deployment, I would migrate to PostgreSQL, but SQLite works well for this project's scope.

### 2.3 Authentication: JWT with HTTP-only Cookies

I implemented JWT (JSON Web Token) authentication because:

- Stateless authentication doesn't require server-side session storage
- Tokens can carry user information (ID, email, name)
- HTTP-only cookies prevent XSS attacks from stealing tokens

I used the `jose` library for JWT handling and `bcryptjs` for password hashing with 12 salt rounds.

### 2.4 Styling: Tailwind CSS

Tailwind CSS was my choice for styling because:

- Utility classes speed up development
- No context switching between CSS and HTML files
- Responsive design is straightforward with mobile-first utilities
- Consistent design system out of the box

---

## 3. System Design

### 3.1 Architecture Overview

The application follows a typical full-stack architecture:

```
┌─────────────────┐     ┌─────────────────┐     ┌─────────────────┐
│   Frontend      │────▶│   API Routes    │────▶│   Database      │
│   (React/Next)  │◀────│   (Next.js)     │◀────│   (SQLite)      │
└─────────────────┘     └─────────────────┘     └─────────────────┘
```

### 3.2 Database Schema

I designed two main tables:

**Users Table:**
- id (unique identifier)
- email (unique)
- name
- password (hashed)
- timestamps

**Tasks Table:**
- id (unique identifier)
- title
- description (optional)
- status (PENDING, IN_PROGRESS, COMPLETED)
- priority (LOW, MEDIUM, HIGH)
- dueDate (optional)
- userId (foreign key to Users)
- timestamps

The relationship is one-to-many: one user can have multiple tasks, but each task belongs to one user.

### 3.3 API Design

I followed RESTful conventions for the API:

| Endpoint | Method | Purpose |
|----------|--------|---------|
| /api/auth/register | POST | Create new account |
| /api/auth/login | POST | Authenticate user |
| /api/auth/logout | POST | Clear session |
| /api/auth/me | GET | Get current user |
| /api/tasks | GET | List all user's tasks |
| /api/tasks | POST | Create new task |
| /api/tasks/[id] | GET | Get single task |
| /api/tasks/[id] | PUT | Update task |
| /api/tasks/[id] | DELETE | Delete task |

All task endpoints require authentication and only return tasks belonging to the logged-in user.

---

## 4. Implementation Details

### 4.1 User Authentication Flow

1. **Registration**: User submits name, email, and password. The password is validated for strength (8+ characters, uppercase, lowercase, number, special character), then hashed with bcrypt before storing.

2. **Login**: Email and password are verified. If correct, a JWT token is created and stored in an HTTP-only cookie.

3. **Session Management**: Each request includes the cookie. The middleware checks the token and allows or denies access accordingly.

4. **Logout**: The token cookie is cleared from the browser.

### 4.2 Task Management

Tasks support full CRUD operations:

- **Create**: Form validation with Zod schema, then insert into database
- **Read**: Fetch all tasks for the current user, sorted by status and priority
- **Update**: Modify any field (title, description, status, priority, due date)
- **Delete**: Remove task after confirmation

### 4.3 Frontend Components

I built reusable React components:

- **Navbar**: Navigation with user menu and logout
- **TaskCard**: Displays individual task with edit/delete buttons
- **TaskList**: Container with search and filter functionality
- **TaskModal**: Form for creating and editing tasks
- **LoginForm/RegisterForm**: Authentication forms with validation

### 4.4 State Management

I used React Context API for authentication state:

```javascript
const AuthContext = createContext({
  user: null,
  login: async () => {},
  logout: async () => {},
  register: async () => {},
});
```

This allows any component to access the current user and auth functions without prop drilling.

---

## 5. Testing

### 5.1 Testing Approach

I implemented tests using Jest and React Testing Library:

1. **Unit Tests**: Testing individual functions like password hashing and validation schemas
2. **Component Tests**: Testing React components render correctly and respond to user interactions

### 5.2 Test Results

```
Test Suites: 3 passed, 3 total
Tests:       25 passed, 25 total
```

Key tests include:
- Password hashing produces different hashes for same input (salt verification)
- Password verification works correctly
- Validation schemas reject invalid input
- TaskCard component renders task information correctly

### 5.3 What I Would Add

Given more time, I would add:
- Integration tests for API endpoints
- End-to-end tests with Playwright or Cypress
- Higher code coverage

---

## 6. Challenges and Solutions

### 6.1 Zod Version Compatibility

**Problem**: The Zod validation library changed its API between versions. Error messages weren't displaying correctly.

**Solution**: After debugging, I found that Zod v4 uses `.issues` instead of `.errors` for accessing validation errors. Updated all API routes accordingly.

### 6.2 ESM Module Issues with Jest

**Problem**: The `jose` library uses ES modules, which Jest doesn't handle by default.

**Solution**: Added `transformIgnorePatterns` to Jest config to transform the jose module, and restructured tests to avoid importing modules with ESM dependencies where possible.

### 6.3 SQLite Enum Limitation

**Problem**: SQLite doesn't support enum types, but I wanted type safety for status and priority fields.

**Solution**: Used string fields in Prisma schema with Zod validation ensuring only valid values are accepted at the API level.

---

## 7. Security Considerations

### 7.1 Implemented Security Measures

1. **Password Hashing**: bcrypt with 12 salt rounds
2. **JWT in HTTP-only Cookies**: Prevents XSS token theft
3. **Input Validation**: Zod schemas validate all user input
4. **User Isolation**: Users can only access their own tasks
5. **Strong Password Policy**: Minimum 8 characters with complexity requirements

### 7.2 Future Security Improvements

- Rate limiting on login attempts
- CSRF token protection
- Email verification for new accounts
- Password reset functionality
- Two-factor authentication

---

## 8. Deployment

### 8.1 Docker Configuration

I created Docker files for containerized deployment:

- **Dockerfile**: Multi-stage build for optimized production image
- **docker-compose.yml**: Orchestration for easy deployment

### 8.2 Running in Production

```bash
docker-compose up --build
```

This builds the Next.js application in standalone mode and serves it on port 3000.

### 8.3 Environment Variables

The application uses environment variables for configuration:
- `DATABASE_URL`: Database connection string
- `JWT_SECRET`: Secret key for JWT signing

---

## 9. Reflection

### 9.1 What I Learned

This project taught me:

1. **Full-stack development**: Building both frontend and backend in a cohesive application
2. **Authentication**: Implementing secure JWT-based auth from scratch
3. **Database design**: Modeling relationships and using an ORM effectively
4. **Testing**: Writing meaningful tests and understanding test patterns
5. **Problem-solving**: Debugging compatibility issues between libraries

### 9.2 What I Would Do Differently

If starting over, I would:

1. Set up testing from the beginning rather than adding it later
2. Use PostgreSQL from the start to avoid SQLite limitations
3. Implement email verification and password reset early
4. Add more comprehensive error handling

### 9.3 Future Enhancements

Features I'd like to add:

1. Email notifications for upcoming deadlines
2. Task categories or tags
3. Recurring tasks
4. Shared tasks/collaboration
5. Mobile app using React Native
6. Calendar view for due dates

---

## 10. Conclusion

The EIU Student Task Manager successfully meets its objectives of providing a simple, secure, and user-friendly task management solution for students. The project demonstrates competency in modern web development technologies including Next.js, React, TypeScript, Prisma, and authentication best practices.

The application is fully functional with user registration, authentication, and complete task CRUD operations. While there's room for additional features, the current implementation provides a solid foundation that could be extended in the future.

Building this project has been valuable for applying theoretical knowledge to a practical application and gaining real-world development experience.

---

## References

1. Next.js Documentation - https://nextjs.org/docs
2. Prisma Documentation - https://www.prisma.io/docs
3. Tailwind CSS Documentation - https://tailwindcss.com/docs
4. Jose JWT Library - https://github.com/panva/jose
5. Zod Validation - https://zod.dev
6. React Testing Library - https://testing-library.com/docs/react-testing-library/intro

---

## Appendix A: Running the Application

```bash
# Install dependencies
npm install

# Set up database
npm run db:push

# Run development server
npm run dev

# Run tests
npm run test

# Build for production
npm run build
```

## Appendix B: Project Repository Structure

```
task-manager/
├── __tests__/           # Test files
├── prisma/              # Database schema
├── src/
│   ├── app/             # Pages and API routes
│   ├── components/      # React components
│   ├── context/         # Auth context
│   └── lib/             # Helper functions
├── Dockerfile
├── docker-compose.yml
└── README.md
```
