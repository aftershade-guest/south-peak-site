
export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  category: 'renovation' | 'structural' | 'exterior';
}

export interface QuoteRequest {
  name: string;
  phone: string;
  projectDescription: string;
}

export interface AIResponse {
  advice: string;
  estimatedComplexity: string;
  considerations: string[];
}
