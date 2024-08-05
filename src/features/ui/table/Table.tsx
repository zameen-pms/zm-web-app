import { StyledTable } from "./Table.styled";

const Table = ({ columns, data, onRowClick }) => {
	const handleClick = (row) => {
		onRowClick(row);
	};

	if (!data || data.length === 0) {
		return <p>No Data Available</p>;
	}

	return (
		<StyledTable>
			<thead>
				<tr>
					{columns.map((column) => (
						<th key={String(column.key)}>{column.header}</th>
					))}
				</tr>
			</thead>
			<tbody>
				{data.map((row, rowIndex) => (
					<tr key={rowIndex} onClick={() => handleClick(row)}>
						{columns.map((column) => (
							<td key={String(column.key)}>
								{column.render
									? column.render(row[column.key], row)
									: String(row[column.key])}
							</td>
						))}
					</tr>
				))}
			</tbody>
		</StyledTable>
	);
};

export default Table;
