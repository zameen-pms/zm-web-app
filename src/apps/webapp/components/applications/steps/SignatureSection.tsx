import Input from "../../../../../features/ui/input/Input";
import { StepProps } from "../ApplicationForm";

const SignatureSection = ({ application, onChange }: StepProps) => {
	return (
		<>
			<div className="column gap-05">
				<h3>Applicant Signature</h3>
				<p>
					By signing below, the Applicant grants manager the right to
					obtain a verbal or written credit report, past rental,
					employment, and criminal history.
				</p>
				<div className="form-grid">
					<Input
						autoFocus
						label="Full Name"
						placeholder="Enter full name"
						maxLength="50"
						value={application.signature.name}
						onChange={(e) =>
							onChange({
								signature: {
									...application.signature,
									name: e.target.value,
								},
							})
						}
						required
					/>
					<Input
						label="Date"
						value={application.signature.date}
						disabled
						readOnly
						required
					/>
				</div>
			</div>
		</>
	);
};

export default SignatureSection;
