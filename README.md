# Tharunkaarthik Gopinath — Portfolio

A minimalistic, dark-themed developer portfolio built with **Next.js**, **React**, **Tailwind CSS**, and a **Node.js + Express** backend serving resume data as a REST API.

## Stack

| Layer    | Tech                                 |
|----------|--------------------------------------|
| Frontend | Next.js 14, React 18, Tailwind CSS 3 |
| Backend  | Node.js, Express 4                   |
| Styling  | Tailwind CSS, custom CSS animations  |

---

## Project Structure

```
portfolio-build/
├── backend/                  # Express REST API
│   ├── server.js             # Entry point (port 5000)
│   ├── routes/resume.js      # API routes
│   ├── data/resumeData.js    # All resume/portfolio content
│   └── package.json
└── frontend/                 # Next.js app
    ├── pages/
    │   ├── index.js          # Main portfolio page
    │   └── api/resume.js     # Proxy to Express backend (with fallback)
    ├── components/           # React components per section
    ├── hooks/useInView.js    # Scroll-reveal hook
    ├── styles/globals.css
    └── package.json
```

---

## Getting Started

### 1. Install dependencies

```bash
# Backend
cd portfolio-build/backend
npm install

# Frontend
cd portfolio-build/frontend
npm install
```

### 2. Configure environment

```bash
cd portfolio-build/frontend
cp .env.local.example .env.local
# Defaults work for local dev
```

### 3. Run locally

```bash
# Terminal 1 — backend
cd portfolio-build/backend
npm run dev   # http://localhost:5000

# Terminal 2 — frontend
cd portfolio-build/frontend
npm run dev   # http://localhost:3000
```

---

## API Endpoints

| Method | Endpoint                     | Returns                |
|--------|------------------------------|------------------------|
| GET    | `/health`                    | Server health check    |
| GET    | `/api/resume`                | Full resume JSON       |
| GET    | `/api/resume/projects`       | Projects array         |
| GET    | `/api/resume/skills`         | Skills object          |
| GET    | `/api/resume/experience`     | Experience array       |
| GET    | `/api/resume/education`      | Education array        |
| GET    | `/api/resume/competitions`   | Competitions array     |
| GET    | `/api/resume/certifications` | Certifications array   |
| GET    | `/api/resume/contact`        | Contact info object    |

---

## Customization

### Update your info
Edit `portfolio-build/backend/data/resumeData.js` — all content lives there.
Also update the fallback data in `portfolio-build/frontend/pages/api/resume.js` to keep them in sync.

### Theme colors
Colors are defined in `portfolio-build/frontend/tailwind.config.js` and `portfolio-build/frontend/styles/globals.css`.

---

## Deployment (Render)

Both services are deployed separately on [Render](https://render.com) as **Web Services**.

### Backend
- **Root Directory**: `portfolio-build/backend`
- **Build Command**: `npm install`
- **Start Command**: `npm start`
- **Env var**: `FRONTEND_URL` = your frontend's Render URL

### Frontend
- **Root Directory**: `portfolio-build/frontend`
- **Build Command**: `npm install && npm run build`
- **Start Command**: `npm start`
- **Env vars**:
  - `BACKEND_URL` = your backend's Render URL
  - `NEXT_PUBLIC_APP_URL` = your frontend's Render URL

> Deploy the backend first to get its URL, then set `BACKEND_URL` when deploying the frontend.
