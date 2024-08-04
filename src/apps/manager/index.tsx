import { Navigate, Route, Routes } from "react-router-dom";
import ManagerHome from "./pages/home";
import Auth from "./pages/auth";
import PersistLogin from "./components/auth/PersistLogin";
import RequireAuth from "./components/auth/RequireAuth";
import ManagerLayout from "./components/managerLayout";
import PropertiesHome from "./pages/properties";
import UsersHome from "./pages/users";
import ManagerApplicationsHome from "./pages/applications";
import ContractsHome from "./pages/contracts";
import LeasesHome from "./pages/leases";

const ManagerManager = () => {
	return (
		<Routes>
			{/* public routes */}
			<Route index element={<ManagerHome />} />
			<Route path="auth/*" element={<Auth />} />

			{/* private routes */}
			<Route element={<PersistLogin />}>
				<Route element={<RequireAuth role="Manager" />}>
					<Route element={<ManagerLayout />}>
						<Route index element={<Navigate to="properties" />} />
						<Route
							path="properties/*"
							element={<PropertiesHome />}
						/>
						<Route path="users/*" element={<UsersHome />} />
						<Route
							path="applications/*"
							element={<ManagerApplicationsHome />}
						/>
						<Route path="contracts/*" element={<ContractsHome />} />
						<Route path="leases/*" element={<LeasesHome />} />
					</Route>
				</Route>
			</Route>

			{/* catch-all */}
			<Route path="*" element={<Navigate to="/" />} />
		</Routes>
	);
};

export default ManagerManager;
