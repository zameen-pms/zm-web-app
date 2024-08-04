import { useState } from "react";
import { useNavigate } from "react-router-dom";
import createProperty from "../../../../features/api/property/createProperty";
import PropertyForm from "../../components/properties/PropertyForm";

const AddProperty = () => {
	const navigate = useNavigate();
	const [property, setProperty] = useState({
		address: {
			street: "",
			city: "",
			state: "",
			zip: "",
		},
		general: {
			beds: 0,
			baths: 0,
			sqft: 0,
			rent: 0,
			description: "",
		},
		owners: [],
	});

	const handleSave = async (e) => {
		e?.preventDefault();
		try {
			await createProperty(property);
			alert("Property has been created.");
			navigate("/properties");
		} catch (err) {
			alert("Unable to create new property.");
			console.log(err);
		}
	};

	return (
		<PropertyForm
			property={property}
			setProperty={setProperty}
			canEdit={true}
			handleSave={handleSave}
		/>
	);
};

export default AddProperty;
