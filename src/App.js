import React, { useEffect } from "react";
import { RouterProvider } from "react-router-dom";
import { AllRoutes } from "./routes";


const App = () => {
	return (
		<div>
			<RouterProvider router={AllRoutes} />
		</div>
	);
};

export default App;
