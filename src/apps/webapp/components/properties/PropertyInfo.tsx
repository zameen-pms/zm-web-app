import { useNavigate } from "react-router-dom";
import { PropertyInfoCard, StyledPropertyInfo } from "./Properties.styled";
import { PropertyProps } from "./Property.types";
import { FC } from "react";
import PropertyImageGallery from "./PropertyImageGallery";
import { getAddress } from "../../../../features/utils/getAddress";
import { formatNumber } from "../../../../features/utils/formatNumber";
import Button from "../../../../features/ui/button/Button";

interface PropertyInfoProps {
	property: PropertyProps;
}

const PropertyInfo: FC<PropertyInfoProps> = ({ property }) => {
	const navigate = useNavigate();

	const handleApplicationClick = () => {
		navigate(`/applications/${property._id}`);
	};

	const handleCallClick = () => {
		window.location.href = "tel:+14176692258";
	};

	return (
		<StyledPropertyInfo>
			{property.images.length > 0 && (
				<PropertyInfoCard>
					<PropertyImageGallery images={property.images} />
				</PropertyInfoCard>
			)}
			<PropertyInfoCard>
				<div className="column gap-2">
					<h2>{getAddress(property.address)}</h2>
					<p>
						{`${property.general.beds} beds | ${
							property.general.baths
						} baths | ${formatNumber(property.general.sqft)} sqft`}
					</p>
					<div className="row align-center justify-sb">
						<p>
							Rent: ${formatNumber(property.general.rent)}/month
						</p>
						<Button onClick={() => navigate("/applications/pay")}>
							Pay Application Fee
						</Button>
					</div>
					<div className="column gap-1">
						<h3>Details:</h3>
						{property.general.description && (
							<p>{property.general.description}</p>
						)}
						<p>
							We do allow pets with a $500 one-time pet fee (per
							pet, per lease). We do require a rental reference
							and proof of income. We will do a background check
							for criminal and financial history.
						</p>
						<p>
							Tenant is responsible for paying all the utilities
							and taking care of the yard (we can refer local lawn
							care professionals).
						</p>
						<p>
							Deposit: One month rent + Last month's rent (can be
							applied to last month's lease)
						</p>
						<p>
							Application fee is $40 per applicant . All adults
							living in the house need to apply and be approved.
							Fees can be paid via Venmo or Zelle. Please attach
							proof of income with application (W-2, tax return,
							1099 or any financial document).
						</p>
						<p>
							Any additional questions can be answers by our
							leasing director at (417) 669-2258
						</p>
					</div>
					<div className="row align-center gap-1">
						<Button
							onClick={handleApplicationClick}
							style={{ width: "100%" }}
						>
							Apply Now
						</Button>
						<Button onClick={handleCallClick}>Call Us</Button>
					</div>
				</div>
			</PropertyInfoCard>
		</StyledPropertyInfo>
	);
};

export default PropertyInfo;
