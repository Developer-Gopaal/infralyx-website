# Infralyx Technologies

Premium, iOS-inspired mobile repair website built with Next.js, Tailwind CSS, Framer Motion, and MongoDB.

## Setup

1. Copy `.env.example` to `.env.local` and fill in your values.
2. Install dependencies with `npm install`.
3. Start the dev server with `npm run dev`.

## Environment variables

- `MONGODB_URI`: MongoDB connection string for booking submissions.
- `NEXT_PUBLIC_WHATSAPP_NUMBER`: WhatsApp number in international format without `+`.
- `NEXT_PUBLIC_CALL_NUMBER`: Call number in international format without `+`.

## Netlify deployment

1. Push the project to GitHub.
2. Import the repository into Netlify.
3. Leave the build command as `npm run build`.
4. Set the publish directory to `.next`.
5. Add the environment variables from `.env.example` in the Netlify dashboard.
6. Deploy the site.
