# Click to view the test reports for Main 👩‍🔬🧪

small change

[![End-to-end workflow status](https://img.shields.io/github/workflow/status/DTS-STN/digital-dojo-engagement/End-To-End%20Tests?label=E2E)](https://dts-stn.github.io/digital-dojo-engagement/refs/heads/main/e2e-report)
[![Unit test workflow status](https://img.shields.io/github/workflow/status/DTS-STN/digital-dojo-engagement/Unit%20Tests?label=Unit%20Tests)](https://dts-stn.github.io/digital-dojo-engagement/refs/heads/main/coverage/lcov-report)

![Line Coverage Badge](https://img.shields.io/badge/dynamic/json?label=Line%20Coverage&query=%24.total.lines.pct&suffix=%25&url=https%3A%2F%2Fdts-stn.github.io%2Fdigital-dojo-engagement%2Frefs%2Fheads%2Fmain%2Fcoverage%2Fcoverage-summary.json)
![Statements Coverage Badge](https://img.shields.io/badge/dynamic/json?label=Statement%20Coverage&query=%24.total.statements.pct&suffix=%25&url=https%3A%2F%2Fdts-stn.github.io%2Fdigital-dojo-engagement%2Frefs%2Fheads%2Fmain%2Fcoverage%2Fcoverage-summary.json)
![Function Coverage Badge](https://img.shields.io/badge/dynamic/json?label=Function%20Coverage&query=%24.total.functions.pct&suffix=%25&url=https%3A%2F%2Fdts-stn.github.io%2Fdigital-dojo-engagement%2Frefs%2Fheads%2Fmain%2Fcoverage%2Fcoverage-summary.json)
![Branch Coverage Badge](https://img.shields.io/badge/dynamic/json?label=Branch%20Coverage&query=%24.total.branches.pct&suffix=%25&url=https%3A%2F%2Fdts-stn.github.io%2Fdigital-dojo-engagement%2Frefs%2Fheads%2Fmain%2Fcoverage%2Fcoverage-summary.json)

## Versions

![GitHub package.json dependency version (prod)](https://img.shields.io/github/package-json/dependency-version/DTS-STN/digital-dojo-engagement/next)
![GitHub package.json dependency version (dev dep on branch)](https://img.shields.io/github/package-json/dependency-version/DTS-STN/digital-dojo-engagement/dev/tailwindcss)
![GitHub package.json dependency version (dev dep on branch)](https://img.shields.io/github/package-json/dependency-version/DTS-STN/digital-dojo-engagement/dev/jest)
![GitHub package.json dependency version (dev dep on branch)](https://img.shields.io/github/package-json/dependency-version/DTS-STN/digital-dojo-engagement/dev/cypress)

## Description

Digital Dojo 2.0 Application

### Technologies Implemented

This project uses

- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Jest](https://jestjs.io/) for unit testing
- [Cypress](https://www.cypress.io/) for end-to-end testing.

#### Configuring Helm

In the helm template, the application name is next-template. this will need to be changed by the current application name.

For every Kubernetes cluster, a context.sh file needs to be defined. For example, one might be called context-dev.sh and the other context-prod.sh.

For more information, please visit the [DTS SRE deployment templates](https://github.com/DTS-STN/dts-sre-deployment-templates/tree/main/kubernetes-helm-template).

## PR Procedures/Definition of done

Have at least one person reviewing each PR before it can be merged. Each branch should be prefixed with the ID of the relevant ADO task. Eg. "379-update-readme"

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!
