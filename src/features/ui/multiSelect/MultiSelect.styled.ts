import styled from "styled-components";

interface MultiSelectProps {
	open: boolean;
}

export const StyledMultiSelect = styled.div<MultiSelectProps>`
	display: flex;
	flex-direction: column;
	gap: 5px;

	label {
		font-size: 1rem;
		font-weight: 300;
		letter-spacing: 0.2px;
		color: black;

		span {
			font-weight: 500;
			color: #e74c3c;
		}
	}

	input {
		outline: none;
		border: 1px solid var(--light-gray);
		padding: 0.65rem 0.75rem;
		border-radius: 5px;
		font-size: 1rem;
		font-weight: 300;
		letter-spacing: 0.15px;
		caret-color: transparent;
		cursor: pointer;

		&:active,
		&:focus {
			border-color: var(--primary);
		}
	}

	.svg-arrow {
		color: var(--gray);
		width: 30px;
		height: 30px;
		position: absolute;
		top: 2rem;
		right: 0.5rem;
		cursor: pointer;
		transform: rotate(${(props) => (props.open ? "180deg" : "0")});
	}

	.options {
		background: white;
		list-style: none;
		border: 1px solid var(--light-gray);
		border-radius: 5px;
		max-height: 150px;
		overflow-y: scroll;
	}
`;

export const MultiSelectOption = styled.li<any>`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
	padding: 0.65rem 0.75rem;
	cursor: pointer;
	color: ${(props) => (props.$selected ? "var(--primary)" : "black")};
	font-weight: ${(props) => (props.$selected ? "400" : "300")};

	&:hover {
		background: var(--light-gray);
	}

	svg {
		display: ${(props) => (props.$selected ? "block" : "none")};
		color: var(--primary);
		width: 20px;
		height: 20px;
	}
`;
