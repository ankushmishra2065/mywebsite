# EduNexa V4 — Mishra Ankush

## What this version adds
- Premium responsive UI with loading, hover/touch feedback, floating hero animation and smooth page transitions.
- Guest browsing: no sign-in wall for normal study content.
- Optional real sign-in/sign-up for a personal profile.
- Per-user streak, MCQ performance, accuracy and study-time analytics.
- Account-based notes.
- Notification bell with a working notification panel.
- Feedback form.
- Server email notifications for account creation/sign-in and feedback.
- Complete original curriculum dataset covering Physics, Chemistry, Mathematics, Biology, English and Computer with chapters, topic definitions and short study notes.
- CEE and IOE preparation centers.
- Randomized practice generated from the topic dataset.
- Instagram @_ankushx link in sidebar, bookmarks/footer.

## Content note
The study material in `content.js` is original concise educational content. It is NOT a copy of an entire commercial textbook. You can expand or edit the dataset to match your official school/entrance syllabus and your own notes.

## Real sign-in + email setup
The front-end works in guest mode without a backend. For real accounts and owner email notifications:
1. Host the site on PHP + MySQL hosting (your AwardSpace/PHP hosting is suitable).
2. Create a MySQL database.
3. Import `database.sql`.
4. Edit `config.php` and replace:
   - YOUR_DATABASE_NAME
   - YOUR_DATABASE_USER
   - YOUR_DATABASE_PASSWORD
5. Set `owner_email` to the email address where you want notifications.
6. Upload `index.html`, `style.css`, `app.js`, `content.js`, `api.php`, `config.php`, and `database.sql` (database.sql does not need to stay public after import).
7. Make sure PHP `mail()` is enabled by your host. If your host disables `mail()`, use an SMTP provider/server-side mail library instead.
8. Test signup, sign-in, feedback and notification bell.

### Important hosting architecture
Vercel static hosting cannot execute the included PHP API. If you keep the front-end on Vercel, deploy `api.php` on a separate PHP host and change `const API="api.php"` in `app.js` to the HTTPS API endpoint. Configure CORS and cookies securely for your final production setup.

## Security
- Passwords are stored using PHP `password_hash`.
- Do not put database passwords in JavaScript.
- Do not collect passwords in feedback.
- For production, use HTTPS, restrict CORS to your real domain, add CSRF protection, rate limiting and stronger session cookie settings.
- The server email notification includes the visitor IP. Remove that line if you do not need it.

## Instagram
Requested profile:
https://www.instagram.com/_ankushx?igsh=MTFlZ2UxbXdlaWFsMg==&igsi=MTFlZ2UxbXdlaWFsMg==
