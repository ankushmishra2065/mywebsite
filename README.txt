ANKUSH STUDY HUB — RESPONSIVE UPGRADE

FILES
- index.html
- styles.css
- app.js
- notes.js

WHAT'S UPDATED
- Added 9 new revision topics across Accountancy, Economics, Computer Science, Social Studies and English.
- Expanded the mixed-subject quiz bank with 10 additional questions and explanations.
- Added a Download .txt action inside each topic so notes can be saved for offline revision.
- Responsive layout improvements for laptops, tablets, and phones.
- Owner topic manager opened from the “Admin Access” button.
- Add Class 11/12 syllabus topics with subject, chapter/unit, tags, summary, and a notes section.
- Export custom topics to JSON for backup and import the JSON on another browser/device.
- Custom topics appear in the Notes Library on the current browser.
- Existing notes, quiz, theme, timer, streak, quick notes, music links, and Nexa demo are retained.

SETUP
1. Download and extract the ZIP.
2. Keep all four files together in the same folder.
3. Before publishing, open app.js and change:
   const ADMIN_ACCESS_CODE = "ANKUSH-ADMIN-CHANGE-ME";
   to a private code of your choice.
4. Upload all four files to the ROOT of your GitHub repository, replacing the previous versions.
5. Deploy/redeploy on Vercel. No build command is needed for this static site.

HOW TO ADD A TOPIC
1. Open your deployed site.
2. Click “Admin Access” and enter your code.
3. Select class and subject.
4. Fill in title, chapter/unit, tags, summary, section heading, and content.
5. Click “Save topic to library”.
6. Use “Export topics JSON” regularly. To move topics to another browser/device, export then import that JSON there.

IMPORTANT STORAGE / SECURITY LIMITATIONS
- This is a static website. Custom topics are stored in browser localStorage, so they are not automatically published to every visitor or synced between your laptop and phone. Export/import JSON is provided as a manual transfer/backup.
- The access code in app.js is client-side and can be found by someone inspecting the site's JavaScript. It is a convenience gate, not real private authentication. For a genuinely owner-only admin panel that saves shared syllabus content online, connect a backend/database such as Supabase and enforce owner permissions server-side.
- Existing sign-in/sign-up is also a local demo and is not production authentication.
- Check all content against the latest official NEB syllabus and your prescribed textbooks.
