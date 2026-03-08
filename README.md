# ai-api-integrations

> ⚠️ **Work in Progress**
>
> This repository is actively being built and expanded. New AI provider integrations, prompt patterns, and automation examples will be added over time as the project evolves.
>
> The goal of this repo is to become a practical reference for clean, reusable AI API integrations used in real automation workflows.

Simple, reusable AI API integration patterns for automation workflows using OpenAI, Claude, and other LLM providers.

## Why this repo exists

Most automation systems fail when AI calls are messy, inconsistent, or hard to scale.

This repo shows clean patterns for:
- sending prompts to multiple AI providers
- structuring reusable payloads
- separating prompts from code
- handling API errors safely
- preparing AI outputs for automations like n8n, content pipelines, research workflows, and support tools

## What’s included

- OpenAI chat completion example
- Claude message API example
- Perplexity research-style example
- reusable prompt patterns
- sample payloads
- environment variable setup
- documentation for real-world automation use cases

## Example use cases

- AI content generation pipelines
- YouTube script generation
- workflow assistants
- summarization automations
- lead research enrichment
- internal knowledge helpers

## Stack

- Node.js
- JavaScript
- REST APIs
- environment variables via `.env`

## Repo structure

```txt
docs/        -> architecture notes and provider comparisons
examples/    -> working integration examples
prompts/     -> reusable prompt templates
payloads/    -> sample request and response bodies
```

## Key idea

A strong AI automation system should make it easy to swap providers, reuse prompt patterns, and keep outputs structured enough for downstream workflows.

## Next improvements

- add streaming examples
- add JSON schema validation
- add retry logic
- add n8n webhook examples
- add cost tracking per provider

## Author

Built by Parker Bakken
