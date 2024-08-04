import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAddress } from "../../../../features/utils/getAddress";
import { getTextDate } from "../../../../features/utils/getTextDate";
import { formatNumber } from "../../../../features/utils/formatNumber";
import Table from "../../../../features/ui/table/Table";

const columns = [
	{
		key: "status",
		header: "Status",
	},
	{
		key: "property",
		header: "Property",
	},
	{
		key: "startDate",
		header: "Start Date",
	},
	{
		key: "endDate",
		header: "End Date",
	},
	{
		key: "rentDate",
		header: "Rent Due",
	},
	{
		key: "rent",
		header: "Rent Amount",
	},
	{
		key: "tenants",
		header: "Tenant(s)",
	},
	{
		key: "contract",
		header: "Contract",
	},
];

const LeasesTable = ({ leases }) => {
	const [data, setData] = useState([]);
	const navigate = useNavigate();

	useEffect(() => {
		setData(
			leases.map((lease) => ({
				...lease,
				id: lease._id,
				property: getAddress(lease?.property?.address),
				startDate: getTextDate(lease?.startDate?.split("T")[0]) || "",
				endDate: getTextDate(lease?.endDate?.split("T")[0]) || "",
				rentDate: `${lease?.rentDate} of the month`,
				rent: `$${formatNumber(lease?.rent || 0)}`,
				tenants: lease.tenants
					?.map(
						(tenant) => `${tenant?.firstName} ${tenant?.lastName}`
					)
					.join(", "),
				contract: lease.contract?.title || "",
			}))
		);
	}, [leases]);

	const handleRowClick = ({ id }) => {
		navigate(`/leases/${id}`);
	};

	return <Table data={data} columns={columns} onRowClick={handleRowClick} />;
};

export default LeasesTable;
