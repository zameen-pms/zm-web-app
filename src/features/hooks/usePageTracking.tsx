import { useEffect } from "react";
import { useLocation } from "react-router-dom";

declare global {
	interface Window {
		gtag?: (...args: any[]) => void;
	}
}

const usePageTracking = () => {
	const location = useLocation();

	useEffect(() => {
		if (window.gtag) {
			window.gtag("config", "G-0XW30W19KC", {
				page_path: location.pathname + location.search,
			});
		}
	}, [location]);
};

export default usePageTracking;
