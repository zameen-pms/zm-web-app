import { useEffect, useState } from "react";
import Table from "../../../../features/ui/table/Table";
import { getAddress } from "../../../../features/utils/getAddress";
import { formatNumber } from "../../../../features/utils/formatNumber";
import { useNavigate } from "react-router-dom";

const columns = [
	{ key: "address", header: "Address" },
	{ key: "owners", header: "Owners" },
	{ key: "leaseStatus", header: "Lease Status" },
	{ key: "rent", header: "Rent" },
	{ key: "type", header: "Property Type" },
];

const PropertiesTable = ({ properties }) => {
	const [data, setData] = useState([]);
	const navigate = useNavigate();

	useEffect(() => {
		setData(
			properties.map((property) => ({
				...property,
				id: property._id,
				address: getAddress(property.address),
				owners:
					property.owners
						.map((owner) => `${owner.firstName} ${owner.lastName}`)
						.join(", ") || "N/A",
				leaseStatus: property.currentLease ? "Leased" : "Not Leased",
				rent: `$${formatNumber(property.general.rent)}`,
			}))
		);
	}, [properties]);

	const handleRowClick = (row) => {
		const { id } = row;
		navigate(`/properties/${id}`);
	};

	return <Table columns={columns} data={data} onRowClick={handleRowClick} />;
};

export default PropertiesTable;
