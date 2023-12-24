# Personal Portfolio Website
<img width="1271" alt="image" src="https://github.com/S3annnyyy/portfolio-project-v2/assets/67400060/3df975ca-6d2d-4f39-a239-f2a3ff8e38b2">

My portfolio to showcase a few projects. Built with [Next.js](https://nextjs.org/), [React-Three-Fiber](https://docs.pmnd.rs/react-three-fiber/tutorials/how-it-works), and [Framer Motion](https://www.framer.com/motion/). View the [live site](https://seanyckang.com)

## Install & run 
Make sure you have nodejs `v20.10.0` or higher and npm `10.2.3` or higher installed. Install dependencies with:
```
npm install
```
Once it's done start up a local server with:
```
npm run dev
```
To create a production build:
```
npm run build
```

## Deployment
I've set up the static site using github pages and bought a custom domain from [namecheap](https://www.namecheap.com/). Follow the guide on how to [set up](https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site) and [manage custom domain](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site) and [set up CI/CD pipeline](https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages) in order to deploy. 
Currently all my data is being stored in `@/constants/index.ts`, with plans to migrate to cloud database

# FAQs
<details>
<summary>I keep getting error 404 when deploying website with custom domain even after following guide</summary>
You will need to configure your `package.json` file with a `homepage` and `proxy`:

```
{
  "homepage": "<your custom domain name here>",
  "proxy": "<development server, should be http://localhost:3000",
  "name": "portfolio-project-v2",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  },
  "dependencies": {
    <libraries you have installed>
  },
  "devDependencies": {
    "@types/node": "^20",
    "@types/react": "^18",
    "@types/react-dom": "^18",
    "autoprefixer": "^10.0.1",
    "eslint": "^8",
    "eslint-config-next": "14.0.4",
    "postcss": "^8",
    "tailwindcss": "^3.3.6",
    "typescript": "^5"
  }
}
```

</details>
