import { useEffect, useState } from "react";
import getContracts from "../../../../features/api/contracts/getContracts";
import ContractsTable from "../../components/contracts/ContractsTable";
import { useNavigate } from "react-router-dom";
import Button from "../../../../features/ui/button/Button";
import ControlBar from "../../../../features/ui/controlBar/ControlBar";

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
			<ControlBar>
				<h2>Contracts</h2>
				<Button onClick={() => navigate("add")}>Add Contract</Button>
			</ControlBar>
			<ContractsTable contracts={contracts} />
		</>
	);
};

export default Contracts;
