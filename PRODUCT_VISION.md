# PRODUCT_VISION.md

# Product Vision

This product records live MIDI performance and explains what the user played in terms of harmony, key, rhythm, and musical meaning.

It transforms raw performance into understandable musical knowledge.


---

# Problem

Musicians can play music but often do not fully understand what they played.

Existing tools:
- DAWs focus on recording and editing
- Notation software requires manual input
- Most tools do not provide meaningful interpretation

There is a gap between playing music and understanding it.

This product solves that gap.


---

# Core Value

The product provides interpretation, not just recording.

It answers:

> "What did I just play?"

And additionally:

> "How good was it and how can I improve it?"


---

# Target Users

Primary:
- beginner and intermediate musicians
- hobby composers
- MIDI keyboard users
- people learning harmony and music theory

Secondary:
- music teachers
- students
- content creators in music education

Key characteristic:
Users can play music but do not always understand its theoretical structure.


---

# Main User Flow

1. User opens the application
2. User connects a MIDI keyboard
3. User presses "Record"
4. User plays freely (not necessarily perfectly)

System:
5. Records raw MIDI performance
6. Builds an initial approximation:
    - notes
    - timing
    - approximate rhythm
    - rough chords
    - rough key

7. Performs deeper analysis
8. Refines the result:
    - corrected key
    - improved chord detection
    - better rhythm and bar structure

9. Displays:
    - piano roll
    - score (notation)
    - chords above bars
    - key and accidentals

10. Provides explanation:
- what was played
- mistakes or inconsistencies
- suggestions for improvement


---

# Core Features

- MIDI recording (live performance capture)
- Piano roll visualization
- Score (notation) visualization
- Chord detection
- Key detection
- Rhythm and bar estimation
- Post-analysis refinement
- AI-based explanation and feedback
- Export to sheet music (PDF)


---

# Principles

- The user can play imperfectly
- The system must tolerate timing and pitch inaccuracies
- The system works with real performance, not ideal input
- Results may be approximate, but must be understandable
- Speed is more important than perfect accuracy
- The system suggests, the user can correct
- Feedback must be helpful, not overwhelming


---

# Responsibility Split

Deterministic systems:
- MIDI processing
- chord detection
- key detection
- rhythm and bar estimation
- notation building

AI (LLM):
- explanation
- feedback
- interpretation in natural language

LLM must NOT:
- determine core musical structure
- replace deterministic analysis
- act as a source of musical truth


---

# Non-Goals

This product is NOT:

- a full Digital Audio Workstation (DAW)
- a professional engraving tool (like Sibelius or Finale)
- a full-featured music production environment
- a complex multi-track studio tool

The product is focused on understanding, not production.


---

# Key Differentiation

This is not just a recorder or editor.

It is:

> A system that understands and explains the music you play.


---

# Success Criteria

After recording, the user should feel:

> "I understand what I played."

Additionally:

> "I see what I can improve."


---

# Product Boundaries

- The system prioritizes clarity over completeness
- The system prioritizes speed over perfection
- The system must avoid unnecessary complexity
- The system must remain approachable for non-professionals


---

# Long-Term Vision

- evolve into an AI-assisted composition tool
- provide deeper harmonic and structural analysis
- support learning through real-time feedback
- offer personalized recommendations
- potentially enable AI-assisted accompaniment

Core principle remains unchanged:

> Helping users understand their own music.
