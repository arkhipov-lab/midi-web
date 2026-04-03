# entities

# Purpose

Business Logic Layer (BLL).

This is the most important layer.


---

# Responsibilities

- MIDI performance state
- chord detection
- analysis logic
- data transformation


---

# Structure

- lib → pure logic
- react → hooks (BLL)
- ui → optional


---

# Rules

- logic must be deterministic
- must be testable
- must not depend on UI


---

# Examples

- useMidiPerformanceState
- useHarmonyChordAnalysis
- useMidiRecorder
- useMidiPlayback


---

# Key Rule

If logic is important → it belongs here.
