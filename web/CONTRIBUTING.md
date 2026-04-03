# CONTRIBUTING.md

# Contributing (Frontend)

This document defines how to contribute to the frontend (`web/`).

It applies to both human developers and LLM agents.


---

# 1. Before You Start

You MUST read:

- PRODUCT_VISION.md (root)
- DOMAIN_GLOSSARY.md (root)
- web/ARCHITECTURE.md
- web/PROJECT_RULES.md
- web/LLM_RULES.md


---

# 2. Development Principles

- follow architecture strictly
- keep logic in correct layers
- prefer simple and deterministic solutions
- avoid unnecessary abstractions


---

# 3. Task Workflow

Every task MUST follow this flow:

1. Define task using `TASK_TEMPLATE.md`
2. Identify correct layer
3. Implement minimal solution
4. Write tests
5. Export via `index.ts`


---

# 4. Layer Rules

Architecture:

core → shared → uikit/service → entities → features → widgets → pages → processes → app

Rules:

- logic goes DOWN (entities or lower)
- UI goes UP
- no cross-layer violations


---

# 5. Business Logic

Business logic MUST:

- live in `entities`
- be pure when possible
- be testable

Business logic MUST NOT:

- be in UI
- be in features UI
- be in pages


---

# 6. Module Structure

Each function MUST be a module:
- functionName/
  - functionName.ts
  - index.ts
  - __tests__/
    - functionName.test.ts

Rules:

- export only via index.ts
- no deep imports
- module must be isolated


---

# 7. Code Style

- TypeScript only
- clear naming
- small functions
- no unnecessary abstractions

Comments:

- English only
- no Cyrillic


---

# 8. Testing

Run tests:

```bash
npm test
```

Coverage:
```bash
npm run coverage
```

Rules:
- use it
- no semicolons
- deterministic tests
- no external dependencies

# 9. Running the Project

## Install:
```bash
npm install
```

## Development:
```bash
npm run dev
```

## Build:
```bash
npm run build
```

## Preview:
```bash
npm run preview
```

# 10. What NOT to Do

DO NOT:
- create “utils” folders
- put logic in UI
- duplicate logic
- break architecture layers
- refactor unrelated code

# 11. Working with LLM

When using LLM:
- always provide full context
- use TASK_TEMPLATE.md
- validate output manually
- check layer placement

# 12. Definition of Done

Task is complete when:
- implementation is correct
- tests are written and passing
- architecture is respected
- exports are correct

# Final Rule
Follow the system.

Do not improvise architecture.
