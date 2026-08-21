# EduNexa V5 Pro

## Included
- Class 11 and Class 12 Science, Management and Common subjects
- 263 chapter entries
- Original chapter summary, key points and 5 answered revision questions for every chapter
- Upgraded offline Nexa AI Study Assistant
- Random 5-question quiz
- Personal notes and practice results
- Analytics and streak tracking
- Dark/light theme
- Mobile and laptop responsive UI
- PWA manifest + service-worker caching
- No external font dependency and no render-blocking third-party script in the initial page

## Run
Upload all files in this folder to your static host. Keep `study.json` in the same folder as `index.html`, `app.js`, and `style.css`.

## Performance
The initial UI is intentionally static and lightweight. The large study bank is loaded only when a chapter/AI feature needs it and is then cached. Actual PageSpeed/Lighthouse scores can vary by hosting, browser, network, injected scripts, and third-party services; no static project can guarantee a fixed 100 score in every environment.

- Clearly visible lightweight study background in both light and dark themes
- Nexa AI V5: smart chapter matching, chapter lists, random answered practice, summaries, key points, and chapter opening
