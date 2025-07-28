import { streamText } from 'ai';
import { xai } from '@ai-sdk/xai';

export const config = { runtime: 'edge' };

export default async function handler(req) {
  const { messages } = await req.json();

  const response = streamText({
    model: xai('grok-3b'),
    messages,
    temperature: 0.7
  });

  // stream back as SSE
  return response.toWebResponse();
}
