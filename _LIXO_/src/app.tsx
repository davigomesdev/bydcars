//react-router
import { BrowserRouter, Route, Routes, Outlet } from 'react-router-dom';

//enums
import { PageUrlEnum } from './shared/enums/page-url.enum';

//layouts
import MainLayout from './shared/layouts/main.layout';

//pages
import Home from './pages/home/screens/home';

const App = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route
					element={
						<MainLayout>
							<Outlet />
						</MainLayout>
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
