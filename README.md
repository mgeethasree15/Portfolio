# Data Analyst Portfolio

A single-page portfolio built with React + Vite + Tailwind CSS, in a clean
white-and-blue theme.

## Run it locally (in VS Code)

1. Open this folder in VS Code.
2. Open a terminal (``Ctrl+` ``) and run:
   ```bash
   npm install
   npm run dev
   ```
3. Open the printed local URL (usually `http://localhost:5173`).

## Build for deployment

```bash
npm run build
```
This outputs a static site to `dist/` — deployable to Vercel, Netlify, GitHub
Pages, or any static host.

## Editing your content

Everything you'd want to change lives in **`src/content.js`**:
- Your name, summary, location, role headlines (Data / Business / Analytics Engineer)
- Education + certifications
- Experience entries (mark each `status: 'current'` or `'past'` — this drives
  the toggle filter)
- Projects (each follows Problem → Approach → How I solved it → Result)
- Contact links (GitHub, LinkedIn, email, phone)

You generally won't need to touch the component files in `src/components/`
unless you want to change layout or styling.

### Adding your photo
Drop an image into the `public/` folder (create it if it doesn't exist), then
set `profile.photo` in `content.js` to `/your-filename.jpg`.

### Adding project cover images
Same idea — put images in `public/projects/`, then set each project's
`cover` field to the path, e.g. `/projects/forecasting-cover.jpg`.

## Structure

```
src/
  content.js          ← edit this for your real content
  App.jsx              ← assembles all sections
  index.css            ← design tokens / global styles
  components/
    Nav.jsx             Sticky top nav (Home / Work / Experience / Projects / Contact)
    Hero.jsx             Name, role toggle, intro, photo
    WorkEducation.jsx    Education + certifications
    Experience.jsx       Current/Past filtered experience list
    Projects.jsx          The "train" carousel + case-study modal
    Contact.jsx            GitHub / LinkedIn / Email / Phone
    CursorFx.jsx            Custom cursor (desktop only, respects reduced motion)
```

## Notes on the design

- **Theme**: white background, blue accent (`#1456D6`), navy ink text.
- **Role toggle** in the hero swaps the headline between Data / Business /
  Analytics Engineer without changing the rest of the page — tailor your
  resume link or summary per role later if you want it to go further.
- **Projects "train"**: a horizontally scrollable rail styled like a track
  with station markers — click any card to open the full case study.
- **Cursor**: a small dot + trailing ring, enlarges over clickable elements.
  Automatically disabled on touch devices and when the OS-level "reduce
  motion" setting is on.
- Fully responsive, keyboard-focusable (visible focus rings throughout).
# Portfolio
