import { createBrowserRouter } from "react-router-dom";
import { WebLayout } from "../components";
import DashboardIndex from "../pages/DashboardIndex";
import HomePage from "../pages/HomePage";
import NotFound from "../pages/NotFound";
import OrderDetails from "../pages/OrderDetails";
import OrderList1 from "../pages/OrderList1";
import OrderList2 from "../pages/OrderList2";
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

					{
						path: "orderlist-1",
						element: <OrderList1 />,
					},

					{
						path: "orderlist-2",
						element: <OrderList2 />,
					},

					{
						path: "orderlist-details",
						element: <OrderDetails />,
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
