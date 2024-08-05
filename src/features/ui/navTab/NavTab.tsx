import { FC } from "react";
import { StyledNavTab } from "./NavTab.styled";
import { NavLink } from "react-router-dom";

interface Link {
	to: string;
	name: string;
}

interface NavTabProps {
	links: Link[];
}

const NavTab: FC<NavTabProps> = ({ links }) => {
	return (
		<StyledNavTab>
			{links.map((link, index) => (
				<NavLink key={index} to={link.to}>
					{link.name}
				</NavLink>
			))}
		</StyledNavTab>
	);
};

export default NavTab;
