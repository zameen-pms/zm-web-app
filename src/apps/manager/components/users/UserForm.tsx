import Dropdown from "../../../../features/ui/dropdown/Dropdown";
import Input from "../../../../features/ui/input/Input";

const UserForm = ({ loading, canEdit, user, setUser }) => {
	if (loading) return <p>Loading...</p>;

	return (
		<form className="column gap-1">
			<Input
				label="First Name"
				value={user?.firstName}
				readOnly
				disabled
			/>
			<Input label="Last Name" value={user?.lastName} readOnly disabled />
			<Input label="Role" value={user?.role} readOnly disabled />
			<Dropdown
				label="Status"
				options={["Active", "Disabled"]}
				onChange={(val) => setUser({ ...user, status: val })}
				value={user?.status}
				disabled={!canEdit}
			/>
		</form>
	);
};

export default UserForm;
