import { v4 } from "uuid";
import { StyledDropdown } from "./Dropdown.styled";
import { FC, useRef, useState } from "react";
import { MdArrowDropDown } from "react-icons/md";
import useOutsideClick from "../../hooks/useOutsideClick";

const Dropdown: FC<any> = ({ label, options = [], onChange, ...props }) => {
	const inputId = props?.id || v4();
	const ref = useRef<HTMLDivElement>(null);
	const [isDropdownOpen, setIsDropdownOpen] = useState(false);
	const [selectedOption, setSelectedOption] = useState(props?.value || null);

	useOutsideClick(ref, () => setIsDropdownOpen(false));

	const handleOpen = () => {
		if (!props.disabled) {
			setIsDropdownOpen(!isDropdownOpen);
		}
	};

	const handleOptionClick = (option) => {
		setSelectedOption(option.value);
		onChange(option);
	};

	return (
		<StyledDropdown open={isDropdownOpen} ref={ref} onClick={handleOpen}>
			{label && (
				<label htmlFor={inputId}>
					{label}
					<span>{props?.required ? "*" : ""}</span>
				</label>
			)}
			<input
				type="text"
				required={props?.required}
				value={selectedOption || ""}
				onChange={() => {}}
				placeholder={props?.placeholder || "Please Select One..."}
				disabled={props?.disabled}
			/>
			<MdArrowDropDown />
			{isDropdownOpen && (
				<ul className="options">
					{options.map((option, index) => (
						<li
							onClick={() => handleOptionClick(option)}
							key={index}
						>
							{option?.value || ""}
						</li>
					))}
				</ul>
			)}
		</StyledDropdown>
	);
};

export default Dropdown;
