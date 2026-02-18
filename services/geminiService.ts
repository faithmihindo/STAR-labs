
import { GoogleGenAI, Type } from "@google/genai";
import { LabResult } from "../types";

// Fix: Use process.env.API_KEY directly and ensure proper initialization as per guidelines.
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const generateTechConcept = async (query: string): Promise<LabResult> => {
  // Fix: Use 'gemini-3-pro-preview' for complex reasoning and brainstorming tasks.
  const response = await ai.models.generateContent({
    model: 'gemini-3-pro-preview',
    contents: `Brainstorm a futuristic digital transformation concept for: ${query}. Focus on custom software, lifestyle improvement, or tech research.`,
    config: {
      responseMimeType: "application/json",
      responseSchema: {
        type: Type.OBJECT,
        properties: {
          title: { type: Type.STRING },
          concept: { type: Type.STRING },
          feasibility: { type: Type.NUMBER, description: "Scale 1-100" },
          roadmap: {
            type: Type.ARRAY,
            items: { type: Type.STRING }
          }
        },
        required: ["title", "concept", "feasibility", "roadmap"]
      }
    }
  });

  // Fix: Directly access the .text property from GenerateContentResponse (not a method).
  const jsonStr = response.text?.trim() || '{}';
  return JSON.parse(jsonStr);
};
