import { useNavigate, useParams } from "react-router-dom";
import Button from "../../../../features/ui/button/Button";
import { useEffect, useState } from "react";
import getLeaseById from "../../../../features/api/leases/getLeaseById";
import deleteLeaseById from "../../../../features/api/leases/deleteLeaseById";
import ViewLease from "../../components/leases/ViewLease";

const Lease = () => {
	const { leaseId } = useParams();
	const navigate = useNavigate();
	const [lease, setLease] = useState(null);

	const fetchLease = async () => {
		try {
			const { data } = await getLeaseById(leaseId);
			setLease(data);
		} catch (err) {
			alert("Unable to fetch lease.");
			navigate("/leases");
		}
	};

	useEffect(() => {
		fetchLease();
	}, []);

	const handleDelete = async () => {
		if (
			!confirm(
				"Are you sure you want to delete this lease? This action cannot be undone."
			)
		) {
			return;
		}
		try {
			await deleteLeaseById(leaseId);
			alert("Lease has been deleted.");
			navigate("/leases");
		} catch (err) {
			alert("Unable to delete lease.");
		}
	};

	if (!lease) return <p>Loading Lease...</p>;

	return (
		<>
			<div className="row justify-sb align-center">
				{lease?.contract?.title ? (
					<h3>{lease.contract.title}</h3>
				) : (
					<h3>Lease</h3>
				)}
				<Button onClick={handleDelete}>Delete</Button>
			</div>
			<ViewLease lease={lease} />
		</>
	);
};

export default Lease;
