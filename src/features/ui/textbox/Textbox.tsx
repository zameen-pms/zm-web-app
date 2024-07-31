import { v4 } from "uuid";
import { StyledTextbox } from "./Textbox.styled";
import { FC } from "react";

const Textbox: FC<any> = ({ label, required, id, ...rest }) => {
	const inputId = id || v4();

	return (
		<StyledTextbox>
			{label && (
				<label htmlFor={inputId}>
					{label}
					<span>{required ? "*" : ""}</span>
				</label>
			)}
			<textarea id={inputId} {...rest} />
		</StyledTextbox>
	);
};

export default Textbox;
