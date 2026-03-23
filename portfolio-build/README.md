# Tharunkaarthik Gopinath — Portfolio

A minimalistic, dark-themed developer portfolio built with **Next.js**, **React**, **Tailwind CSS**, and a **Node.js + Express** backend serving resume data as a REST API.

## Stack

| Layer    | Tech                                  |
|----------|---------------------------------------|
| Frontend | Next.js 14, React 18, Tailwind CSS 3  |
| Backend  | Node.js, Express 4                    |
| Styling  | Tailwind CSS, custom CSS animations   |

---

## Project Structure

```
portfolio/
├── backend/                  # Express REST API
│   ├── server.js             # Entry point
│   ├── routes/resume.js      # API routes
│   ├── data/resumeData.js    # All resume data
│   └── package.json
└── frontend/                 # Next.js app
    ├── pages/
    │   ├── index.js          # Main portfolio page
    │   └── api/resume.js     # Proxy to Express backend
    ├── components/           # React components
    │   ├── Navbar.jsx
    │   ├── Hero.jsx
    │   ├── Projects.jsx
    │   ├── Skills.jsx
    │   ├── Experience.jsx
    │   ├── Competitions.jsx
    │   ├── Contact.jsx
    │   ├── BackgroundEffects.jsx
    │   ├── AnimatedSection.jsx
    │   └── SectionHeader.jsx
    ├── hooks/useInView.js    # Scroll-reveal hook
    ├── styles/globals.css
    └── package.json
```

---

## Getting Started

### 1. Install dependencies

```bash
# Backend
cd backend
npm install

# Frontend
cd ../frontend
npm install
```

### 2. Configure environment

```bash
cd frontend
cp .env.local.example .env.local
# Edit .env.local if needed (defaults work for local dev)
```

### 3. Run the backend

```bash
cd backend
npm run dev        # uses nodemon for hot reload
# OR
npm start          # production
```

The Express API will be available at `http://localhost:5000`.

### 4. Run the frontend

```bash
cd frontend
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## API Endpoints (Express)

| Method | Endpoint                    | Returns               |
|--------|-----------------------------|-----------------------|
| GET    | `/health`                   | Server health check   |
| GET    | `/api/resume`               | Full resume JSON      |
| GET    | `/api/resume/projects`      | Projects array        |
| GET    | `/api/resume/skills`        | Skills object         |
| GET    | `/api/resume/experience`    | Experience array      |
| GET    | `/api/resume/education`     | Education array       |
| GET    | `/api/resume/competitions`  | Competitions array    |
| GET    | `/api/resume/certifications`| Certifications array  |
| GET    | `/api/resume/contact`       | Contact info object   |

---

## Customization

### Update your info
Edit `backend/data/resumeData.js` — all resume content lives there.
The frontend API fallback in `frontend/pages/api/resume.js` mirrors this data; keep both in sync.

### Update social links
Search for `linkedin.com/in/tharunkaarthik` and `github.com/tharunkaarthik` to replace with your actual URLs.

### Theme colors
Colors are defined in `frontend/tailwind.config.js` and `frontend/styles/globals.css`.
The palette uses: `gray-950` background · `indigo`/`blue`/`violet` accents.

---

## Deployment

- **Frontend**: Deploy to [Vercel](https://vercel.com) — connect the `frontend/` folder. Set `BACKEND_URL` and `NEXT_PUBLIC_APP_URL` environment variables.
- **Backend**: Deploy to [Railway](https://railway.app), [Render](https://render.com), or any Node.js host. Set `FRONTEND_URL` to your Vercel domain for CORS.
