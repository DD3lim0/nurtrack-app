<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg" alt="Donate us"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow" alt="Follow us on Twitter"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

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

## Nurtrack — Tender tracking for life’s earliest moments.

---

## Project setup

```bash
$ npm install
```

## Compile and run the project

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Run tests

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Deployment

When you're ready to deploy your NestJS application to production, there are some key steps you can take to ensure it runs as efficiently as possible. Check out the [deployment documentation](https://docs.nestjs.com/deployment) for more information.

If you are looking for a cloud-based platform to deploy your NestJS application, check out [Mau](https://mau.nestjs.com), our official platform for deploying NestJS applications on AWS. Mau makes deployment straightforward and fast, requiring just a few simple steps:

```bash
$ npm install -g @nestjs/mau
$ mau deploy
```

With Mau, you can deploy your application in just a few clicks, allowing you to focus on building features rather than managing infrastructure.

## Resources

Check out a few resources that may come in handy when working with NestJS:

- Visit the [NestJS Documentation](https://docs.nestjs.com) to learn more about the framework.
- For questions and support, please visit our [Discord channel](https://discord.gg/G7Qnnhy).
- To dive deeper and get more hands-on experience, check out our official video [courses](https://courses.nestjs.com/).
- Deploy your application to AWS with the help of [NestJS Mau](https://mau.nestjs.com) in just a few clicks.
- Visualize your application graph and interact with the NestJS application in real-time using [NestJS Devtools](https://devtools.nestjs.com).
- Need help with your project (part-time to full-time)? Check out our official [enterprise support](https://enterprise.nestjs.com).
- To stay in the loop and get updates, follow us on [X](https://x.com/nestframework) and [LinkedIn](https://linkedin.com/company/nestjs).
- Looking for a job, or have a job to offer? Check out our official [Jobs board](https://jobs.nestjs.com).

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://twitter.com/kammysliwiec)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](https://github.com/nestjs/nest/blob/master/LICENSE).
