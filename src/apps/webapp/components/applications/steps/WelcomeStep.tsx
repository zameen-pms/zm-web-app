import Dropdown from "../../../../../features/ui/dropdown/Dropdown";
import Input from "../../../../../features/ui/input/Input";
import { StepProps } from "../ApplicationForm";

const WelcomeStep = ({ application, onChange }: StepProps) => {
	return (
		<>
			<h2>Before You Begin:</h2>
			<p className="text-primary italic">
				This form will take approximately 5-10 minutes to fill out. If
				you have trouble submitting this application, please contact our
				leasing director at faiqakamran@icloud.com and we will provide a
				printable version.
			</p>
			<p className="box-warning">
				Please note, separate applications need to be submitted for{" "}
				<b className="underline">each</b> adult living in the unit.
				Co-signers present on the lease will also need a separate
				application. Applications cannot be processed without{" "}
				<b className="underline">all</b> applications being submitted.
			</p>
			<div className="column gap-05">
				<p>
					If you are filling out this application on behalf of another
					individual, please enter their name below.
				</p>
				<Input
					label="Signing on Behalf Of:"
					maxLength="50"
					placeholder="Enter full name"
					value={application.cosigning}
					onChange={(e) => onChange({ cosigning: e.target.value })}
				/>
			</div>
			<div className="column gap-05">
				<p>
					Are you the primary applicant for this property or a
					co-applicant?
				</p>
				<Dropdown
					label="Applicant Type"
					options={[{ value: "Primary" }, { value: "Co-Applicant" }]}
					value={application.type}
					onChange={(option) => onChange({ type: option.value })}
					required
				/>
			</div>
		</>
	);
};

export default WelcomeStep;
