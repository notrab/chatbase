# Chatbase

Realtime chat using GraphQL Live Queries, Next.js and NextAuth.js

![Chatbase App](/public/og.jpeg)

## Tools used

- NextAuth.js
- Next.js
- Apollo Client
- Grafbase
- Server-Sent Events
- GraphQL Live Queries
- GraphQL
- Tailwind CSS

## Local Development

1. `npm install`
2. Create a [GitHub App](https://docs.github.com/en/apps/oauth-apps/building-oauth-apps/creating-an-oauth-app)
3. `cp .env.example .env`
4. Add a secret value for `NEXTAUTH_SECRET` to `.env` (`openssl rand -base64 32`)
5. `cp grafbase/.env.example grafbase/.env`
6. Add the same `NEXTAUTH_SECRET` to `grafbase/.env`
7. `npx grafbase dev`
8. `npm run dev`

## Deploy to Production

1. [Create an account](https://grafbase.com) with Grafbase
2. Push this repo to GitHub
3. Create new project with Grafbase
4. Add environment variable `NEXTAUTH_SECRET` to Grafbase
5. Deploy to Vercel and add `.env` values (`NEXT_PUBLIC_GRAFBASE_API_URL`, `NEXTAUTH_SECRET`, `GITHUB_CLIENT_ID`, `GITHUB_CLIENT_SECRET`)
