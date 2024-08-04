import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getTextDate } from "../../../../features/utils/getTextDate";
import Table from "../../../../features/ui/table/Table";

const columns = [
	{
		key: "title",
		header: "Document Title",
	},
	{
		key: "parties",
		header: "Parties",
	},
	{
		key: "createdAt",
		header: "Creation Date",
	},
];

const ContractsTable = ({ contracts }) => {
	const [data, setData] = useState([]);
	const navigate = useNavigate();

	useEffect(() => {
		setData(
			contracts.map((contract) => ({
				...contract,
				id: contract._id,
				parties: contract.parties
					.map(
						(party) =>
							`${party.firstName} ${party.lastName} (${party.role})`
					)
					.join(", "),
				createdAt: getTextDate(contract.createdAt.split("T")[0]),
			}))
		);
	}, [contracts]);

	const handleRowClick = (row) => {
		const { id } = row;
		navigate(`/contracts/${id}`);
	};

	return <Table columns={columns} data={data} onRowClick={handleRowClick} />;
};

export default ContractsTable;
