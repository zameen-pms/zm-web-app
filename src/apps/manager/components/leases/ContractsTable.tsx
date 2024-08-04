import { useEffect, useState } from "react";
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

const ContractsTable = ({ contracts, loading, onClick, search }) => {
	const [data, setData] = useState([]);
	const [parsedData, setParsedData] = useState([]);

	useEffect(() => {
		setParsedData(
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

	useEffect(() => {
		if (!search || search === "") {
			setData(parsedData);
		} else {
			setData(
				parsedData.filter(
					(row) =>
						row?.title
							?.toLowerCase()
							?.includes(search.toLowerCase()) ||
						row?.parties
							?.toLowerCase()
							.includes(search.toLowerCase()) ||
						row?.createdAt
							?.toLowerCase()
							?.includes(search.toLowerCase())
				)
			);
		}
	}, [search, parsedData]);

	const handleRowClick = (row) => {
		onClick && onClick(row);
	};

	if (loading) return <p>Loading...</p>;

	return <Table data={data} columns={columns} onRowClick={handleRowClick} />;
};

export default ContractsTable;
