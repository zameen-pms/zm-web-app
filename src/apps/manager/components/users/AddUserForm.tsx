import { ChangeEvent, Dispatch, FC, SetStateAction, useState } from "react";
import { User } from "../../../../features/types/User";
import Form from "../../../../features/ui/form/Form";
import Button from "../../../../features/ui/button/Button";
import Input from "../../../../features/ui/input/Input";
import Dropdown from "../../../../features/ui/dropdown/Dropdown";

interface AddUserFormProps {
	onSubmit: () => Promise<void>;
	user: User;
	setUser: Dispatch<SetStateAction<User>>;
}

const AddUserForm: FC<AddUserFormProps> = ({ onSubmit, user, setUser }) => {
	const [isLoading, setIsLoading] = useState(false);

	const handleSubmit = async () => {
		try {
			setIsLoading(true);
			await onSubmit();
		} catch (err) {
			alert(`Unable to add user: ${err.message}`);
		} finally {
			setIsLoading(false);
		}
	};

	const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setUser({ ...user, [name]: value });
	};

	return (
		<Form onSubmit={handleSubmit}>
			<div className="form-grid">
				<Input
					label="First Name"
					name="firstName"
					value={user.firstName}
					onChange={handleInputChange}
					placeholder="First Name"
				/>
				<Input
					label="First Name"
					name="lastName"
					value={user.lastName}
					onChange={handleInputChange}
					placeholder="Last Name"
				/>
				<Input
					label="Email Name"
					type="email"
					name="email"
					value={user.email}
					onChange={handleInputChange}
					required
				/>
				<Dropdown
					label="Role"
					options={[
						{ value: "Tenant" },
						{ value: "Manager" },
						{ value: "Owner" },
					]}
					value={user.role}
					onChange={(option) =>
						setUser({ ...user, role: option.value })
					}
					required
				/>
				<Dropdown
					label="Status"
					options={[{ value: "Active" }, { value: "Disabled" }]}
					value={user.status}
					onChange={(option) =>
						setUser({ ...user, status: option.value })
					}
					required
				/>
			</div>
			<Button disabled={isLoading}>
				{isLoading ? "Adding User..." : "Add User"}
			</Button>
		</Form>
	);
};

export default AddUserForm;
