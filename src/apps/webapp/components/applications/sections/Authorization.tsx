import { useDispatch, useSelector } from "react-redux";
import { ApplicationSection, StyledFormGrid } from "../Applications.styled";
import {
	getApplication,
	getCanEdit,
	setApplication,
} from "../../../../../features/app/applicationSlice";
import Dropdown from "../../../../../features/ui/dropdown/Dropdown";

const Authorization = () => {
	const dispatch = useDispatch();
	const application = useSelector(getApplication);
	const canEdit = useSelector(getCanEdit);

	return (
		<ApplicationSection>
			<div className="columnn">
				<h2>Authorization & Consent</h2>
				<p className="gray">
					By agreeing to these terms, you authorize Zameen Management
					LLC to the following:
				</p>
			</div>
			<StyledFormGrid>
				<Dropdown
					label="I consent to a background check"
					options={[{ value: "Agree" }, { value: "Disagree" }]}
					onChange={(option) =>
						dispatch(
							setApplication({
								...application,
								authorization: {
									...application.personal,
									backgroundCheck: option.value,
								},
							})
						)
					}
					required
					disabled={!canEdit}
				/>
				<Dropdown
					label="I consent to a credit check"
					options={[{ value: "Agree" }, { value: "Disagree" }]}
					onChange={(option) =>
						dispatch(
							setApplication({
								...application,
								authorization: {
									...application.personal,
									backgroundCheck: option.value,
								},
							})
						)
					}
					required
					disabled={!canEdit}
				/>
				<Dropdown
					label="I consent to a reference check"
					options={[{ value: "Agree" }, { value: "Disagree" }]}
					onChange={(option) =>
						dispatch(
							setApplication({
								...application,
								authorization: {
									...application.personal,
									backgroundCheck: option.value,
								},
							})
						)
					}
					required
					disabled={!canEdit}
				/>
				<Dropdown
					label="I consent to an employer check"
					options={[{ value: "Agree" }, { value: "Disagree" }]}
					onChange={(option) =>
						dispatch(
							setApplication({
								...application,
								authorization: {
									...application.personal,
									backgroundCheck: option.value,
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

export default Authorization;
