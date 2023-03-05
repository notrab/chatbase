# Chatbase

Realtime chat using GraphQL Live Queries, Next.js and NextAuth.js

## Tools used

- NextAuth.js
- Next.js
- Apollo Client
- Grafbase
- Server-Sent Events
- GraphQL
- Tailwind

## Local development

1. `npm install`
2. Create a [GitHub App](https://docs.github.com/en/apps/oauth-apps/building-oauth-apps/creating-an-oauth-app)
3. `cp .env.example .env`
4. Generate a random secret `openssl rand -base64 32` and populate `NEXTAUTH_SECRET`
5. `cp grafbase/.env.example grafbase/.env`
6. Add the same `NEXTAUTH_SECRET` to `grafbase/.env`
7. `npx grafbase dev`
8. `npm run dev`

## Deploy to production

1. [Create an account](https://grafbase.com) with Grafbase
2. Push this repo to GitHub
3. Create new project with Grafbase
4. Add environment variables (`ISSUER_URL` + `NEXTAUTH_SECRET`) to Grafbase
5. Deploy to Vercel and add `.env` values
