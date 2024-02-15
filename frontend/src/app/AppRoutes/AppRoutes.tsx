import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import { lazy } from 'react';

const Home = lazy(() => import('../../pages/Home/Home'));

const routes = createBrowserRouter(
	createRoutesFromElements(
		<Route path="/" element={<Home />}>

		</Route>,
	),
);
export const AppRoutes = () => {
	return (
		<RouterProvider router={routes} />
	);
};
