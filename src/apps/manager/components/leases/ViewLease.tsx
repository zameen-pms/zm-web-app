import { useEffect, useState } from "react";
import getAsset from "../../../../features/api/assets/getAsset";
import Input from "../../../../features/ui/input/Input";
import { getAddress } from "../../../../features/utils/getAddress";
import { getTextDate } from "../../../../features/utils/getTextDate";
import { formatNumber } from "../../../../features/utils/formatNumber";
import PdfViewer from "../../../../features/ui/pdfViewer/PdfViewer";

const ViewLease = ({ lease }) => {
	const [url, setUrl] = useState(null);

	const fetchUrl = async () => {
		try {
			const { data } = await getAsset(lease.contract.file);
			setUrl(data);
		} catch (err) {
			alert("Unable to fetch document.");
		}
	};

	useEffect(() => {
		if (lease?.contract?.file) {
			fetchUrl();
		}
	}, [lease]);

	return (
		<div className="column gap-2">
			<div className="grid">
				<Input
					label="Status"
					value={
						lease?.property?.currentLease === lease._id
							? "Active"
							: "Inactive"
					}
					readOnly
					disabled
				/>
				<Input
					label="Property"
					value={getAddress(lease?.property?.address) || ""}
					readOnly
					disabled
				/>
				<Input
					label="Lease Start Date"
					value={getTextDate(lease?.startDate.split("T")[0]) || ""}
					readOnly
					disabled
				/>
				<Input
					label="Lease End Date"
					value={getTextDate(lease?.endDate.split("T")[0]) || ""}
					readOnly
					disabled
				/>
				<Input
					label="Rent Amount"
					value={`$${formatNumber(lease?.rent || 0)}`}
					readOnly
					disabled
				/>
				<Input
					label="Rent Due Date"
					value={`${lease?.rentDate || 0} of the month`}
					readOnly
					disabled
				/>
				<Input
					label="Tenants"
					value={
						lease?.tenants
							?.map(
								(tenant) =>
									`${tenant?.firstName} ${tenant?.lastName}`
							)
							.join(", ") || ""
					}
					readOnly
					disabled
				/>
			</div>
			{url && <PdfViewer url={url} />}
		</div>
	);
};

export default ViewLease;
