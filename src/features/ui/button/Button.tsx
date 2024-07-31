import { FC } from "react";
import { StyledButton } from "./Button.styled";

const Button: FC<any> = ({ disabled = false, ...props }) => {
	return (
		<StyledButton {...props}>
			{disabled ? "Loading..." : props.children}
		</StyledButton>
	);
};

export default Button;
