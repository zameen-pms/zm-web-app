import { Dispatch, FC, SetStateAction, useState } from "react";
import { Property } from "../../../../features/types/Property";
import updatePropertyById from "../../../../features/api/property/updatePropertyById";
import getPropertyById from "../../../../features/api/property/getPropertyById";
import PropertyOverviewInformation from "./PropertyOverviewInformation";
import PropertyOverviewImages from "./PropertyOverviewImages";

interface OverviewProps {
	property: Property;
	setProperty: Dispatch<SetStateAction<Property>>;
}

const PropertyOverview: FC<OverviewProps> = ({ property, setProperty }) => {
	const [isLoading, setIsLoading] = useState(false);

	const updateProperty = async () => {
		try {
			setIsLoading(true);
			await updatePropertyById(property._id, property);
			alert("Property has been updated.");
		} catch (err) {
			alert(`Unable to update property: ${err.message}`);
		} finally {
			setIsLoading(false);
		}
	};

	const fetchProperty = async () => {
		try {
			setIsLoading(true);
			const { data } = await getPropertyById(property._id);
			setProperty(data);
		} catch (err) {
			alert(`Unable to fetch property: ${err.message}`);
		} finally {
			setIsLoading(false);
		}
	};

	return (
		<div className="column gap-2">
			<PropertyOverviewInformation
				property={property}
				setProperty={setProperty}
				fetchProperty={fetchProperty}
				updateProperty={updateProperty}
				isLoading={isLoading}
			/>
			<PropertyOverviewImages
				property={property}
				fetchProperty={fetchProperty}
			/>
		</div>
	);
};

export default PropertyOverview;
