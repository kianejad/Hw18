import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home, Dashboard, Login, NoPages } from 'page';
import { History } from './History/History.component';
function Router() {
	return (
		<BrowserRouter>
			<Routes>
				<Route index element={<Home />} />
				<Route path="login"element={<History onRender={props => <Login {...props} />} />}/>
				<Route path="dashboard" element={<Dashboard />} />
				<Route path="*" element={<NoPages />} />
			</Routes>
		</BrowserRouter>
	);
}

export default Router;
