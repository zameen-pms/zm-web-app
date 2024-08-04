import { useNavigate, useParams } from "react-router-dom";
import Container from "../../../../features/ui/container/Container";
import { useEffect, useState } from "react";
import getContractById from "../../../../features/api/contracts/getContractById";
import getAsset from "../../../../features/api/assets/getAsset";
import deleteContractById from "../../../../features/api/contracts/deleteContractById";
import Button from "../../../../features/ui/button/Button";
import Input from "../../../../features/ui/input/Input";
import { getTextDate } from "../../../../features/utils/getTextDate";
import PdfViewer from "../../../../features/ui/pdfViewer/PdfViewer";

const Contract = () => {
	const { contractId } = useParams();
	const navigate = useNavigate();
	const [contract, setContract] = useState(null);
	const [url, setUrl] = useState(null);

	const fetchContract = async () => {
		try {
			const { data } = await getContractById(contractId);
			if (data?.file) {
				const { data: file } = await getAsset(data.file);
				setUrl(file);
			}
			setContract(data);
		} catch (err) {
			alert("Unable to fetch contract.");
			navigate("/contracts");
		}
	};

	useEffect(() => {
		fetchContract();
	}, []);

	const handleDelete = async () => {
		if (
			!confirm(
				"Are you sure you want to delete this contract? This action cannot be undone."
			)
		) {
			return;
		}
		try {
			await deleteContractById(contractId);
			alert("Contract has been deleted.");
			navigate("/contracts");
		} catch (err) {
			alert("Unable to delete contract.");
		}
	};

	if (!contract) return <p>Loading...</p>;

	return (
		<Container>
			<div className="row justify-sb align-center">
				<div className="row align-center gap-05">
					{contract?.title && <h3>Contract: {contract.title}</h3>}
				</div>
				<Button onClick={handleDelete}>Delete</Button>
			</div>
			<div className="column gap-2">
				<div className="grid">
					<Input
						label="Document Title"
						value={contract?.title || ""}
						readOnly
						disabled
					/>
					<Input
						label="Parties"
						value={
							contract?.parties
								?.map(
									(member) =>
										`${member?.firstName} ${member?.lastName} (${member?.role})`
								)
								.join(", ") || ""
						}
						readOnly
						disabled
					/>
					<Input
						label="Date"
						value={
							getTextDate(contract?.createdAt.split("T")[0]) || ""
						}
						readOnly
						disabled
					/>
				</div>
				{url && <PdfViewer url={url} />}
			</div>
		</Container>
	);
};

export default Contract;
