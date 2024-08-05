import Dropdown from "../../../../features/ui/dropdown/Dropdown";
import Input from "../../../../features/ui/input/Input";
import { getAddress } from "../../../../features/utils/getAddress";

const ApplicationOverview = ({ canEdit, application, setApplication }) => {
	if (!application) return;
	return (
		<div className="column gap-1">
			<Input
				label="Property"
				value={getAddress(application?.property?.address) || ""}
				readOnly
				disabled
			/>
			<Dropdown
				label="Application Status"
				options={[
					{ value: "In-Progress" },
					{ value: "Approved" },
					{ value: "Rejected" },
				]}
				value={application?.status || ""}
				onChange={(option) =>
					setApplication({ ...application, status: option.value })
				}
				disabled={!canEdit}
			/>
			<Input
				label="Payment Status"
				value={application?.hasPaid ? "Paid" : "Not Paid"}
				readOnly
				disabled
			/>
			<div className="row gap-1">
				<Input
					label="Signature"
					value={application?.signature?.name || ""}
					readOnly
					disabled
				/>
				<Input
					label="Signature Date"
					value={application?.signature?.date || ""}
					type="text"
					readOnly
					disabled
				/>
			</div>
		</div>
	);
};

export default ApplicationOverview;
