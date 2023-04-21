import React, { useEffect } from "react";
import { RouterProvider } from "react-router-dom";
import { AllRoutes } from "./routes";
import $ from "jquery";
import "select2"


const App = () => {
	useEffect(() => {
		$(".menu-item.has-submenu .menu-link").on("click", function (s) {
			s.preventDefault();
			$(this).next(".submenu").is(":hidden") &&
				$(this).parent(".has-submenu").siblings().find(".submenu").slideUp(200);
			$(this).next(".submenu").slideToggle(200);
		});

		$("[data-trigger]").on("click", function (s) {
			s.preventDefault();
			s.stopPropagation();
			var n = $(this).attr("data-trigger");
			$(n).toggleClass("show");
			$("body").toggleClass("offcanvas-active");
			$(".screen-overlay").toggleClass("show");
		});

		$(".screen-overlay, .btn-close").on("click", function (s) {
			$(".screen-overlay").removeClass("show");
			$(".mobile-offcanvas, .show").removeClass("show");
			$("body").removeClass("offcanvas-active");
		});

		$(".btn-aside-minimize").on("click", function () {
			if (window.innerWidth < 768) {
				$("body").removeClass("aside-mini");
				$(".screen-overlay").removeClass("show");
				$(".navbar-aside").removeClass("show");
				$("body").removeClass("offcanvas-active");
			} else {
				$("body").toggleClass("aside-mini");
			}
		});

		if ($(".select-nice").length) {
			$(".select-nice").select2();
		}

		$(".darkmode").on("click", function () {
			$("body").toggleClass("dark");
		});
	}, []);
	return (
		<div>
			<RouterProvider router={AllRoutes} />
		</div>
	);
};

export default App;
