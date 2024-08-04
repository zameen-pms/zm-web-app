import { useEffect, useState } from "react";
import getContracts from "../../../../features/api/contracts/getContracts";
import ContractsTable from "../../components/contracts/ContractsTable";
import { useNavigate } from "react-router-dom";
import Button from "../../../../features/ui/button/Button";

const Contracts = () => {
	const [contracts, setContracts] = useState(null);
	const navigate = useNavigate();

	const fetchContracts = async () => {
		try {
			const { data } = await getContracts({});
			setContracts(data);
		} catch (err) {
			alert("Unable to fetch contracts.");
		}
	};

	useEffect(() => {
		fetchContracts();
	}, []);

	return (
		<>
			<div className="row justify-sb align-center">
				<h3>Contracts</h3>
				<Button onClick={() => navigate("add")}>Add Contract</Button>
			</div>
			{contracts ? (
				<ContractsTable contracts={contracts} />
			) : (
				<p>Loading contracts...</p>
			)}
		</>
	);
};

export default Contracts;
