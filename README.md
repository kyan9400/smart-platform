# smart-platform

Bilingual (English / Arabic) marketing website for **Kingdom Vision Equipment Rental**, a heavy and light equipment rental company based in Riyadh, Saudi Arabia. The site presents the equipment catalogue, categories, offers and services, and provides a contact page with an inquiry form.

**Live site:** https://smart-platform-ten.vercel.app

## Stack

- [Next.js](https://nextjs.org) 16 (App Router, Turbopack) with React 19 and TypeScript
- [Tailwind CSS](https://tailwindcss.com) 4 via `@tailwindcss/postcss`
- [lucide-react](https://lucide.dev) icons
- `next/font/google` for Geist, Geist Mono and Noto Sans Arabic
- Custom lightweight i18n provider (no external i18n library)

## Features

- Home page: hero, equipment categories, popular equipment grid, special offers, services, "why choose us" and a call-to-action section
- Contact page (`/contact`): contact details, inquiry form, service regions and FAQ
- English / Arabic language toggle with full RTL layout; the chosen locale is persisted in `localStorage` (`kv-locale`)
- Fully static: all routes are prerendered at build time (no server-side data fetching or environment variables)

> **Note:** the inquiry form is currently a frontend-only stub. It validates input and shows a success state, but the payload is not sent anywhere. Wire it to an email/forms backend before relying on it.

## Getting started

Requirements: Node.js 20.19+ (or 22.13+ / 24+) and npm.

```bash
npm ci        # install dependencies
npm run dev   # start the dev server on http://localhost:3000
```

Other scripts:

```bash
npm run build # production build (next build)
npm run start # serve the production build
npm run lint  # eslint (eslint-config-next core-web-vitals + typescript)
```

There is no `.env` file to configure; the project uses no environment variables.

## Project structure

```
app/
  layout.tsx              # root layout, fonts, LanguageProvider
  page.tsx                # home page
  contact/                # /contact route
  components/             # page sections (Navbar, HeroSection, Footer, ...)
  components/contact/     # contact-page sections incl. InquiryForm
  data/rental-products.ts # equipment catalogue shown on the home page
  lib/site.ts             # company name, phone, e-mail, WhatsApp link, address
  lib/i18n/               # Locale type + en/ar message dictionaries
  providers/LanguageProvider.tsx
public/
  kingdom-logo.png        # company logo
  Emblem_of_Saudi_Arabia.svg
```

To change the business contact details edit `app/lib/site.ts`; to change copy edit `app/lib/i18n/messages/en.ts` and `ar.ts` (both files share the same shape, enforced by the `Messages` type).

## Deployment

The site is deployed on [Vercel](https://vercel.com) from the `main` branch with the default Next.js build settings (`next build`).

## License

MIT - see [LICENSE](LICENSE).
