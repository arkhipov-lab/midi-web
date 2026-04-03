# shared

# Purpose

Low-level domain-aware layer.

Contains reusable MIDI and music-related primitives.


---

# Responsibilities

- MIDI parsing
- pitch class logic
- low-level harmony helpers
- constants


---

# Dependencies

- may depend on core


---

# Rules

- no UI
- no orchestration
- no high-level logic


---

# Key Rule

This layer knows WHAT MIDI is, but not HOW the app behaves.
