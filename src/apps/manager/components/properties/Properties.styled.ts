import styled from "styled-components";

export const StyledImageGallery = styled.section``;

export const StyledImageRow = styled.div`
	border: 1px solid var(--light-gray);
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding-right: 1rem;

	svg {
		width: 30px;
		height: 30px;
		color: var(--gray);
		cursor: pointer;
	}

	.move-img {
		display: flex;
		flex-direction: column;
		padding: 0 1rem;

		svg {
			&:hover {
				color: var(--primary);
			}
		}
	}

	img {
		height: 250px;
	}

	.delete-img {
		&:hover {
			color: var(--red);
		}
	}
`;
