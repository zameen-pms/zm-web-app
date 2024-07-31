import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import {
	getApplication,
	getCanEdit,
	setApplication,
	setCanEdit,
	setIsLoading,
} from "../../../../features/app/applicationSlice";
import { useEffect } from "react";
import Container from "../../../../features/ui/container/Container";
import { getAddress } from "../../../../features/utils/getAddress";
import Button from "../../../../features/ui/button/Button";
import getApplicationByToken from "../../../../features/api/applications/getApplicationByToken";
import updateApplicationByToken from "../../../../features/api/applications/updateApplicationByToken";
import ApplicationForm from "../../components/applications/ApplicationForm";

const ViewApplication = () => {
	const { token } = useParams();
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const application = useSelector(getApplication);
	const canEdit = useSelector(getCanEdit);

	const fetchApplication = async () => {
		try {
			const { data } = await getApplicationByToken(token);

			dispatch(setCanEdit(false));
			dispatch(setApplication(data));
		} catch (err) {
			alert(`Unable to load application: ${err.message}`);
			navigate("/");
		}
	};

	useEffect(() => {
		fetchApplication();
	}, [token]);

	const handleEditClick = async () => {
		try {
			if (canEdit) {
				await fetchApplication();
				dispatch(setCanEdit(false));
			} else {
				dispatch(setCanEdit(true));
			}
		} catch (err) {
			console.log(err);
		}
	};

	const handleSubmit = async () => {
		try {
			dispatch(setIsLoading(true));
			await updateApplicationByToken(token, application);
			await fetchApplication();
			alert("Application has been updated.");
		} catch (err) {
			console.log(err);
		} finally {
			dispatch(setIsLoading(false));
		}
	};

	if (!application.property) {
		return (
			<Container>
				<p>Loading...</p>
			</Container>
		);
	}

	return (
		<section className="padding column gap-2">
			<div className="row align-center justify-sb">
				<h2>{getAddress(application.property.address)}</h2>
				<Button onClick={handleEditClick}>
					{canEdit ? "Cancel" : "Edit Application"}
				</Button>
			</div>
			<ApplicationForm onSubmit={handleSubmit} newForm={false} />
		</section>
	);
};

export default ViewApplication;
