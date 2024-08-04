import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Table from "../../../../features/ui/table/Table";

const columns = [
	{
		key: "role",
		header: "Role",
	},
	{
		key: "firstName",
		header: "First Name",
	},
	{
		key: "lastName",
		header: "Last Name",
	},
	{
		key: "email",
		header: "Email",
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

const UsersTable = ({ users }) => {
	const [data, setData] = useState([]);
	const navigate = useNavigate();

	useEffect(() => {
		setData(
			users.map((user) => ({
				...user,
				id: user._id,
				createdAt: user.createdAt.split("T")[0],
			}))
		);
	}, []);

	const handleRowClick = (params) => {
		const { id } = params;
		navigate(`/users/${id}`);
	};

	return <Table columns={columns} data={data} onRowClick={handleRowClick} />;
};

export default UsersTable;
