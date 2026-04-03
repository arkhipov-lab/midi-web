# DOMAIN_GLOSSARY.md

# Domain Glossary

This file defines the meaning of key domain terms.

LLM and contributors MUST use these definitions consistently.


---

# Performance

A full recorded session of musical input.

Contains:
- events
- notes
- timing data

It is the raw input for analysis.


---

# Raw Event

Low-level MIDI event.

Examples:
- note_on
- note_off

Properties:
- timestamp
- pitch
- velocity


---

# Recorded Note

A structured musical note derived from events.

Contains:
- pitch
- start time
- end time
- duration
- velocity

Represents a playable musical unit.


---

# Performance Timeline

Ordered sequence of recorded notes.

Represents the full musical flow of a performance.


---

# Chord

A set of notes interpreted as a harmonic unit.

Examples:
- Dm
- G7
- Cmaj7

May include:
- inversion (bass note)
- ambiguity


---

# Chord Segment

A time interval where a chord is active.

Contains:
- start time
- end time
- detected chord
- confidence (optional)


---

# Harmony Analysis

Process of detecting and refining chords.

Includes:
- chord detection
- smoothing
- contextual correction


---

# Key

A tonal center of the performance.

Examples:
- D minor
- C major

May be:
- approximate (early stage)
- refined (final stage)


---

# Key Hypothesis

A candidate key before final selection.

Multiple hypotheses may exist.


---

# Rhythm

Timing structure of performance.

Includes:
- tempo
- note timing
- spacing


---

# Tempo

Speed of performance.

Measured in BPM.

May be:
- estimated
- refined


---

# Bar (Measure)

A segment of time defined by rhythm and meter.

Contains:
- start time
- end time
- grouping of notes


---

# Bar Segmentation

Process of dividing performance into bars.


---

# Quantization

Adjustment of note timing to a grid.


---

# Notation Draft

A structured representation of music suitable for score rendering.

Contains:
- notes grouped into bars
- pitch spelling
- rests


---

# Feedback Payload

Structured data prepared for LLM.

Contains:
- analysis results
- detected issues
- context

Used to generate human-readable feedback.


---

# Analysis Result

Final structured output of backend.

Contains:
- key
- chords
- bars
- tempo
- notation draft
- (future) feedback


---

# Final Rule

Do NOT redefine these terms in code or comments.

Use them consistently across the project.
