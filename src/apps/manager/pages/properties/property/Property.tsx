import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import getPropertyById from "../../../../../features/api/property/getPropertyById";
import updatePropertyById from "../../../../../features/api/property/updatePropertyById";
import PropertyForm from "../../../components/properties/PropertyForm";
import Button from "../../../../../features/ui/button/Button";

const Property = () => {
	const { propertyId } = useParams();
	const [property, setProperty] = useState(null);
	const [canEdit, setCanEdit] = useState(false);

	const fetchProperty = async () => {
		try {
			const { data } = await getPropertyById(propertyId);
			setProperty(data);
		} catch (err) {
			alert("Unable to fetch property.");
			console.log(err.message);
		}
	};

	useEffect(() => {
		fetchProperty();
	}, []);

	const handleSubmit = async (e) => {
		e?.preventDefault();
		try {
			await updatePropertyById(propertyId, property);
			handleEditClick();
			alert("Property has been updated.");
		} catch (err) {
			alert("Unable to save property data.");
			console.log(err.message);
		}
	};

	const handleEditClick = () => {
		if (canEdit) {
			setCanEdit(false);
			fetchProperty();
		} else {
			setCanEdit(true);
		}
	};

	return (
		<>
			<div className="row gap-05">
				<Button onClick={handleEditClick}>
					{canEdit ? "Cancel" : "Edit"}
				</Button>
				{canEdit && <Button>Save</Button>}
			</div>
			<PropertyForm
				property={property}
				setProperty={setProperty}
				canEdit={canEdit}
				handleSave={handleSubmit}
			/>
		</>
	);
};

export default Property;
