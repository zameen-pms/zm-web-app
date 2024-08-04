import { Navigate, Route, Routes } from "react-router-dom";
import PropertyLayout from "./PropertyLayout";
import PropertyImages from "./PropertyImages";
import Property from "./Property";

const PropertyHome = () => {
	return (
		<Routes>
			<Route element={<PropertyLayout />}>
				<Route index element={<Navigate to="info" />} />
				<Route path="images" element={<PropertyImages />} />
				<Route path="info" element={<Property />} />
				<Route path="*" element={<Navigate to="" />} />
			</Route>
		</Routes>
	);
};

export default PropertyHome;
