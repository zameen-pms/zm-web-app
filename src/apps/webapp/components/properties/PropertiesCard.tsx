import { useEffect, useState } from "react";
import { StyledPropertiesCard } from "./Properties.styled";
import PropertyCard from "./PropertyCard";
import getProperties from "../../../../features/api/property/getProperties";
import { PropertyProps } from "./Property.types";

const PropertiesCard = () => {
	const [isLoading, setIsLoading] = useState(false);
	const [properties, setProperties] = useState([]);

	const fetchProperties = async () => {
		try {
			setIsLoading(true);
			const { data } = await getProperties();

			const availableProperties = data.filter(
				(property: PropertyProps) =>
					property.availability === "Available"
			);
			const occupiedProperties = data.filter(
				(property: PropertyProps) =>
					property.availability === "Occupied"
			);

			setProperties([...availableProperties, ...occupiedProperties]);
		} catch (err) {
			alert("Unable to fetch properties.");
		} finally {
			setIsLoading(false);
		}
	};

	useEffect(() => {
		fetchProperties();
	}, []);

	if (isLoading) return <p>Loading...</p>;

	return (
		<StyledPropertiesCard>
			{properties.length === 0 && <p>No Properties Available</p>}
			{properties.map((property: PropertyProps) => (
				<PropertyCard key={property._id} property={property} />
			))}
		</StyledPropertiesCard>
	);
};

export default PropertiesCard;
