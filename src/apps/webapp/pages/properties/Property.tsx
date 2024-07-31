import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { PropertyProps } from "../../components/properties/Property.types";
import Container from "../../../../features/ui/container/Container";
import PropertyInfo from "../../components/properties/PropertyInfo";
import getPropertyById from "../../../../features/api/property/getPropertyById";

const Property = () => {
	const { propertyId } = useParams();
	const [property, setProperty] = useState<PropertyProps>();
	const navigate = useNavigate();

	const fetchProperty = async () => {
		try {
			const { data } = await getPropertyById(propertyId);
			setProperty(data);
		} catch (err) {
			alert(
				"Unable to fetch property. Redirecting to properties page..."
			);
			navigate("/properties");
		}
	};

	useEffect(() => {
		fetchProperty();
	}, []);

	if (!property) {
		return (
			<Container>
				<p>Fetching property...</p>
			</Container>
		);
	}

	return (
		<Container>
			<PropertyInfo property={property} />
		</Container>
	);
};

export default Property;
