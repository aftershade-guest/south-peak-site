
import { GoogleGenAI, Type } from "@google/genai";

const getApiKey = (): string => {
  // Safe check to avoid ReferenceError if process is not defined
  if (typeof process !== 'undefined' && process.env && process.env.API_KEY) {
    return process.env.API_KEY;
  }
  return "";
};

export const getAIProjectAdvice = async (description: string) => {
  const apiKey = getApiKey();
  const ai = new GoogleGenAI({ apiKey });
  
  const prompt = `You are an expert construction consultant for South Peak Construction. 
  A potential client provided this project description: "${description}". 
  Provide professional advice, estimate the complexity (Low, Medium, High), 
  and list 3-5 critical technical considerations for this type of work in the Gauteng area (Sandton, Germiston, Alberton).`;

  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            advice: { type: Type.STRING },
            estimatedComplexity: { type: Type.STRING },
            considerations: {
              type: Type.ARRAY,
              items: { type: Type.STRING }
            }
          },
          required: ["advice", "estimatedComplexity", "considerations"]
        }
      }
    });

    const text = response.text;
    if (!text) throw new Error("No response text");
    return JSON.parse(text);
  } catch (error) {
    console.error("Gemini AI Error:", error);
    throw error;
  }
};

export const generateVisionImage = async (prompt: string): Promise<string | null> => {
  const apiKey = getApiKey();
  const ai = new GoogleGenAI({ apiKey });
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash-image',
      contents: {
        parts: [{ text: `High-quality photorealistic construction project: ${prompt}. Professional lighting, architectural photography style.` }],
      },
      config: {
        imageConfig: {
          aspectRatio: "16:9"
        }
      }
    });

    for (const part of response.candidates?.[0]?.content?.parts || []) {
      if (part.inlineData) {
        return `data:image/png;base64,${part.inlineData.data}`;
      }
    }
    return null;
  } catch (error) {
    console.error("Image generation error:", error);
    return null;
  }
};
