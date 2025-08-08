'use server';
/**
 * @fileOverview Summarizes an animal's story for prospective adopters.
 *
 * - summarizeAnimalStory - A function that generates a concise summary of an animal's story.
 * - SummarizeAnimalStoryInput - The input type for the summarizeAnimalStory function.
 * - SummarizeAnimalStoryOutput - The return type for the summarizeAnimalStory function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SummarizeAnimalStoryInputSchema = z.object({
  story: z.string().describe('The animal story to summarize.'),
});
export type SummarizeAnimalStoryInput = z.infer<typeof SummarizeAnimalStoryInputSchema>;

const SummarizeAnimalStoryOutputSchema = z.object({
  summary: z.string().describe('A concise summary of the animal story.'),
});
export type SummarizeAnimalStoryOutput = z.infer<typeof SummarizeAnimalStoryOutputSchema>;

export async function summarizeAnimalStory(input: SummarizeAnimalStoryInput): Promise<SummarizeAnimalStoryOutput> {
  return summarizeAnimalStoryFlow(input);
}

const prompt = ai.definePrompt({
  name: 'summarizeAnimalStoryPrompt',
  input: {schema: SummarizeAnimalStoryInputSchema},
  output: {schema: SummarizeAnimalStoryOutputSchema},
  prompt: `You are an expert at summarizing animal stories for prospective adopters. Create a short, one-sentence summary of the following animal story:\n\n{{{story}}}`,
});

const summarizeAnimalStoryFlow = ai.defineFlow(
  {
    name: 'summarizeAnimalStoryFlow',
    inputSchema: SummarizeAnimalStoryInputSchema,
    outputSchema: SummarizeAnimalStoryOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
