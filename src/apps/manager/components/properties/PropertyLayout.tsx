import { FC } from "react";
import { Property } from "../../../../features/types/Property";
import { getAddress } from "../../../../features/utils/getAddress";
import ControlBar from "../../../../features/ui/controlBar/ControlBar";
import { Outlet } from "react-router-dom";
import NavTab from "../../../../features/ui/navTab/NavTab";

interface PropertyLayoutProps {
	property: Property;
}

const PropertyLayout: FC<PropertyLayoutProps> = ({ property }) => {
	const getHeader = () => {
		if (property) {
			return property.address.street;
		} else {
			return "Loading...";
		}
	};

	return (
		<>
			<ControlBar back="/properties">
				<h2>{getHeader()}</h2>
			</ControlBar>
			<NavTab
				links={[
					{ to: "overview", name: "Overview" },
					{ to: "leases", name: "Leases" },
					{ to: "maintenance", name: "Maintenance" },
				]}
			/>
			{property ? <Outlet /> : "Loading Property..."}
		</>
	);
};

export default PropertyLayout;
