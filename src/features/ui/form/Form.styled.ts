import styled from "styled-components";

export const StyledForm = styled.form`
	display: flex;
	flex-direction: column;
	gap: 2rem;

	.form-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
		gap: 1rem;
	}
`;
