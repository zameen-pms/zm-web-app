import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { StyledSignInModal } from "./SignInModal.styled";
import signIn from "../../../../features/api/auth/signIn";
import Input from "../../../../features/ui/input/Input";
import Button from "../../../../features/ui/button/Button";

const SignInModal = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const navigate = useNavigate();

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			await signIn(email, password);
			navigate("/properties");
		} catch (err) {
			alert(err.message);
		}
	};

	return (
		<StyledSignInModal>
			<h2>Sign In To Your Account</h2>
			<form onSubmit={handleSubmit}>
				<Input
					id="sign-in-email"
					label="Email"
					type="email"
					required
					value={email}
					onChange={(e) => setEmail(e.target.value)}
				/>
				<Input
					id="sign-in-password"
					label="Password"
					type="password"
					required
					value={password}
					onChange={(e) => setPassword(e.target.value)}
				/>
				<Button>Sign In</Button>
			</form>
		</StyledSignInModal>
	);
};

export default SignInModal;
