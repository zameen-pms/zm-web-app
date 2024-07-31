import ManagerManager from "./apps/manager";
import TenantManager from "./apps/tenant";
import WebappManager from "./apps/webapp";

const App = () => {
	const subdomain = window.location.hostname.split(".")[0];

	switch (subdomain) {
		case "manager":
			return <ManagerManager />;
		case "tenant":
			return <TenantManager />;
		default:
			return <WebappManager />;
	}
};

export default App;
