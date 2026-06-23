# Second Saturday — Website

A clean, one-page website for the **Second Saturday** worship-night ministry.
Everything lives in a single `index.html` (HTML + CSS + JS), so it's fast,
portable, and free to host.

---

## What's in this folder

| File / folder        | What it is |
|----------------------|------------|
| `index.html`         | The entire website. |
| `bulletin-data.js`   | **The one file you edit each month** — the worship-night dates & notes. |
| `img/`               | Web-optimized photos used on the site. |
| `favicon.svg`        | The logo / browser-tab icon (cross · sunrise · waves). |
| `favicon-512.png`, `apple-touch-icon.png` | Icon versions for sharing / phones. |
| `logo-horizontal.svg`| Logo with the “second saturday” wordmark (for print / social). |
| `serve.ps1`          | Tiny local preview server for Windows. |

> **Originals:** the full-size photos and source documents stay on your
> `Cades2tbHHD` drive under *Second Saturday Stuff*. This folder only keeps
> shrunken web copies, so it loads fast.

---

## ✏️ Updating the monthly bulletin (the part you'll do often)

1. Open **`bulletin-data.js`** (in this folder, or on GitHub.com once it's online).
2. Edit the text between the `"quotes"`. The site automatically:
   - shows the **next upcoming night** as the big featured card,
   - lists the ones after it under **Upcoming Nights**,
   - **hides past dates** on its own.
3. Keep dates in `YYYY-MM-DD` format (e.g. `2026-07-11`).
4. Save → commit/push (or just edit it on GitHub.com and click **Commit**).
   The live site updates in about a minute.

You can leave any field empty (`""`) and it simply won't show. The dates are
pre-filled with the second Saturday of each month through early 2027 — adjust
the **time** and **location** when you know them.

---

## 📬 Turn on the contact form (one-time, ~5 minutes)

The form works without setup — until then it politely tells people to email
or text instead. To have submissions emailed to you:

1. Go to **https://web3forms.com**.
2. Enter **Secondsaturday570@gmail.com** ← *use this exact inbox; submissions
   go to whatever email you enter here.*
3. It emails you an **Access Key** (a long code).
4. Open `index.html`, find this line near the bottom:
   ```js
   const WEB3FORMS_ACCESS_KEY = "";
   ```
   Paste your key between the quotes, save, and push.
5. Test it. The first email may land in **Spam/Promotions** — mark it
   “Not spam” once and it'll be fine after that.

---

## 👀 Preview it on your computer (optional)

**Easiest:** double-click `index.html`.

**Better (so everything behaves exactly like the live site):**
1. Right-click `serve.ps1` → *Run with PowerShell*
   (or run `powershell -ExecutionPolicy Bypass -File serve.ps1`).
2. Open **http://localhost:8246** in your browser.
3. After edits, force-refresh with **Ctrl + Shift + R** (browsers cache hard).

---

## 🚀 Put it online for free (one-time setup)

You'll need **Git** and the **GitHub CLI** (`winget install GitHub.cli`).

### 1. Push it to GitHub
```bash
cd "Desktop/SecondSaturday-Website"
git init -b main
git add -A
git commit -m "Initial Second Saturday site"
gh auth login          # device-code: visit github.com/login/device, enter the code
gh repo create secondsaturday --public --source=. --remote=origin --push
```

### 2. Deploy on Cloudflare Pages → `secondsaturday.pages.dev`
> ⚠️ **Use Pages, NOT Workers.** Cloudflare nudges you toward “Workers” (it
> mentions *wrangler deploy* and gives an ugly URL). The correct **Pages**
> screen asks for **“Framework preset”** and **“Build output directory.”**

1. Go to **dash.cloudflare.com → Workers & Pages → Create → Pages tab → Connect to Git**.
2. Authorize GitHub and pick the **secondsaturday** repo.
3. Settings:
   - **Project name:** `secondsaturday` *(this becomes the web address)*
   - **Production branch:** `main`
   - **Framework preset:** `None`
   - **Build command:** *(leave empty)*
   - **Build output directory:** `/`
4. **Save and Deploy** → live at **`secondsaturday.pages.dev`** in ~60 seconds.

After that, every change you push to GitHub goes live automatically.

### 3. (Later) Use your own domain
Buy a domain (~$10/yr — Cloudflare sells at cost), then in the Pages project
add it as a **Custom domain**. Free SSL is automatic.

---

## Making future changes
```bash
git add -A
git commit -m "describe what changed"
git push
```
Live in about a minute.

---

## Credits
Built from the *Website Replication Playbook*. Brand colors and the
sunrise-and-cross mark come from the ministry's own logo. Photos are from
Second Saturday worship nights.
