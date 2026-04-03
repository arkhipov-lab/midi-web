# DECISIONS.md

# Architectural Decisions (Frontend)

This file records key architectural decisions and their rationale.

It prevents architectural drift and unnecessary refactoring.


---

# 1. Extended FSD Architecture

## Decision

Use an extended Feature-Sliced Design:

core → shared → uikit/service → entities → features → widgets → pages → processes → app


---

## Rationale

- clear separation of concerns
- predictable code placement
- scalable structure for growing product
- compatibility with LLM-based development


---

## Consequence

- strict layer boundaries must be respected
- logic placement is more important than speed of coding


---

# 2. Business Logic in `entities`

## Decision

All business logic is centralized in `entities`.


---

## Rationale

- single source of truth for logic
- easier testing
- prevents logic duplication
- keeps UI layers clean


---

## Consequence

- UI must remain thin
- features must not introduce new logic


---

# 3. No Global State Manager (for now)

## Decision

Do NOT introduce Redux / Zustand / MobX at this stage.


---

## Rationale

- current complexity does not require global state
- hooks-based architecture is sufficient
- reduces cognitive load and boilerplate


---

## Consequence

- state is managed locally via hooks
- future introduction must be justified


---

# 4. Frontend = Real-Time Engine

## Decision

Frontend performs real-time MIDI processing and rough analysis.


---

## Responsibilities

- MIDI input handling
- performance state
- chord detection (approximate)
- recording & playback


---

## Rationale

- immediate feedback for user
- low latency
- interactive experience


---

# 5. Backend = Deep Analysis Engine

## Decision

Backend performs refined and heavy analysis.


---

## Responsibilities

- tonal analysis
- harmonic correction
- rhythm/measure segmentation
- AI-based feedback


---

## Rationale

- heavier computation
- better context awareness
- allows iterative refinement


---

# 6. No DAW Scope

## Decision

Do NOT build a full DAW.


---

## Rationale

- DAW complexity is extremely high
- product focus is analysis, not production


---

## Consequence

- limited editing capabilities
- focus on interpretation, not composition tools


---

# 7. Deterministic Core Logic

## Decision

Core logic must be deterministic.


---

## Rationale

- predictable behavior
- testability
- easier debugging


---

## Consequence

- no randomness in core logic
- no hidden state
- no implicit side effects


---

# 8. LLM as Implementation Tool, Not Architect

## Decision

LLM is used for implementation, not architecture design.


---

## Rationale

- LLM tends to over-abstract
- LLM introduces inconsistencies without strict control


---

## Consequence

- architecture is defined manually
- LLM must follow rules from LLM_RULES.md


---

# 9. No "Utils" Anti-Pattern

## Decision

Avoid global "utils" folders.


---

## Rationale

- leads to uncontrolled dependencies
- breaks architecture boundaries
- encourages duplication


---

## Consequence

- every function belongs to a module
- placement is explicit


---

# 10. Module-Based Design

## Decision

Each function is a module.


---

## Structure

- functionName/
    - functionName.ts
    - index.ts
    - __tests__/
        - functionName.test.ts

---

## Rationale

- isolation
- testability
- clarity


---

# 11. Test-First Mindset (Selective)

## Decision

Important logic must be covered by tests.


---

## Rationale

- prevents regressions
- stabilizes domain logic


---

## Consequence

- focus testing on entities
- avoid over-testing UI


---

# Final Principle

Architecture is a constraint, not a suggestion.

Do not break it for short-term convenience.
