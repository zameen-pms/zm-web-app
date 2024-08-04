import { useState } from "react";
import { useNavigate } from "react-router-dom";
import uploadAsset from "../../../../features/api/assets/uploadAsset";
import createContract from "../../../../features/api/contracts/createContract";
import ContractForm from "../../components/contracts/ContractForm";

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

	return (
		<ContractForm
			contract={contract}
			setContract={setContract}
			files={files}
			setSelectedFiles={setFiles}
			canEdit={true}
			handleSave={handleSave}
		/>
	);
};

export default AddContract;
