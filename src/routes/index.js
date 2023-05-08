import { createBrowserRouter } from "react-router-dom";
import { WebLayout } from "../components";
import Brands from "../pages/Brands";
import DashboardIndex from "../pages/DashboardIndex";
import Error404 from "../pages/Error404";
import HomePage from "../pages/HomePage";
import NotFound from "../pages/NotFound";
import OrderDetails from "../pages/OrderDetails";
import OrderList1 from "../pages/OrderList1";
import OrderList2 from "../pages/OrderList2";
import ProductCategory from "../pages/ProductCategory";
import Products from "../pages/Products";
import Reviews from "../pages/Reviews";
import Settings from "../pages/Settings";
import Transactions from "../pages/Transactions";
import UserLogin from "../pages/UserLogin";
import UserRegistration from "../pages/UserRegistration";
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
						path: "product-grid",
						element: <Products />,
					},

					{
						path: "product-category",
						element: <ProductCategory />,
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
					{
						path: "transactions",
						element: <Transactions />,
					},

					{
						path: "error404-page",
						element: <Error404 />,
					},

					{
						path: "reviews",
						element: <Reviews />,
					},

					{
						path: "brands",
						element: <Brands />,
					},

					{
						path: "settings",
						element: <Settings />,
					},
				],
			},

			{
				path: "user-login",
				element: <UserLogin />,
			},

			{
				path: "user-registration",
				element: <UserRegistration />,
			},
		],
	},

	{
		path: "*",
		element: <NotFound />,
	},
]);
