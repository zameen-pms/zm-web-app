import { useDispatch, useSelector } from "react-redux";
import {
	getApplication,
	getCanEdit,
	setApplication,
} from "../../../../../features/app/applicationSlice";
import { ApplicationSection, StyledFormGrid } from "../Applications.styled";
import Input from "../../../../../features/ui/input/Input";
import { formatSsn } from "../../../../../features/utils/formatSsn";

const PersonalInformation = () => {
	const dispatch = useDispatch();
	const application = useSelector(getApplication);
	const canEdit = useSelector(getCanEdit);

	return (
		<ApplicationSection>
			<div className="columnn">
				<h2>Personal Information</h2>
				<p className="gray">
					This information will be used to verify your identity and,
					if applicable, create your tenant account.
				</p>
			</div>
			<StyledFormGrid>
				<Input
					label="First Name"
					value={application?.personal?.firstName || ""}
					onChange={(e) =>
						dispatch(
							setApplication({
								...application,
								personal: {
									...application.personal,
									firstName: e.target.value,
								},
							})
						)
					}
					required
					disabled={!canEdit}
				/>
				<Input
					label="Last Name"
					value={application?.personal?.lastName || ""}
					onChange={(e) =>
						dispatch(
							setApplication({
								...application,
								personal: {
									...application.personal,
									lastName: e.target.value,
								},
							})
						)
					}
					required
					disabled={!canEdit}
				/>
				<Input
					label="Date of Birth"
					type="date"
					value={application?.personal?.dob || ""}
					onChange={(e) =>
						dispatch(
							setApplication({
								...application,
								personal: {
									...application.personal,
									dob: e.target.value,
								},
							})
						)
					}
					required
					disabled={!canEdit}
				/>
				<Input
					label="Social Security #"
					value={application?.personal?.ssn || ""}
					onChange={(e) =>
						dispatch(
							setApplication({
								...application,
								personal: {
									...application.personal,
									ssn: formatSsn(e.target.value),
								},
							})
						)
					}
					required
					disabled={!canEdit}
				/>
				<Input
					label="Phone Number"
					value={application?.personal?.phoneNumber || ""}
					onChange={(e) =>
						dispatch(
							setApplication({
								...application,
								personal: {
									...application.personal,
									phoneNumber: e.target.value,
								},
							})
						)
					}
					required
					disabled={!canEdit}
				/>
				<Input
					label="Email Address"
					type="email"
					value={application?.personal?.email || ""}
					onChange={(e) =>
						dispatch(
							setApplication({
								...application,
								personal: {
									...application.personal,
									email: e.target.value,
								},
							})
						)
					}
					required
					disabled={!canEdit}
				/>
				<Input
					label="Driver's License"
					value={application?.personal?.driversLicense || ""}
					onChange={(e) =>
						dispatch(
							setApplication({
								...application,
								personal: {
									...application.personal,
									driversLicense: e.target.value,
								},
							})
						)
					}
					required
					disabled={!canEdit}
				/>
			</StyledFormGrid>
		</ApplicationSection>
	);
};

export default PersonalInformation;
