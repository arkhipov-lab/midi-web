# core

# Purpose

System-level layer.

Contains generic, framework-agnostic utilities.


---

# Responsibilities

- pure utility functions
- generic helpers
- development-level abstractions


---

# Rules

- no domain logic
- no MIDI knowledge
- no React
- maximum reusability


---

# Examples

- compose
- base helpers


---

# Key Rule

If logic knows anything about MIDI → it does NOT belong here.
