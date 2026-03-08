import dotenv from "dotenv";
dotenv.config();

const PERPLEXITY_API_KEY = process.env.PERPLEXITY_API_KEY;

async function runPerplexityExample() {
  try {
    const response = await fetch("https://api.perplexity.ai/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${PERPLEXITY_API_KEY}`
      },
      body: JSON.stringify({
        model: "sonar",
        messages: [
          {
            role: "system",
            content: "You are a research assistant for business automation."
          },
          {
            role: "user",
            content: "Give me 5 research angles for AI productivity YouTube content."
          }
        ]
      })
    });

    const data = await response.json();
    console.log(JSON.stringify(data, null, 2));
  } catch (error) {
    console.error("Perplexity API error:", error.message);
  }
}

runPerplexityExample();
