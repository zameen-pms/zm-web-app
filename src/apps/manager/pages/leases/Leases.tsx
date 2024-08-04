import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import getLeases from "../../../../features/api/leases/getLeases";
import getProperties from "../../../../features/api/property/getProperties";
import Button from "../../../../features/ui/button/Button";
import LeasesTable from "../../components/leases/LeasesTable";

const Leases = () => {
	const navigate = useNavigate();
	const [leases, setLeases] = useState(null);
	const [properties, setProperties] = useState(null);

	const fetchLeases = async () => {
		try {
			const params = {
				property: undefined,
			};

			const { data } = await getLeases(params);
			setLeases(data);
		} catch (err) {
			alert("Unable to fetch leases.");
		}
	};

	useEffect(() => {
		fetchLeases();
	}, []);

	const fetchProperties = async () => {
		try {
			const { data } = await getProperties();
			setProperties([
				{
					id: "All",
					value: "All",
				},
				...data.map((property) => ({
					id: property._id,
					value: property.address.street,
				})),
			]);
		} catch (err) {
			alert("Unable to fetch properties.");
		}
	};

	useEffect(() => {
		fetchProperties();
	}, []);

	if (!leases) return <p>Retrieving leases...</p>;
	if (!properties) return <p>Retrieving properties...</p>;

	return (
		<>
			<div className="row align-center justify-sb">
				<h3>Leases</h3>
				<Button onClick={() => navigate("add")}>Add Lease</Button>
			</div>
			<LeasesTable leases={leases} />
		</>
	);
};

export default Leases;
