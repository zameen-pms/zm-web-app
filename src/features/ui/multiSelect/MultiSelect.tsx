import { useRef, useState } from "react";
import { v4 } from "uuid";
import useOutsideClick from "../../hooks/useOutsideClick";
import { MultiSelectOption, StyledMultiSelect } from "./MultiSelect.styled";
import { MdArrowDropDown, MdCheck } from "react-icons/md";

const MultiSelect = ({
	label,
	options = [],
	onChange,
	value = [],
	...props
}) => {
	const inputId = props?.id || v4();
	const ref = useRef<HTMLDivElement>(null);
	const [isDropdownOpen, setIsDropdownOpen] = useState(false);
	const [selectedOptions, setSelectedOptions] = useState(value);

	useOutsideClick(ref, () => setIsDropdownOpen(false));

	const handleOpen = () => {
		if (!props.disabled) {
			setIsDropdownOpen(!isDropdownOpen);
		}
	};

	const handleOptionClick = (option) => {
		let newOptions;
		if (selectedOptions.includes(option)) {
			newOptions = selectedOptions.filter((o) => o.id !== option.id);
		} else {
			newOptions = [...selectedOptions, option];
		}

		setSelectedOptions(newOptions);
		onChange(newOptions);
	};

	return (
		<StyledMultiSelect open={isDropdownOpen} ref={ref} onClick={handleOpen}>
			{label && (
				<label htmlFor={inputId}>
					{label}
					<span>{props?.required ? "*" : ""}</span>
				</label>
			)}
			<input
				type="text"
				required={props?.required}
				value={
					selectedOptions.map((option) => option.value).join(", ") ||
					""
				}
				onChange={() => {}}
				placeholder={props?.placeholder || "Select Option(s)..."}
				disabled={props?.disabled}
			/>
			<MdArrowDropDown className="svg-arrow" />
			{isDropdownOpen && (
				<ul className="options">
					{options.map((option, index) => (
						<MultiSelectOption
							$selected={selectedOptions.includes(option)}
							onClick={() => handleOptionClick(option)}
							key={index}
						>
							{option?.value || ""}
							<MdCheck />
						</MultiSelectOption>
					))}
				</ul>
			)}
		</StyledMultiSelect>
	);
};

export default MultiSelect;
