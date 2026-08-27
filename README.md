# Beverly Baby Care — website

Static site. No build step. Open `index.html` or upload the whole folder to any host
(Netlify, Vercel, Cloudflare Pages, S3, cPanel).

```
index.html  about.html  in-home-care.html  virtual-guidance.html
testimonials.html  faq.html  contact.html  privacy.html  terms.html
css/style.css   js/site.js   assets/   sitemap.xml   robots.txt
```

## Brand palette — sampled from the supplied PDFs

| Token | Hex | Sampled from |
|---|---|---|
| `--bbc-ivory` | `#FAF6F1` | dominant page background, all PDFs |
| `--bbc-cream` | `#FDFBF8` | lifted panels |
| `--bbc-blush` | `#F6EDE8` | quote boxes |
| `--bbc-blush-deep` | `#ECD7D1` | pill fills, hairlines |
| `--bbc-taupe` | `#F1EAE2` | cards, stat blocks |
| `--bbc-rose` | `#C8837A` | italic headlines ("Newborn Care") |
| `--bbc-rose-dark` | `#BF7971` | filled rose pricing panel |
| `--bbc-rose-deep` | `#9C554D` | darkened for buttons/links so white text passes WCAG AA |
| `--bbc-cocoa` | `#4C3C38` | dark "Daily Essentials / High-Risk" page |
| `--bbc-charcoal` | `#3D3330` | body copy |

Type: Playfair Display (display + italic accents), EB Garamond (body), Jost (UI,
eyebrows, buttons). Loaded from Google Fonts with system serif/sans fallbacks.

## Assets

`assets/logo.png`, `assets/beverly-portrait.jpg`, `assets/angela.jpg`,
`assets/natalie.jpg` were extracted from the supplied PDFs.
`assets/beverly-newborn.jpg` is the supplied photograph. No stock imagery, no
generated people. Every photo ships as both WebP and JPEG; browsers pick WebP via
`<picture>`, roughly halving image weight.

Service cards use line icons rather than photography on purpose: only one authentic
photograph of Beverly at work was supplied, and the brief rules out stock imagery
and invented clients. Send more real photos (overnight care, parent guidance, a
FaceTime session) and they drop straight into the four service cards.

## Before publishing — needs confirmation

1. **In-home pricing.** The two in-home PDFs disagree: the older one says $25/hr
   (24/7) and $37/hr (night); the newer "(3)" version says $23/hr for 20 hours and
   $35/hr for a 12-hour overnight shift. The site uses the **newer** figures, which
   also match the $35/hr nightly rate in the NCS contract screenshot.
2. **Team.** The older PDF lists four people (Beverly, Angela, Natalie, Debbie);
   the newer one lists three. The site shows the newer three. Debbie's bio and
   photo are available if she should be added back.
3. **Natalie's title.** "Early Childhood Specialist" (older) vs "Early Newborn and
   Childhood Specialist" (newer). Newer used.
4. **Phone number.** The only phone number in the materials is on a private client
   contract along with a home address. Neither is published here — the site uses
   `beverlybabycare@gmail.com` and "worldwide · travel available". Add a business
   number if one should be public.
5. **Consultation form.** There is no server, so submitting opens the visitor's
   email client addressed to Beverly. Swap in a real endpoint (Formspree, Netlify
   Forms, etc.) in `js/site.js` before launch.
6. **Legal pages.** `privacy.html` and `terms.html` are plain-language drafts and
   should be reviewed by a qualified professional.
7. **Logo colour.** The uploaded `IMG_9977` logo is navy; every PDF uses the rose
   version, which is what the site uses.

## Content rules applied

Testimonials are used verbatim from `testimonials.pdf` with attribution and a note
that outcomes describe one family's experience. Specialized-experience content
carries a non-medical disclaimer. No invented services, credentials, or statistics.
