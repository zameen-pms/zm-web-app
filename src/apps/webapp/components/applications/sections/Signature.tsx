import { useDispatch, useSelector } from "react-redux";
import {
	getApplication,
	getCanEdit,
	setApplication,
} from "../../../../../features/app/applicationSlice";
import { ApplicationSection, StyledFormGrid } from "../Applications.styled";
import Input from "../../../../../features/ui/input/Input";

const Signature = () => {
	const dispatch = useDispatch();
	const application = useSelector(getApplication);
	const canEdit = useSelector(getCanEdit);

	return (
		<ApplicationSection>
			<div className="column gap-05">
				<h2>Signature</h2>
				<p className="gray">
					By signing this application, you acknowledge that all the
					information provided is accurate and complete to the best of
					your knowledge. Any false statements or omissions may lead
					to the rejection of your application or termination of your
					lease agreement.
				</p>
				<p className="gray">
					Privacy Notice: The information you provide in this
					application will be used solely for the purpose of
					evaluating your tenancy. We will not share your personal
					information with any third parties without your explicit
					consent, except as required by law. Your data is stored
					securely and will be handled with the utmost care to ensure
					its confidentiality and integrity.
				</p>
				<p className="gray">
					Please sign below to indicate your agreement with the above
					terms and to authorize us to verify the information
					provided. By providing an electronic signature, you agree
					that your electronic signature is the legal equivalent of
					your manual signature.
				</p>
			</div>
			<StyledFormGrid>
				<Input
					label="Full Name"
					value={application?.signature?.name || ""}
					onChange={(e) =>
						dispatch(
							setApplication({
								...application,
								signature: {
									...application.signature,
									name: e.target.value,
								},
							})
						)
					}
					required
					disabled={!canEdit}
				/>
				<Input
					label="Today's Date"
					value={application?.signature?.date || ""}
					readOnly
					required
					disabled
				/>
			</StyledFormGrid>
		</ApplicationSection>
	);
};

export default Signature;
