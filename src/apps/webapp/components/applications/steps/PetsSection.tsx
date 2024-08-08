import Textbox from "../../../../../features/ui/textbox/Textbox";
import { StepProps } from "../ApplicationForm";

const PetsSection = ({ application, onChange }: StepProps) => {
	return (
		<>
			<div className="column gap-05">
				<h3>Pet Information</h3>
				<p className="box-warning">
					We do allow pets with a $500 one-time pet fee (per pet, per
					lease).
				</p>
			</div>
			<div className="column gap-05">
				<p>
					Do you have any pets? If yes, please explain each pet
					information including breed and size.
				</p>
				<Textbox
					autoFocus
					label="Do You Have Any Pets?"
					value={application.pets}
					onChange={(e) => onChange({ pets: e.target.value })}
					required
				/>
			</div>
		</>
	);
};

export default PetsSection;
