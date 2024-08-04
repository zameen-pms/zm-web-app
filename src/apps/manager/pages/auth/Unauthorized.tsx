import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Container from "../../../../features/ui/container/Container";

const Unauthorized = () => {
	const navigate = useNavigate();

	useEffect(() => {
		setTimeout(() => {
			navigate("/auth/sign-in");
		}, 5000);
	});

	return (
		<Container>
			<h1>Unauthorized</h1>
			<p>Redirecting...</p>
		</Container>
	);
};

export default Unauthorized;
