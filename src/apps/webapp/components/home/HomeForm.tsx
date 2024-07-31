import { FormEvent, forwardRef, useState } from "react";
import { ConsulationForm, StyledHomeForm } from "./Home.styled";
import Button from "../../../../features/ui/button/Button";
import Input from "../../../../features/ui/input/Input";
import Dropdown from "../../../../features/ui/dropdown/Dropdown";
import Textbox from "../../../../features/ui/textbox/Textbox";
import getUsers from "../../../../features/api/users/getUsers";
import ConsultationEmail from "../../../../../emails/ConsultationEmail";
import { render } from "@react-email/components";
import sendEmail from "../../../../features/api/emails/sendEmail";

const HomeForm = forwardRef((_props, ref) => {
	const [isLoading, setIsLoading] = useState(false);
	const [canSend, setCanSend] = useState(true);
	const [consultation, setConsultation] = useState({
		name: "",
		email: "",
		phoneNumber: "",
		availability: "",
		propertyCount: "",
		comments: "",
	});

	const handleSubmit = async (e: FormEvent) => {
		e.preventDefault();
		setIsLoading(true);
		if (!canSend) return;
		if (!consultation.propertyCount) {
			return alert("Please provide property count information.");
		}

		try {
			setCanSend(false);
			const { data: users } = await getUsers({ role: "Manager" });
			const recipients = users.map((user) => user?.email);
			const body = render(
				<ConsultationEmail consultation={consultation} />
			);

			await sendEmail({
				subject: `${
					consultation?.name || "Someone"
				} has requested a consultation`,
				body,
				recipients,
			});
		} catch (err) {
			alert("Unable to submit form at this time.");
		} finally {
			setIsLoading(false);
		}
	};

	return (
		<StyledHomeForm ref={ref}>
			<div className="center-text">
				<h2>Schedule Your Free Consultation</h2>
				<p>
					Tell us a bit about yourself and your preferred schedule,
					and we'll set up a consultation to discuss how we can help.
				</p>
			</div>
			<ConsulationForm onSubmit={handleSubmit}>
				<div className="column gap-1">
					<Input
						label="Full Name"
						value={consultation?.name || ""}
						onChange={(e) =>
							setConsultation({
								...consultation,
								name: e.target.value,
							})
						}
						placeholder="Full Name"
						required
					/>
					<Input
						label="Email Address"
						value={consultation?.email || ""}
						onChange={(e) =>
							setConsultation({
								...consultation,
								email: e.target.value,
							})
						}
						type="email"
						placeholder="Email"
						required
					/>
					<Input
						label="Phone Number"
						value={consultation?.phoneNumber || ""}
						onChange={(e) =>
							setConsultation({
								...consultation,
								phoneNumber: e.target.value,
							})
						}
						placeholder="123-456-7890"
						required
					/>
					<Input
						label="What times are you available?"
						value={consultation?.availability || ""}
						onChange={(e) =>
							setConsultation({
								...consultation,
								availability: e.target.value,
							})
						}
						placeholder="ex. Mon-Fri 8am-4pm CST"
						required
					/>
					<Dropdown
						label="How many properties are in your portfolio?"
						options={[
							"None, I'm looking to get started!",
							"1-10 properties",
							"11-50 properties",
							"Over 50 properties",
						]}
						onChange={(value) =>
							setConsultation({
								...consultation,
								propertyCount: value,
							})
						}
						required
					/>
					<Textbox
						label="Additional Comments"
						value={consultation?.comments || ""}
						onChange={(e) =>
							setConsultation({
								...consultation,
								comments: e.target.value,
							})
						}
						placeholder="Add additional comments/questions here"
					/>
				</div>
				{canSend ? (
					<Button type="submit">
						{isLoading ? "Submitting..." : "Request Consultation"}
					</Button>
				) : (
					<h4 className="message">
						Your request has been submitted!
					</h4>
				)}
			</ConsulationForm>
		</StyledHomeForm>
	);
});

export default HomeForm;
