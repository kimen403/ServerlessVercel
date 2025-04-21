# Serverless Backend with Clean Architecture

## 🚀 Deployment ke Vercel

### Persiapan

1. Install Vercel CLI:
```bash
npm install -g vercel
```

2. Login ke Vercel:
```bash
vercel login
```

### Setup Database

1. Buka [Vercel Dashboard](https://vercel.com)
2. Buat project baru
3. Di bagian Storage, pilih "Create Database"
4. Pilih PostgreSQL
5. Copy connection string yang diberikan

### Environment Variables

Di Vercel Dashboard:
1. Buka Project Settings
2. Ke bagian Environment Variables
3. Tambahkan variables berikut:
```
DATABASE_URL=<connection-string-dari-vercel-postgres>
NODE_ENV=production
```

### Deploy

1. Push kode ke repository Git

2. Di terminal project:
```bash
# Deploy development
vercel

# Deploy production
vercel --prod
```

### Verifikasi Deployment

1. Cek endpoint API:
```
GET https://<your-project>.vercel.app/products
```

2. Cek logs di Vercel Dashboard:
- Project Dashboard -> Logs

## 📝 Commands

```bash
# Install dependencies
npm install

# Development
npm run dev

# Build
npm run build

# Start production
npm start

# Generate Prisma client
npm run prisma:generate

# Deploy database migrations
npm run prisma:migrate
```

## 🔧 Environment Variables

```env
# App
PORT=3000
NODE_ENV=development

# Database
DATABASE_URL="postgresql://user:password@localhost:5432/dbname?schema=public"
```

## 🛠 Tech Stack

- TypeScript
- Hapi.js
- Prisma
- PostgreSQL
- Clean Architecture
