import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import getUserById from "../../../../features/api/users/getUserById";
import updateUserById from "../../../../features/api/users/updateUserById";
import Button from "../../../../features/ui/button/Button";
import UserForm from "../../components/users/UserForm";
import ControlBar from "../../../../features/ui/controlBar/ControlBar";
import { User as UserModel } from "../../../../features/types/User";

const User = () => {
	const { userId } = useParams();
	const [user, setUser] = useState<UserModel>();
	const [loading, setLoading] = useState(false);
	const [canEdit, setCanEdit] = useState(false);

	const fetchUser = async () => {
		try {
			setLoading(true);
			const { data } = await getUserById(userId);
			setUser(data);
		} catch (err) {
			alert("Unable to fetch user.");
			console.log(err.message);
		} finally {
			setLoading(false);
		}
	};

	useEffect(() => {
		fetchUser();
	}, [userId]);

	const handleSubmit = async (e) => {
		e?.preventDefault();
		try {
			await updateUserById(userId, user);
			handleEditClick();
			alert("User has been updated.");
		} catch (err) {
			alert("Unable to save user data.");
			console.log(err.message);
		}
	};

	const handleEditClick = () => {
		if (canEdit) {
			setCanEdit(false);
			fetchUser();
		} else {
			setCanEdit(true);
		}
	};

	return (
		<>
			<ControlBar back="/users">
				<h2>
					{user?.firstName && user?.lastName
						? `${user.firstName} ${user.lastName}`
						: "User"}
				</h2>
				<div className="row align-center gap-05">
					<Button onClick={handleEditClick}>
						{canEdit ? "Cancel" : "Edit"}
					</Button>
					{canEdit && <Button onClick={handleSubmit}>Save</Button>}
				</div>
			</ControlBar>
			<UserForm
				loading={loading}
				canEdit={canEdit}
				user={user}
				setUser={setUser}
			/>
		</>
	);
};

export default User;
