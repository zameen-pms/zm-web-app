import Input from "../../../../../features/ui/input/Input";
import { StepProps } from "../ApplicationForm";

const ReferenceSection = ({ application, onChange }: StepProps) => {
	return (
		<>
			<div className="column gap-05">
				<h3>References</h3>
			</div>
			<div className="column gap-05">
				<h4>Primary Reference</h4>
				<p>
					Please provide a reference we can reach out to with further
					questions (if needed).
				</p>
				<div className="form-grid">
					<Input
						autoFocus
						label="Reference Name"
						placeholder="Reference name"
						maxLength="50"
						value={application.primaryReference.name}
						onChange={(e) =>
							onChange({
								primaryReference: {
									...application.primaryReference,
									name: e.target.value,
								},
							})
						}
						required
					/>
					<Input
						label="Relation to Applicant"
						placeholder="Friend, Sibling, Parent, etc."
						maxLength="50"
						value={application.primaryReference.relation}
						onChange={(e) =>
							onChange({
								primaryReference: {
									...application.primaryReference,
									relation: e.target.value,
								},
							})
						}
						required
					/>
					<Input
						label="Reference Phone Number"
						placeholder="xxx-xxx-xxxx"
						maxLength="50"
						value={application.primaryReference.phoneNumber}
						onChange={(e) =>
							onChange({
								primaryReference: {
									...application.primaryReference,
									phoneNumber: e.target.value,
								},
							})
						}
						required
					/>
				</div>
			</div>
			<div className="column gap-05">
				<h4>Secondary Reference</h4>
				<p>Please provide another reference (if applicable)</p>
				<div className="form-grid">
					<Input
						label="Reference Name"
						placeholder="Reference name"
						maxLength="50"
						value={application.secondaryReference.name}
						onChange={(e) =>
							onChange({
								secondaryReference: {
									...application.secondaryReference,
									name: e.target.value,
								},
							})
						}
					/>
					<Input
						label="Relation to Applicant"
						placeholder="Friend, Sibling, Parent, etc."
						maxLength="50"
						value={application.secondaryReference.relation}
						onChange={(e) =>
							onChange({
								secondaryReference: {
									...application.secondaryReference,
									relation: e.target.value,
								},
							})
						}
					/>
					<Input
						label="Reference Phone Number"
						placeholder="xxx-xxx-xxxx"
						maxLength="50"
						value={application.secondaryReference.phoneNumber}
						onChange={(e) =>
							onChange({
								secondaryReference: {
									...application.secondaryReference,
									phoneNumber: e.target.value,
								},
							})
						}
					/>
				</div>
			</div>
		</>
	);
};

export default ReferenceSection;
