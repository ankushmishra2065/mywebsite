# Ankush Study Hub Pro
Responsive EdTech starter with class/subject/chapter structure, animated splash, SQL/Supabase schema, streak/session model, AI endpoint architecture, in-site licensed audio player and Spotify OAuth placeholder.

## Run
npm install
npm run dev

## Database
Run `supabase/schema.sql` in Supabase SQL Editor. Enable email authentication and connect VITE_SUPABASE_URL / VITE_SUPABASE_ANON_KEY. Wire signUp/signInWithPassword and call `record_active_day()` after meaningful study activity. Use `current_streak()` for the live streak.

## AI
Deploy `server/ai.js` as `/api/ai` in your serverless environment. Keep AI_API_KEY server-only.

## Music
Place audio you own/license in `public/music/sample.mp3`. Spotify should use OAuth and permitted APIs; do not bypass Spotify restrictions or re-host Spotify audio.

## Content
The frontend contains representative original content structure. Populate the SQL content tables for all classes/subjects/chapters through an admin/content pipeline. Do not reproduce copyrighted textbooks verbatim.
