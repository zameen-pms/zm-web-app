import styled from "styled-components";

export const StyledApplicationForm = styled.form`
	border-radius: 10px;
	padding: 1rem;
	box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
	display: flex;
	flex-direction: column;
	gap: 3rem;
	background: white;
`;

export const ApplicationSection = styled.section`
	display: flex;
	flex-direction: column;
	gap: 1rem;

	h2 {
		font-size: 20px;
		font-weight: 400;
	}
`;

export const ApplicationDelete = styled.button`
	display: flex;
	flex-direction: row;
	align-items: center;
	gap: 0.5rem;
	border: none;
	color: white;
	background-color: #e74c3c;
	border-radius: 5px;
	padding: 4px 8px;
	cursor: pointer;
	transition: all 0.25s ease-in-out;

	&:hover {
		box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
	}

	p {
		color: white;
	}
`;

export const StyledFormGrid = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
	gap: 1rem;
`;

export const StyledDocument = styled.div`
	background: #e8e8e8;
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 1rem 2rem;
	border-radius: 5px;
	box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

	img {
		width: 300px;
		height: auto;
	}

	svg {
		width: 30px;
		height: 30px;
		cursor: pointer;

		&:hover {
			color: #e74c3c;
		}
	}
`;
