import { StyledTable } from "./Table.styled";

const Table = ({ columns, data, onRowClick }) => {
	const handleClick = (row) => {
		onRowClick(row);
	};

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
