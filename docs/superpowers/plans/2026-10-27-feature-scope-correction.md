# HoaTheoMua Feature-Scope Correction Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a responsive eight-section BA portfolio that precisely distinguishes the team product, two feature-level workstreams, and verified personal contributions.

**Architecture:** A single semantic `index.html` carries the editorial story, `styles.css` owns the responsive botanical design system, and `script.js` owns editable requirement data plus accordion and navigation behavior. Node's built-in test runner validates the rendered ownership and interaction contracts without adding dependencies.

**Tech Stack:** HTML5, CSS3, Vanilla JavaScript, Node.js test runner

**Spec:** `docs/superpowers/specs/2026-10-27-feature-scope-correction-design.md`

## Global Constraints

- Preserve eight numbered sections.
- Only AI Flower Image Generation and selected Admin Management features may be attributed to the portfolio owner's BA scope.
- Unverified project facts must remain visible placeholders, never inferred claims.
- Use muted sage for AI and warm dusty rose for Admin.
- No external UI framework.

## Review Focus

- A scanning hiring manager must see the ownership distinction before any detailed analysis.
- Placeholder content must never read like completed work or measured evidence.
- Requirements must remain operable with JavaScript disabled and enhanced when enabled.
- Accordion state and labels must remain accessible by keyboard and assistive technology.
- Mobile layouts must avoid horizontal page overflow while allowing deliberate nav scrolling.

---

### Task 1: Semantic content and ownership model

**Files:** Create `index.html`; Test `tests/portfolio.test.js`

**Interfaces:** Produces eight section anchors, three ownership labels, two workstream containers, and placeholder/evidence states consumed by styling and scripting.

- [ ] Write failing structure tests for the title, role, eight sections, ownership labels, workstream headings, and anti-fabrication placeholders.
- [ ] Run `node --test tests/portfolio.test.js` and confirm failure because `index.html` is absent.
- [ ] Build the semantic page content.
- [ ] Run the test and confirm it passes.

### Task 2: Editorial responsive visual system

**Files:** Create `styles.css`; Modify `index.html`; Test `tests/portfolio.test.js`

**Interfaces:** Consumes semantic class names; produces shared ownership/workstream tokens and responsive layouts.

- [ ] Add failing tests for stylesheet linkage, workstream variables, responsive rules, and reduced motion.
- [ ] Run tests and confirm the styling contract fails.
- [ ] Implement the botanical editorial design system and responsive states.
- [ ] Run tests and confirm they pass.

### Task 3: Requirements rendering and accessible interactions

**Files:** Create `script.js`; Modify `index.html`; Test `tests/portfolio.test.js`

**Interfaces:** Consumes requirement mount points; produces `renderRequirements`, accordion behavior, navigation state, and progress behavior.

- [ ] Add failing browser-contract tests for both requirement groups, complete story fields, and accessible accordion state.
- [ ] Run tests and confirm the interaction contract fails.
- [ ] Implement editable requirement data, progressive rendering, accordions, and navigation enhancement.
- [ ] Run the full suite and confirm it passes.

