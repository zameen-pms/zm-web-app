import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import getPropertyById from "../../../../../features/api/property/getPropertyById";
import UploadPropertyImages from "../../../components/properties/PropertyImages";

const PropertyImages = () => {
	const { propertyId } = useParams();
	const [property, setProperty] = useState(null);

	const fetchProperty = async () => {
		try {
			const { data } = await getPropertyById(propertyId);
			setProperty(data);
		} catch (err) {
			alert("Unable to fetch property.");
			console.log(err.message);
		}
	};

	useEffect(() => {
		fetchProperty();
	}, []);

	if (!property) return <p>Loading property...</p>;

	return (
		<UploadPropertyImages
			property={property}
			fetchProperty={fetchProperty}
		/>
	);
};

export default PropertyImages;
