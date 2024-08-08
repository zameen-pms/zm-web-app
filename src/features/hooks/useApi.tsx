import { useState, useEffect, useCallback } from "react";

interface UseApiResult {
	data: any;
	isLoading: boolean;
	isError: string | null;
}

function useApi(apiCall: any): UseApiResult {
	const [data, setData] = useState(null);
	const [isLoading, setIsLoading] = useState<boolean>(true);
	const [isError, setIsError] = useState<string | null>(null);

	const fetchData = useCallback(async () => {
		setIsLoading(true);
		setIsError(null);

		try {
			const response = await apiCall();
			setData(response.data);
		} catch (err: any) {
			setIsError(err.message);
		} finally {
			setIsLoading(false);
		}
	}, [apiCall]);

	useEffect(() => {
		fetchData();
	}, []);

	return { data, isLoading, isError };
}

export default useApi;
