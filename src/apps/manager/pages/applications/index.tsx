import { Navigate, Route, Routes } from "react-router-dom";
import Applications from "./Applications";
import Application from "./Application";

const ManagerApplicationsHome = () => {
	return (
		<Routes>
			<Route index element={<Applications />} />
			<Route path=":applicationId" element={<Application />} />
			<Route path="*" element={<Navigate to="" />} />
		</Routes>
	);
};

export default ManagerApplicationsHome;
