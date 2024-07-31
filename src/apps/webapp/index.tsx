import { Navigate, Route, Routes } from "react-router-dom";
import WebAppLayout from "../../features/layouts/webappLayout/WebAppLayout";
import HomePage from "./pages/home";
import usePageTracking from "../../features/hooks/usePageTracking";
import ApplicationsHome from "./pages/applications";
import PropertiesHome from "./pages/properties";
import ServicesHome from "./pages/services";

const WebappManager = () => {
	usePageTracking();

	return (
		<Routes>
			<Route element={<WebAppLayout />}>
				<Route index element={<HomePage />} />
				<Route path="applications/*" element={<ApplicationsHome />} />
				<Route path="properties/*" element={<PropertiesHome />} />
				<Route path="services/*" element={<ServicesHome />} />
				<Route path="*" element={<Navigate to="/" />} />
			</Route>
		</Routes>
	);
};

export default WebappManager;
