# HoaTheoMua Feature-Scope Correction Design

## Scope update

The portfolio owner subsequently confirmed BA responsibility for AI Greeting Card Creation, in addition to AI Flower Image Generation and selected Admin Management features. The current implementation includes a separate greeting card entry in the overview, problem, analysis, requirements, and solution sections. The AI's exact greeting card outputs and all detailed requirements remain unverified placeholders. This update supersedes the original two-feature scope below.

## Intent

Rebuild the portfolio as a truthful, feature-level Business Analysis case study. A hiring manager must understand that HoaTheoMua is a team product, while the portfolio owner's BA scope covers AI Flower Image Generation and selected Admin Management features only.

## Goals

- Preserve the requested eight-section case-study narrative.
- Repeat three ownership levels throughout: Team Product, My BA Scope, and My Personal Contributions.
- Use editable, honest placeholders wherever source documentation, screenshots, metrics, or personal activities are not verified.
- Make Requirements the strongest section with two workstream groups and accessible accordions.
- Keep a premium botanical editorial aesthetic in responsive Vanilla HTML, CSS, and JavaScript.

## Non-goals and anti-goals

- Do not imply sole product, architecture, delivery, or platform-requirements ownership.
- Do not invent user stories, acceptance criteria, stakeholders, workflows, outcomes, meetings, or conflicts.
- Do not attribute unrelated e-commerce features to the portfolio owner.
- Do not present proposed metrics as measured outcomes.

## Constraints

- The workspace contains no prior implementation or source artifacts.
- Product screenshots and actual BA documentation are unavailable, so visible replacement slots must be used.
- No external framework or runtime dependency; the result must remain usable as static files.

## Approaches

1. **Single disclaimer:** Retain a generic case study and add a scope note. Rejected because ownership could still be misread deeper in the page.
2. **Workstream-first rewrite:** Organize each analytical section around the two workstreams and repeat ownership cues contextually. Selected because it makes the correction structural.
3. **Separate mini case studies:** Duplicate all eight sections for each workstream. Rejected because it would be repetitive and obscure the shared team-product context.

## Design

The page uses an editorial hero, a persistent scope legend, an eight-item section navigation, and two cohesive workstream accents: sage for AI and dusty rose for Admin. Every section begins with a narrow scope statement. Requirements render from a small JavaScript data structure so real project records can replace placeholders without rewriting markup. Product evidence areas use clearly labeled screenshot slots rather than fabricated UI. Outcome cards visibly distinguish confirmed behavior, expected outcomes, proposed metrics, and limitations.

## Accessibility and responsive behavior

## English and Vietnamese

The header provides EN / VI buttons. English remains the initial default; the selected language is remembered locally when storage is available. All eight sections, dynamic requirement records, document title, description, and accessible labels have Vietnamese translations. Switching languages preserves accordion state and section links. English source content lives in `index.html` and `script.js`; Vietnamese translations live in `i18n.js`. When editing a story or placeholder, update its corresponding translation too. No build step is required to open the site.

- Semantic landmarks and headings, skip link, visible focus states, and native buttons.
- Accordion buttons expose `aria-expanded` and control named panels.
- Navigation remains horizontally scrollable on small screens.
- Layouts collapse to one column without changing reading order.
- Reduced-motion preferences disable nonessential transitions.

