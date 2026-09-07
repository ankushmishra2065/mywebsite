# NEXORA — IT Student Hub (Expanded Edition)

This package expands the original NEXORA static student hub with a larger, original, syllabus-aligned question bank for every chapter already included in the project.

## Included
- DBMS
- C Programming
- C++ Programming
- Python Programming
- Web Technology
- Computer Networks
- Operating System
- Data Structures

Every existing chapter now includes: summary, notes, exam-oriented theory prompts, and a larger original MCQ bank. The chapter page displays the full question bank and supports a full quiz.

The questions are newly written study material, not copied textbook passages. They should be checked against the exact syllabus/textbook used by your school/college before being presented as an official complete question bank. The Curriculum Development Centre publishes current curriculum and approved-material information.

## Run
Open `index.html` in a browser. No build step is required.

## Deploy
Upload all five files to your static host: `index.html`, `style.css`, `app.js`, `data.js`, and `README.md`. Do not upload only `index.html` if you want the full app.

## Question storage
The expanded seed uses a new localStorage version (`v3`) so an older NEXORA question cache does not hide the new question bank.

\n## Student registration\nThe new Register page stores student registration records in this browser and shows them in Admin > Registered Students. It can also POST the record to an endpoint you control when `NEXORA_CONFIG.REGISTRATION_ENDPOINT` is configured in `config.js`. For real multi-device collection, connect that endpoint to a proper database/backend and protect the admin area with server-side authentication. Do not collect sensitive information you do not need.\n