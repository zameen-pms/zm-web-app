import { useState } from "react";
import { useNavigate } from "react-router-dom";
import uploadAsset from "../../../../features/api/assets/uploadAsset";
import createContract from "../../../../features/api/contracts/createContract";
import ContractForm from "../../components/contracts/ContractForm";
import ControlBar from "../../../../features/ui/controlBar/ControlBar";
import FileUpload from "../../../../features/ui/fileUpload/FileUpload";

const AddContract = () => {
	const navigate = useNavigate();
	const [contract, setContract] = useState({
		title: "",
		parties: [],
		file: "",
	});
	const [files, setFiles] = useState([]);

	const handleSave = async (e) => {
		e.preventDefault();
		try {
			if (contract.parties.length === 0) {
				return alert("Please select at least one party.");
			}
			const { data } = await uploadAsset(files[0]);
			await createContract({ ...contract, file: data });
			alert("Contract has been created.");
			navigate("/contracts");
		} catch (err) {
			alert("Unable to create new contract.");
		}
	};

	const handleFileChange = (files) => setFiles(files);

	return (
		<>
			<ControlBar>
				<h2>Create Contract</h2>
				<FileUpload
					allowedFileTypes={["application/pdf"]}
					onChange={handleFileChange}
					text={
						files.length === 1 ? files[0].name : "Upload Contract"
					}
				/>
			</ControlBar>
			<ContractForm
				contract={contract}
				setContract={setContract}
				canEdit={true}
				handleSave={handleSave}
			/>
		</>
	);
};

export default AddContract;
