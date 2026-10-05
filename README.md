# Harbor Digital

A two-brand storefront for annual device-protection subscriptions. Browse plans,
choose device coverage and the number of licences, and review a purchase estimate.
The catalogue combines commerce offers with editorial descriptions through a small
mock storefront service. Its calls take 60 ms and return independent data copies.
Purchases are demonstrations; no payment is taken and nothing is persisted.

## Requirements
Node.js 24 or newer and npm 11.

## Run locally
```bash
npm ci
npm run dev
```
Open http://localhost:3000. No environment variables or external services are needed.

| Command | Purpose |
| --- | --- |
| `npm run dev` | Development server |
| `npm test` | Vitest suite (does not type-check) |
| `npm run typecheck` | Strict TypeScript checks |
| `npm run lint` | ESLint |
| `npm run build` | Production build |
| `npm start` | Serve the production build |
| `npm run test:watch` | Tests in watch mode |

Amounts in the commerce feed are decimal dollar strings. Storefront models use
integer cents. All offers cover one year and all prices are USD, before tax.
