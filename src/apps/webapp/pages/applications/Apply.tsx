import { useEffect, useState } from "react";
import useQuery from "../../../../features/hooks/useQuery";
import Container from "../../../../features/ui/container/Container";
import ApplicationForm from "../../components/applications/ApplicationForm";
import getPropertyById from "../../../../features/api/property/getPropertyById";
import { useNavigate } from "react-router-dom";

const Apply = () => {
	const query = useQuery();
	const propertyId = query.get("property");
	const [property, setProperty] = useState(null);
	const [isLoading, setIsLoading] = useState(false);
	const navigate = useNavigate();

	const fetchProperty = async () => {
		try {
			setIsLoading(true);
			const { data } = await getPropertyById(propertyId);
			setProperty(data);
		} catch (err) {
			alert("Unable to fetch property.");
			navigate("/properties");
		} finally {
			setIsLoading(false);
		}
	};

	useEffect(() => {
		fetchProperty();
	}, []);

	if (isLoading) {
		return (
			<Container>
				<p>Loading...</p>
			</Container>
		);
	}

	return (
		<Container>
			{property && <ApplicationForm property={property} />}
		</Container>
	);
};

export default Apply;
