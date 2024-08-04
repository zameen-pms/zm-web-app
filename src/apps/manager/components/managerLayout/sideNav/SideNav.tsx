import { Link, NavLink, useNavigate } from "react-router-dom";
import useLogout from "../../auth/useLogout";
import { StyledNav } from "./SideNav.styled";
import { MdLogout } from "react-icons/md";

const SideNav = ({ navItems = [] }) => {
	const logout = useLogout();
	const navigate = useNavigate();

	const handleLogout = async () => {
		try {
			await logout();
			navigate("/");
		} catch (err) {
			alert("Unable to logout.");
		}
	};

	return (
		<StyledNav>
			<header>
				<Link to="/">
					<img
						src="/images/light-logo.svg"
						alt="Zameen Management LLC"
					/>
				</Link>
			</header>
			<ul className="column gap-05">
				{navItems.map((item, index) => (
					<NavLink to={item?.url || ""} key={index}>
						{item?.icon}
						{item?.name}
					</NavLink>
				))}
			</ul>
			<a onClick={handleLogout} className="nav-signout">
				<MdLogout />
				Sign out
			</a>
		</StyledNav>
	);
};

export default SideNav;
