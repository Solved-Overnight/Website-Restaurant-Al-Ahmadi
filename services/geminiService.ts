import { GoogleGenAI } from "@google/genai";

const apiKey = process.env.API_KEY || '';
const ai = new GoogleGenAI({ apiKey });

export const askConcierge = async (question: string, language: 'en' | 'ar' = 'en'): Promise<string> => {
  if (!apiKey) {
    return language === 'ar' 
      ? "عذراً، خدمة الاتصال بالذكاء الاصطناعي غير متوفرة حالياً. يرجى سؤال موظفينا مباشرة."
      : "I'm sorry, my connection to the AI service is currently unavailable. Please ask our staff directly.";
  }

  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: question,
      config: {
        systemInstruction: `You are the Virtual Concierge for 'Al Ahmadi Restaurant' in Kuwait. 
        Current language context: ${language === 'ar' ? 'Arabic' : 'English'}.
        
        Restaurant Details:
        - Name: Al Ahmadi Restaurant
        - Location: Habeeb Munawer St, Al Farwaniyah, Kuwait.
        - Rating: 4.9 stars.
        - Services: Dine-in, Takeaway, Delivery.
        - Open until 11 PM.
        
        Menu Highlights (prices in KD):
        - Signature Nachos (3.500), Machboos Chicken (4.500), Mutabbaq Zubaidi (6.750), Lamb Tashreeb (3.750).
        - Desserts: Luqaimat (1.500), Fruit Salad (2.750).
        - Drinks: Arabic Coffee (2.000), Vimto, Laban.
        
        Guidelines:
        - Respond IN THE SAME LANGUAGE as the user's question (mostly ${language}).
        - Tone: Warm, hospitable, culturally respectful (Kuwaiti traditions).
        - Keep answers concise (under 100 words).
        - If asked about dishes not listed, politely suggest our specialties.
        - End with a welcoming phrase like 'Ahlan wa Sahlan' or 'Hayakum Allah'.`,
      }
    });
    
    return response.text || (language === 'ar' ? "أعتذر، لم أتمكن من معالجة هذا الطلب حالياً." : "I apologize, I couldn't process that request at the moment.");
  } catch (error) {
    console.error("Gemini API Error:", error);
    return language === 'ar' 
      ? "أواجه حالياً ضغطاً عالياً. يرجى المحاولة مرة أخرى بعد قليل."
      : "I am currently experiencing high traffic. Please try again in a moment.";
  }
};
