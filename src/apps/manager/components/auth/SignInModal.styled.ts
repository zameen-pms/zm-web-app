import styled from "styled-components";

export const StyledSignInModal = styled.section`
	background: white;
	width: 500px;
	padding: 2rem;
	display: flex;
	flex-direction: column;
	gap: 2rem;
	border-radius: 10px;
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	box-shadow: var(--modal-box-shadow);

	h2 {
		color: var(--primary);
		text-align: center;
	}

	form {
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}

	@media (max-width: 500px) {
		width: 100%;
		padding: 1rem;
	}
`;
