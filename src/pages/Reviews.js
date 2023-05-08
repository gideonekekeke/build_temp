import React from "react";

const Reviews = () => {
	return (
		<section class='content-main'>
			<div class='content-header'>
				<div>
					<h2 class='content-title card-title'>Reviews</h2>
					<p>Lorem ipsum dolor sit amet.</p>
				</div>
				<div>
					<input
						type='text'
						placeholder='Search by name'
						class='form-control bg-white'
					/>
				</div>
			</div>
			<div class='card mb-4'>
				<header class='card-header'>
					<div class='row gx-3'>
						<div class='col-lg-4 col-md-6 me-auto'>
							<input type='text' placeholder='Search...' class='form-control' />
						</div>
						<div class='col-lg-2 col-md-3 col-6'>
							<select class='form-select'>
								<option>Status</option>
								<option>Active</option>
								<option>Disabled</option>
								<option>Show all</option>
							</select>
						</div>
						<div class='col-lg-2 col-md-3 col-6'>
							<select class='form-select'>
								<option>Show 20</option>
								<option>Show 30</option>
								<option>Show 40</option>
							</select>
						</div>
					</div>
				</header>

				<div class='card-body'>
					<div class='table-responsive'>
						<table class='table table-hover'>
							<thead>
								<tr>
									<th>
										<div class='form-check'>
											<input
												class='form-check-input'
												type='checkbox'
												value=''
											/>
										</div>
									</th>
									<th>#ID</th>
									<th>Product</th>
									<th>Name</th>
									<th>Rating</th>
									<th>Date</th>
									<th class='text-end'>Action</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>
										<div class='form-check'>
											<input
												class='form-check-input'
												type='checkbox'
												value=''
											/>
										</div>
									</td>
									<td>23</td>
									<td>
										<b>Organic Quinoa, Brown, & Red Rice</b>
									</td>
									<td>Devon Lane</td>
									<td>
										<ul class='rating-stars'>
											<li
												style={{
													width: "60%",
												}}
												class='stars-active'>
												<img
													src='assets/imgs/icons/stars-active.svg'
													alt='stars'
												/>
											</li>
											<li>
												<img
													src='assets/imgs/icons/starts-disable.svg'
													alt='stars'
												/>
											</li>
										</ul>
									</td>
									<td>10.03.2020</td>
									<td class='text-end'>
										<a href='#' class='btn btn-md rounded font-sm'>
											Detail
										</a>
										<div class='dropdown'>
											<a
												href='#'
												data-bs-toggle='dropdown'
												class='btn btn-light rounded btn-sm font-sm'>
												<i class='material-icons md-more_horiz'></i>
											</a>
											<div class='dropdown-menu'>
												<a class='dropdown-item' href='#'>
													View detail
												</a>
												<a class='dropdown-item' href='#'>
													Edit info
												</a>
												<a class='dropdown-item text-danger' href='#'>
													Delete
												</a>
											</div>
										</div>
									</td>
								</tr>
								<tr>
									<td>
										<div class='form-check'>
											<input
												class='form-check-input'
												type='checkbox'
												value=''
											/>
										</div>
									</td>
									<td>24</td>
									<td>
										<b>All Natural Italian-Style</b>
									</td>
									<td>Guy Hawkins</td>
									<td>
										<ul class='rating-stars'>
											<li
												style={{
													width: "80%",
												}}
												class='stars-active'>
												<img
													src='assets/imgs/icons/stars-active.svg'
													alt='stars'
												/>
											</li>
											<li>
												<img
													src='assets/imgs/icons/starts-disable.svg'
													alt='stars'
												/>
											</li>
										</ul>
									</td>
									<td>04.12.2019</td>
									<td class='text-end'>
										<a href='#' class='btn btn-md rounded font-sm'>
											Detail
										</a>
										<div class='dropdown'>
											<a
												href='#'
												data-bs-toggle='dropdown'
												class='btn btn-light rounded btn-sm font-sm'>
												<i class='material-icons md-more_horiz'></i>
											</a>
											<div class='dropdown-menu'>
												<a class='dropdown-item' href='#'>
													View detail
												</a>
												<a class='dropdown-item' href='#'>
													Edit info
												</a>
												<a class='dropdown-item text-danger' href='#'>
													Delete
												</a>
											</div>
										</div>
									</td>
								</tr>
								<tr>
									<td>
										<div class='form-check'>
											<input
												class='form-check-input'
												type='checkbox'
												value=''
											/>
										</div>
									</td>
									<td>25</td>
									<td>
										<b>Angie’s Boomchickapop Sweet</b>
									</td>
									<td>Steven John</td>
									<td>
										<ul class='rating-stars'>
											<li
												style={{
													width: "90%",
												}}
												class='stars-active'>
												<img
													src='assets/imgs/icons/stars-active.svg'
													alt='stars'
												/>
											</li>
											<li>
												<img
													src='assets/imgs/icons/starts-disable.svg'
													alt='stars'
												/>
											</li>
										</ul>
									</td>
									<td>25.05.2020</td>
									<td class='text-end'>
										<a href='#' class='btn btn-md rounded font-sm'>
											Detail
										</a>
										<div class='dropdown'>
											<a
												href='#'
												data-bs-toggle='dropdown'
												class='btn btn-light rounded btn-sm font-sm'>
												<i class='material-icons md-more_horiz'></i>
											</a>
											<div class='dropdown-menu'>
												<a class='dropdown-item' href='#'>
													View detail
												</a>
												<a class='dropdown-item' href='#'>
													Edit info
												</a>
												<a class='dropdown-item text-danger' href='#'>
													Delete
												</a>
											</div>
										</div>
									</td>
								</tr>
								<tr>
									<td>
										<div class='form-check'>
											<input
												class='form-check-input'
												type='checkbox'
												value=''
											/>
										</div>
									</td>
									<td>26</td>
									<td>
										<b>Foster Farms Takeout Crispy Classic</b>
									</td>
									<td>Kristin Watson</td>
									<td>
										<ul class='rating-stars'>
											<li
												style={{
													width: "90%",
												}}
												class='stars-active'>
												<img
													src='assets/imgs/icons/stars-active.svg'
													alt='stars'
												/>
											</li>
											<li>
												<img
													src='assets/imgs/icons/starts-disable.svg'
													alt='stars'
												/>
											</li>
										</ul>
									</td>
									<td>01.06.2020</td>
									<td class='text-end'>
										<a href='#' class='btn btn-md rounded font-sm'>
											Detail
										</a>
										<div class='dropdown'>
											<a
												href='#'
												data-bs-toggle='dropdown'
												class='btn btn-light rounded btn-sm font-sm'>
												<i class='material-icons md-more_horiz'></i>
											</a>
											<div class='dropdown-menu'>
												<a class='dropdown-item' href='#'>
													View detail
												</a>
												<a class='dropdown-item' href='#'>
													Edit info
												</a>
												<a class='dropdown-item text-danger' href='#'>
													Delete
												</a>
											</div>
										</div>
									</td>
								</tr>
								<tr>
									<td>
										<div class='form-check'>
											<input
												class='form-check-input'
												type='checkbox'
												value=''
											/>
										</div>
									</td>
									<td>27</td>
									<td>
										<b>Blue Diamond Almonds Lightly Salted</b>
									</td>
									<td>Jane Cooper</td>
									<td>
										<ul class='rating-stars'>
											<li
												style={{
													width: "100%",
												}}
												class='stars-active'>
												<img
													src='assets/imgs/icons/stars-active.svg'
													alt='stars'
												/>
											</li>
											<li>
												<img
													src='assets/imgs/icons/starts-disable.svg'
													alt='stars'
												/>
											</li>
										</ul>
									</td>
									<td>13.03.2020</td>
									<td class='text-end'>
										<a href='#' class='btn btn-md rounded font-sm'>
											Detail
										</a>
										<div class='dropdown'>
											<a
												href='#'
												data-bs-toggle='dropdown'
												class='btn btn-light rounded btn-sm font-sm'>
												<i class='material-icons md-more_horiz'></i>
											</a>
											<div class='dropdown-menu'>
												<a class='dropdown-item' href='#'>
													View detail
												</a>
												<a class='dropdown-item' href='#'>
													Edit info
												</a>
												<a class='dropdown-item text-danger' href='#'>
													Delete
												</a>
											</div>
										</div>
									</td>
								</tr>
								<tr>
									<td>
										<div class='form-check'>
											<input
												class='form-check-input'
												type='checkbox'
												value=''
											/>
										</div>
									</td>
									<td>28</td>
									<td>
										<b>Chobani Complete Vanilla Greek Yogurt</b>
									</td>
									<td>Courtney Henry</td>
									<td>
										<ul class='rating-stars'>
											<li
												style={{
													width: "100%",
												}}
												class='stars-active'>
												<img
													src='assets/imgs/icons/stars-active.svg'
													alt='stars'
												/>
											</li>
											<li>
												<img
													src='assets/imgs/icons/starts-disable.svg'
													alt='stars'
												/>
											</li>
										</ul>
									</td>
									<td>21.02.2020</td>
									<td class='text-end'>
										<a href='#' class='btn btn-md rounded font-sm'>
											Detail
										</a>
										<div class='dropdown'>
											<a
												href='#'
												data-bs-toggle='dropdown'
												class='btn btn-light rounded btn-sm font-sm'>
												<i class='material-icons md-more_horiz'></i>
											</a>
											<div class='dropdown-menu'>
												<a class='dropdown-item' href='#'>
													View detail
												</a>
												<a class='dropdown-item' href='#'>
													Edit info
												</a>
												<a class='dropdown-item text-danger' href='#'>
													Delete
												</a>
											</div>
										</div>
									</td>
								</tr>
								<tr>
									<td>
										<div class='form-check'>
											<input
												class='form-check-input'
												type='checkbox'
												value=''
											/>
										</div>
									</td>
									<td>29</td>
									<td>
										<b>Canada Dry Ginger Ale – 2 L Bottle</b>
									</td>
									<td>Ralph Edwards</td>
									<td>
										<ul class='rating-stars'>
											<li
												style={{
													width: "90%",
												}}
												class='stars-active'>
												<img
													src='assets/imgs/icons/stars-active.svg'
													alt='stars'
												/>
											</li>
											<li>
												<img
													src='assets/imgs/icons/starts-disable.svg'
													alt='stars'
												/>
											</li>
										</ul>
									</td>
									<td>23.03.2020</td>
									<td class='text-end'>
										<a href='#' class='btn btn-md rounded font-sm'>
											Detail
										</a>
										<div class='dropdown'>
											<a
												href='#'
												data-bs-toggle='dropdown'
												class='btn btn-light rounded btn-sm font-sm'>
												<i class='material-icons md-more_horiz'></i>
											</a>
											<div class='dropdown-menu'>
												<a class='dropdown-item' href='#'>
													View detail
												</a>
												<a class='dropdown-item' href='#'>
													Edit info
												</a>
												<a class='dropdown-item text-danger' href='#'>
													Delete
												</a>
											</div>
										</div>
									</td>
								</tr>
								<tr>
									<td>
										<div class='form-check'>
											<input
												class='form-check-input'
												type='checkbox'
												value=''
											/>
										</div>
									</td>
									<td>30</td>
									<td>
										<b>Encore Seafoods Stuffed Alaskan</b>
									</td>
									<td>Courtney Henry</td>
									<td>
										<ul class='rating-stars'>
											<li
												style={{
													width: "70%",
												}}
												class='stars-active'>
												<img
													src='assets/imgs/icons/stars-active.svg'
													alt='stars'
												/>
											</li>
											<li>
												<img
													src='assets/imgs/icons/starts-disable.svg'
													alt='stars'
												/>
											</li>
										</ul>
									</td>
									<td>20.02.2020</td>
									<td class='text-end'>
										<a href='#' class='btn btn-md rounded font-sm'>
											Detail
										</a>
										<div class='dropdown'>
											<a
												href='#'
												data-bs-toggle='dropdown'
												class='btn btn-light rounded btn-sm font-sm'>
												<i class='material-icons md-more_horiz'></i>
											</a>
											<div class='dropdown-menu'>
												<a class='dropdown-item' href='#'>
													View detail
												</a>
												<a class='dropdown-item' href='#'>
													Edit info
												</a>
												<a class='dropdown-item text-danger' href='#'>
													Delete
												</a>
											</div>
										</div>
									</td>
								</tr>
								<tr>
									<td>
										<div class='form-check'>
											<input
												class='form-check-input'
												type='checkbox'
												value=''
											/>
										</div>
									</td>
									<td>31</td>
									<td>
										<b>Gorton Beer Battered Fish Fillets</b>
									</td>
									<td>Theresa Webb</td>
									<td>
										<ul class='rating-stars'>
											<li
												style={{
													width: "20%",
												}}
												class='stars-active'>
												<img
													src='assets/imgs/icons/stars-active.svg'
													alt='stars'
												/>
											</li>
											<li>
												<img
													src='assets/imgs/icons/starts-disable.svg'
													alt='stars'
												/>
											</li>
										</ul>
									</td>
									<td>10.03.2020</td>
									<td class='text-end'>
										<a href='#' class='btn btn-md rounded font-sm'>
											Detail
										</a>
										<div class='dropdown'>
											<a
												href='#'
												data-bs-toggle='dropdown'
												class='btn btn-light rounded btn-sm font-sm'>
												<i class='material-icons md-more_horiz'></i>
											</a>
											<div class='dropdown-menu'>
												<a class='dropdown-item' href='#'>
													View detail
												</a>
												<a class='dropdown-item' href='#'>
													Edit info
												</a>
												<a class='dropdown-item text-danger' href='#'>
													Delete
												</a>
											</div>
										</div>
									</td>
								</tr>
								<tr>
									<td>
										<div class='form-check'>
											<input
												class='form-check-input'
												type='checkbox'
												value=''
											/>
										</div>
									</td>
									<td>32</td>
									<td>
										<b>Haagen-Dazs Caramel Cone</b>
									</td>
									<td>Darrell Steward</td>
									<td>
										<ul class='rating-stars'>
											<li
												style={{
													width: "80%",
												}}
												class='stars-active'>
												<img
													src='assets/imgs/icons/stars-active.svg'
													alt='stars'
												/>
											</li>
											<li>
												<img
													src='assets/imgs/icons/starts-disable.svg'
													alt='stars'
												/>
											</li>
										</ul>
									</td>
									<td>10.04.2020</td>
									<td class='text-end'>
										<a href='#' class='btn btn-md rounded font-sm'>
											Detail
										</a>
										<div class='dropdown'>
											<a
												href='#'
												data-bs-toggle='dropdown'
												class='btn btn-light rounded btn-sm font-sm'>
												<i class='material-icons md-more_horiz'></i>
											</a>
											<div class='dropdown-menu'>
												<a class='dropdown-item' href='#'>
													View detail
												</a>
												<a class='dropdown-item' href='#'>
													Edit info
												</a>
												<a class='dropdown-item text-danger' href='#'>
													Delete
												</a>
											</div>
										</div>
									</td>
								</tr>
								<tr>
									<td>
										<div class='form-check'>
											<input
												class='form-check-input'
												type='checkbox'
												value=''
											/>
										</div>
									</td>
									<td>33</td>
									<td>
										<b>Nestle Original Coffee-Mate Coffee Creamer </b>
									</td>
									<td>Leslie Alexander</td>
									<td>
										<ul class='rating-stars'>
											<li style={{
                                                width : "50%"
                                            }} class='stars-active'>
												<img
													src='assets/imgs/icons/stars-active.svg'
													alt='stars'
												/>
											</li>
											<li>
												<img
													src='assets/imgs/icons/starts-disable.svg'
													alt='stars'
												/>
											</li>
										</ul>
									</td>
									<td>25.05.2020</td>
									<td class='text-end'>
										<a href='#' class='btn btn-md rounded font-sm'>
											Detail
										</a>
										<div class='dropdown'>
											<a
												href='#'
												data-bs-toggle='dropdown'
												class='btn btn-light rounded btn-sm font-sm'>
												<i class='material-icons md-more_horiz'></i>
											</a>
											<div class='dropdown-menu'>
												<a class='dropdown-item' href='#'>
													View detail
												</a>
												<a class='dropdown-item' href='#'>
													Edit info
												</a>
												<a class='dropdown-item text-danger' href='#'>
													Delete
												</a>
											</div>
										</div>
									</td>
								</tr>
								<tr>
									<td>
										<div class='form-check'>
											<input
												class='form-check-input'
												type='checkbox'
												value=''
											/>
										</div>
									</td>
									<td>34</td>
									<td>
										<b>Seeds of Change Organic Quinoa</b>
									</td>
									<td>Esther Howard</td>
									<td>
										<ul class='rating-stars'>
											<li style={{
                                                width : "100%"
                                            }} class='stars-active'>
												<img
													src='assets/imgs/icons/stars-active.svg'
													alt='stars'
												/>
											</li>
											<li>
												<img
													src='assets/imgs/icons/starts-disable.svg'
													alt='stars'
												/>
											</li>
										</ul>
									</td>
									<td>07.04.2020</td>
									<td class='text-end'>
										<a href='#' class='btn btn-md rounded font-sm'>
											Detail
										</a>
										<div class='dropdown'>
											<a
												href='#'
												data-bs-toggle='dropdown'
												class='btn btn-light rounded btn-sm font-sm'>
												<i class='material-icons md-more_horiz'></i>
											</a>
											<div class='dropdown-menu'>
												<a class='dropdown-item' href='#'>
													View detail
												</a>
												<a class='dropdown-item' href='#'>
													Edit info
												</a>
												<a class='dropdown-item text-danger' href='#'>
													Delete
												</a>
											</div>
										</div>
									</td>
								</tr>
								<tr>
									<td>
										<div class='form-check'>
											<input
												class='form-check-input'
												type='checkbox'
												value=''
											/>
										</div>
									</td>
									<td>35</td>
									<td>
										<b>Organic Frozen Triple Berry Blend</b>
									</td>
									<td>Steven John</td>
									<td>
										<ul class='rating-stars'>
											<li style={{
                                                width : "100%"
                                            }} class='stars-active'>
												<img
													src='assets/imgs/icons/stars-active.svg'
													alt='stars'
												/>
											</li>
											<li>
												<img
													src='assets/imgs/icons/starts-disable.svg'
													alt='stars'
												/>
											</li>
										</ul>
									</td>
									<td>10.10.2019</td>
									<td class='text-end'>
										<a href='#' class='btn btn-md rounded font-sm'>
											Detail
										</a>
										<div class='dropdown'>
											<a
												href='#'
												data-bs-toggle='dropdown'
												class='btn btn-light rounded btn-sm font-sm'>
												<i class='material-icons md-more_horiz'></i>
											</a>
											<div class='dropdown-menu'>
												<a class='dropdown-item' href='#'>
													View detail
												</a>
												<a class='dropdown-item' href='#'>
													Edit info
												</a>
												<a class='dropdown-item text-danger' href='#'>
													Delete
												</a>
											</div>
										</div>
									</td>
								</tr>
							</tbody>
						</table>
					</div>
					=
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

export default Reviews;
