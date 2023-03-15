const BASE_URL = "http://localhost:4000";

export const fetchData = async (endpoint: string): Promise<any> => {
	const response = await fetch(BASE_URL + endpoint);
	const data = await response.json();
	return data;
};