import Layout from "./Layout";
import SelectorScr from "./SelectorScr";
import AddScr from "./AddScr";
import DashboardScr from "./DashboardScr";
import { Routes, Route } from "react-router-dom";

function App() {
	return (
		<Routes>
			<Route path="/" element={<Layout />}>
				<Route index element={<SelectorScr />} />
				<Route path="add">
					<Route index element={<AddScr />} />
				</Route>
				<Route path="dashboard">
					<Route index element={<DashboardScr />} />
				</Route>
			</Route>
		</Routes>
	);
}

export default App;
