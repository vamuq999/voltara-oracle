// app/api/oracle/route.ts
import OpenAI from "openai";

export const runtime = "nodejs"; // ensure Node runtime, not edge
export const dynamic = "force-dynamic";

const apiKey = process.env.OPENAI_API_KEY;

// (Optional but helpful) log once on startup
console.log("Oracle route booted. OPENAI_API_KEY present?", !!apiKey);

const openai = new OpenAI({
  apiKey: apiKey || "",
});

export async function POST(req: Request) {
  try {
    // 1) Safety: env var configured?
    if (!apiKey) {
      console.error("OPENAI_API_KEY is not set on the server.");
      return new Response(
        JSON.stringify({
          error:
            "Server misconfigured: OPENAI_API_KEY is missing. Check .env.local.",
        }),
        { status: 500 }
      );
    }

    // 2) Parse body
    let body: any;
    try {
      body = await req.json();
    } catch (err) {
      console.error("Failed to parse JSON body:", err);
      return new Response(
        JSON.stringify({ error: "Invalid JSON body sent to /api/oracle." }),
        { status: 400 }
      );
    }

    const question = body?.question;
    if (!question || typeof question !== "string") {
      return new Response(
        JSON.stringify({ error: "Missing or invalid 'question' field." }),
        { status: 400 }
      );
    }

    // 3) Call OpenAI
    const completion = await openai.chat.completions.create({
      model: "gpt-4.1-mini", // change if you want
      messages: [
        {
          role: "system",
          content:
            "You are the Voltara Oracle. Answer with calm mystical insight but stay practical and grounded. 3–6 sentences max.",
        },
        {
          role: "user",
          content: question,
        },
      ],
      temperature: 0.85,
    });

    const answer =
      completion.choices[0]?.message?.content?.trim() ??
      "The Oracle is silent. Ask again with more clarity.";

    return Response.json({ response: answer });
  } catch (err: any) {
    console.error("Oracle API error:", err);
    return new Response(
      JSON.stringify({
        error:
          err?.message ||
          "Oracle backend error. Check server logs for more details.",
      }),
      { status: 500 }
    );
  }
}
