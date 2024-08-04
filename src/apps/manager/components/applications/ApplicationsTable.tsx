import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Table from "../../../../features/ui/table/Table";
import { getAddress } from "../../../../features/utils/getAddress";

const columns = [
	{
		key: "applicant",
		header: "Applicant",
	},
	{
		key: "property",
		header: "Property",
	},
	{
		key: "hasPaid",
		header: "Has Paid",
	},
	{
		key: "status",
		header: "Status",
	},
	{
		key: "createdAt",
		header: "Created At",
	},
];

const ApplicationsTable = ({ applications }) => {
	const [data, setData] = useState([]);
	const navigate = useNavigate();

	useEffect(() => {
		setData(
			applications.map((app) => ({
				...app,
				id: app._id,
				applicant: app.signature.name,
				property: getAddress(app.property.address),
				createdAt: app.createdAt.split("T")[0],
			}))
		);
	}, [applications]);

	const handleRowClick = (row) => {
		const { id } = row;
		navigate(`/applications/${id}`);
	};

	return <Table columns={columns} data={data} onRowClick={handleRowClick} />;
};

export default ApplicationsTable;
