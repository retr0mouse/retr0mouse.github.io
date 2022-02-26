export class FactsApi {
    static async getRandomFact(): Promise<RandomFact>{
        const response = await fetch("https://uselessfacts.jsph.pl/random.json?language=en");
        if (!response.ok) {
            throw new Error("Request failed with status code " + response.status);
        }
        const result = await response.json() as RandomFact;
        return result;
    }
}

interface RandomFact {
  id: string;
  text: string;
  source: string;
  source_url: string;
  language: string;
  permalink: string;
}