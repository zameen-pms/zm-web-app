import { useState } from "react";
import { useNavigate } from "react-router-dom";
import createLease from "../../../../features/api/leases/createLease";
import LeaseForm from "../../components/leases/LeaseForm";

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
		status: "",
	});

	const handleSave = async (e) => {
		e.preventDefault();
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
		<LeaseForm
			lease={lease}
			setLease={setLease}
			canEdit={true}
			handleSave={handleSave}
		/>
	);
};

export default AddLease;
