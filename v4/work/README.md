# Work

Each file here is one project. It shows up as a card in the homepage's **Recent work**, ordered by `order`. If the file has text under the frontmatter, it also gets a case study page at **madebyosama.com/work/<file-name>**; without text, the card links to the live site.

```yaml
---
title: Saeed Visa Consultants
order: 1                                  # position on the homepage
industry: Visa & immigration              # shown under the title
url: https://saeedvisaconsultants.com     # the live site
year: 2023                                # optional
build: WordPress                          # optional, the grey tag on the card
services: [Web design, Development]
image: /assets/images/work/saeed-visa-full.webp   # full-page screenshot
cover: /assets/images/work/saeed-visa-consultants.webp   # optional, wide image for the case study page
summary: One sentence for the page, Google and link previews.
results: ["1.4s | Load time, down from 6.2s", "3× | More consultation requests"]   # optional; the first two show on the card
quote: What the client said.              # optional, with quote_author, quote_role, quote_image
---

## The client
…
```

Images: save screenshots as WebP in `assets/images/work/`. For a faster homepage, also add a copy 600px wide, cropped to the top 880px, named `<image>-600.webp`; the card uses it automatically:

```sh
ffmpeg -i assets/images/work/name.webp -vf "scale=600:-2,crop=600:'min(ih,880)':0:0" -quality 78 assets/images/work/name-600.webp
```
