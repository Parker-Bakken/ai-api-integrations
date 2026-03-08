export function buildPrompt(task, input) {
  return `
You are an AI assistant helping inside an automation workflow.

Task:
${task}

Input:
${input}

Rules:
- Be concise
- Return clear structured output
- Avoid fluff
- Make the output easy to pass into the next automation step
`.trim();
}
