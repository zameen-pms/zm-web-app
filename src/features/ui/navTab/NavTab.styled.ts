import styled from "styled-components";

export const StyledNavTab = styled.section`
	border-bottom: 1px solid var(--light-gray);
	padding: calc(0.5rem + 2px) 0;
	transition: none;

	a {
		font-size: 1rem;
		color: black;
		font-weight: 300;
		padding: 0.5rem 2rem;
		transition: none;
		letter-spacing: 0.25px;

		&:hover {
			color: var(--primary);
		}

		&.active {
			color: var(--primary);
			font-weight: 500;
			border-bottom: 3px solid var(--primary);
		}
	}
`;
