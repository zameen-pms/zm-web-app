import { Navigate, Route, Routes } from "react-router-dom";
import Apply from "./Apply";

const ApplicationsHome = () => {
	return (
		<Routes>
			<Route path="/apply" element={<Apply />} />
			<Route path="*" element={<Navigate to="apply" />} />
		</Routes>
	);
};

export default ApplicationsHome;
