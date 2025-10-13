### Supabase + Medusa setup

Follow these steps to use Supabase Postgres for the Medusa backend and expose a Supabase client in the Next.js storefront.

- Backend (Medusa at `my-medusa-store/`)
  - Set `DATABASE_URL` to your Supabase Postgres connection string (include SSL):
    - Example: `postgres://USER:PASSWORD@HOST:6543/postgres?sslmode=require`
  - Required envs in `my-medusa-store/.env`:
    - `DATABASE_URL=...`
    - `STORE_CORS=http://localhost:8000`
    - `ADMIN_CORS=http://localhost:7001`
    - `AUTH_CORS=http://localhost:8000`
    - `JWT_SECRET=supersecret`
    - `COOKIE_SECRET=supersecret`
  - Start backend:
    - `cd my-medusa-store`
    - `yarn` (or `npm i`)
    - `yarn dev` (or `npm run dev`)

- Storefront (Next.js at `Storefront/`)
  - Required envs in `Storefront/.env`:
    - `NEXT_PUBLIC_MEDUSA_BACKEND_URL=http://localhost:9000`
    - `NEXT_PUBLIC_MEDUSA_PUBLISHABLE_KEY=pk_test_123`
    - `NEXT_PUBLIC_SUPABASE_URL=https://YOUR-PROJECT.supabase.co`
    - `NEXT_PUBLIC_SUPABASE_ANON_KEY=YOUR-ANON-KEY`
  - Install deps and run:
    - `cd Storefront`
    - `yarn` (or `npm i`)
    - `yarn dev`

Notes
- Medusa currently handles customer auth (email/password) via its own auth endpoints used in `Storefront/src/lib/data/customer.ts`. If you plan to migrate to Supabase Auth, we can replace those flows to use Supabase and exchange verified identities with Medusa. Ask to proceed if you want that change.
- The code includes a Supabase browser client at `Storefront/src/lib/supabase/client.ts` for client-side data needs.


