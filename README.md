# 🎹 MIDI Analysis System

A system that records MIDI performance and explains what was played in terms of harmony, key, rhythm, and musical meaning.

See full product definition:  [PRODUCT_VISION.md](./PRODUCT_VISION.md)


---

# 🚀 What This Is

This is NOT just a MIDI recorder.

It is:

> a system that transforms raw performance into understandable musical knowledge


---

# 📦 Monorepo Structure

[/web](./web)  → frontend application (React + Vite)

[/api](./api)  → backend analysis engine (FastAPI)

[PRODUCT_VISION.md](./PRODUCT_VISION.md)
[DOMAIN_GLOSSARY.md](./DOMAIN_GLOSSARY.md)

# 🧠 Core Idea

User plays music → system answers:
- What did I play?
- What key is this?
- What chords are here?
- What can I improve?

# 🏗️ Architecture Overview

## Frontend (web)
- React + TypeScript
- Vite
- Extended FSD architecture
- deterministic MIDI + harmony logic

## Backend (api)
- FastAPI
- layered architecture:
```text
api → application → domain → infrastructure
```
- analysis-first system

# 🤖 AI Role

## AI (LLM) is used ONLY for:
- explanation
- feedback
- interpretation

## AI is NOT used for:
- core analysis
- musical truth

# 🧭 Development Principles

- deterministic logic first
- domain-driven thinking
- no over-engineering
- LLM as assistant, not decision-maker

# ▶️ Getting Started

## Frontend
```bash
cd web
npm install
npm run dev
```


## Backend
```bash
cd api
pipenv install
pipenv run uvicorn app.main:app --reload
```

# 🧪 Testing

## Frontend

```bash
cd web
npm test
```

## Backend

```bash
cd api
pipenv run pytest
```

# 📌 Versioning

Project follows Semantic Versioning:
```text
MAJOR.MINOR.PATCH
```

Version is stored in:
- [VERSION](./VERSION)
- [web/package.json](./web/package.json)
- [web/package-lock.json](./web/package-lock.json)

# 🔀 Git Workflow

- main → production
- develop → integration
- feature/* → features
- */base → epics

# 🧠 Key Concept

This project is not about recording music.

It is about:

> understanding what was played

# Final Note

This project is built as a controlled system:
- architecture is fixed
- terminology is fixed
- behavior is constrained
