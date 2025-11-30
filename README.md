# Grobots Store

Advanced Robotics & 3D Printing E-commerce Platform built with Medusa v2 and Next.js 16.

## Prerequisites

- Node.js 18+ 
- PostgreSQL (for production) or SQLite (for development)
- npm or yarn

## Quick Start

### 1. Install Dependencies

```bash
npm run install:all
```

This installs dependencies for both the backend (Medusa) and storefront (Next.js).

### 2. Configure Environment

**Backend** (`grobots/.env`):
```env
DATABASE_URL=postgres://user:password@localhost:5432/medusa-store
MEDUSA_ADMIN_ONBOARDING_TYPE=default
STORE_CORS=http://localhost:8000
ADMIN_CORS=http://localhost:7001,http://localhost:7000
AUTH_CORS=http://localhost:8000
JWT_SECRET=your-jwt-secret
COOKIE_SECRET=your-cookie-secret
```

**Storefront** (`grobots-storefront/.env.local`):
```env
NEXT_PUBLIC_MEDUSA_PUBLISHABLE_KEY=your-publishable-key
MEDUSA_BACKEND_URL=http://localhost:9000
```

### 3. Run Development Servers

```bash
npm run dev
```

This starts:
- **Backend**: http://localhost:9000 (API)
- **Admin Dashboard**: http://localhost:9000/app
- **Storefront**: http://localhost:8000

## Available Commands

| Command | Description |
|---------|-------------|
| `npm run install:all` | Install dependencies for both projects |
| `npm run dev` | Run both backend and storefront in development |
| `npm run build` | Build both projects for production |
| `npm start` | Start both projects in production mode |
| `npm run backend:dev` | Run only the backend |
| `npm run storefront:dev` | Run only the storefront |

## Project Structure

```
store.grobots/
├── grobots/                    # Medusa backend
│   ├── src/
│   │   ├── api/               # Custom API routes
│   │   ├── modules/           # Custom modules
│   │   ├── workflows/         # Custom workflows
│   │   └── scripts/           # Seed scripts
│   └── static/                # Uploaded media files
│
├── grobots-storefront/        # Next.js storefront
│   ├── src/
│   │   ├── app/              # Next.js 16 app router
│   │   ├── modules/          # Feature modules
│   │   │   ├── home/        # Homepage components
│   │   │   ├── about/       # About page with 3D effects
│   │   │   ├── products/    # Product components
│   │   │   ├── cart/        # Shopping cart
│   │   │   └── layout/      # Navigation & footer
│   │   └── lib/             # Utilities & data fetching
│   └── public/              # Static assets
│
└── package.json              # Root package with scripts
```

## Key Features

### Storefront
- 🎨 Modern UI with pill-style navigation
- 🎯 Product cards with badges, color variants, and hover effects
- 🚀 Smooth animations with GSAP and Framer Motion
- 🌐 3D effects on About page (GridScan & DomeGallery)
- 📱 Fully responsive design
- 🎭 Black & white professional color scheme

### Backend
- 💳 Built on Medusa v2
- 🔌 RESTful API with customizable endpoints
- 📦 Product management with variants
- 🛒 Full cart and checkout functionality
- 👤 Customer authentication
- 📊 Admin dashboard included

## First-Time Setup

1. **Install dependencies**:
   ```bash
   npm run install:all
   ```

2. **Start backend** and create admin user:
   ```bash
   npm run backend:dev
   ```
   Visit http://localhost:9000/app and create your admin account.

3. **Get Publishable Key**:
   - Log into admin dashboard
   - Go to Settings → Publishable API Keys
   - Copy the key to `grobots-storefront/.env.local`

4. **Seed products** (optional):
   ```bash
   cd grobots
   npm run seed
   ```

5. **Start storefront**:
   ```bash
   npm run storefront:dev
   ```

## Development Workflow

1. Both servers run simultaneously with `npm run dev`
2. Backend changes reload automatically
3. Frontend uses Turbopack for fast refresh
4. Check terminal for colored logs:
   - 🔵 Blue = Backend logs
   - 🔴 Magenta = Storefront logs

## Building for Production

```bash
# Build both projects
npm run build

# Start in production mode
npm start
```

## Troubleshooting

### Images not loading
- Ensure `unoptimized: true` is in `next.config.js` for local development
- Check that backend is running on port 9000
- Verify images exist in `grobots/static/`

### Backend connection failed
- Check `MEDUSA_BACKEND_URL` in storefront `.env.local`
- Ensure backend is running: `npm run backend:dev`
- Verify CORS settings in backend `.env`

### Long filename errors (Git)
```bash
git config core.longpaths true
```

## Tech Stack

- **Backend**: Medusa v2, PostgreSQL/SQLite, Node.js
- **Storefront**: Next.js 16, React 19, TypeScript
- **Styling**: Tailwind CSS
- **Animations**: GSAP, Framer Motion
- **3D**: Three.js, React Three Fiber
- **State**: React Server Components

## Learn More

- [Medusa Documentation](https://docs.medusajs.com)
- [Next.js Documentation](https://nextjs.org/docs)
- [Project Repository](https://github.com/Grobots-cmd/store.grobots)

## License

MIT
