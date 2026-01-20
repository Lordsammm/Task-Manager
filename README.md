# EIU Student Task Manager

**Course:** ITDS560 - Web and Mobile Application Development  
**Student:** Samuel Afolabi  
**Email:** samuelafolabi48@gmail.com  
**University:** European International University  
**Date:** January 2026

---

## About This Project

I built this task manager application to help students (including myself) keep track of coursework, assignments, and project deadlines. The idea came from my own struggles with managing multiple assignments across different courses - I wanted something simple that just works without all the bloat of commercial apps.

The app lets you create tasks with priorities and due dates, and shows you at a glance what's overdue or coming up. I used Next.js because I wanted to learn the new App Router, and it made handling both the frontend and API in one project really convenient.

---

## What It Does

- **User accounts** - Register and login with your email. Passwords are properly hashed (I used bcrypt).
- **Create tasks** - Add a title, optional description, set priority (low/medium/high), and pick a due date.
- **Track progress** - Mark tasks as pending, in progress, or completed.
- **Dashboard** - See all your tasks with stats showing how many you've completed.
- **Search and filter** - Find tasks quickly when you have a lot of them.
- **Mobile friendly** - Works on phones too since I used responsive design.

---

## Tech Stack

**Frontend:**
- Next.js 16 (React framework)
- TypeScript
- Tailwind CSS for styling
- Lucide React for icons

**Backend:**
- Next.js API routes
- Prisma ORM with SQLite database
- JWT authentication (using jose library)
- Zod for input validation

**Testing:**
- Jest
- React Testing Library

---

## How to Run It

### Requirements
- Node.js 20 or newer
- npm

### Setup

1. Go to the project folder:
```bash
cd task-manager
```

2. Install packages:
```bash
npm install
```

3. Create a `.env` file with:
```
DATABASE_URL="file:./dev.db"
JWT_SECRET="change-this-to-something-secret"
```

4. Set up the database:
```bash
npm run db:push
```

5. Start the dev server:
```bash
npm run dev
```

6. Open http://localhost:3000 in your browser

---

## Project Structure

```
task-manager/
├── __tests__/           # Test files
├── prisma/              # Database schema
├── src/
│   ├── app/             # Pages and API routes
│   │   ├── api/         # Backend endpoints
│   │   ├── dashboard/   # Main dashboard page
│   │   ├── login/       # Login page
│   │   ├── register/    # Registration page
│   │   ├── privacy/     # Privacy policy
│   │   └── terms/       # Terms of use
│   ├── components/      # React components
│   ├── context/         # Auth context
│   └── lib/             # Helper functions
├── Dockerfile           # For Docker deployment
└── docker-compose.yml
```

---

## API Endpoints

### Auth
- `POST /api/auth/register` - Create account
- `POST /api/auth/login` - Login
- `POST /api/auth/logout` - Logout
- `GET /api/auth/me` - Get current user

### Tasks (need to be logged in)
- `GET /api/tasks` - Get all your tasks
- `POST /api/tasks` - Create a task
- `GET /api/tasks/[id]` - Get one task
- `PUT /api/tasks/[id]` - Update a task
- `DELETE /api/tasks/[id]` - Delete a task

---

## Running Tests

```bash
npm run test
```

I wrote tests for:
- Password hashing functions
- Input validation schemas
- TaskCard component rendering

---

## Docker (Optional)

If you want to run it in Docker:

```bash
docker-compose up --build
```

Then open http://localhost:3000

---

## Design Choices

**Why Next.js?**  
I wanted to try the App Router and it handles both frontend and backend in one project which made things simpler.

**Why SQLite?**  
Easy to set up for development, no need for a separate database server. For production you'd probably switch to PostgreSQL.

**Why JWT in cookies?**  
HTTP-only cookies are more secure than storing tokens in localStorage since they can't be accessed by JavaScript (protects against XSS).

**Password requirements**  
I added strong password validation (8+ chars, uppercase, lowercase, number, special character) because weak passwords are a real security issue.

---

## Known Limitations

- No password reset functionality yet
- No email verification
- Single user can't share tasks with others
- No recurring tasks

These would be good features to add in the future.

---

## Screenshots

The app has a clean blue theme with:
- Landing page with feature overview
- Login/Register forms
- Dashboard with task cards
- Modal for creating/editing tasks

---

## References

- [Next.js Documentation](https://nextjs.org/docs)
- [Prisma Docs](https://www.prisma.io/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Jose JWT Library](https://github.com/panva/jose)

---

## Contact

If you have questions about this project, feel free to email me at samuelafolabi48@gmail.com

---

*Submitted for ITDS560 - Web and Mobile Application Development, European International University*
