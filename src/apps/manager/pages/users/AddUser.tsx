import { useState } from "react";
import ControlBar from "../../../../features/ui/controlBar/ControlBar";
import AddUserForm from "../../components/users/AddUserForm";
import { User } from "../../../../features/types/User";
import { useNavigate } from "react-router-dom";
import createUser from "../../../../features/api/users/createUser";

const AddUser = () => {
	const [user, setUser] = useState<User>({
		firstName: "",
		lastName: "",
		email: "",
		role: "Tenant",
		status: "Disabled",
	});
	const navigate = useNavigate();

	const handleSubmit = async () => {
		try {
			await createUser(user);
			alert("User has been created.");
			navigate("/users");
		} catch (err) {
			alert(`Unable to add user: ${err.message}`);
		}
	};

	return (
		<>
			<ControlBar back="/users">
				<h2>Add User</h2>
			</ControlBar>
			<AddUserForm
				onSubmit={handleSubmit}
				user={user}
				setUser={setUser}
			/>
		</>
	);
};

export default AddUser;
