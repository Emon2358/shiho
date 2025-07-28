import { OpenAI } from '@vercel/ai';

// Edge ランタイム指定
export const config = { runtime: 'edge' };

const openai = new OpenAI();

export default async function handler(req) {
  const { messages } = await req.json();

  const response = await openai.chat.completions.create({
    model: 'grok-3b',
    messages,
    temperature: 0.7,
  });

  return new Response(response.body, {
    headers: { 'Content-Type': 'text/event-stream' },
  });
}
