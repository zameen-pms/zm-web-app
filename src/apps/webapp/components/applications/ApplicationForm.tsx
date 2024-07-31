import { useSelector } from "react-redux";
import {
	getCanEdit,
	getIsLoading,
} from "../../../../features/app/applicationSlice";
import { StyledApplicationForm } from "./Applications.styled";
import PersonalInformation from "./sections/PersonalInformation";
import RentalHistory from "./sections/RentalHistory";
import WorkHistory from "./sections/WorkHistory";
import Finances from "./sections/Finances";
import References from "./sections/References";
import GeneralQuestions from "./sections/GeneralQuestions";
import Members from "./sections/Members";
import Documents from "./sections/Documents";
import Button from "../../../../features/ui/button/Button";
import Authorization from "./sections/Authorization";
import Signature from "./sections/Signature";

const ApplicationForm = ({ onSubmit, newForm = true }) => {
	const isLoading = useSelector(getIsLoading);
	const canEdit = useSelector(getCanEdit);

	const handleSubmit = (e) => {
		if (isLoading) return;
		e.preventDefault();
		onSubmit && onSubmit();
	};

	return (
		<StyledApplicationForm onSubmit={handleSubmit}>
			{newForm && <PersonalInformation />}
			<RentalHistory />
			<WorkHistory />
			<Finances />
			<References />
			<GeneralQuestions />
			<Members />
			<Documents />
			{newForm && <Authorization />}
			{newForm && <Signature />}
			{canEdit && (
				<Button type="submit">
					{isLoading
						? "Submitting..."
						: newForm
						? "Submit Application"
						: "Update Application"}
				</Button>
			)}
		</StyledApplicationForm>
	);
};

export default ApplicationForm;
