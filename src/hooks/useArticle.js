import { useEffect, useState } from "react";

const API_KEY = `${import.meta.env.VITE_NYC_TZ_KEY}`;
const PERIOD = 7;
const MOST_POPULAR_ARTICLES = `https://api.nytimes.com/svc/mostpopular/v2/viewed/${PERIOD}.json?api-key=${API_KEY}`;
export default function useArticle() {
	const [articles, setArticles] = useState([]);
	const [selectedArticle, setSelectedArticle] = useState(null);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		fetch(MOST_POPULAR_ARTICLES)
			.then(res => res.json())
			.then(data => {
				setArticles(data?.results);
				setLoading(false);
			});
	}, []);

	return {
		articles,
		selectedArticle,
		setSelectedArticle,
		loading,
	};
}
