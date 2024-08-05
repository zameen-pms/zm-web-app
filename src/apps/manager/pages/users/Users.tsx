import { useEffect, useState } from "react";
import getUsers from "../../../../features/api/users/getUsers";
import Tab from "../../../../features/ui/tab/Tab";
import UsersTable from "../../components/users/UsersTable";
import Button from "../../../../features/ui/button/Button";
import ControlBar from "../../../../features/ui/controlBar/ControlBar";
import { useNavigate } from "react-router-dom";

const Users = () => {
	const [users, setUsers] = useState([]);
	const [role, setRole] = useState("All");
	const [isLoading, setIsLoading] = useState(false);
	const navigate = useNavigate();

	const fetchUsers = async () => {
		try {
			setIsLoading(true);
			const params = role === "All" ? {} : { role: role };
			const { data } = await getUsers(params);
			setUsers(data);
		} catch (err) {
			alert("Unable to fetch users.");
			console.log(err.message);
		} finally {
			setIsLoading(false);
		}
	};

	useEffect(() => {
		fetchUsers();
	}, [role]);

	return (
		<>
			<ControlBar>
				<h2>Users</h2>
				<Button onClick={() => navigate("add")}>Add User</Button>
			</ControlBar>
			<Tab
				options={["All", "Owner", "Manager", "Tenant"]}
				tab={role}
				setTab={setRole}
			/>
			{isLoading ? <p>Loading....</p> : <UsersTable users={users} />}
		</>
	);
};

export default Users;
