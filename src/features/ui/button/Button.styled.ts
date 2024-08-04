import styled from "styled-components";

export const StyledButton = styled.button<any>`
	outline: none;
	padding: 12px;
	font-size: 1rem;
	font-weight: 400;
	cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
	border-radius: 5px;
	border: 1px solid
		${(props) =>
			props.disabled ? "none" : props.$color || "var(--primary)"};
	background: ${(props) =>
		props.disabled
			? "var(--gray)"
			: props.$outline === "outline"
			? "none"
			: props.$color || "var(--primary)"};
	color: ${(props) =>
		props.$outline === "outline"
			? props.$color || "var(--primary)"
			: "white"};
	white-space: nowrap;
	min-width: 100px;

	&:hover {
		background: ${(props) =>
			props.disabled ? "var(--gray)" : props.$color || "var(--primary)"};
		color: white;
		box-shadow: ${(props) =>
			props.disabled ? "none" : "rgba(0, 0, 0, 0.5) 0px 5px 15px"};
	}

	&:focus,
	&:active {
		box-shadow: rgba(0, 0, 0, 0.5) 0px 5px 15px;
	}
`;
