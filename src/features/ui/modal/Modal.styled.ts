import styled from "styled-components";

export const StyledModal = styled.section<{
	$gap: number;
}>`
	background: white;
	border: 1px solid var(--light-gray);
	border-radius: 5px;
	padding: 1rem;
	display: flex;
	flex-direction: column;
	gap: ${(props) => `${props.$gap}rem` || "1rem"};

	h1,
	h2 {
		color: var(--primary);
	}
`;
