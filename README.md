# KCGsoft Homepage

## Project Overview

- Project path: `D:\kcgsoft_homepage`
- Type: static website
- Stack: HTML, CSS, Node.js
- Entry file: `index.html`
- Stylesheet: `styles.css`

## Current Structure

- `index.html`
- `styles.css`
- `server.js`
- `package.json`
- `.env.local`
- `README.md`
- `logo.png`
- `main_bg.png`
- `uncodixfy_ko.txt`

## Run

- Start the local site and contact relay with `npm start`.
- The server reads SMTP settings from `.env.local`.

## Work Log

### 2026-04-06

- Project loaded and basic structure reviewed.
- Confirmed there was no existing Markdown documentation.
- Created this file to keep project notes and change history going forward.
- Reworked the homepage using the `uncodixfy` direction.
- Removed decorative dark SaaS patterns and rebuilt the layout with a calmer editorial structure.
- Replaced gradient-heavy hero cards with a simple company introduction and service summary layout.
- Reviewed the `interface-design` skill and noted that it targets product interfaces rather than marketing pages.
- Used the skill's intent and domain checks as process guidance only.
- Rebuilt the landing page again with an Awwwards-inspired editorial grid, stronger typography, and higher visual contrast.
- Switched the site palette to a white background with black, `#85b92a`, `#3e202a`, and `#e7437b` as key colors.
- Added `logo.png` into the header branding area.
- Replaced the original hero text block with `main_bg.png` as the main visual.
- Moved the `Current Focus` box and `Start a Project` button onto the left whitespace area of the hero image.
- Added the main headline on top of the hero image: `KCGsoft? ?? ??? ??? ??? ??????.`
- Adjusted the headline to a longer two-line layout over the image.
- Refined the hero spacing so the headline sits higher and the focus card sits lower.
- Styled only `KCGsoft?` in black and the remaining hero sentence in `#2d2736`.
- Added five service solutions to the homepage: Wonder Shuttle, Wonder Linx, Wonder Hydro, Wonder FMS, and Catchloc.
- Updated the ticker and service lineup to reflect the current product lineup.
- Reworked the service area into alternating image-and-text solution sessions for each product.
- Renamed Wonder Ops to Wonder FMS.
- Assigned per-service theme colors: Wonder Shuttle #32b154, Wonder Linx #2380f1, Wonder Hydro #1b3479, Wonder FMS #4F86F7, Catchloc #e7437b.
- Added detail buttons for each service and a ScrollTrigger-based product detail overlay with four horizontal pages.
- Reworked the product detail view into a full-screen overlay with a 60vh center band and scroll-driven horizontal paging.
- Reworked the product detail experience into a full-screen overlay with top page navigation and smooth scroll-driven horizontal paging.

## Current Design State

- Header uses `logo.png` plus brand text.
- Hero uses `main_bg.png` as the main visual.
- Hero headline overlays the image.
- Headline color rule:
- `KCGsoft?` = black
  - remaining sentence = `#2d2736`
- `Current Focus` card sits over the left side of the hero visual.
- Hero CTA opens the inquiry modal and relays submissions through SMTP.
- The services area uses alternating left-right editorial sections.
- Overall tone should stay restrained and not overly flashy.

## Next Suggested Tasks

- Fine-tune hero headline position and size after visual review.
- Reduce or restyle the `Current Focus` card if it competes with the main headline.
- Decide whether header brand text should remain beside the logo.
- Continue refining section spacing and typography under the hero.

## Logging Rules

- Record major content, design, and structure changes here.
- Update this file whenever a new task changes the project.
- Keep entries short and date-based.

### 2026-04-13

- Updated the detail overlay to use a very light tint based on each service accent color.
- Centered the detail page menu and reduced internal divider lines.
- Kept the header visible while the overlay is open.
- Changed the detail overlay background to an opaque light tint so the underlying page text no longer shows through.
- Restored malformed anchor closing tags in the hero CTA and contact link after a header-brand edit.
- Added a three-image hero background rotation using `main_bg.png`, `main_bg_2.png`, and `main_bg_3.png` with a 3-second fade cycle.

### 2026-04-15

- Added a contact modal and SMTP-backed inquiry submission flow.
- Added a minimal Node server to serve the static site and relay contact form submissions.
- Changed the hero CTA to `문의하기`.
