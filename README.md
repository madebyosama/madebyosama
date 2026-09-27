<div align="center">
  <img src="./assets/images/profile-pic.png" width="110" height="110" alt="Osama" />

  # Osama

  ### I build websites your competitors won't see coming.

  [![Website](https://img.shields.io/badge/madebyosama.com-0025E8?style=for-the-badge&logo=vercel&logoColor=white)](https://madebyosama.com)
  [![Book a Call](https://img.shields.io/badge/Book%20a%20Call-141414?style=for-the-badge&logo=googlecalendar&logoColor=white)](https://cal.com/madebyosama/meeting)
  [![Portfolio](https://img.shields.io/badge/Portfolio-f1f4fb?style=for-the-badge&logo=readme&logoColor=141414)](https://portfolio.madebyosama.com)

</div>

<br />

## Get in touch

- ✉️ **Email** — [madebyosama@gmail.com](mailto:madebyosama@gmail.com)
- 💬 **WhatsApp** — [+92 335 2522522](https://wa.me/923352522522)
- 📞 **Call** — [+92 335 2522522](tel:+923352522522)
- 🌐 **Portfolio** — [portfolio.madebyosama.com](https://portfolio.madebyosama.com)

## Experience

| Company | Role | Years |
| --- | --- | --- |
| **Loqaat** | Founder | 2025 · Now |
| **SolversCave** | Cofounder | 2020 · 2023 |
| **Morosoft** | Website Designer | 2018 · 2019 |

## About

Hey, I'm Osama — a designer and developer who builds fast, distinctive websites for founders and small teams. I care about the details most sites skip: motion, type, and the little moments that make a page feel alive.

Currently building **Loqaat**, and previously cofounded **SolversCave**. When I'm not shipping client work, I'm designing little side tools just for the fun of building something useful.

## Side projects

| Project | Description |
| --- | --- |
| [Clock](https://clock.madebyosama.com) | A minimalist fullscreen browser clock. |
| [Flip Clock](https://flipclock.madebyosama.com) | Timer, stopwatch & alarm. 189 themes, offline. |
| [Scanwell](https://scanwell.madebyosama.com) | Turns phone photos into clean, printable scans. |
| [Lensora](https://lensora.madebyosama.com) | Reverse image search across Lens & Yandex. |
| [Notebook](https://notebook.madebyosama.com) | A minimal notes app. |
| [Workout](https://workout.madebyosama.com) | Workout list with a rest timer & sound. |
| [Merge My PDFs](https://mergemypdfs.madebyosama.com) | Combine PDFs into one file, right in the browser. |
| [Upload](https://upload.madebyosama.com) | Drop a file, get a shareable link back. |

## Pricing

No hidden fees, no subscription. Let's keep it simple.

| Plan | Starting at | Includes |
| --- | --- | --- |
| **Landing page** ⭐ | $1,300 | Figma design, responsive design, dedicated Slack channel, meeting-free (optional), ready in 2 weeks, regular updates |
| **Multiple pages** | $3,000 | Everything in Landing page, plus CMS integration, ready in 2–6 weeks |

Need something custom? [Get in touch](mailto:madebyosama@gmail.com).

## What people say

> "Osama is hands down one of the best WordPress developers I've worked with. He's quick to solve problems."
> — **Sophia Hanvold**, wsdmmarketing.com

> "Working with Muhammad Osama was great. He was accessible and extremely collaborative, and completed all milestones quickly and ahead of schedule."
> — **Akmal Qureshi**, solverscave.com

> "Awesome developer. Always willing to work with you and very professional... We have been doing business for over 5 years."
> — **Adeyinka Adegoke**, melaninpeople.com

## Follow

<p>
  <a href="https://instagram.com/madebyosama"><img src="https://img.shields.io/badge/Instagram-E4405F?style=for-the-badge&logo=instagram&logoColor=white" alt="Instagram" /></a>
  <a href="https://facebook.com/madebyosama"><img src="https://img.shields.io/badge/Facebook-1877F2?style=for-the-badge&logo=facebook&logoColor=white" alt="Facebook" /></a>
  <a href="https://linkedin.com/in/madebyosama"><img src="https://img.shields.io/badge/LinkedIn-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white" alt="LinkedIn" /></a>
  <a href="https://youtube.com/@madebyosama"><img src="https://img.shields.io/badge/YouTube-FF0000?style=for-the-badge&logo=youtube&logoColor=white" alt="YouTube" /></a>
  <a href="https://github.com/madebyosama"><img src="https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white" alt="GitHub" /></a>
  <a href="https://threads.net/madebyosama"><img src="https://img.shields.io/badge/Threads-000000?style=for-the-badge&logo=threads&logoColor=white" alt="Threads" /></a>
  <a href="https://figma.com/@madebyosama"><img src="https://img.shields.io/badge/Figma-F24E1E?style=for-the-badge&logo=figma&logoColor=white" alt="Figma" /></a>
</p>

## Changelog

### 2026-09-27 — Conversion + SEO audit fixes

**Speed**
- Font Awesome is gone. It loaded a 103 KB stylesheet plus icon fonts from cdnjs for 25 icons. The same icons (Font Awesome Free, CC BY 4.0) are now inline SVG symbols at the top of `<body>` in `index.html` and `scripts/post-template.html`, used as `<svg class="icon"><use href="#i-name"/></svg>`.
- `Satoshi-Black.woff2` is now preloaded, because the H1 uses it. This stops the headline from swapping fonts on load.
- EmailJS only loads once someone opens the contact form, not on every visit. If loading fails, it tries again on the next send.
- `vercel.json`:
  - Fonts are cached for a year (`immutable`).
  - Images are cached for a week (`stale-while-revalidate`).
  - Before, assets were served with `max-age=0`.

**SEO**
- `vercel.json`: `trailingSlash: false`. `/post/` used to return a duplicate 200; it now 308-redirects to `/post`.
- New favicons:
  - `assets/images/favicon.svg` follows light/dark mode.
  - `favicon.ico` (48px) sits at the site root. `/favicon.ico` used to 404.
  - `assets/images/icon-192.png` is for Google results, which need at least 48px.
  - `assets/images/apple-touch-icon.png` (180px) replaces the WebP that iOS ignored.
  - The old 32px `favicon-light.png` and `favicon-dark.png` are deleted.
  - All three pages (`index.html`, `post-template.html`, `404.html`) use the new tags, and the build copies `favicon.ico` into `dist/`.
- Homepage structured data:
  - Service prices now use `priceSpecification.minPrice`; the old `"description": "Starting price"` wasn't valid.
  - Each service has `areaServed` and a `url`.
  - `WebSite` has an `alternateName` so Google shows one consistent site name.
- Blog posts:
  - Each post's link preview uses the first image in the post, or the site card if there isn't one. The same image goes into the post's structured data.
  - Added `og:image:alt`, `twitter:image:alt`, `article:modified_time` and `og:locale`.
  - Removed the hard-coded 1200×630 image size, since post images vary.

**Conversion**
- Vercel Web Analytics runs on the homepage and every post.
  - A `lead` event (with the chosen package) fires when the form sends.
  - A `book_call` event fires when the cal.com link is clicked.
  - Turn Web Analytics on in the Vercel dashboard. Custom events only show on the Pro plan.
- Contact form errors now show under each field (`aria-invalid` + `aria-describedby`) instead of a single pop-up message, and they update as you type. The pop-up is still used for "sent" and "failed".
- Removed the "I also design, build and run my own web apps. See all 9" link from the Work section, because it sent buyers to side projects. The projects are still under "More about me".
- The homepage footer's latest posts skip personal topics (`PERSONAL = ['fitness']` in `scripts/build.mjs`). Those posts are still on the site and in the full list.

**Design**
- The contact list's dividers now sit on each row (`border-top` on `.contact-list a`) instead of on the list, so no text sits against a bare border line. It looks the same.

**Fixes**
- `scripts/build.mjs` now finds its folder with `fileURLToPath`. Before, the build failed locally when the folder name had a space in it, like `madebyosama (2)`.

**Left for later (needs content decisions):** positioning (designer for founders or WordPress developer for agencies), headline rewrite, more case studies with results, a Hidden Track Africa screenshot, FAQ, pricing inclusions, an email address on your own domain, service and case-study pages, and a `/blog` index page. The Zoom link in `vercel.json` includes its meeting password; change the password if this repo is public.

<br />

<div align="center">
  © 2026 Osama
</div>
