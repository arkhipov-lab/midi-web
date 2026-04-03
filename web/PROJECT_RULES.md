# PROJECT_RULES.md

# Project Rules (Frontend)

This file defines strict rules for frontend development.

All contributors and LLM agents MUST follow these rules.


---

# 1. Source of Truth

Priority order:

1. [PRODUCT_VISION.md](../PRODUCT_VISION.md) (root)
2. [DOMAIN_GLOSSARY.md](../DOMAIN_GLOSSARY.md) (root)
3. [web/ARCHITECTURE.md](./ARCHITECTURE.md)
4. [web/PROJECT_RULES.md](./PROJECT_RULES.md)

If conflict appears → follow higher priority.


---

# 2. Core Principles

- deterministic logic first
- clear layer boundaries
- no hidden behavior
- simplicity over abstraction
- explicit over implicit


---

# 3. Layer Rules (STRICT)

Architecture:

core → shared → uikit/service → entities → features → widgets → pages → processes → app

Allowed:

- upper layer → lower layer

Forbidden:

- lower layer → upper layer
- circular dependencies


---

# 4. Business Logic Rules

Business Logic (BLL):

- MUST live in `entities`
- MAY partially exist in `shared` (low-level)

BLL MUST NOT:

- live in UI components
- live in pages
- live in widgets
- live in routes / processes


---

# 5. UI Rules

UI components MUST:

- be declarative
- not contain business logic
- not perform calculations

UI MAY:

- format data
- trigger actions


---

# 6. Entities Rules (Most Important Layer)

Entities:

- contain core logic
- handle state
- process MIDI data
- implement analysis

Rules:

- logic must be deterministic
- no side effects unless required
- must be testable


---

# 7. Shared / Core Rules

core:

- no domain knowledge
- pure utilities

shared:

- low-level domain helpers
- MIDI primitives

Forbidden:

- UI logic
- orchestration


---

# 8. Feature Rules

Features:

- compose entities into usable UI
- may include light orchestration

Must NOT:

- duplicate entity logic
- implement heavy logic


---

# 9. Module Rules

Each unit is a module.

Structure:
- module/
  - module.ts
  - index.ts
  - __tests__/
    - module.test.ts

Rules:

- export only via index.ts
- no deep imports
- module must be isolated


---

# 10. Function Placement Rules

If function is:

- reusable → move to higher layer
- local → keep inside module:

```text
./lib/functionName/
```

Do NOT extract prematurely.


---

# 11. Naming Rules

- clear, explicit names
- no abbreviations without meaning
- no generic names like `utils`, `helpers`


---

# 12. Testing Rules

Tests MUST:

- use `it`
- have no semicolons
- not use Cyrillic
- be deterministic

Priority:

1. entities
2. shared
3. features


---

# 13. MIDI / Domain Rules

Frontend MUST:

- tolerate imperfect input
- work with real performance data
- not assume ideal timing

Frontend produces:

- real-time state
- rough analysis

Backend will refine results.


---

# 14. Forbidden Patterns

DO NOT:

- create "utils" folders
- mix UI and logic
- duplicate logic across layers
- introduce global mutable state
- bypass architecture


---

# 15. LLM Rules

LLM MUST:

- respect layer boundaries
- prefer simple solutions
- place logic in entities if unsure
- not invent abstractions

LLM MUST NOT:

- move logic into UI
- create new architecture
- over-engineer


---

# 16. Refactoring Rules

Refactor ONLY if:

- duplication appears
- logic becomes unclear
- boundaries are violated

Do NOT refactor "just in case".


---

# 17. Code Style

- no Cyrillic in comments
- small files preferred
- functions should be documented (when needed)


---

# Final Rule

If unsure:

→ put logic in entities  
→ keep it simple  
→ do not break architecture
