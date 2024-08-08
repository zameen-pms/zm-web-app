import { ReactElement, useEffect, useState } from "react";
import { getAddress } from "../../../../features/utils/getAddress";
import Modal from "../../../../features/ui/modal/Modal";
import Button from "../../../../features/ui/button/Button";
import WelcomeStep from "./steps/WelcomeStep";
import PersonalInfoStep from "./steps/PersonalInfoStep";
import useMultiPageForm from "../../../../features/hooks/useMultiPageForm";
import Form from "../../../../features/ui/form/Form";
import {
	APPLICATION_MODEL,
	ApplicationInterface,
} from "../../../../features/types/Application";
import ResidenceStep from "./steps/ResidenceStep";
import EmploymentSection from "./steps/EmploymentSection";
import GeneralSection from "./steps/GeneralSection";
import ReferenceSection from "./steps/ReferenceSection";
import PetsSection from "./steps/PetsSection";
import OthersSection from "./steps/OthersSection";
import SignatureSection from "./steps/SignatureSection";
import createApplication from "../../../../features/api/applications/createApplication";
import {
	addLocalData,
	getLocalData,
	removeLocalData,
} from "../../../../features/utils/localStorage";
import getApplicationById from "../../../../features/api/applications/getApplicationById";
import { getCurrentTime } from "../../../../features/utils/getCurrentTime";
import deleteApplicationById from "../../../../features/api/applications/deleteApplicationById";
import updateApplicationById from "../../../../features/api/applications/updateApplicationById";
import ApplicationOverview from "./ApplicationOverview";
import { FormNavItem, StyledFormNav } from "./Applications.styled";

export type StepProps = {
	application: ApplicationInterface;
	onChange?: (newValues) => void;
	goTo?: (step: number) => void;
};

const ApplicationForm = ({ property }) => {
	const [isLoading, setIsLoading] = useState(false);
	const [appStatus, setAppStatus] = useState("");
	const [application, setApplication] =
		useState<ApplicationInterface>(APPLICATION_MODEL);
	const [formNav, setFormNav] = useState<number[]>([]);

	const handleChange = (newValues) => {
		setApplication({ ...application, ...newValues });
	};

	let steps: ReactElement[] = [
		<WelcomeStep application={application} onChange={handleChange} />,
		<PersonalInfoStep application={application} onChange={handleChange} />,
		<ResidenceStep application={application} onChange={handleChange} />,
		<EmploymentSection application={application} onChange={handleChange} />,
		<GeneralSection application={application} onChange={handleChange} />,
		<ReferenceSection application={application} onChange={handleChange} />,
		<PetsSection application={application} onChange={handleChange} />,
		<OthersSection application={application} onChange={handleChange} />,
		<SignatureSection application={application} onChange={handleChange} />,
		<ApplicationOverview application={application} />,
	];
	const {
		currentStep,
		currentComponent,
		next,
		previous,
		goTo,
		isFirstStep,
		isLastStep,
	} = useMultiPageForm({ steps });

	const createApp = async () => {
		try {
			const { data } = await createApplication({
				...application,
				property: property._id,
			});
			addLocalData("applicationId", data._id);
		} catch (err) {
			console.log(err);
		}
	};

	const deleteApp = async (id: string) => {
		try {
			await deleteApplicationById(id);
		} catch (err) {
			console.log(err);
		} finally {
			removeLocalData("applicationId");
		}
	};

	const checkExistingApp = async () => {
		const appId = getLocalData("applicationId");
		if (!appId) return;

		try {
			setIsLoading(true);

			const { data } = await getApplicationById(appId);

			if (data.property === property._id) {
				setApplication({ ...data, property: data.property._id });
				setAppStatus(`Updated: ${getCurrentTime()}`);
			} else {
				await deleteApp(appId);
			}
		} catch (err) {
			console.log(err);
		} finally {
			setIsLoading(false);
		}
	};

	const saveApp = async () => {
		const appId = getLocalData("applicationId");

		try {
			setAppStatus("Saving...");

			const { data } = await updateApplicationById(appId, application);

			setApplication(data);
			setAppStatus(`Updated: ${getCurrentTime()}`);
		} catch (err) {
			console.log(err);
		}
	};

	useEffect(() => {
		checkExistingApp();
	}, []);

	useEffect(() => {
		const temp = [];
		for (let i = 0; i <= currentStep; i++) temp.push(i);
		setFormNav(temp);
	}, [currentStep]);

	const handleSubmit = async () => {
		const appId = getLocalData("applicationId");

		try {
			setIsLoading(true);

			if (isFirstStep && !appId) {
				await createApp();
			} else {
				await saveApp();
				if (isLastStep) {
					console.log(application);
				}
			}

			next();
		} catch (err) {
			console.log(err);
		} finally {
			setIsLoading(false);
		}
	};

	return (
		<Form onSubmit={handleSubmit}>
			<div className="row justify-sb">
				<h2>Rental Application for {getAddress(property.address)}</h2>
				{appStatus && <p className="tag-xs">{appStatus}</p>}
			</div>
			<Modal gap={2}>
				{isLoading ? <p>Loading Form...</p> : currentComponent}
			</Modal>
			<div className="row justify-sb">
				{!isFirstStep && (
					<Button type="button" onClick={previous}>
						Previous
					</Button>
				)}
				{currentStep === steps.length - 1 ? (
					<StyledFormNav>
						{formNav.map((page: number, index: number) => (
							<FormNavItem
								onClick={() => goTo(page)}
								$active={page === currentStep}
								key={index}
							>
								{page + 1}
							</FormNavItem>
						))}
					</StyledFormNav>
				) : (
					<p>
						{currentStep + 1} / {steps.length}
					</p>
				)}
				<Button disabled={isLoading}>
					{isLastStep ? "Submit Application" : "Next Step"}
				</Button>
			</div>
		</Form>
	);
};

export default ApplicationForm;
