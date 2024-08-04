import { useEffect, useState } from "react";
import getProperties from "../../../../features/api/property/getProperties";
import Container from "../../../../features/ui/container/Container";
import PropertiesTable from "../../components/properties/PropertiesTable";

const Properties = () => {
	const [properties, setProperties] = useState([]);
	const [isLoading, setIsLoading] = useState(false);

	const fetchProperties = async () => {
		try {
			setIsLoading(true);
			const { data } = await getProperties();
			setProperties(data.reverse());
		} catch (err) {
			alert("Unable to fetch properties.");
			console.log(err.message);
		} finally {
			setIsLoading(false);
		}
	};

	useEffect(() => {
		fetchProperties();
	}, []);

	return (
		<Container>
			{isLoading ? (
				<p>Loading Properties...</p>
			) : (
				<PropertiesTable properties={properties} />
			)}
		</Container>
	);
};

export default Properties;
