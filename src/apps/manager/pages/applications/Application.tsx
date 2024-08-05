import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import getApplicationById from "../../../../features/api/applications/getApplicationById";
import Tab from "../../../../features/ui/tab/Tab";
import updateApplicationById from "../../../../features/api/applications/updateApplicationById";
import Button from "../../../../features/ui/button/Button";
import ApplicationOverview from "../../components/applications/ApplicationOverview";
import ApplicationForm from "../../components/applications/ApplicationForm";

const Application = () => {
	const { applicationId } = useParams();
	const navigate = useNavigate();
	const [application, setApplication] = useState(null);
	const [tab, setTab] = useState("Overview");
	const [render, setRender] = useState(null);
	const [canEdit, setCanEdit] = useState(false);

	const fetchApp = async () => {
		try {
			const { data } = await getApplicationById(applicationId);
			setApplication(data);
		} catch (err) {
			alert("Unable to fetch application");
			console.log(err.message);
			navigate("/applications");
		}
	};

	useEffect(() => {
		fetchApp();
	}, []);

	const handleEditClick = async () => {
		try {
			if (canEdit) {
				await fetchApp();
				setCanEdit(false);
			} else {
				setCanEdit(true);
			}
		} catch (err) {
			console.log(err);
		}
	};

	const handleSave = async () => {
		try {
			await updateApplicationById(applicationId, application);
			handleEditClick();
			alert("Application has been saved.");
		} catch (err) {
			console.log(err);
		}
	};

	useEffect(() => {
		if (tab === "Overview") {
			setRender(
				<ApplicationOverview
					canEdit={canEdit}
					application={application}
					setApplication={setApplication}
				/>
			);
		} else {
			setRender(<ApplicationForm application={application} />);
		}
	}, [tab, application, canEdit]);

	if (!application) return <p>Retrieving Application...</p>;

	return (
		<>
			<div className="row align-center justify-sb">
				<h3>
					{`Application: ${application?.personal?.firstName} ${application?.personal?.lastName}` ||
						"Application"}
				</h3>
				<div className="row gap-05">
					{canEdit && <Button onClick={handleSave}>Save</Button>}
					<Button onClick={handleEditClick}>
						{canEdit ? "Cancel" : "Edit"}
					</Button>
				</div>
			</div>
			<Tab
				options={["Overview", "Application"]}
				tab={tab}
				setTab={setTab}
			/>
			{render}
		</>
	);
};

export default Application;
