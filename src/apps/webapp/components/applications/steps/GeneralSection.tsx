import Input from "../../../../../features/ui/input/Input";
import Textbox from "../../../../../features/ui/textbox/Textbox";
import { StepProps } from "../ApplicationForm";

const GeneralSection = ({ application, onChange }: StepProps) => {
	return (
		<>
			<div className="column gap-05">
				<h3>General Questions</h3>
			</div>
			<div className="column gap-05">
				<p>Do you smoke?</p>
				<Input
					autoFocus
					label="Do You Smoke?"
					placeholder="Yes / No"
					maxLength="25"
					value={application.generalQuestions.doesSmoke}
					onChange={(e) =>
						onChange({
							generalQuestions: {
								...application.generalQuestions,
								doesSmoke: e.target.value,
							},
						})
					}
					required
				/>
			</div>
			<div className="column gap-05">
				<p>
					Have you ever been convicted of a felony? If yes, please
					explain.
				</p>
				<Textbox
					label="Ever Convicted of Felony?"
					value={application.generalQuestions.convictedFelon}
					onChange={(e) =>
						onChange({
							generalQuestions: {
								...application.generalQuestions,
								convictedFelon: e.target.value,
							},
						})
					}
					required
				/>
			</div>
			<div className="column gap-05">
				<p>
					Have you ever filed for bankruptcy? If yes, please explain.
				</p>
				<Textbox
					label="Ever Filed Bankruptcy?"
					value={application.generalQuestions.bankruptcy}
					onChange={(e) =>
						onChange({
							generalQuestions: {
								...application.generalQuestions,
								bankruptcy: e.target.value,
							},
						})
					}
					required
				/>
			</div>
			<div className="column gap-05">
				<p>Have you ever been evicted? If yes, please explain.</p>
				<Textbox
					label="Ever Been Evicted?"
					value={application.generalQuestions.evicted}
					onChange={(e) =>
						onChange({
							generalQuestions: {
								...application.generalQuestions,
								evicted: e.target.value,
							},
						})
					}
					required
				/>
			</div>
		</>
	);
};

export default GeneralSection;
