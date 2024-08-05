import styled from "styled-components";

export const StyledControlBar = styled.section`
	padding-bottom: 0.5rem;
	border-bottom: 1px solid var(--light-gray);

	.go-back {
		display: flex;
		flex-direction: row;
		align-items: center;
		gap: 5px;
		cursor: pointer;
		width: min-content;
		color: var(--primary);

		svg {
		}

		p {
			font-size: 12px;
			line-height: 12px;
			white-space: nowrap;
			color: var(--primary);
			font-weight: 500;
		}
	}
`;
