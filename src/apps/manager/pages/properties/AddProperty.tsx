import { useEffect, useState } from "react";
import ControlBar from "../../../../features/ui/controlBar/ControlBar";
import Form from "../../../../features/ui/form/Form";
import { Property } from "../../../../features/types/Property";
import Input from "../../../../features/ui/input/Input";
import Button from "../../../../features/ui/button/Button";
import Textbox from "../../../../features/ui/textbox/Textbox";
import Dropdown from "../../../../features/ui/dropdown/Dropdown";
import MultiSelect from "../../../../features/ui/multiSelect/MultiSelect";
import getUsers from "../../../../features/api/users/getUsers";
import createProperty from "../../../../features/api/property/createProperty";
import { useNavigate } from "react-router-dom";

const AddProperty = () => {
	const [property, setProperty] = useState<Property>({
		address: {
			street: "",
			city: "",
			state: "",
			zip: "",
		},
		type: "Single-Family",
		owners: [],
		availability: "Available",
		images: [],
		general: {
			beds: 0,
			baths: 0,
			sqft: 0,
			rent: 0,
			description: "",
		},
	});
	const [owners, setOwners] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const navigate = useNavigate();

	const fetchOwners = async () => {
		try {
			setIsLoading(true);
			const { data } = await getUsers({ role: "Owner" });
			setOwners(
				data.map((owner) => ({
					id: owner._id,
					value: `${owner?.firstName} ${owner?.lastName} (${owner?.email})`,
				}))
			);
		} catch (err) {
			alert(`Unable to fetch owners: ${err.message}`);
		} finally {
			setIsLoading(false);
		}
	};

	useEffect(() => {
		fetchOwners();
	}, []);

	const handleSubmit = async () => {
		try {
			setIsLoading(true);
			await createProperty(property);
			alert("New property created.");
			navigate("/properties");
		} catch (err) {
			alert(`Unable to add property: ${err.message}`);
		} finally {
			setIsLoading(false);
		}
	};

	return (
		<>
			<ControlBar>
				<h2>Add Property</h2>
			</ControlBar>
			<Form onSubmit={handleSubmit}>
				<h3>Owners</h3>
				<MultiSelect
					label="Select Owner(s)"
					options={owners}
					onChange={(options) =>
						setProperty({
							...property,
							owners: options.map((opt) => opt.id),
						})
					}
					value={property.owners}
					required
				/>

				<h3>Address</h3>
				<div className="form-grid">
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
						required
					/>
				</div>

				<h3>General Information</h3>
				<div className="form-grid">
					<Input
						label="Number of Beds"
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
						required
					/>
					<Input
						label="Number of Baths"
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
						required
					/>
					<Input
						label="Property Size (sqft)"
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
						required
					/>
					<Input
						label="Rent Amount ($)"
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
						required
					/>
					<Dropdown
						label="Availability"
						options={[
							{ value: "Available" },
							{ value: "Occupied" },
							{ value: "Unavailable" },
						]}
						value={property.availability}
						onChange={(option) =>
							setProperty({
								...property,
								availability: option.value,
							})
						}
						required
					/>
					<Dropdown
						label="Property Type"
						options={[
							{ value: "Single-Family" },
							{ value: "Duplex" },
							{ value: "Multi-Family" },
							{ value: "Apartment" },
						]}
						value={property.type}
						onChange={(option) =>
							setProperty({
								...property,
								type: option.value,
							})
						}
						required
					/>
				</div>
				<Textbox
					label="Description"
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
				/>

				<Button disabled={isLoading}>
					{isLoading ? "Loading..." : "Add Property"}
				</Button>
			</Form>
		</>
	);
};

export default AddProperty;
