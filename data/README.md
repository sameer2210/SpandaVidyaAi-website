# Data Layer Guidelines

This directory houses all static configuration and content data modules. To ensure maintainability, all modifications must adhere to the rules below.

## Directory Separation
* **`config/`**: Changes rarely. Contains global configurations, branding keys, social links, URLs, and site-wide metadata.
* **`content/`**: Changes frequently. Contains page-specific static copy, collections, lists, and team records.

## Rules
1. **Pure Data Only**: Data files must contain only pure JSON-like TypeScript values (objects, arrays, strings, numbers). **Never** place JSX, React components, hooks, animations (GSAP, Framer Motion), or utility functions inside this directory.
2. **Immutable Data**: Every exported variable must be declared immutable using `as const` and validated with `satisfies`.
3. **Named Exports Only**: Never use default exports. Export explicit named constants (e.g. `export const teamMembers = ...`).
4. **Naming Standard**:
   - Collections use plural names (e.g., `teamMembers`, `navigationLinks`).
   - Type interfaces use singular names (e.g., `TeamMember`, `NavLink`).
5. **No Barrel Chain Abuse**: Only use barrel exports (`index.ts`) at the root level of `data/`, `data/config/`, and `data/content/`.
