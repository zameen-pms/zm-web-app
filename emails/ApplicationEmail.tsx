import {
	Button,
	Container,
	Font,
	Heading,
	Hr,
	Html,
	Text,
} from "@react-email/components";
import { ButtonStyle } from "../src/features/emails/EmailStyles";

const ApplicationEmail = ({ address, applicant, url }) => {
	return (
		<Html lang="en">
			<Font
				fontFamily="Roboto"
				fallbackFontFamily="Verdana"
				webFont={{
					url: "https://fonts.gstatic.com/s/roboto/v27/KFOmCnqEu92Fr1Mu4mxKKTU1Kg.woff2",
					format: "woff2",
				}}
				fontWeight={400}
				fontStyle="normal"
			/>

			<Container>
				<Heading as="h3">Address: {address}</Heading>
				<Hr />
				<Text>Applicant: {applicant}</Text>
				<Button href={url} style={ButtonStyle}>
					View Application
				</Button>
			</Container>
		</Html>
	);
};

export default ApplicationEmail;
