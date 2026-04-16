# LeftoverLove

"Reducing Food Waste, One Meal at a Time"

## Project Structure

- `backend/` – Node.js + Express API with PostGIS geospatial queries
- `mobile/` – React Native Expo app for users and vendors
- `web-dashboard/` – React admin dashboard for vendors and NGOs
- `shared/` – Shared TypeScript types (optional)

## Getting Started

### Prerequisites
- Node.js v20+
- Docker & Docker Compose
- Expo CLI (`npm install -g expo-cli`)

### Setup
1. Clone repository
2. Start PostgreSQL with PostGIS: `docker-compose up -d`
3. Backend:
   ```bash
   cd backend
   cp .env.example .env   # fill values
   npm install
   npm run migrate
   npm run dev