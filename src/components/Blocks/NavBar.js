import React from "react";

const NavBar = () => {
	return (
		<>
			<div class='screen-overlay'></div>
			<aside class='navbar-aside' id='offcanvas_aside'>
				<div class='aside-top'>
					<a href='index.html' class='brand-wrap'>
						<img
							src='assets/imgs/theme/logo.svg'
							class='logo'
							alt='Nest Dashboard'
						/>
					</a>
					<div>
						<button class='btn btn-icon btn-aside-minimize'>
							<i class='text-muted material-icons md-menu_open'></i>
						</button>
					</div>
				</div>
				<nav>
					<ul class='menu-aside'>
						<li class='menu-item active '>
							<a href='admin-dashboard' class='menu-link '>
								<i class='icon material-icons md-home'></i>
								<span class='text'>Dashboard</span>
							</a>
						</li>

						<li class='menu-item has-submenu'>
							<a class='menu-link' href='#'>
								<i class='icon material-icons md-shopping_bag'></i>
								<span class='text'>Products</span>
							</a>
							<div class='submenu'>
								<a href='/products'>Product List</a>
								<a href='/product-grid'>Product grid</a>
								<a href='/product-category'>Categories</a>
							</div>
						</li>

						<li class='menu-item has-submenu'>
							<a class='menu-link' href='/orderlist-1'>
								<i class='icon material-icons md-shopping_cart'></i>
								<span class='text'>Orders</span>
							</a>
							<div class='submenu'>
								<a href='/orderlist-1'>Order list1</a>
								<a href='/orderlist-2'>Order list2</a>
								<a href='/orderlist-details'>Order detail</a>
							</div>
						</li>

						<li class='menu-item has-submenu'>
							<a class='menu-link' href='/transactions'>
								<i class='icon material-icons md-monetization_on'></i>
								<span class='text'>Transactions</span>
							</a>
							<div class='submenu'>
								<a href='/transactions'>Transaction</a>
							</div>
						</li>
						<li class='menu-item has-submenu'>
							<a class='menu-link' href='#'>
								<i class='icon material-icons md-person'></i>
								<span class='text'>Account</span>
							</a>
							<div class='submenu'>
								<a href='/user-login'>User login</a>
								<a href='/user-registration'>User registration</a>
								<a href='/error404-page'>Error 404</a>
							</div>
						</li>
						<li class='menu-item'>
							<a class='menu-link' href='/reviews'>
								<i class='icon material-icons md-comment'></i>
								<span class='text'>Reviews</span>
							</a>
						</li>
						<li class='menu-item'>
							<a class='menu-link' href='/brands'>
								<i class='icon material-icons md-stars'></i>{" "}
								<span class='text'>Brands</span>
							</a>
						</li>
					</ul>
					<hr />
					<ul class='menu-aside'>
						<li class='menu-item has-submenu'>
							<a class='menu-link' href='#'>
								<i class='icon material-icons md-settings'></i>
								<span class='text'>Settings</span>
							</a>
							<div class='submenu'>
								<a href='/settings'>Setting sample</a>
							</div>
						</li>
					</ul>
					<br />
					<br />
				</nav>
			</aside>
		</>
	);
};

export default NavBar;
