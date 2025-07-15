This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

// Adding prisma
npm install prisma --save-dev
npm install @prisma/client

npx prisma init - Initiallize prisma
This will create:
a prisma/ folder with a schema.prisma file
a .env file

// To display data in sqllite
npx prisma studio

Create an .env file on your root folder
add this - DATABASE_URL="file:./dev.db"

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

// REST API
GET /api/agents → return all agents
GET /api/agents/[id] → return one agent by ID
