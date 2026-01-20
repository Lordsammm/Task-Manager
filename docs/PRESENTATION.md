---
marp: true
theme: default
paginate: true
backgroundColor: #ffffff
style: |
  section {
    font-family: 'Segoe UI', Arial, sans-serif;
  }
  h1 {
    color: #2563eb;
  }
  h2 {
    color: #1e40af;
  }
  table {
    font-size: 0.9em;
  }
  code {
    background-color: #f3f4f6;
  }
---

# EIU Student Task Manager

### ITDS560 - Web and Mobile Application Development

**Samuel Afolabi**
European International University
January 2026

---

# What is EIU Student Task Manager?

A web application I built to help students manage their tasks, assignments, and deadlines.

**Why I built it:**

- I kept missing assignment deadlines
- Existing apps are either too complex or require subscriptions
- Wanted to learn full-stack development by building something useful

---

# Features Overview

## What Can Users Do?

- ✓ Create an account and log in securely
- ✓ Add, edit, and delete tasks
- ✓ Set priorities (Low, Medium, High)
- ✓ Track status (Pending, In Progress, Completed)
- ✓ Set due dates for deadlines
- ✓ Search and filter tasks
- ✓ View dashboard with statistics

---

# Technology Stack

| Layer | Technology |
|-------|------------|
| Frontend | React + Next.js 16 |
| Styling | Tailwind CSS |
| Backend | Next.js API Routes |
| Database | SQLite + Prisma ORM |
| Auth | JWT + HTTP-only Cookies |
| Testing | Jest + React Testing Library |

---

# Why These Technologies?

**Next.js** → Full-stack in one project, industry standard

**Prisma** → Type-safe database queries, auto-generated types

**Tailwind CSS** → Fast UI development, responsive design

**JWT + Cookies** → Secure, stateless authentication

---

# System Architecture

```
┌──────────────────┐      ┌──────────────────┐      ┌──────────────────┐
│                  │      │                  │      │                  │
│   User Browser   │─────▶│   Next.js App    │─────▶│  SQLite Database │
│   (React UI)     │◀─────│   (API Routes)   │◀─────│    (Prisma)      │
│                  │      │                  │      │                  │
└──────────────────┘      └──────────────────┘      └──────────────────┘
```

**Flow:** User → React Frontend → API → Database → Response

---

# Database Design

## Two Main Tables

**Users Table**
- id, email, name, password (hashed), timestamps

**Tasks Table**
- id, title, description, status, priority, dueDate, userId, timestamps

**Relationship:** One user → Many tasks

---

# Authentication Flow

## Keeping Users Secure

**Registration:**
1. Validate strong password (8+ chars, mixed case, number, symbol)
2. Hash password with bcrypt (12 rounds)
3. Store in database

**Login:**
1. Verify email/password
2. Create JWT token
3. Store in HTTP-only cookie

---

# Security Measures

## What I Implemented

✓ Password hashing (bcrypt, 12 rounds)
✓ JWT in HTTP-only cookies (prevents XSS)
✓ Input validation with Zod
✓ User data isolation
✓ Strong password requirements

**Future improvements:** Rate limiting, email verification, 2FA

---

# Demo: Home Page

## Landing Page

- Clean, simple design
- Clear call-to-action buttons
- Responsive on mobile devices
- Accessible navigation

*[Live Demo]*

---

# Demo: Dashboard

## After Login

- Task cards with priority colors
- Quick status update buttons
- Search and filter options
- Task statistics overview

*[Live Demo]*

---

# Demo: Task Management

## Creating & Editing Tasks

**Fields:**
- Title (required)
- Description (optional)
- Priority dropdown (Low/Medium/High)
- Status dropdown (Pending/In Progress/Completed)
- Due date picker

*[Live Demo]*

---

# Testing

## Making Sure It Works

```
Test Suites: 3 passed, 3 total
Tests:       25 passed, 25 total
```

**What I tested:**
- Password hashing works correctly
- Validation rejects bad input
- Components render properly
- User interactions respond correctly

---

# Challenges Faced

| Problem | Solution |
|---------|----------|
| Zod v4 API changes | Updated to use `.issues` instead of `.errors` |
| Jest + ESM modules | Configured Jest to transform jose module |
| SQLite no enums | Used strings with Zod validation |

---

# What I Learned

## Key Takeaways

1. **Full-stack development** with Next.js
2. **Authentication** from scratch with JWT
3. **Database design** with Prisma ORM
4. **Testing** React components
5. **Debugging** library compatibility issues

---

# Future Improvements

## What I'd Add Next

- Email notifications for deadlines
- Task categories and tags
- Recurring tasks
- Shared tasks between users
- Mobile app (React Native)
- Calendar view for due dates

---

# Project Stats

| Metric | Value |
|--------|-------|
| Lines of Code | ~2,500 |
| React Components | 10+ |
| API Endpoints | 8 |
| Test Cases | 25 |
| Development Time | ~3 weeks |

---

# Conclusion

## Summary

The EIU Student Task Manager successfully provides:

- ✓ Simple task management for students
- ✓ Secure user authentication
- ✓ Modern, responsive design
- ✓ Clean, maintainable codebase

**It works, it's secure, and I learned a lot building it.**

---

# Questions?

## Thank You!

**Samuel Afolabi**
samuelafolabi48@gmail.com

European International University
ITDS560 - Web and Mobile Application Development

---
