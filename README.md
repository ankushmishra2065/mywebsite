# Mishraankush Student Super Platform — Full Starter

## Included
- Responsive mobile + laptop UI
- Study Zone / NEB-aligned content structure
- Practice / MCQs
- AI Study Assistant UI
- Student tools
- Coding Zone
- Nepali/Hindi/English music discovery
- NEB News UI
- Premium membership UI
- Sign up / sign in
- MySQL database schema
- Password hashing with bcrypt
- Session-based authentication
- Student progress/news/premium tables

## Run locally
1. Install Node.js and MySQL.
2. Create the database:
   `mysql -u root -p < database.sql`
3. Copy `.env.example` to `.env` and set your MySQL password and a strong session secret.
4. Run:
   `npm install`
   `npm start`
5. Open `http://localhost:3000`.

## Important
The premium buttons are UI only. A real payment gateway must be integrated separately.
The AI endpoint is intentionally not connected to a provider; add a server-side AI integration and keep API keys out of frontend code.
Use authorized/licensed NEB-aligned content and official/licensed music links or embeds. Do not copy or redistribute copyrighted textbooks, songs, or other material without permission.
For production, use HTTPS, secure cookies, CSRF protection, rate limiting, input validation, database backups, and a production session store.
