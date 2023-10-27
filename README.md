This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.



# Brachnha

This repository contains code for UI of Brachnha website using NextJs.



## URL
-Base URL : http://localhost:3000/

-Player side UI

1.Home page : /

2.Log in page : /login

3.Sign up page : /signup

4.Subject page : /subject 

5.Type of game page : /typegame/(subject)


--eg. /typegame/math

6.Categoty game page : /categorygame/(subject)/(game)

--eg. categorygame/math/count


7.Game board : /games/(type game)

--eg. /games/count

-Administrator side UI : /dashboard

(linking in sidebar isn't avaiable right now)

1 superadmin :/superadmin

1.1 User page : /user

1.2 Game page : /game

1.3 Score page : /score

1.4 Class page : /class

1.5 (add)Admin page : /admin

1.6 Setting page : /setting

2 admin : /admin

2.1 User page : /user

2.2 Game page : /game

2.3 Score page :/score

2.4 Class page :/class

2.5 Setting page : /setting

3 editor : /editor

3.1 Publish Game page :  /publish

3.2 Draft page : /draft

3.3 Setting page : /setting