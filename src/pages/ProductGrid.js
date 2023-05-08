import React from "react";

const ProductGrid = () => {
	return (
		<section class='content-main'>
			<div class='content-header'>
				<div>
					<h2 class='content-title card-title'>Products grid</h2>
					<p>Lorem ipsum dolor sit amet.</p>
				</div>
				<div>
					<a href='#' class='btn btn-light rounded font-md'>
						Export
					</a>
					<a href='#' class='btn btn-light rounded font-md'>
						Import
					</a>
					<a href='#' class='btn btn-primary btn-sm rounded'>
						Create new
					</a>
				</div>
			</div>
			<header class='card card-body mb-4'>
				<div class='row gx-3'>
					<div class='col-lg-4 col-md-6 me-auto'>
						<input type='text' placeholder='Search...' class='form-control' />
					</div>
					<div class='col-lg-2 col-6 col-md-3'>
						<select class='form-select'>
							<option>All category</option>
							<option>Electronics</option>
							<option>Clothings</option>
							<option>Something else</option>
						</select>
					</div>
					<div class='col-lg-2 col-6 col-md-3'>
						<select class='form-select'>
							<option>Latest added</option>
							<option>Cheap first</option>
							<option>Most viewed</option>
						</select>
					</div>
				</div>
			</header>

			<div class='row'>
				<div class='col-xl-3 col-lg-4 col-md-6'>
					<div class='card card-product-grid'>
						<a href='#' class='img-wrap'>
							{" "}
							<img src='assets/imgs/items/1.jpg' alt='Product' />{" "}
						</a>
						<div class='info-wrap'>
							<div class='dropdown float-end'>
								<a href='#' class='btn btn-sm btn-brand rounded'>
									<i class='material-icons md-edit mr-5'></i>Edit
								</a>
								<div class='dropdown-menu dropdown-menu-end'>
									<a class='dropdown-item' href='#'>
										Edit info
									</a>
									<a class='dropdown-item text-danger' href='#'>
										Delete
									</a>
								</div>
							</div>
							<a href='#' class='title'>
								Haagen-Dazs Caramel Cone Ice
							</a>
							<div class='price mt-1'>$179.00</div>
						</div>
					</div>
				</div>

				<div class='col-xl-3 col-lg-4 col-md-6'>
					<div class='card card-product-grid'>
						<a href='#' class='img-wrap'>
							{" "}
							<img src='assets/imgs/items/2.jpg' alt='Product' />{" "}
						</a>
						<div class='info-wrap'>
							<div class='dropdown float-end'>
								<a href='#' class='btn btn-sm btn-brand rounded'>
									<i class='material-icons md-edit mr-5'></i>Edit
								</a>
								<div class='dropdown-menu dropdown-menu-end'>
									<a class='dropdown-item' href='#'>
										Edit info
									</a>
									<a class='dropdown-item text-danger' href='#'>
										Delete
									</a>
								</div>
							</div>
							<a href='#' class='title'>
								Seeds of Change Organic Quinoa
							</a>
							<div class='price mt-1'>$179.00</div>
						</div>
					</div>
				</div>

				<div class='col-xl-3 col-lg-4 col-md-6'>
					<div class='card card-product-grid'>
						<a href='#' class='img-wrap'>
							{" "}
							<img src='assets/imgs/items/3.jpg' alt='Product' />{" "}
						</a>
						<div class='info-wrap'>
							<div class='dropdown float-end'>
								<a href='#' class='btn btn-sm btn-brand rounded'>
									<i class='material-icons md-edit mr-5'></i>Edit
								</a>
								<div class='dropdown-menu dropdown-menu-end'>
									<a class='dropdown-item' href='#'>
										Edit info
									</a>
									<a class='dropdown-item text-danger' href='#'>
										Delete
									</a>
								</div>
							</div>
							<a href='#' class='title'>
								All Natural Italian-Style
							</a>
							<div class='price mt-1'>$179.00</div>
						</div>
					</div>
				</div>

				<div class='col-xl-3 col-lg-4 col-md-6'>
					<div class='card card-product-grid'>
						<a href='#' class='img-wrap'>
							{" "}
							<img src='assets/imgs/items/4.jpg' alt='Product' />{" "}
						</a>
						<div class='info-wrap'>
							<div class='dropdown float-end'>
								<a href='#' class='btn btn-sm btn-brand rounded'>
									<i class='material-icons md-edit mr-5'></i>Edit
								</a>
								<div class='dropdown-menu dropdown-menu-end'>
									<a class='dropdown-item' href='#'>
										Edit info
									</a>
									<a class='dropdown-item text-danger' href='#'>
										Delete
									</a>
								</div>
							</div>
							<a href='#' class='title'>
								Boomchick apop Sweet & Salty
							</a>
							<div class='price mt-1'>$179.00</div>
						</div>
					</div>
				</div>

				<div class='col-xl-3 col-lg-4 col-md-6'>
					<div class='card card-product-grid'>
						<a href='#' class='img-wrap'>
							{" "}
							<img src='assets/imgs/items/5.jpg' alt='Product' />{" "}
						</a>
						<div class='info-wrap'>
							<div class='dropdown float-end'>
								<a href='#' class='btn btn-sm btn-brand rounded'>
									<i class='material-icons md-edit mr-5'></i>Edit
								</a>
								<div class='dropdown-menu dropdown-menu-end'>
									<a class='dropdown-item' href='#'>
										Edit info
									</a>
									<a class='dropdown-item text-danger' href='#'>
										Delete
									</a>
								</div>
							</div>
							<a href='#' class='title'>
								Haagen-Dazs Caramel Cone Ice
							</a>
							<div class='price mt-1'>$179.00</div>
						</div>
					</div>
				</div>

				<div class='col-xl-3 col-lg-4 col-md-6'>
					<div class='card card-product-grid'>
						<a href='#' class='img-wrap'>
							{" "}
							<img src='assets/imgs/items/6.jpg' alt='Product' />{" "}
						</a>
						<div class='info-wrap'>
							<div class='dropdown float-end'>
								<a href='#' class='btn btn-sm btn-brand rounded'>
									<i class='material-icons md-edit mr-5'></i>Edit
								</a>
								<div class='dropdown-menu dropdown-menu-end'>
									<a class='dropdown-item' href='#'>
										Edit info
									</a>
									<a class='dropdown-item text-danger' href='#'>
										Delete
									</a>
								</div>
							</div>
							<a href='#' class='title'>
								Haagen-Dazs Caramel Cone Ice
							</a>
							<div class='price mt-1'>$179.00</div>
						</div>
					</div>
				</div>

				<div class='col-xl-3 col-lg-4 col-md-6'>
					<div class='card card-product-grid'>
						<a href='#' class='img-wrap'>
							{" "}
							<img src='assets/imgs/items/7.jpg' alt='Product' />{" "}
						</a>
						<div class='info-wrap'>
							<div class='dropdown float-end'>
								<a href='#' class='btn btn-sm btn-brand rounded'>
									<i class='material-icons md-edit mr-5'></i>Edit
								</a>
								<div class='dropdown-menu dropdown-menu-end'>
									<a class='dropdown-item' href='#'>
										Edit info
									</a>
									<a class='dropdown-item text-danger' href='#'>
										Delete
									</a>
								</div>
							</div>
							<a href='#' class='title'>
								Haagen-Dazs Caramel Cone Ice
							</a>
							<div class='price mt-1'>$179.00</div>
						</div>
					</div>
				</div>

				<div class='col-xl-3 col-lg-4 col-md-6'>
					<div class='card card-product-grid'>
						<a href='#' class='img-wrap'>
							{" "}
							<img src='/assets/imgs/items/8.jpg' alt='Product' />{" "}
						</a>
						<div class='info-wrap'>
							<div class='dropdown float-end'>
								<a href='#' class='btn btn-sm btn-brand rounded'>
									<i class='material-icons md-edit mr-5'></i>Edit
								</a>
								<div class='dropdown-menu dropdown-menu-end'>
									<a class='dropdown-item' href='#'>
										Edit info
									</a>
									<a class='dropdown-item text-danger' href='#'>
										Delete
									</a>
								</div>
							</div>
							<a href='#' class='title'>
								Apple Airpods CB-133
							</a>
							<div class='price mt-1'>$179.00</div>
						</div>
					</div>
				</div>
			</div>

			<div class='pagination-area mt-15 mb-50'>
				<nav aria-label='Page navigation example'>
					<ul class='pagination justify-content-start'>
						<li class='page-item active'>
							<a class='page-link' href='#'>
								01
							</a>
						</li>
						<li class='page-item'>
							<a class='page-link' href='#'>
								02
							</a>
						</li>
						<li class='page-item'>
							<a class='page-link' href='#'>
								03
							</a>
						</li>
						<li class='page-item'>
							<a class='page-link dot' href='#'>
								...
							</a>
						</li>
						<li class='page-item'>
							<a class='page-link' href='#'>
								16
							</a>
						</li>
						<li class='page-item'>
							<a class='page-link' href='#'>
								<i class='material-icons md-chevron_right'></i>
							</a>
						</li>
					</ul>
				</nav>
			</div>
		</section>
	);
};

export default ProductGrid;
