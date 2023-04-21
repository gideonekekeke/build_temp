import { createBrowserRouter } from "react-router-dom";
import { WebLayout } from "../components";
import DashboardIndex from "../pages/DashboardIndex";
import HomePage from "../pages/HomePage";
import NotFound from "../pages/NotFound";
import Products from "../pages/Products";
import { ErrorBoundary } from "../utils";

export const AllRoutes = createBrowserRouter([
	{
		path: "/",
		errorElement: <ErrorBoundary />,
		hasErrorBoundary: true,
		children: [
			{
				index: true,
				element: <HomePage />,
			},

			{
				element: <WebLayout />,
				children: [
					{
						path: "admin-dashboard",
						element: <DashboardIndex />,
					},

					{
						path: "products",
						element: <Products />,
					},
				],
			},
		],
	},

	{
		path: "*",
		element: <NotFound />,
	},
]);
