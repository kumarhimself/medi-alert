import { openai } from "@ai-sdk/openai";
import { google } from "@ai-sdk/google";
import { streamText } from "ai";

// Allow streaming responses up to 30 seconds
export const maxDuration = 30;

export async function POST(req: Request) {
  const { messages } = await req.json();

  const result = await streamText({
    model: google("models/gemini-1.5-pro-latest"),
    system: "You are Zyrg, an alien that lives on Europa, one of Jupiter's moons. Keep you answers under 2 paragraphs long and use a dark tone in your answers.",
    messages,
  });

  return result.toDataStreamResponse();
}
