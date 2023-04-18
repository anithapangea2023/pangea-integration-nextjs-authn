# Next.js and Pangea AuthN Example

Most of the NextJS applications need authentication to protect certain pages and api endpoints from public eyes. This example shows how you can easily add authentication to your NextJS app with using Pangea AuthN service. Although Pangea AuthN service provides many features, for simplicity, we will only cover the following features

- Sign up
- Sign in
- Sign out
- Protecting client-side pages
- Protecting API endpoints

## How to use

### Setup Pangea AuthN service

If you haven't done so, please head over to the Pangea service config page:

- Execute [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) with [npm](https://docs.npmjs.com/cli/init), [Yarn](https://yarnpkg.com/lang/en/docs/cli/create/), or [pnpm](https://pnpm.io) to bootstrap the example:

  ```bash
  npx create-next-app --example pangea-authn pangea-authn-app
  ```

  ```bash
  yarn create next-app --example pangea-authn pangea-authn-app
  ```

  ```bash
  pnpm create next-app --example pangea-authn pangea-authn-app
  ```

- Copy the `.env.local.example` as `.env.local`
  ```bash
  cp .env.local.example .env.local
  ```
- Enable the AuthN service for your project
- Go to the AuthN settings and tweak as you'd like
- Copy the necessary values from the service config into the `.env.local` file.
- Minimum required values are the Pangea Domain and the Client Token
- If you are planning to use the AuthN service to protect your api endpoints, you need to set up an AuthN service token and copy its value into your `.env.local` as `AUTHN_SERVICE_TOKEN`. Please see `.env.local.example` file for the exact environment variable names.

Once you have set the environment variables, you can just open a terminal window, go to the root of your project and run your favorite command `yarn dev` , you should be up an running now.

### Protecting Various Parts of the App

There are certain parts of an application that developers wants to hide from the public eyes, and only make them available to the authenticated users. This example includes one example of protecting a client page, and example for protecting an api endpoint.

- Client components: Just look at the example in `/app/user/page.tsx` and wrap you components with `pageWithAuthentication` higher order component.

- API endpoints: Please see the example in `/app/api/user/me/route.ts` and wrap your api handler with `withAPIAuthentication` helper function.

## How to Deploy

You can deploy your project as any other NextJS app. Please see [Vercel](https://vercel.com/new?utm_source=github&utm_medium=readme&utm_campaign=next-example) ([Documentation](https://nextjs.org/docs/deployment)).
