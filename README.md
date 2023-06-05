This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

Read [CONTRIBUTING.md](./CONTRIBUTING.md).

Then, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Tasks
1. Create an endpoint in `api/people.ts` that returns a list of people. The list should be sorted by `name` in ascending order.
The data should be paginated and return 10 people per page. The endpoint should accept a parameter `page` that specifies the page number to return. The user data should be generated using faker.js or similar library. The minimum number of user is 100. It should be parametrized so that we can specify the number of users to generate.

2. Use `tanstack/react-query` or `swr` to fetch data in `pages/task.tsx`.

3. Prepare the pagination component to be used in `pages/task.tsx`. 
