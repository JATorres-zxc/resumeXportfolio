# Portfolio Improvements

Checklist from the review on 2026-10-05 (Chrome DevTools + Lighthouse, desktop and mobile, light and dark).

**How to use this file:**
- Mark what you want done: change `[ ]` to `[x]` in the **Do?** column, or leave a note.
- Status values: `todo` · `in progress` · `done` · `skipped`
- Effort: **S** = minutes, **M** = about an hour, **L** = a few hours

---

## Part 1: Fixes

Things that are broken or hurt the first impression.

| # | Do? | Item | Effort | Status |
|---|-----|------|--------|--------|
| F1 | [x] | Load the custom fonts (Instrument Serif + DM Sans) | S | done |
| F2 | [x] | Serif only for the name (now Georgia); set job titles in DM Sans | S | done |
| F3 | [x] | Left-align paragraphs instead of justifying them | S | done |
| F4 | [x] | Show the light/dark switch on mobile | S | done |
| F5 | [x] | Tone down the snow effect | S | done |
| F6 | [x] | Fix link previews and page title (meta description, og:image, structured data) | M | done |
| F7 | [x] | Fix the Lighthouse accessibility issues | S | done |
| F8 | [x] | Replace the starter-template favicon | S | done |
| F9 | [ ] | Stop Recent Projects repeating Experience, and fill the empty right column | M | todo |
| F10 | [x] | Remove the brief light flash for dark-mode visitors, and follow the OS theme | S | done |

### F1: Load the custom fonts
- **Problem:** The Google Fonts `@import` comes after the `@tailwind` lines, so the browser ignores it. Visitors see Georgia and the system font. Confirmed: 0 font files loaded, and Vite warns *"@import must precede all other statements"*.
- **Fix:** Move the import to the top of `src/index.css`, or better, add `<link rel="preconnect">` and a stylesheet `<link>` in `index.html`.
- **Files:** `src/index.css`, `index.html`
- **Done:** Removed the `@import` from `index.css`. Fonts now load through `<link>` tags with `preconnect` in `index.html`. Checked in the browser: DM Sans 400/500 and Instrument Serif 400 load, and the Vite warning is gone.

### F2: Instrument Serif for the name only
- **Problem:** Instrument Serif is a narrow display font. It looks great at the name's size, but cramped at 16px for job titles like "Freelance Full Stack Developer".
- **Fix:** Keep the serif on `h1` only. Set `h3` in DM Sans Medium.
- **Files:** `src/index.css`
- **Depends on:** F1
- **Done:** The global serif rule now applies to `h1` only. Job titles and project names (`h3`) use DM Sans.
- **Changed (user preference):** Instrument Serif looked too narrow for the name. The name now uses `Georgia, 'Gelasio', serif`, the wider look from before. Gelasio is a free font with Georgia's shapes and widths, and it only downloads on devices without Georgia (Android/Linux). Instrument Serif was removed from the font request. If W5 (client quote) wants a serif italic later, Georgia italic works.
- **Note:** On phones the wider name wraps to two lines beside the switch ("John Angelo / Torres"). Option if you want one line: shrink the name a bit on mobile (`text-3xl`), which fits on 390px+ phones.

### F3: Left-align paragraphs
- **Problem:** `sm:text-justify` leaves big gaps between words (e.g. "Led   development   of   a"). It gets worse once DM Sans loads.
- **Fix:** Remove `sm:text-justify` from the About paragraph and the highlight list items.
- **Files:** `src/pages/Index.tsx`
- **Done:** Removed from both places. Checked: no justified text left on the page.

### F4: Light/dark switch on mobile
- **Problem:** The switch is wrapped in `hidden md:block`, so phone visitors can't change the theme.
- **Fix:** Show it on every screen size and adjust where it sits on small screens.
- **Files:** `src/pages/Index.tsx`
- **Done:** On mobile the switch is pinned top-right beside the name (the name gets right padding so they never overlap). On desktop it stays where it was. Checked at 390px and 320px: tapping it switches the theme, and the choice survives a reload. Also fixed: the contact links row couldn't wrap, which cut "WhatsApp" off at 320px. It wraps now.

### F5: Tone down the snow
- **Problem:** In light mode the light purple flakes look like dust on the screen, and they sit on top of the text (`zIndex: 9999`). The effect runs from September through December.
- **Options (pick one):**
  - [x] December only
  - [x] Fewer and slower flakes (e.g. `snowflakeCount={40}`), placed behind the content
  - [ ] Dark mode only
  - [ ] Off by default, with a small toggle to turn it on
- **Files:** `src/pages/Index.tsx`
- **Done:** Snow shows only in December (`getMonth() === 11`). 40 flakes instead of the default 150, speed `[0.3, 1.0]` instead of `[1, 3]`, wind `[-0.3, 0.5]` instead of `[-0.5, 2]`. The snow layer moved from `zIndex: 9999` to `0`, and the content sits above it (`relative z-10`), so flakes pass behind the text. Checked in the browser: no snow in October, and with the clock set to Dec 15 the snow appears and falls behind the text.

### F6: Link previews and page title
- **Problem:** No meta description, no `og:image`, and the structured data names you "gelodevelops" with an empty `url`. The browser tab reads "GELODEVELOPS". Links shared on Slack or LinkedIn show a bare preview.
- **Fix:**
  - Title: `John Angelo Torres · Full Stack Developer`
  - Add a meta description and `og:description`
  - Add a 1200×630 `og:image` styled like the page (name in serif, title, white background) and switch to `twitter:card = summary_large_image`
  - Use your real name and the live site URL in the structured data
- **Files:** `index.html`, `public/og.png` (new)
- **Need from you:** ~~the live site URL~~ → `https://johnangelotorres.vercel.app/`
- **Done:**
  - Title: `John Angelo Torres · Full Stack Developer`
  - Meta description (147 characters, under Google's ~155 cut-off), `canonical` link, `author` set to your real name
  - Open Graph tags: `og:url`, `og:site_name`, title, description, image with size and alt text
  - Twitter/X: `summary_large_image` with title, description, image and alt text
  - `public/og.png`: 1200×630, 68 KB, styled like the page (Georgia name, DM Sans subtitle, timeline dot and line, divider, URL bottom-right)
  - Structured data: your real name (with `gelodevelops` as `alternateName`), live URL, image, email, Manila/PH, UP Cebu, main skills, GitHub and LinkedIn
  - Checked: structured data is valid JSON, `og.png` is included in the build and served, Lighthouse SEO went 91 → 100
- **After deploying:** paste the URL into [LinkedIn Post Inspector](https://www.linkedin.com/post-inspector/) and [opengraph.xyz](https://www.opengraph.xyz/) to check the preview and refresh LinkedIn's cache. Apps that saw the old link may keep showing the old preview for a while.
- **To regenerate the image** (e.g. if your title changes): ask me. It's an HTML template screenshotted at 1200×630.

### F7: Lighthouse accessibility issues
Scores: Accessibility 94 · SEO 91 · Best Practices 100.
- [x] Gray tech lines (`text-muted-foreground/70`) fail contrast: 2.71:1, minimum is 4.5:1
- [x] Wrap the page content in a `<main>` element
- [x] Project links have an `aria-label` that doesn't include the visible text. Remove it or make it match.
- **Files:** `src/pages/Index.tsx`
- **Done:**
  - Tech lines under each project and the thesis line now use `text-muted-foreground` instead of `/70`: #737373 on white, **4.7:1**. They stay `text-xs`, so they still read as secondary. In dark mode they're #999 on #0d0d0d. Before: 2.71:1 light, about 4.1:1 dark.
  - The content grid is now a `<main>` element (header above it, footer below).
  - Removed the `aria-label` from project links. Screen readers now read the visible name and description.
  - Checked: Lighthouse **Accessibility 94 → 100** in both light and dark mode. The only remaining failure is `llms.txt` (Agentic Browsing, 67): an optional file for AI tools, not an accessibility issue. Can add later if wanted.

### F8: Favicon
- **Problem:** `public/favicon.ico` is still the starter-template icon.
- **Fix:** A simple monogram (e.g. "JT" in Instrument Serif), black on white.
- **Files:** `public/favicon.ico` or `public/favicon.svg`, `index.html`
- **Done:**
  - "JT" monogram in **Georgia Bold**, the same serif family as your name, in near-black #141414 on a white rounded tile. Bold because Georgia Regular's thin strokes broke up at 16px.
  - `public/favicon.svg`: letters stored as vector shapes, not text, so it looks the same on devices without Georgia
  - `public/favicon.ico`: 16, 32 and 48px, each rendered separately at full quality for older browsers
  - `public/apple-touch-icon.png`: 180×180 square for iPhone/iPad home screens (iOS rounds the corners itself)
  - `index.html`: `<link rel="icon">` tags for the .ico and .svg, plus `apple-touch-icon`
  - Checked: all three are served (200), included in the build, and the SVG renders correctly in Chrome. Tested on light and dark tab colors.
  - **Tip:** browsers cache favicons hard. If you still see the old icon, hard-refresh or open the site in a private window.

### F9: Repeated projects and empty right column
- **Problem:** TheLookBook and Rentalizer appear in both Experience and Recent Projects. On desktop the right column ends at Education, leaving a big empty area next to the second half of Experience.
- **Options:**
  - [ ] Recent Projects shows only work not in Experience (Custom Clad, others)
  - [ ] Make the right column sticky so it follows you as you scroll
  - [ ] Move a new section into the right column (e.g. the client quote from W5)
- **Files:** `src/pages/Index.tsx`

### F10: Theme flash and OS theme
- **Problem:** The theme always starts as light and only reads the saved choice after the page renders, so dark-mode visitors see a quick white flash. The visitor's system theme is ignored.
- **Fix:** Add a small inline script in `index.html` that sets the `dark` class before the page renders. Fall back to `prefers-color-scheme` when nothing is saved.
- **Files:** `index.html`, `src/components/theme-provider.tsx`
- **Also found:** the old provider saved `"light"` for every first-time visitor on their first render. Without fixing that, the OS fallback would never take effect on a return visit.
- **Done:**
  - `index.html`: a small inline script at the top of `<head>` sets the `dark` class before the CSS and app load. Order: saved choice → otherwise the OS setting. Wrapped in `try` so blocked storage can't break the page.
  - `theme-provider.tsx`: starts from the class the script set (no more light-then-dark switch), saves **only** when the visitor uses the switch, and follows live OS theme changes until they do. Storage reads/writes are guarded for private mode.
  - Checked on a production build (`vite preview`), each scenario in a fresh browser context:
    1. New visitor, OS dark → dark **before the app loads**, nothing saved ✅
    2. OS switched to light while the page is open → follows live ✅
    3. Picked dark on a light OS, reloaded → dark before the app loads (the old flash case) ✅
    4. Saved light on a dark OS, OS flipped again → stays light ✅
    - Type-check, lint and build clean; no console errors.
  - **Note:** in `npm run dev` there may still be a brief flash, because Vite injects the CSS with JavaScript in dev mode. The deployed site doesn't.

---

## Part 2: Wow additions

These keep the résumé feel: little or no new color, nothing flashy.

| # | Do? | Item | Effort | Status |
|---|-----|------|--------|--------|
| W1 | [ ] | "Available for work" badge | S | todo |
| W2 | [ ] | Clock that also shows the visitor's time | S | todo |
| W3 | [ ] | Page prints as your résumé, plus a "Download résumé" link | M | todo |
| W4 | [ ] | Screenshot previews on project links | M | todo |
| W5 | [ ] | One client quote | S | todo |
| W6 | [ ] | Make the key numbers stand out | S | todo |
| W7 | [ ] | Gentle fade-in on load | S | todo |
| W8 | [ ] | ⌘K command menu | M | todo |
| W9 | [ ] | Click "Email" to copy the address | S | todo |
| W10 | [ ] | Pulsing dot on the current role in the timeline | S | todo |

### W1: "Available for work" badge
- A small pulsing green dot and text near your name: *"Available for remote roles · replies within 24h"*.
- It would be the only color on the page, so it gets noticed.
- **Need from you:** the exact wording, and whether to say "roles", "projects", or both.

### W2: Clock with the visitor's time
- Current: `02:35:03 PM · GMT+8 (Manila, Philippines)`
- Proposed: `2:35 PM in Manila · 2:35 AM for you (12h ahead)`
- It answers the first question an overseas client has. Optionally, add "Online now" or "Offline" based on your working hours.
- Seconds could go, since they make the bar flicker every second.
- **Need from you:** your working hours, if you want the online/offline status.

### W3: Page prints as your résumé
- A print stylesheet (`@media print`) so Cmd+P gives a clean one-page PDF: no clock, no switch, no snow, links shown as text.
- A small "Download résumé" link in the header that triggers print or links to a saved PDF.
- **Need from you:** print-to-PDF only, or also a saved PDF file in `public/`?

### W4: Screenshot previews on project links
- Hovering a project link shows a small card with a screenshot of the live site. It uses the hover-card component that's already installed.
- Optional: screenshots in grayscale that turn color on hover, to match the monochrome look.
- On mobile, show a small thumbnail instead, since phones have no hover.
- **Need from you:** permission to take screenshots of TheLookBook, Rentalizer, and Custom Clad, or your own images.

### W5: One client quote
- One line in Instrument Serif *italic*, with the client's name and role.
- For clients, this is the strongest kind of proof, and it suits the editorial style.
- **Need from you:** a real quote and approval to use the client's name.

### W6: Make the key numbers stand out
- Show "500+", "1,000+", "100+", "2 months" in the darker text color, with even-width digits.
- Recruiters skim, and the numbers catch the eye without adding any color.

### W7: Gentle fade-in on load
- Sections fade up 8px one after another, about 40ms apart.
- Turned off for visitors whose system is set to reduce motion.
- No new library needed: CSS or the already-installed `tailwindcss-animate`.

### W8: ⌘K command menu
- A hidden menu with: copy email, download résumé, open GitHub/LinkedIn, switch theme, jump to a section.
- Small hint in the footer: "Press ⌘K".
- Uses `cmdk`, which is already installed. Developer readers will like it, and nobody else will notice it.

### W9: Click "Email" to copy the address
- `mailto:` often opens an email app the recruiter doesn't use.
- Clicking copies the address and shows a small "Copied" message, using `sonner`, which is already installed.

### W10: Pulsing dot on the current role
- The timeline dot for "2022 — Present" gets a soft pulse to show it's ongoing. A small detail that matches W1.

---

## Suggested order

1. **Fixes first:** F1 → F2 → F3 → F4 → F5 → F7 (all small, big visual payoff)
2. **Top wow picks:** W1 + W2 → W3
3. **Then:** F6 + F8 (link previews), W6, W7
4. **Nice to have:** W4, W5, W8, W9, W10, F9, F10

---

## Decisions & notes

_Write any decisions or changes of mind here._

-

## Changelog

| Date | Item | Change |
|------|------|--------|
| 2026-10-05 | — | Checklist created from the review |
| 2026-10-05 | F10 | No light flash for dark-mode visitors; follows the OS theme until the visitor picks one; stops saving "light" for every new visitor |
| 2026-10-05 | F8 | New JT monogram favicon (SVG + ICO + Apple touch icon) |
| 2026-10-05 | F7 | Readable gray for tech lines, `<main>` element, project link labels fixed. Accessibility 94 → 100 |
| 2026-10-05 | F6 | New title, meta description, Open Graph + Twitter tags, `og.png` preview image, real structured data. SEO 91 → 100 |
| 2026-10-05 | F5 | Snow: December only, 40 flakes, slower, behind the content |
| 2026-10-05 | — | Smaller gap below the header: `mb-12 md:mb-16` → `mb-10 md:mb-12` (desktop 64px → 48px, mobile 48px → 40px) |
| 2026-10-05 | F2 | Name switched from Instrument Serif back to the wider Georgia (Gelasio fallback) |
| 2026-10-05 | F1–F4 | Fonts load, serif on the name only, left-aligned text, switch shown on mobile (plus contact links wrap on small phones) |
