# Chatbase

Realtime chat using GraphQL Live Queries, Next.js and NextAuth.js &mdash; [tutorial](https://grafbase.com/guides/how-to-build-a-real-time-chat-app-with-nextjs-graphql-and-server-sent-events)

![Chatbase App](/public/og.png)

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
2. Create a [GitHub OAuth App](https://docs.github.com/en/apps/oauth-apps/building-oauth-apps/creating-an-oauth-app) with your app details for development purposes. Make sure to set `Authorization callback URL` to `http://localhost:3000/api/auth/callback/github`
3. `cp .env.example .env` and add values for `GITHUB_CLIENT_ID` and `GITHUB_CLIENT_SECRET` from step 2.
4. [Generate a secret value](https://generate-secret.vercel.app) for `NEXTAUTH_SECRET` and add it to `.env`
5. `cp grafbase/.env.example grafbase/.env`
6. Add the same `NEXTAUTH_SECRET` to `grafbase/.env`
7. `npx grafbase dev`
8. `npm run dev`

## Deploy to Production

1. Fork and Push this repo to GitHub
2. [Create an account](https://grafbase.com) with Grafbase
3. Create new project with Grafbase and connect your forked repo
4. Add environment variable `NEXTAUTH_SECRET` during project creation
5. Create a [GitHub OAuth App](https://docs.github.com/en/apps/oauth-apps/building-oauth-apps/creating-an-oauth-app) with your app details for production purposes. Make sure to set `Authorization callback URL` to `[YOUR_DESIRED_VERCEL_DOMAIN]/api/auth/callback/github`
6. Deploy to Vercel and add `.env` values (`NEXT_PUBLIC_GRAFBASE_API_URL`\*, `NEXTAUTH_SECRET`, `GITHUB_CLIENT_ID`, `GITHUB_CLIENT_SECRET`)

\* `NEXT_PUBLIC_GRAFBASE_URL` is your production API endpoint. You can find this from the **Connect** modal in your [project dashboard](https://grafbase.com/dashboard).
