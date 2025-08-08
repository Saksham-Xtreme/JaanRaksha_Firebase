'use server';

import { summarizeAnimalStory as summarizeAnimalStoryFlow, SummarizeAnimalStoryInput, SummarizeAnimalStoryOutput } from '@/ai/flows/animal-story-summarizer';

export async function summarizeAnimalStory(input: SummarizeAnimalStoryInput): Promise<SummarizeAnimalStoryOutput> {
  try {
    const output = await summarizeAnimalStoryFlow(input);
    return output;
  } catch (e: any) {
    console.error("Error summarizing story:", e);
    return { summary: "Failed to generate summary due to an error." };
  }
}
