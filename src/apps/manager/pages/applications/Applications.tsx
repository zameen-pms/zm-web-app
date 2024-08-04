import { useEffect, useState } from "react";
import getApplications from "../../../../features/api/applications/getApplications";
import Tab from "../../../../features/ui/tab/Tab";
import ApplicationsTable from "../../components/applications/ApplicationsTable";

const Applications = () => {
	const [status, setStatus] = useState("All");
	const [applications, setApplications] = useState(null);

	const fetchApplications = async () => {
		try {
			const params = {
				status: undefined,
			};
			if (status !== "All") {
				params.status = status;
			}
			const { data } = await getApplications(params);
			setApplications(data.reverse());
		} catch (err) {
			alert("Unable to fetch applications.");
			console.log(err.message);
		}
	};

	useEffect(() => {
		fetchApplications();
	}, [status]);

	return (
		<>
			<Tab
				options={["All", "In-Progress", "Approved", "Rejected"]}
				tab={status}
				setTab={setStatus}
			/>
			{applications ? (
				<ApplicationsTable applications={applications} />
			) : (
				<p>Loading applications...</p>
			)}
		</>
	);
};

export default Applications;
