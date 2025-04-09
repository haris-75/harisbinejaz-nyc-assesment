export const API_KEY = `${import.meta.env.VITE_NYC_TZ_KEY}`;
const BASE_URL = "https://api.nytimes.com/svc/mostpopular/v2";

export const fetchMostViewedArticles = async (period = 7) => {
	try {
		const response = await fetch(`${BASE_URL}/viewed/${period}.json?api-key=${API_KEY}`);

		if (!response.ok) {
			throw new Error(`API request failed: ${response.status}`);
		}

		const data = await response.json();
		return data.results;
	} catch (error) {
		console.error("Error fetching articles:", error);
		throw error;
	}
};
