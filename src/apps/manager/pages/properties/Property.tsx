import { Navigate, Route, Routes, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import getPropertyById from "../../../../features/api/property/getPropertyById";
import { Property as PropertyModel } from "../../../../features/types/Property";
import PropertyLayout from "../../components/properties/PropertyLayout";
import PropertyOverview from "../../components/properties/PropertyOverview";
import PropertyLeases from "../../components/properties/PropertyLeases";
import PropertyMaintenance from "../../components/properties/PropertyMaintenance";

const Property = () => {
	const { propertyId } = useParams();
	const [property, setProperty] = useState<PropertyModel>(null);

	const fetchProperty = async () => {
		try {
			const { data } = await getPropertyById(propertyId);
			setProperty(data);
		} catch (err) {
			alert(`Unable to fetch property: ${err.message}`);
		}
	};

	useEffect(() => {
		fetchProperty();
	}, []);

	return (
		<Routes>
			<Route element={<PropertyLayout property={property} />}>
				<Route index element={<Navigate to="overview" />} />
				<Route
					path="overview"
					element={
						<PropertyOverview
							property={property}
							setProperty={setProperty}
						/>
					}
				/>
				<Route path="leases" element={<PropertyLeases />} />
				<Route path="maintenance" element={<PropertyMaintenance />} />
				<Route path="*" element={<Navigate to="overview" />} />
			</Route>
		</Routes>
	);
};

export default Property;
