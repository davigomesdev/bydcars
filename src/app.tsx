//react-router imports
import { BrowserRouter, Route, Routes, Outlet } from 'react-router-dom';

//enum imports
import { PageUrlEnum } from './domain/enums/page-url.enum';

//component imports
import Layout from './presentation/components/layouts/layout/layout';

//page imports
import Home from './presentation/pages/home/screens/home';

const App = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route
					element={
						<Layout>
							<Outlet />
						</Layout>
					}
				>
					<Route path={PageUrlEnum.HOME} element={<Home />} />
					<Route path={PageUrlEnum.DEFAULT} element={<Home />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
};

export default App;
