import {
	MdContactPage,
	MdEditDocument,
	MdHomeWork,
	MdPerson,
	MdRequestPage,
} from "react-icons/md";
import { StyledBody, StyledLayout, StyledOutlet } from "./ManagerLayout.styled";
import SideNav from "./sideNav/SideNav";
import { Outlet } from "react-router-dom";

const navItems = [
	{
		name: "Properties",
		url: "/properties",
		icon: <MdHomeWork />,
	},
	{
		name: "Users",
		url: "/users",
		icon: <MdPerson />,
	},
	{
		name: "Applications",
		url: "/applications",
		icon: <MdContactPage />,
	},
	{
		name: "Leases",
		url: "/leases",
		icon: <MdRequestPage />,
	},
	{
		name: "Contracts",
		url: "/contracts",
		icon: <MdEditDocument />,
	},
];

const ManagerLayout = () => {
	return (
		<StyledLayout>
			<SideNav navItems={navItems} />
			<StyledBody>
				<StyledOutlet>
					<Outlet />
				</StyledOutlet>
			</StyledBody>
		</StyledLayout>
	);
};

export default ManagerLayout;
