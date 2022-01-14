import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home, Dashboard, Login, NoPages } from 'page';
function Router() {
	return (
		<BrowserRouter>
			<Routes>
				<Route index element={<Home />} />
				<Route path="login" element={<Login />} />
				<Route path="dashboard" element={<Dashboard />} />
				<Route path="*" element={<NoPages />} />
			</Routes>
		</BrowserRouter>
	);
}

export default Router;
