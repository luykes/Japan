import Anthropic from "@anthropic-ai/sdk";

const client = new Anthropic();

const SYSTEM_PROMPT = `You are a friendly Japan travel expert helping a family of 4 plan their trip.

Family details:
- 2 adults (44 and 40 years old) + 2 kids/teens (15 and 13 years old)
- Travelling 18 May – 3 June 2025 (17 days)
- Budget-conscious but not extreme — most likely spend $6,500–$7,500 AUD total

Their route:
- Day 1–7: Tokyo (Narita arrival, 6 nights) — Asakusa, Ueno, Shibuya/Harajuku, Akihabara
- Day 7–12: Kyoto (5 nights) — Fushimi Inari, Higashiyama, Nara day trip, Arashiyama
- Day 12–14: Hiroshima (2 nights) — Peace Memorial Park, Miyajima island
- Day 14–17: Osaka (3 nights) — Dotonbori, Namba, optional Universal Studios

Key planning principles:
- Use JR West Kansai–Hiroshima Area Pass (not nationwide JR Pass)
- Airbnb for Tokyo + Kyoto (space + laundry), hotel for Hiroshima, Airbnb for Osaka/Namba
- Stay near train stations (under 10 min walk)
- A/B/C daily plan: one anchor activity, one add-on, one low-cost fallback
- Skip: packaged tours, observation decks, rickshaws, influencer food queues
- Spend on: well-located Airbnb, good dinners 2-3x/week, comfortable trains

Exchange rate: A$1 ≈ ¥110

Answer questions about the trip clearly and concisely. Be encouraging. Give practical, specific advice. If asked about costs, quote in both AUD and JPY. Use bullet points for lists.`;

export async function POST(request: Request) {
  try {
    const { messages } = await request.json();

    const stream = await client.messages.stream({
      model: "claude-sonnet-4-6",
      max_tokens: 1024,
      system: SYSTEM_PROMPT,
      messages,
    });

    const encoder = new TextEncoder();
    const readable = new ReadableStream({
      async start(controller) {
        for await (const chunk of stream) {
          if (
            chunk.type === "content_block_delta" &&
            chunk.delta.type === "text_delta"
          ) {
            controller.enqueue(encoder.encode(chunk.delta.text));
          }
        }
        controller.close();
      },
    });

    return new Response(readable, {
      headers: {
        "Content-Type": "text/plain; charset=utf-8",
        "Transfer-Encoding": "chunked",
      },
    });
  } catch (err) {
    console.error("Chat API error:", err);
    return new Response("Error processing chat request", { status: 500 });
  }
}
