# Fintech Bootcamp Timeline — Setup Guide

## Project Structure

```
fintech-timeline/
├── index.html       ← Main page (all content lives here)
├── style.css        ← All styling
├── script.js        ← Scroll animations + video behavior
├── videos/          ← PUT YOUR MP4 FILES HERE
│   ├── topic1.mp4
│   ├── topic2.mp4
│   └── topic3.mp4
└── README.md
```

---

## Step 1 — Add your videos

Create a `videos/` folder inside the project folder and drop your `.mp4` files in.
Each `<video>` tag in `index.html` references a file like `videos/topic1.mp4`.
Update the `src` paths to match your actual filenames.

---

## Step 2 — Run locally

You need a simple local server (opening index.html directly in a browser
will block video playback due to browser security policies).

### Option A — Python (easiest, no install needed on Mac/Linux)
```bash
cd fintech-timeline
python3 -m http.server 8080
```
Then open: http://localhost:8080

### Option B — Node.js (if you have Node installed)
```bash
npx serve fintech-timeline
```
Then open the URL it prints (usually http://localhost:3000)

### Option C — VS Code Live Server extension
Install the "Live Server" extension in VS Code,
right-click index.html → "Open with Live Server".

---

## Step 3 — Edit the content

Open `index.html` in any text editor and find the sections marked:

- **Entry title** → change "Your First Fintech Topic" to your real topic name
- **entry-tag** → short label shown in the pill badge (e.g. "Open Banking")
- **author-avatar** → change the letter to the person's initial
- **author-name / author-role** → fill in real name and role
- **blockquote** → replace with the real reflection text
- **video-overlay-label** → episode label shown on the video
- **takeaway-text** → main takeaway paragraph
- **shift-block** → Before / After mindset shift

To **add more entries**, copy any `<article class="timeline-entry">` block,
paste it after the last one, and increment `data-index` (04, 05, …).

---

## Step 4 — Host for free on Netlify Drop (no account needed)

1. Go to https://app.netlify.com/drop
2. Drag and drop your entire `fintech-timeline/` folder onto the page
3. Netlify gives you a public URL instantly (e.g. https://random-name.netlify.app)
4. Share that link — done!

> **Note:** The free Netlify Drop link is temporary (~1 hour without an account).
> Create a free Netlify account to make it permanent and get a custom subdomain.
> Uploads are limited to 10 MB per file on the free tier.
> If your MP4 files are large, compress them first (HandBrake is free and easy).

---

## Tips

- **Video compression**: Use HandBrake (free) to compress MP4s to < 50 MB each
  so the page loads fast. Target 720p, CRF 28, H.264.
- **Poster image**: Add a `poster="images/topic1-thumb.jpg"` attribute to each
  `<video>` tag to show a thumbnail before the video loads.
- **Custom domain**: On Netlify's free plan you can set a custom subdomain like
  `yourteam-fintech.netlify.app` in Site Settings → Domain Management.
