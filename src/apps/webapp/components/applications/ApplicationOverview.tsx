import { formatNumber } from "../../../../features/utils/formatNumber";
import { getImageUrl } from "../../../../features/utils/getImageUrl";
import { StepProps } from "./ApplicationForm";
import { FormImage } from "./Applications.styled";

const ApplicationOverview = ({ application }: StepProps) => {
	return (
		<>
			<h1>Application Overview</h1>
			<div className="column gap-1">
				<h2 className="text-primary">General Information</h2>
				<div className="column gap-05">
					{application?.cosigning && (
						<p>
							<b>Cosigning on behalf of</b>{" "}
							{application.cosigning}
						</p>
					)}
					<p>
						<b>Applicant Type:</b> {application.type}
					</p>
				</div>
			</div>
			<div className="column gap-1">
				<h2 className="text-primary">Personal Information</h2>
				<div className="column gap-05">
					<p>
						<b>Name:</b>{" "}
						{`${application.firstName} ${application.lastName}`}
					</p>
					<p>
						<b>Phone Number:</b> {application.phoneNumber}
					</p>
					<p>
						<b>SSN:</b> {application.ssn}
					</p>
					<p>
						<b>Date of Birth:</b> {application.dob}
					</p>
					{application.dl && (
						<div className="column">
							<p>
								<b>Driver's License:</b>
							</p>
							<FormImage
								src={getImageUrl(application.dl)}
								alt="License"
							/>
						</div>
					)}
				</div>
			</div>
			<div className="column gap-1">
				<h2 className="text-primary">Rental History</h2>
				<div className="column gap-05">
					<h3 className="underline">Current Residence</h3>
					<p>
						<b>Location:</b> {application.currentResidence.location}
					</p>
					<p>
						<b>Landlord:</b>{" "}
						{`${application.currentResidence.landlord.name} (${application.currentResidence.landlord.phoneNumber})`}
					</p>
					<p>
						<b>Rent: </b>
						{`$${formatNumber(application.currentResidence.rent)}`}
					</p>
					<p>
						<b>Move-In Date:</b>{" "}
						{application.currentResidence.dates}
					</p>
				</div>
				<div className="column gap-05">
					<h3 className="underline">Previous Residence</h3>
					<p>
						<b>Location:</b> {application.otherResidence.location}
					</p>
					<p>
						<b>Landlord:</b>{" "}
						{`${application.otherResidence.landlord.name} (${application.otherResidence.landlord.phoneNumber})`}
					</p>
					<p>
						<b>Rent: </b>
						{`$${formatNumber(application.otherResidence.rent)}`}
					</p>
					<p>
						<b>Move-In Date:</b> {application.otherResidence.dates}
					</p>
				</div>
			</div>
			<div className="column gap-1">
				<h2 className="text-primary">Employment History</h2>
				<div className="column gap-05">
					<h3 className="underline">Current Employer</h3>
					<p>
						<b>Company:</b> {application.currentEmployer.company}
					</p>
					<p>
						<b>Role:</b> {application.currentEmployer.role}
					</p>
					<p>
						<b>Monthly Income:</b>{" "}
						{`$${formatNumber(
							application.currentEmployer.monthlyIncome
						)}`}
					</p>
					<p>
						<b>Employment Date:</b>{" "}
						{application.currentEmployer.dates}
					</p>
				</div>
				<div className="column gap-05">
					<h3 className="underline">Previous Employer</h3>
					<p>
						<b>Company:</b> {application.previousEmployer.company}
					</p>
					<p>
						<b>Role:</b> {application.previousEmployer.role}
					</p>
					<p>
						<b>Monthly Income:</b>{" "}
						{`$${formatNumber(
							application.previousEmployer.monthlyIncome
						)}`}
					</p>
					<p>
						<b>Employment Dates:</b>{" "}
						{application.previousEmployer.dates}
					</p>
				</div>
				<div className="column gap-05">
					<h3 className="underline">Additional Income</h3>
					<p>
						<b>Description:</b>{" "}
						{application.additionalIncome.description}
					</p>
					<p>
						<b>Monthly Income:</b>{" "}
						{`$${formatNumber(
							application.additionalIncome.monthlyIncome
						)}`}
					</p>
				</div>
				<div className="column gap-05">
					<h3 className="underline">Total Income</h3>
					<p>
						<b>Gross Monthly Income: </b>
						{`$${formatNumber(application.totalGrossIncome)}`}
					</p>
				</div>
				<div className="column gap-05">
					<h3 className="underline">Proof of Income</h3>
					{application.proofOfIncome.map(
						(file: string, index: number) => (
							<FormImage
								key={index}
								src={getImageUrl(file)}
								alt="Income Document"
							/>
						)
					)}
				</div>
			</div>
			<div className="column gap-1">
				<h2 className="text-primary">General Questions</h2>
				<div className="column gap-05">
					<p>
						<b>Do you smoke?</b>{" "}
						{application.generalQuestions.doesSmoke}
					</p>
					<p>
						<b>Have you ever been convicted of a felony?</b>{" "}
						{application.generalQuestions.convictedFelon}
					</p>
					<p>
						<b>Have you ever filed for bankruptcy?</b>{" "}
						{application.generalQuestions.bankruptcy}
					</p>
					<p>
						<b>Have you ever been evicted?</b>{" "}
						{application.generalQuestions.evicted}
					</p>
				</div>
			</div>
			<div className="column gap-1">
				<h2 className="text-primary">References</h2>
				<div className="column gap-05">
					<h3 className="underline">Reference</h3>
					<p>
						<b>Name:</b> {application.primaryReference.name}
					</p>
					<p>
						<b>Relation to Applicant:</b>{" "}
						{application.primaryReference.relation}
					</p>
					<p>
						<b>Phone Number:</b>{" "}
						{application.primaryReference.phoneNumber}
					</p>
				</div>
				<div className="column gap-05">
					<h3 className="underline">Additional Reference</h3>
					<p>
						<b>Name:</b> {application.secondaryReference.name}
					</p>
					<p>
						<b>Relation to Applicant:</b>{" "}
						{application.secondaryReference.relation}
					</p>
					<p>
						<b>Phone Number:</b>{" "}
						{application.secondaryReference.phoneNumber}
					</p>
				</div>
			</div>
			<div className="column gap-1">
				<h2 className="text-primary">Pet Information</h2>
				<div className="column gap-05">
					<p>
						<b>Pets:</b> {application.pets}
					</p>
				</div>
			</div>
			<div className="column gap-1">
				<h2 className="text-primary">Dependents / Co-Applicants</h2>
				<div className="column gap-05">
					<h3 className="underline">Dependents</h3>
					<p>
						<b>Dependents:</b> {application.dependents}
					</p>
				</div>
				<div className="column gap-05">
					<h3 className="underline">Co-Applicants</h3>
					<p>
						<b>Co-Applicants:</b> {application.coapplicants}
					</p>
				</div>
			</div>
			<div className="column gap-1">
				<h2 className="text-primary">Signature</h2>
				<div className="column gap-05">
					<p>
						<b>Name:</b> {application.signature.name}
					</p>
					<p>
						<b>Date:</b> {application.signature.date}
					</p>
				</div>
			</div>
		</>
	);
};

export default ApplicationOverview;
