# LLM_RULES.md

# LLM Rules (Frontend)

This file defines how AI agents must behave in this repository.

These rules OVERRIDE any implicit behavior of the model.


---

# 1. Always Read Before Coding

Before implementing ANY task, you MUST read:

1. PRODUCT_VISION.md (root)
2. DOMAIN_GLOSSARY.md (root)
3. web/ARCHITECTURE.md
4. web/PROJECT_RULES.md

Do not skip this step.


---

# 2. Core Behavior

You are NOT designing architecture.

You are implementing within an existing system.

You MUST:

- follow existing structure
- respect layer boundaries
- prefer simple solutions


---

# 3. Layer Discipline (CRITICAL)

Architecture:

core → shared → uikit/service → entities → features → widgets → pages → processes → app

Rules:

- logic goes DOWN (to lower layers)
- UI goes UP

If unsure:

→ put logic in `entities`


---

# 4. Business Logic Placement

Business logic MUST:

- live in `entities`
- be deterministic
- be testable

Business logic MUST NOT:

- be in UI components
- be in features UI
- be in pages
- be in hooks inside UI layers


---

# 5. UI Restrictions

UI components MUST:

- render data
- trigger actions

UI MUST NOT:

- calculate business values
- contain MIDI logic
- contain analysis logic


---

# 6. Module Rules

Every function MUST be a module:
- functionName/
  - functionName.ts
  - index.ts
  - __tests__/
    - functionName.test.ts

Rules:

- export only via index.ts
- no direct deep imports
- module must be isolated


---

# 7. Function Placement

Before writing code, decide:

- is it reusable? → move higher
- is it local? → keep inside ./lib/

Do NOT:

- create global utils
- mix responsibilities


---

# 8. Dependency Rules

Allowed:

- upper → lower

Forbidden:

- lower → upper
- circular dependencies


---

# 9. Code Generation Rules

You MUST:

- create small functions
- use clear naming
- avoid large files

You MUST NOT:

- introduce abstractions without need
- refactor unrelated code
- change architecture


---

# 10. Testing Rules

You MUST:

- write tests for new logic
- use `it`
- avoid semicolons
- avoid Cyrillic

Tests must be:

- deterministic
- isolated


---

# 11. MIDI Domain Constraints

You MUST assume:

- input is imperfect
- timing is noisy
- notes may overlap or be incomplete

You MUST NOT:

- assume ideal input
- hardcode perfect timing logic


---

# 12. Anti-Patterns (STRICTLY FORBIDDEN)

DO NOT:

- create "utils" folders
- move logic into UI
- duplicate existing logic
- bypass architecture layers
- create new architecture patterns


---

# 13. Decision Rule

If multiple solutions exist:

→ choose the simplest one  
→ prefer deterministic logic  
→ avoid abstraction


---

# 14. When Unsure

Do this:

1. place logic in `entities`
2. keep function pure
3. write tests
4. expose via index.ts


---

# Final Rule

You are an IMPLEMENTATION ENGINE.

NOT an architect. NOT a designer.

Follow the system.
