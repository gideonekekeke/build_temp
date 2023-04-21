import React from "react";

const Products = () => {
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
			<div class='card mb-4'>
				<header class='card-header'>
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

				<div class='card-body'>
					<div class='row gx-3 row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-xl-4 row-cols-xxl-5'>
						<div class='col'>
							<div class='card card-product-grid'>
								<a href='#' class='img-wrap'>
									<img src='assets/imgs/items/1.jpg' alt='Product' />
								</a>
								<div class='info-wrap'>
									<a href='#' class='title text-truncate'>
										Haagen-Dazs Caramel Cone Ice
									</a>
									<div class='price mb-2'>$179.00</div>

									<a href='#' class='btn btn-sm font-sm rounded btn-brand'>
										<i class='material-icons md-edit'></i> Edit
									</a>
									<a href='#' class='btn btn-sm font-sm btn-light rounded'>
										<i class='material-icons md-delete_forever'></i> Delete
									</a>
								</div>
							</div>
						</div>

						<div class='col'>
							<div class='card card-product-grid'>
								<a href='#' class='img-wrap'>
									<img src='assets/imgs/items/2.jpg' alt='Product' />
								</a>
								<div class='info-wrap'>
									<a href='#' class='title text-truncate'>
										Seeds of Change Organic Quinoa
									</a>
									<div class='price mb-2'>$179.00</div>

									<a href='#' class='btn btn-sm font-sm rounded btn-brand'>
										<i class='material-icons md-edit'></i> Edit
									</a>
									<a href='#' class='btn btn-sm font-sm btn-light rounded'>
										<i class='material-icons md-delete_forever'></i> Delete
									</a>
								</div>
							</div>
						</div>

						<div class='col'>
							<div class='card card-product-grid'>
								<a href='#' class='img-wrap'>
									<img src='assets/imgs/items/3.jpg' alt='Product' />
								</a>
								<div class='info-wrap'>
									<a href='#' class='title text-truncate'>
										All Natural Italian-Style
									</a>
									<div class='price mb-2'>$179.00</div>

									<a href='#' class='btn btn-sm font-sm rounded btn-brand'>
										<i class='material-icons md-edit'></i> Edit
									</a>
									<a href='#' class='btn btn-sm font-sm btn-light rounded'>
										<i class='material-icons md-delete_forever'></i> Delete
									</a>
								</div>
							</div>
						</div>

						<div class='col'>
							<div class='card card-product-grid'>
								<a href='#' class='img-wrap'>
									<img src='assets/imgs/items/4.jpg' alt='Product' />
								</a>
								<div class='info-wrap'>
									<a href='#' class='title text-truncate'>
										Boomchick apop Sweet & Salty
									</a>
									<div class='price mb-2'>$179.00</div>

									<a href='#' class='btn btn-sm font-sm rounded btn-brand'>
										<i class='material-icons md-edit'></i> Edit
									</a>
									<a href='#' class='btn btn-sm font-sm btn-light rounded'>
										<i class='material-icons md-delete_forever'></i> Delete
									</a>
								</div>
							</div>
						</div>

						<div class='col'>
							<div class='card card-product-grid'>
								<a href='#' class='img-wrap'>
									<img src='assets/imgs/items/5.jpg' alt='Product' />
								</a>
								<div class='info-wrap'>
									<a href='#' class='title text-truncate'>
										Haagen-Dazs Caramel Cone Ice
									</a>
									<div class='price mb-2'>$179.00</div>

									<a href='#' class='btn btn-sm font-sm rounded btn-brand'>
										<i class='material-icons md-edit'></i> Edit
									</a>
									<a href='#' class='btn btn-sm font-sm btn-light rounded'>
										<i class='material-icons md-delete_forever'></i> Delete
									</a>
								</div>
							</div>
						</div>

						<div class='col'>
							<div class='card card-product-grid'>
								<a href='#' class='img-wrap'>
									<img src='assets/imgs/items/6.jpg' alt='Product' />
								</a>
								<div class='info-wrap'>
									<a href='#' class='title text-truncate'>
										Haagen-Dazs Caramel Cone Ice
									</a>
									<div class='price mb-2'>$179.00</div>

									<a href='#' class='btn btn-sm font-sm rounded btn-brand'>
										<i class='material-icons md-edit'></i> Edit
									</a>
									<a href='#' class='btn btn-sm font-sm btn-light rounded'>
										<i class='material-icons md-delete_forever'></i> Delete
									</a>
								</div>
							</div>
						</div>

						<div class='col'>
							<div class='card card-product-grid'>
								<a href='#' class='img-wrap'>
									<img src='assets/imgs/items/7.jpg' alt='Product' />
								</a>
								<div class='info-wrap'>
									<a href='#' class='title text-truncate'>
										Haagen-Dazs Caramel Cone Ice
									</a>
									<div class='price mb-2'>$179.00</div>

									<a href='#' class='btn btn-sm font-sm rounded btn-brand'>
										<i class='material-icons md-edit'></i> Edit
									</a>
									<a href='#' class='btn btn-sm font-sm btn-light rounded'>
										<i class='material-icons md-delete_forever'></i> Delete
									</a>
								</div>
							</div>
						</div>

						<div class='col'>
							<div class='card card-product-grid'>
								<a href='#' class='img-wrap'>
									<img src='assets/imgs/items/8.jpg' alt='Product' />
								</a>
								<div class='info-wrap'>
									<a href='#' class='title text-truncate'>
										Apple Airpods CB-133
									</a>
									<div class='price mb-2'>$179.00</div>

									<a href='#' class='btn btn-sm font-sm rounded btn-brand'>
										<i class='material-icons md-edit'></i> Edit
									</a>
									<a href='#' class='btn btn-sm font-sm btn-light rounded'>
										<i class='material-icons md-delete_forever'></i> Delete
									</a>
								</div>
							</div>
						</div>

						<div class='col'>
							<div class='card card-product-grid'>
								<a href='#' class='img-wrap'>
									<img src='assets/imgs/items/9.jpg' alt='Product' />
								</a>
								<div class='info-wrap'>
									<a href='#' class='title text-truncate'>
										Apple Airpods CB-133
									</a>
									<div class='price mb-2'>$179.00</div>

									<a href='#' class='btn btn-sm font-sm rounded btn-brand'>
										<i class='material-icons md-edit'></i> Edit
									</a>
									<a href='#' class='btn btn-sm font-sm btn-light rounded'>
										<i class='material-icons md-delete_forever'></i> Delete
									</a>
								</div>
							</div>
						</div>

						<div class='col'>
							<div class='card card-product-grid'>
								<a href='#' class='img-wrap'>
									<img src='assets/imgs/items/10.jpg' alt='Product' />
								</a>
								<div class='info-wrap'>
									<a href='#' class='title text-truncate'>
										Apple Airpods CB-133
									</a>
									<div class='price mb-2'>$179.00</div>

									<a href='#' class='btn btn-sm font-sm rounded btn-brand'>
										<i class='material-icons md-edit'></i> Edit
									</a>
									<a href='#' class='btn btn-sm font-sm btn-light rounded'>
										<i class='material-icons md-delete_forever'></i> Delete
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div class='pagination-area mt-30 mb-50'>
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

export default Products;
