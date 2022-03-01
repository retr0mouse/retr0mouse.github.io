export class FactsApi {
    static async getRandomFact() {
        const response = await fetch("https://uselessfacts.jsph.pl/random.json?language=en");
        if (!response.ok) {
            throw new Error("Request failed with status code " + response.status);
        }
        const result = await response.json();
        return result;
    }
}
