import { useState } from "react";
import Button from "../../../../features/ui/button/Button";
import Modal from "../../../../features/ui/modal/Modal";
import Textbox from "../../../../features/ui/textbox/Textbox";
import { getAddress } from "../../../../features/utils/getAddress";

const PropertyOverviewInformation = ({
	property,
	setProperty,
	fetchProperty,
	updateProperty,
	isLoading,
}) => {
	const [canEdit, setCanEdit] = useState(false);

	const toggleEditClick = async () => {
		if (canEdit) {
			await fetchProperty();
			setCanEdit(false);
		} else {
			setCanEdit(true);
		}
	};

	const handleSave = async () => {
		await updateProperty();
		toggleEditClick();
	};
	return (
		<Modal gap={2}>
			<div className="row justify-sb">
				<h2>Property Information</h2>
				{canEdit ? (
					<div className="row gap-05">
						<Button disabled={isLoading} onClick={handleSave}>
							Save
						</Button>
						<Button
							disabled={isLoading}
							$outline="outline"
							$color="#e74c3c"
							onClick={toggleEditClick}
						>
							Cancel
						</Button>
					</div>
				) : (
					<Button onClick={toggleEditClick}>Edit</Button>
				)}
			</div>
			<div className="column gap-1">
				<h3>Address:</h3>
				<p>{getAddress(property.address)}</p>
			</div>
			<div className="column gap-1">
				<h3>General Information</h3>
				<p>{`${property.general.beds} beds | ${property.general.baths} baths | ${property.general.sqft} sqft`}</p>
				<Textbox
					label="Property Description"
					type="number"
					value={property.general.description}
					onChange={(e) =>
						setProperty({
							...property,
							general: {
								...property.general,
								description: e.target.value,
							},
						})
					}
					disabled={!canEdit}
				/>
			</div>
		</Modal>
	);
};

export default PropertyOverviewInformation;
