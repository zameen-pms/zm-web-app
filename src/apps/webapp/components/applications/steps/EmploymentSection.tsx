import FileUploadModal from "../../../../../features/ui/fileUploadModal/FileUploadModal";
import Input from "../../../../../features/ui/input/Input";
import Textbox from "../../../../../features/ui/textbox/Textbox";
import { StepProps } from "../ApplicationForm";

const EmploymentSection = ({ application, onChange }: StepProps) => {
	return (
		<>
			<div className="column gap-05">
				<h3>Employment History</h3>
			</div>
			<div className="column gap-05">
				<h4>Current Employer</h4>
				<div className="form-grid">
					<Input
						autoFocus
						label="Company Name"
						placeholder="Company name"
						maxLength="100"
						value={application.currentEmployer.company}
						onChange={(e) =>
							onChange({
								...application,
								currentEmployer: {
									...application.currentEmployer,
									company: e.target.value,
								},
							})
						}
						required
					/>
					<Input
						label="Role"
						placeholder="Your role in company"
						maxLength="100"
						value={application.currentEmployer.role}
						onChange={(e) =>
							onChange({
								...application,
								currentEmployer: {
									...application.currentEmployer,
									role: e.target.value,
								},
							})
						}
						required
					/>
					<Input
						label="Monthly Income ($)"
						placeholder="Gross monthly income in dollars"
						type="number"
						min="1"
						max="99999"
						value={application.currentEmployer.monthlyIncome}
						onChange={(e) =>
							onChange({
								...application,
								currentEmployer: {
									...application.currentEmployer,
									monthlyIncome: e.target.value,
								},
							})
						}
						required
					/>
					<Input
						label="Employment Date"
						placeholder="MM-DD-YYYY"
						value={application.currentEmployer.dates}
						onChange={(e) =>
							onChange({
								currentEmployer: {
									...application.currentEmployer,
									dates: e.target.value,
								},
							})
						}
						required
					/>
				</div>
			</div>
			<div className="column gap-05">
				<h4>Previous Employer</h4>
				<p>
					If you have been at your current job for less than two
					years, please provide your previous job history (otherwise
					just leave this section blank).
				</p>
				<div className="form-grid">
					<Input
						label="Company Name"
						placeholder="Company name"
						maxLength="100"
						value={application.previousEmployer.company}
						onChange={(e) =>
							onChange({
								...application,
								previousEmployer: {
									...application.previousEmployer,
									company: e.target.value,
								},
							})
						}
					/>
					<Input
						label="Role"
						placeholder="Your role in company"
						maxLength="100"
						value={application.previousEmployer.role}
						onChange={(e) =>
							onChange({
								...application,
								previousEmployer: {
									...application.previousEmployer,
									role: e.target.value,
								},
							})
						}
					/>
					<Input
						label="Monthly Income ($)"
						placeholder="Gross monthly income in dollars"
						type="number"
						value={application.previousEmployer.monthlyIncome}
						onChange={(e) =>
							onChange({
								...application,
								previousEmployer: {
									...application.previousEmployer,
									monthlyIncome: e.target.value,
								},
							})
						}
					/>
					<Input
						label="Employment Dates"
						placeholder="MM-DD-YYYY - MM-DD-YYYY"
						value={application.previousEmployer.dates}
						onChange={(e) =>
							onChange({
								previousEmployer: {
									...application.previousEmployer,
									dates: e.target.value,
								},
							})
						}
					/>
				</div>
			</div>
			<div className="column gap-05">
				<h4>Additional Income</h4>
				<p>
					Please use this section to mention any additional income
					that may not be applicable to the previous sections (leave
					this section blank if not applicable).
				</p>
				<div className="form-grid">
					<Textbox
						label="Description"
						placeholder="Briefly describe your additional income"
						value={application.additionalIncome.description}
						onChange={(e) =>
							onChange({
								...application,
								additionalIncome: {
									...application.additionalIncome,
									description: e.target.value,
								},
							})
						}
					/>
					<Input
						label="Monthly Income ($)"
						placeholder="Gross monthly income in dollars"
						type="number"
						value={application.additionalIncome.monthlyIncome}
						onChange={(e) =>
							onChange({
								...application,
								additionalIncome: {
									...application.additionalIncome,
									monthlyIncome: e.target.value,
								},
							})
						}
					/>
				</div>
			</div>
			<div className="column gap-05">
				<h4>Total Gross Income</h4>
				<p>
					Combine all gross monthly income (work + additional income).
				</p>
				<Input
					label="Total Monthly Income ($)"
					placeholder="Gross total monthly income in dollars"
					type="number"
					min="1"
					max="99999"
					value={application.totalGrossIncome}
					onChange={(e) =>
						onChange({
							...application,
							totalGrossIncome: e.target.value,
						})
					}
					required
				/>
			</div>
			<div className="column gap-05">
				<p>
					Please provide relevant documents for proof of income. This
					can include paystubs, 1099, W-2, bank statements, etc.
				</p>
				<FileUploadModal
					value={application.proofOfIncome}
					onChange={(files) => onChange({ proofOfIncome: files })}
					multiple
				/>
			</div>
		</>
	);
};

export default EmploymentSection;
