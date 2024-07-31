import { v4 } from "uuid";
import { StyledDropdown } from "./Dropdown.styled";
import { FC } from "react";

const Dropdown: FC<any> = ({
	options,
	value,
	onChange,
	label,
	required,
	id,
	...rest
}) => {
	if (!options || options?.length === 0) return;

	const inputId = id || v4();

	const handleChange = (e) => {
		const newValue = e.target.value;
		if (onChange) {
			onChange(newValue);
		}
	};

	return (
		<StyledDropdown>
			{label && (
				<label htmlFor={inputId}>
					{label}
					<span>{required ? "*" : ""}</span>
				</label>
			)}
			<select
				onChange={handleChange}
				id={inputId}
				required={required}
				{...rest}
				value={value}
			>
				<option>Select An Option...</option>
				{options.map((option, index) => (
					<option key={index} value={option}>
						{option}
					</option>
				))}
			</select>
		</StyledDropdown>
	);
};

export default Dropdown;
