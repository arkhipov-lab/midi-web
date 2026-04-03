# ARCHITECTURE.md

# Frontend Architecture

This frontend uses an extended Feature-Sliced Design (FSD) architecture.

It is adapted for:

- real-time MIDI processing
- deterministic logic
- scalable analysis features


---

# 1. Architecture Overview

Layers (bottom → top):
- core
- shared
- uikit / service
- entities
- features
- widgets
- pages
- processes
- app

Lower layers → more reusable  
Higher layers → more application-specific


---

# 2. Layer Definitions

## 1. core

System-level layer.

Purpose:
- generic utilities
- framework-agnostic helpers
- development-level abstractions

Rules:
- maximum reusability
- no business logic
- no MIDI-specific logic

Examples:
- compose
- base helpers


---

## 2. shared

Low-level project-aware layer.

Purpose:
- reusable logic related to MIDI and domain primitives
- constants and low-level handlers

May depend on:
- core

Contains:
- MIDI parsing
- pitch class logic
- low-level harmony utilities

Rules:
- still highly reusable
- no UI-specific behavior


---

## 3. uikit

Reusable UI components.

Purpose:
- generic UI building blocks
- hooks for browser APIs (e.g. MIDI access)

May depend on:
- core
- shared

Rules:
- no business logic
- no domain decisions


---

## 3. service

Technical/business helpers.

Purpose:
- domain-related utilities that are not yet full BLL
- API communication (future)

May depend on:
- core
- shared

Rules:
- no orchestration
- no UI logic


---

## 4. entities (BLL layer)

Business Logic Layer.

Purpose:
- core logic of the application
- state handling
- data transformation

Contains:
- hooks
- reducers
- domain processing

Examples:
- MIDI performance state
- chord detection logic

Important note:
This layer may contain mixed structure:
- ui
- react
- lib

This is intentional.


---

## 5. features

Composable application features.

Purpose:
- user-facing functionality
- configurable components

Examples:
- MIDI keyboard panel
- chord panel
- input selector

Structure:
- ui
- react
- lib

Rules:
- depends on all lower layers
- may include light orchestration


---

## 6. widgets

High-level UI blocks.

Purpose:
- ready-to-use UI units
- often no props or minimal configuration

Examples:
- full MIDI monitor panel

Rules:
- composed from features/entities
- minimal logic


---

## 7. pages

Application pages.

Purpose:
- layout composition
- route-level UI

Rules:
- no business logic
- no deep processing


---

## 8. processes

Application-wide concerns.

Examples:
- routing
- error boundaries

Rules:
- infrastructure-level UI
- no domain logic


---

## 9. app

Entry point preparation.

Purpose:
- providers
- global setup

Rules:
- no business logic
- only composition


---

# 3. Module Structure

Each unit is a module.

Example:
- foo/
  - foo.ts
  - index.ts
  - __tests__/
    - foo.test.ts

Rules:

- module exports only via index.ts
- no direct deep imports
- module is self-contained


---

# 4. Internal Structure

Each layer may contain:

- lib → pure functions
- ui → React components
- react → hooks / HOCs (BLL)
- api → interfaces (rare)


---

# 5. Dependency Rules (STRICT)

Allowed:

- upper layer → lower layer
- same layer → same layer (carefully)

Forbidden:

- lower layer → upper layer
- circular dependencies


---

# 6. Responsibility Separation

Two strategies:

## 1. Layer-based

If logic is reusable → move to higher layer

## 2. Nested

If logic is local → keep inside:

```text
./lib/specificFunction/
```

Do NOT extract prematurely.


---

# 7. Key Architectural Constraints

- UI must not contain business logic
- BLL lives in entities
- shared/core must stay clean
- no "utils" dumping folders


---

# 8. Data Flow

- MIDI Input
↓
- uikit (input hooks)
↓
- entities (performance state)
↓
- entities (analysis)
↓
- features (presentation)
↓
- widgets/pages (composition)

Frontend produces:

- real-time interpretation
- rough analysis

Backend will refine it.


---

# 9. Testing Rules

- tests live inside module (__tests__)
- use `it`
- no semicolons
- no Cyrillic

Priority:

1. entities
2. shared
3. features


---

# 10. Code Rules

- no Cyrillic in comments
- small modules
- explicit naming
- avoid large files


---

# 11. LLM Constraints

LLM MUST:

- follow layer boundaries
- not introduce new layers
- not move logic into UI
- not bypass architecture

If unsure:

→ place logic in entities


---

# Final Principle

This architecture is not flexible by default.

It is intentionally constrained to:

- keep logic predictable
- keep modules testable
- prevent chaos during LLM-based development
