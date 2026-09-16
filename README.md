# Matadantelinga — Personal Developer Portfolio

A premium, editorial personal portfolio built with Next.js (App Router), TypeScript, Tailwind CSS, and Framer Motion.

## Getting started

```bash
npm install
npm run dev
```

Then open http://localhost:3000

## Structure

- `app/` — routes: home, `/work`, `/work/[slug]`, `/about`, `/services`, `/contact`
- `components/portfolio/` — all UI sections (navbar, hero, project list/item/detail, about, services, contact, footer)
- `data/projects.ts` — project content (edit this to add/change case studies)
- `data/site.ts` — contact links and services copy (replace placeholders with real details)
- `public/images/profile.jpg` — hero portrait (already placed from your uploaded photo)
- `public/projects/` — project cover/detail images (currently placeholders — swap in real screenshots)

## Notes

- The hero photo (`public/images/profile.jpg`) was cropped and lightly enhanced from your original photo. Its dark teal studio backdrop was kept intentionally as an editorial frame against the light page background, with a small blue accent block layered behind it per the design brief — true background removal wasn't attempted since it needs a real photo of the subject cut from a busy/gradient background to look clean, and a rough cutout would look worse than the styled frame. If you'd like a true silhouette cutout (transparent background), that's best done in Photoshop/Figma or a background-removal tool using the original photo, then dropped into the same file path.
- Replace `data/site.ts` contact values with real email/WhatsApp/LinkedIn/GitHub.
- Replace placeholder project images in `public/projects/` and the placeholder case-study copy in `data/projects.ts` with real content.
- Run `npm run build` to verify a production build before deploying.
