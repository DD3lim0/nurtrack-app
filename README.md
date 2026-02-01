# Nurtrack

**Nurtrack** is a full-stack web application that helps parents and caregivers track, understand, and care for their infant’s early development — all in one calm, intuitive place.

Built as a portfolio-grade, production-style project, Nurtrack demonstrates modern full-stack architecture, secure backend design, and thoughtful UX for real-world users.

---

## What Nurtrack Does

Nurtrack allows parents to log and monitor:

- Child profiles with support for multiple children per account
- Growth tracking (weight and height over time) with CDC/WHO percentile comparisons
- Feeding logs including meals, ingredients, quantities, and reactions
- Diaper tracking with frequency, contents, color patterns, and notes
- Developmental milestones (0–24 months)
- Multi-caregiver access with role-based permissions

An AI assistant named **Nuri** provides gentle, evidence-based insights derived from logged data. Nuri is intentionally constrained to infant care topics such as feeding, diaper health, and developmental milestones.

---

## Why Nurtrack Exists

New parents often juggle fragmented notes, apps, and memory. Nurtrack centralizes daily baby care data and transforms it into clear trends, progress indicators, and supportive guidance — without overwhelming the user.

---

## Tech Stack

### Frontend
- React (Vite)
- React Router
- Material UI (MUI)
- SCSS
- Recharts or Chart.js
- Axios

### Backend
- NestJS (Node.js + TypeScript)
- RESTful API architecture
- Modular, domain-driven design
- JWT authentication and role-based access control

### Database
- PostgreSQL
- Prisma ORM

### AI Integration
- OpenAI or Anthropic Claude API
- Constrained prompts limited to infant care topics
- Rate limiting and response caching

### DevOps
- GitHub Actions (CI)
- Vercel or Netlify (Frontend)
- Railway, Render, or Fly.io (Backend)

---

## Backend Architecture Highlights

Nurtrack’s backend is designed to reflect real-world engineering practices:

- Feature-based NestJS modules (Auth, Children, Growth, Feeding, Diapers, AI, etc.)
- DTO-driven request validation
- Guards for authentication and authorization
- Interceptors for logging and monitoring
- Centralized configuration and environment management

This structure keeps the codebase scalable, testable, and easy to reason about.

---

## Security and Privacy

- Bcrypt password hashing
- JWT access and refresh tokens
- Role-based authorization per child
- Input validation and rate limiting
- HTTPS-only communication
- No sale of user data

---

## Project Status

- Core MVP features implemented
- Ongoing improvements and polish
- Tests focused on critical user flows

---

## Screenshots

Coming soon.

---

## Learning Outcomes

This project demonstrates:

- Full-stack application design
- REST API development with NestJS
- Secure authentication and authorization
- Relational data modeling
- AI system integration with safeguards
- Production-ready project structure

---

## Future Enhancements

- Mobile application (React Native)
- Push notifications
- Predictive insights for feeding and sleep trends
- Pediatrician data-sharing portal

---

## Author

Built as a professional portfolio project by me focused on clean architecture, real-world problem solving, and long-term maintainability.

---

Nurtrack — Tender tracking for life’s earliest moments.
