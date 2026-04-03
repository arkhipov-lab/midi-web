# TASK_TEMPLATE.md

# Task Template (Frontend)

Use this template for any implementation task.

This ensures correct architecture usage and predictable results from LLM.


---

# Task

Short, clear description.

Example:
- "Implement chord smoothing in entities layer"
- "Add MIDI input selector feature"


---

# Context

What already exists:

- related modules
- existing logic
- current behavior

Example:

- chord detection already exists in entities
- performance state is handled by useMidiPerformanceState
- UI panel already renders chords


---

# Goal

What should be achieved:

- expected behavior
- user-facing result

Example:

- smooth chord transitions over time
- reduce flickering between chord labels


---

# Layer

Where the logic MUST be implemented:

- core
- shared
- uikit
- service
- entities
- features
- widgets

Example:
entities


---

# Scope

What is included:

- functions to implement
- modules to modify

What is NOT included:

- unrelated refactoring
- architecture changes


---

# Input

Data used by the logic.

Example:

- active MIDI notes
- performance state
- timing data


---

# Output

Expected result.

Example:

- stable chord label
- list of chord segments
- updated performance state


---

# Constraints

Must follow:

- ARCHITECTURE.md
- PROJECT_RULES.md

Key constraints:

- no logic in UI
- no cross-layer violations
- no duplication


---

# Implementation Notes

Optional hints:

- reuse existing functions if possible
- keep logic pure
- prefer small functions

Example:

- use existing pitch class normalization
- reuse chord scoring utilities


---

# Tests

Required:

- unit tests for all new logic

Test rules:

- use `it`
- no semicolons
- no Cyrillic
- deterministic

Example:

- should return stable chord when notes slightly fluctuate


---

# Acceptance Criteria

Clear success definition.

Example:

- chord output does not flicker under small timing variations
- tests pass
- no architecture violations


---

# Anti-Patterns

DO NOT:

- move logic into UI
- create "utils" folder
- duplicate existing logic
- introduce unnecessary abstractions


---

# Deliverables

- implementation
- tests
- updated exports (index.ts)


---

# Notes

Optional:

- edge cases
- assumptions
- future extensions

