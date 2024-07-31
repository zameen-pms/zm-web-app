import Button from "../../../../features/ui/button/Button";
import Container from "../../../../features/ui/container/Container";

const ApplicationsPay = () => {
	const handleVenmo = () => {
		window.open(
			"https://venmo.com/?txn=pay&audience=public&recipients=@Faiqa-Kamran&amount=40.00&note=Rental%20Application%20Fee",
			"_blank"
		);
	};

	const handleZelle = async () => {
		try {
			await navigator.clipboard.writeText("faiqakamran@icloud.com");
			alert(
				"Text copied to clipboard. Please pay $40 via Zelle using your bank app."
			);
		} catch (err) {
			alert("Unable to copy text at this time.");
		}
	};

	return (
		<Container>
			<div className="gap-05">
				<h2>Application Fee</h2>
				<p>
					Once you have submitted your application, you can pay your
					application fee via Venmo or Zelle. The application fee is
					$40 per applicant (all adults living in the house must apply
					and be approved).
				</p>
				<p>
					If you have been approved, you will receive an email from us
					to create your tenant portal (there is a chance it was sent
					to your spam folder).
				</p>
			</div>
			<div className="column gap-05">
				<h4>Venmo</h4>
				<Button onClick={handleVenmo}>Pay via Venmo</Button>
			</div>
			<div className="column gap-05">
				<h4>Zelle</h4>
				<Button onClick={handleZelle}>Copy Zelle Email</Button>
				<p>Or scan QR code</p>
				<img
					style={{ width: "300px", height: "auto" }}
					src="/images/zelle-qr.png"
					alt="Zelle"
				/>
			</div>
			<div className="column gap-05">
				<h4>Paypal: faiqakamran@icloud.com</h4>
			</div>
			<div className="column gap-05">
				<h4>Apple Cash: faiqakamran@icloud.com</h4>
			</div>
			<div className="column gap-05">
				<h4>Cash/Check</h4>
				<p>
					Please contact our leasing director at (417)-669-2258 for
					information about how to submit cash/check.
				</p>
			</div>
		</Container>
	);
};

export default ApplicationsPay;
