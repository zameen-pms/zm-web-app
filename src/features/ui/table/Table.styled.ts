import styled from "styled-components";

export const StyledTable = styled.table`
	background: white;
	width: 100%;
	border-collapse: collapse;

	tr {
		border: 1px solid var(--light-gray);
	}

	thead {
		background: var(--primary);

		th {
			padding: 0.75rem 1rem;
		}

		tr {
			th {
				color: white;
				font-weight: 500;
				font-size: 14px;
			}
		}
	}

	tbody {
		tr {
			&:hover {
				background: var(--light-gray);
				cursor: pointer;
			}

			td {
				padding: 1rem;
				color: var(--dark-gray);
				font-weight: 300;
				font-size: 15px;
			}
		}
	}

	th,
	tr {
		text-align: left;
	}
`;
