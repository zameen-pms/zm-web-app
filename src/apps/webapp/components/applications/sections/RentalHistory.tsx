import { useDispatch, useSelector } from "react-redux";
import {
	addSection,
	getApplication,
	getCanEdit,
	removeSection,
	updateSection,
} from "../../../../../features/app/applicationSlice";
import { ADDRESS_MODEL } from "../../../../../constants";
import {
	ApplicationDelete,
	ApplicationSection,
	StyledFormGrid,
} from "../Applications.styled";
import Button from "../../../../../features/ui/button/Button";
import { MdDelete } from "react-icons/md";
import Input from "../../../../../features/ui/input/Input";

const RentalHistory = () => {
	const dispatch = useDispatch();
	const application = useSelector(getApplication);
	const canEdit = useSelector(getCanEdit);

	const handleAdd = () => {
		dispatch(addSection({ field: "addresses", model: ADDRESS_MODEL }));
	};

	return (
		<ApplicationSection>
			<div className="row justify-sb align-center">
				<div className="column">
					<h2>Rental History</h2>
					<p className="gray">
						Please provide any relevant property rental/owner
						history.
					</p>
				</div>
				{canEdit && (
					<Button type="button" onClick={handleAdd}>
						Add Rental History
					</Button>
				)}
			</div>
			<div className="column gap-2">
				{application.addresses.map((address, index) => (
					<RentalHistorySection
						key={index}
						index={index}
						address={address}
					/>
				))}
			</div>
		</ApplicationSection>
	);
};

const RentalHistorySection = ({ index, address }) => {
	const dispatch = useDispatch();
	const canEdit = useSelector(getCanEdit);

	const handleDelete = () => {
		dispatch(removeSection({ field: "addresses", index }));
	};

	return (
		<div className="column gap-05">
			<div className="row gap-2">
				{canEdit && (
					<ApplicationDelete onClick={handleDelete} type="button">
						<p>Remove {address?.street || "Property"}</p>
						<MdDelete />
					</ApplicationDelete>
				)}
			</div>
			<StyledFormGrid>
				<Input
					label="Street"
					value={address?.street || ""}
					onChange={(e) =>
						dispatch(
							updateSection({
								field: "addresses",
								index,
								key: "street",
								value: e.target.value,
							})
						)
					}
					required
					disabled={!canEdit}
				/>
				<Input
					label="City"
					value={address?.city || ""}
					onChange={(e) =>
						dispatch(
							updateSection({
								field: "addresses",
								index,
								key: "city",
								value: e.target.value,
							})
						)
					}
					required
					disabled={!canEdit}
				/>
				<Input
					label="State"
					value={address?.state || ""}
					onChange={(e) =>
						dispatch(
							updateSection({
								field: "addresses",
								index,
								key: "state",
								value: e.target.value,
							})
						)
					}
					required
					disabled={!canEdit}
				/>
				<Input
					label="Zip"
					value={address?.zip || ""}
					onChange={(e) =>
						dispatch(
							updateSection({
								field: "addresses",
								index,
								key: "zip",
								value: e.target.value,
							})
						)
					}
					required
					disabled={!canEdit}
				/>
				<Input
					label="Start Date"
					value={address?.fromDate || ""}
					onChange={(e) =>
						dispatch(
							updateSection({
								field: "addresses",
								index,
								key: "fromDate",
								value: e.target.value,
							})
						)
					}
					type="date"
					required
					disabled={!canEdit}
				/>
				<Input
					label="End Date (Leave empty for current address)"
					value={address?.toDate || ""}
					onChange={(e) =>
						dispatch(
							updateSection({
								field: "addresses",
								index,
								key: "toDate",
								value: e.target.value,
							})
						)
					}
					type="date"
					disabled={!canEdit}
				/>
				<Input
					label="Reason for Leaving"
					value={address?.leavingReason || ""}
					onChange={(e) =>
						dispatch(
							updateSection({
								field: "addresses",
								index,
								key: "leavingReason",
								value: e.target.value,
							})
						)
					}
					required
					disabled={!canEdit}
				/>
				<Input
					label="Landlord Name"
					value={address?.landlordName || ""}
					onChange={(e) =>
						dispatch(
							updateSection({
								field: "addresses",
								index,
								key: "landlordName",
								value: e.target.value,
							})
						)
					}
					required
					disabled={!canEdit}
				/>
				<Input
					label="Landlord Email/Phone"
					value={address?.landlordContactInfo || ""}
					onChange={(e) =>
						dispatch(
							updateSection({
								field: "addresses",
								index,
								key: "landlordContactInfo",
								value: e.target.value,
							})
						)
					}
					required
					disabled={!canEdit}
				/>
			</StyledFormGrid>
		</div>
	);
};

export default RentalHistory;
