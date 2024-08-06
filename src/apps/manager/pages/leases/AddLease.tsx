import { useState } from "react";
import { useNavigate } from "react-router-dom";
import createLease from "../../../../features/api/leases/createLease";
import LeaseForm from "../../components/leases/LeaseForm";
import ControlBar from "../../../../features/ui/controlBar/ControlBar";

const AddLease = () => {
	const navigate = useNavigate();
	const [lease, setLease] = useState({
		property: "",
		startDate: "",
		endDate: "",
		contract: "",
		tenants: [],
		rent: "",
		rentDate: "",
	});

	const handleSave = async () => {
		try {
			if (lease.tenants.length === 0) {
				return alert("Please select at least one tenant.");
			}
			if (!lease?.contract) {
				return alert("Please select a contract.");
			}
			await createLease(lease);
			alert("Lease has been created.");
			navigate("/leases");
		} catch (err) {
			alert("Unable to create new lease.");
		}
	};

	return (
		<>
			<ControlBar>
				<h2>Create Lease</h2>
			</ControlBar>
			<LeaseForm
				lease={lease}
				setLease={setLease}
				canEdit={true}
				handleSave={handleSave}
			/>
		</>
	);
};

export default AddLease;
