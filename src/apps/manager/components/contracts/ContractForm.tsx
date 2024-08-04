import { useEffect, useState } from "react";
import getUsers from "../../../../features/api/users/getUsers";
import FileUpload from "../../../../features/ui/fileUpload/FileUpload";
import Input from "../../../../features/ui/input/Input";
import UserSearchDropdown from "./UserSearchDropdown";
import Button from "../../../../features/ui/button/Button";

const ContractForm = ({
	contract,
	setContract,
	files,
	setSelectedFiles,
	canEdit,
	handleSave,
}) => {
	const [users, setUsers] = useState([]);
	const [search, setSearch] = useState("");

	const fetchUsers = async () => {
		try {
			const { data } = await getUsers();
			setUsers(data);
		} catch (err) {
			alert("Unable to fetch users.");
		}
	};

	useEffect(() => {
		fetchUsers();
	}, []);

	const handleDropdown = (selected) => {
		setContract({ ...contract, parties: selected });
	};

	return (
		<form onSubmit={handleSave} className="column gap-2">
			<div className="grid">
				<FileUpload
					allowedTypes={["application/pdf"]}
					setSelectedFiles={setSelectedFiles}
					multiple={false}
					text={
						files?.length > 0
							? `Uploaded: ${files[0].name}`
							: "Upload PDF Document"
					}
				/>
			</div>
			<div className="grid">
				<Input
					label="Contract Title"
					value={contract?.title || ""}
					onChange={(e) =>
						setContract({ ...contract, title: e.target.value })
					}
					required
				/>
				<div className="column gap-05">
					<Input
						label="Parties"
						placeholder="Search Users..."
						value={search || ""}
						onChange={(e) => setSearch(e.target.value)}
					/>
					<UserSearchDropdown
						options={users}
						onChange={handleDropdown}
						search={search}
					/>
				</div>
			</div>
			{canEdit && <Button type="submit">Save</Button>}
		</form>
	);
};

export default ContractForm;
