import dotenv from "dotenv";
dotenv.config();

const ANTHROPIC_API_KEY = process.env.ANTHROPIC_API_KEY;

async function runClaudeExample() {
  try {
    const response = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": ANTHROPIC_API_KEY,
        "anthropic-version": "2023-06-01"
      },
      body: JSON.stringify({
        model: "claude-3-5-sonnet-latest",
        max_tokens: 300,
        messages: [
          {
            role: "user",
            content: "Explain how Claude can be used in a content research workflow."
          }
        ]
      })
    });

    const data = await response.json();
    console.log(JSON.stringify(data, null, 2));
  } catch (error) {
    console.error("Claude API error:", error.message);
  }
}

runClaudeExample();
