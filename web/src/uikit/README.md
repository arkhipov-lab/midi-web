# uikit

# Purpose

Reusable UI and browser interaction layer.


---

# Responsibilities

- UI components (generic)
- hooks for browser APIs (e.g. MIDI access)


---

# Dependencies

- core
- shared


---

# Rules

- no business logic
- no domain decisions
- no analysis


---

# Examples

- useMidiAccess
- useMidiInputListener
- AppLayout


---

# Key Rule

This layer interacts with the outside world, but does not interpret it.
