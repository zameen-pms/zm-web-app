import { useState } from "react";
import Button from "../../../../features/ui/button/Button";
import Input from "../../../../features/ui/input/Input";
import Modal from "../../../../features/ui/modal/Modal";
import Textbox from "../../../../features/ui/textbox/Textbox";

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
				<div className="grid">
					<Input
						label="Street"
						value={property.address.street}
						onChange={(e) =>
							setProperty({
								...property,
								address: {
									...property.address,
									street: e.target.value,
								},
							})
						}
						disabled={!canEdit}
						required
					/>
					<Input
						label="City"
						value={property.address.city}
						onChange={(e) =>
							setProperty({
								...property,
								address: {
									...property.address,
									city: e.target.value,
								},
							})
						}
						disabled={!canEdit}
						required
					/>
					<Input
						label="State"
						value={property.address.state}
						onChange={(e) =>
							setProperty({
								...property,
								address: {
									...property.address,
									state: e.target.value,
								},
							})
						}
						disabled={!canEdit}
						required
					/>
					<Input
						label="Zip Code"
						value={property.address.zip}
						onChange={(e) =>
							setProperty({
								...property,
								address: {
									...property.address,
									zip: e.target.value,
								},
							})
						}
						disabled={!canEdit}
						required
					/>
				</div>
			</div>
			<div className="column gap-2">
				<h3>General Information</h3>
				<div className="grid">
					<Input
						label="Number Bedrooms"
						type="number"
						value={property.general.beds}
						onChange={(e) =>
							setProperty({
								...property,
								general: {
									...property.general,
									beds: e.target.value,
								},
							})
						}
						disabled={!canEdit}
					/>
					<Input
						label="Number Baths"
						type="number"
						value={property.general.baths}
						onChange={(e) =>
							setProperty({
								...property,
								general: {
									...property.general,
									baths: e.target.value,
								},
							})
						}
						disabled={!canEdit}
					/>
					<Input
						label="Size (sqft)"
						type="number"
						value={property.general.sqft}
						onChange={(e) =>
							setProperty({
								...property,
								general: {
									...property.general,
									sqft: e.target.value,
								},
							})
						}
						disabled={!canEdit}
					/>
					<Input
						label="Rent ($)"
						type="number"
						value={property.general.rent}
						onChange={(e) =>
							setProperty({
								...property,
								general: {
									...property.general,
									rent: e.target.value,
								},
							})
						}
						disabled={!canEdit}
					/>
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
			</div>
		</Modal>
	);
};

export default PropertyOverviewInformation;
