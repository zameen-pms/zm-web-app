import { useEffect, useState } from "react";
import getProperties from "../../../../features/api/property/getProperties";
import PropertiesTable from "../../components/properties/PropertiesTable";
import Button from "../../../../features/ui/button/Button";
import { useNavigate } from "react-router-dom";

const Properties = () => {
	const navigate = useNavigate();
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
		<>
			<div className="row justify-sb">
				<h2>Properties</h2>
				<Button onClick={() => navigate("add")}>Add Property</Button>
			</div>
			{isLoading ? (
				<p>Loading Properties...</p>
			) : (
				<PropertiesTable properties={properties} />
			)}
		</>
	);
};

export default Properties;
