import { Navigate, Route, Routes } from "react-router-dom";
import Properties from "./Properties";
import AddProperty from "./AddProperty";
import Property from "./Property";

const PropertiesHome = () => {
	return (
		<Routes>
			<Route index element={<Properties />} />
			<Route path="add" element={<AddProperty />} />
			<Route path=":propertyId/*" element={<Property />} />
			<Route path="*" element={<Navigate to="" />} />
		</Routes>
	);
};

export default PropertiesHome;
