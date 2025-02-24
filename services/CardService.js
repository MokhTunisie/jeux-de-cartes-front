const BASE_URL = import.meta.env.VITE_API_BASE_URL;

export default {
    async getRandomPalm() {
        const response = await fetch(`${BASE_URL}/api/palm/random`);
        const data = await response.json();
        return data.cards;
    },

    async sortPalm(cards) {
        const response = await fetch(`${BASE_URL}/api/palm/sorted`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ cards })
        });
        const data = await response.json();
        return data.cards;
    }
};
