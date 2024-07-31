import { Outlet } from "react-router-dom";
import { StyledWebappBody } from "./WebAppLayout.styled";
import WebappHeader from "./WebappHeader";
import WebappFooter from "./WebappFooter";

const WebAppLayout = () => {
	return (
		<>
			<WebappHeader />
			<StyledWebappBody>
				<Outlet />
			</StyledWebappBody>
			<WebappFooter />
		</>
	);
};

export default WebAppLayout;
