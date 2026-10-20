---
translationKey: ai-development-system
title: How I built my own AI development system without losing control
description: How I went from piling up prompts and rules in AGENTS.md to a workflow with reusable skills, evidence, and explicit human decisions.
pubDate: 2026-10-19
categories:
  - AI
  - Development
tags:
  - AI
  - Agents
  - Workflow
  - Human-in-the-Loop
---

For a while, I thought working better with AI was about finding the perfect prompt.

It wasn't that.

The problem wasn't that AI couldn't generate code, research a library, or propose a solution. The problem showed up when AI started deciding too much: what mattered, which trade-off to accept, when something was actually done.

That's when I understood the important variable wasn't prompt quality.

It was preserving human control over decisions.

AI can accelerate execution in a brutal way. But speed without judgment also accelerates ERRORS, TECHNICAL DEBT, AND DECISIONS NO ONE REVIEWED WITH ENOUGH CONTEXT.

The rule ended up being very simple:

> AI executes. The human directs.

That's **Human in the Loop** for me. It doesn't mean reviewing every character a model writes or turning every task into bureaucracy. It means clearly defining what can be delegated and which decisions must still have an owner.

## The origin: from scattered instructions to a system

This workflow wasn't born from a perfect architecture. It was born from repeating the same instructions over and over.

Non-negotiable policies. Code patterns. Quality rules. Project conventions. Preferences for how to investigate, implement, and validate changes.

At first, all of that lived in a single file: [`AGENTS.md`](https://github.com/INGCapaDev/ingcapadev-ai-workflow/blob/main/AGENTS.md).

It was useful, but it also revealed a problem: a file of instructions can guide an agent, but it doesn't replace a process. Having rules doesn't guarantee that anyone applies them at the right moment, with the right context, and with enough evidence.

Two references were especially important in that evolution.

- [Gentle AI, by Alan Buscaglia](https://github.com/Gentleman-Programming/gentle-ai), helped me understand the value of an orchestrator, fresh-context delegation, and persistent memory with Engram.
- Matt Pocock's approach to [composable skills](https://github.com/mattpocock/skills) changed how I think about instructions: small, focused, with clear responsibilities, and loaded only when needed.

That's where what is now [`ingcapadev-ai-workflow`](https://github.com/INGCapaDev/ingcapadev-ai-workflow/) started. At that point it was just a [planning skill](https://github.com/INGCapaDev/ingcapadev-ai-workflow/tree/main/skills/planning), built around human control over important decisions and planning the work into small, easy-to-review tasks.

Its core is deliberately simple: clarify before assuming, break work into small tasks, keep the context and progress of planned work in `PLAN.md`, and place human review points where they truly matter.

It's not about adding friction for the sake of it. It's about not confusing a convincing answer with a correct decision.

## The next step: INGCapaDev AI Workflow

Later, that flow evolved into [INGCapaDev AI Workflow](https://ai.ingcapadev.com): my personal AI-assisted development system on top of [OpenCode](https://opencode.ai).

It doesn't try to be the most sophisticated system in the world. It tries to solve my problem: to work faster without handing over the wheel.

The center of the system is [Capa, the orchestrator](https://github.com/INGCapaDev/ingcapadev-ai-workflow/blob/main/prompts/capa/orchestrator.md). It investigates, figures out which skills each task needs, can implement and verify directly, and keeps the state of the plan when there is one. It doesn't delegate by default: it asks for help when that brings fresh context, specialization, or a concrete advantage.

When needed, it relies on these roles:

- `explore`: OpenCode's native exploration agent; it investigates the code in read-only mode and finds patterns, dependencies, and risks.
- [`capa-worker`](https://github.com/INGCapaDev/ingcapadev-ai-workflow/blob/main/prompts/capa/worker.md): implements one task or a bounded part of the authorized work, without advancing the plan on its own.
- [`sub-verify`](https://github.com/INGCapaDev/ingcapadev-ai-workflow/blob/main/prompts/capa/checker.md): gathers independent evidence in read-only mode when requested or approved; it's an optional helper, not a mandatory stage.
- [`sub-review-standards`](https://github.com/INGCapaDev/ingcapadev-ai-workflow/blob/main/prompts/capa/review-standards.md): reviews the documented rules, quality, and conventions.
- [`sub-review-plan`](https://github.com/INGCapaDev/ingcapadev-ai-workflow/blob/main/prompts/capa/review-plan.md): reviews that the change matches the approved plan and hasn't expanded its scope.

That distinction matters. Implementing, verifying, and reviewing are not the same thing. Capa can implement and check a change with tests or inspection; independent review brings another look, from a fresh context. It's requested or approved when needed, and it can focus on standards, plan conformance, or both. It's not an automatic step for every change.

You can also enable persistent memory with [Engram](https://github.com/Gentleman-Programming/engram), so durable decisions and discoveries don't disappear when a new conversation starts, without duplicating what already belongs to the plan or the project's documentation. And when a task depends on a library or framework, [Context7](https://context7.com), if configured, brings up-to-date documentation instead of blindly trusting old knowledge.

But neither memory nor documentation replaces judgment. They only reduce the cost of recovering it.

## Commands to keep the flow visible

For a small, well-understood change, you can just ask Capa directly. No plan and no full team of agents required.

When the work needs more structure, these are the five main commands, defined in the [commands](https://github.com/INGCapaDev/ingcapadev-ai-workflow/tree/main/commands) directory:

- [`/plan`](https://github.com/INGCapaDev/ingcapadev-ai-workflow/blob/main/commands/plan.md) investigates, puts the important decisions on the table, and proposes tasks. The plan is saved only after final approval; approving it doesn't authorize execution yet.
- [`/proceed`](https://github.com/INGCapaDev/ingcapadev-ai-workflow/blob/main/commands/proceed.md) executes a single task from the approved plan, presents the change with its evidence and limits, and stops for the human decision.
- [`/review`](https://github.com/INGCapaDev/ingcapadev-ai-workflow/blob/main/commands/review.md) asks for a second opinion on the current work or the changes since a commit, on standards, plan conformance, or both. It only reports: it doesn't fix or accept the change.
- [`/reslice`](https://github.com/INGCapaDev/ingcapadev-ai-workflow/blob/main/commands/reslice.md) compares other ways to group the tasks without changing the saved plan or the code.
- [`/improve-ai`](https://github.com/INGCapaDev/ingcapadev-ai-workflow/blob/main/commands/improve-ai.md) examines the session evidence and proposes workflow improvements, without applying them on its own.

There's also [`/todo`](https://github.com/INGCapaDev/ingcapadev-ai-workflow/blob/main/commands/todo.md), an optional capability to capture deferred work and pick it up when planning it makes sense. It's not another mandatory stage in the flow.

The keyword here is **approved**.

An implementation with its checks doesn't mark the planned task as finished. It leaves a change ready for a human to review the diff, the evidence, and its limits. Human acceptance is what confirms the change represents the right decision and lets the plan move forward.

Approving that result accepts the task and stops there. If the change is ready and hasn't changed since it was presented, `/proceed` lets you accept it and run one next task. And accepting never means committing, pushing, or deploying: that needs separate permission.

That distinction seems small, but it changes the system completely.

Without it, an agent can turn "the code compiles" into "the task is done." With it, implementation goes back to its place: evidence for a human decision, not a substitute for it.

## The goal isn't to automate myself out of the process

I don't want an AI that does everything without asking. I want one that can carry the repetitive execution, research fast, apply a bounded change, and show me clearly what it did and why it thinks it works.

I want to keep my attention for the problem, the trade-offs, and the product direction.

AI is the workhorse. The human is still the architect and the decision-maker.

And above all, I'm not trying to build the objectively best system. I'm trying to build the system that works for me.
