import { useEffect, useState } from "react";
import { fetchMostViewedArticles } from "../services/api";

export const useArticles = (period = 7) => {
	const [articles, setArticles] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);
	const [selectedPeriod, setSelectedPeriod] = useState(period);

	useEffect(() => {
		const getArticles = async () => {
			try {
				setLoading(true);
				setError(null);
				const data = await fetchMostViewedArticles(selectedPeriod);
				setArticles(data);
			} catch (err) {
				console.error(err);
				setError("Failed to fetch articles. Please try again later.");
			} finally {
				setLoading(false);
			}
		};

		getArticles();
	}, [selectedPeriod]);

	return {
		articles,
		loading,
		error,
		selectedPeriod,
		setSelectedPeriod,
	};
};
