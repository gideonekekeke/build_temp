import React from "react";

const UserRegistration = () => {
	return (
		<section class='content-main mt-80 pb-0'>
			<div class='card mx-auto card-login'>
				<div class='card-body'>
					<h4 class='card-title mb-4'>Create an Account</h4>
					<form>
						<div class='mb-3'>
							<label class='form-label'>Email</label>
							<input
								class='form-control'
								placeholder='Your email'
								type='text'
							/>
						</div>

						<div class='mb-3'>
							<label class='form-label'>Phone</label>
							<div class='row gx-2'>
								<div class='col-4'>
									<input class='form-control' value='+998' type='text' />
								</div>
								<div class='col-8'>
									<input class='form-control' placeholder='Phone' type='text' />
								</div>
							</div>
						</div>

						<div class='mb-3'>
							<label class='form-label'>Create password</label>
							<input
								class='form-control'
								placeholder='Password'
								type='password'
							/>
						</div>

						<div class='mb-3'>
							<p class='small text-center text-muted'>
								By signing up, you confirm that you’ve read and accepted our
								User Notice and Privacy Policy.
							</p>
						</div>

						<div class='mb-4'>
							<button type='submit' class='btn btn-primary w-100'>
								Login
							</button>
						</div>
					</form>
					<p class='text-center small text-muted mb-15'>or sign up with</p>
					<div class='d-flex gap-2 mb-4'>
						<a href='#' class='w-50 btn btn-light font-sm'>
							<svg
                            style = {{
                                verticalAlign : "bottom",
                                marginTop : "-4px"
                            }}
								aria-hidden='true'
								class='icon-svg'
								width='20'
								height='20'
								viewBox='0 0 20 20'>
								<path
									d='M16.51 8H8.98v3h4.3c-.18 1-.74 1.48-1.6 2.04v2.01h2.6a7.8 7.8 0 002.38-5.88c0
05-.66-.15-1.18z'
									fill='#4285F4'></path>
								<path
									d='M8.98 17c2.16 0 3.97-.72 5.3-1.94l-2.6-2a4.8 4.8 0 01-7.18-2.54H1.83v2.07A8 8
008.98 17z'
									fill='#34A853'></path>
								<path
									d='M4.5 10.52a4.8 4.8 0 010-3.04V5.41H1.83a8 8 0 000 7.18l2.67-2.07z'
									fill='#FBBC05'></path>
								<path
									d='M8.98 4.18c1.17 0 2.23.4 3.06 1.2l2.3-2.3A8 8 0 001.83 5.4L4.5 7.49a4.77 4.77
014.48-3.3z'
									fill='#EA4335'></path>
							</svg>
							Google
						</a>
						<a href='#' class='w-50 btn btn-light font-sm'>
							<svg
								aria-hidden='true'
								class='icon-svg'
								width='20'
								height='20'
								viewBox='0 0 20 20'>
								<path
									d='M3 1a2 2 0 00-2 2v12c0 1.1.9 2 2 2h12a2 2 0 002-2V3a2 2 0 00-2-2H3zm6.55 16v-
46V8.4h2.09V6.61c0-2.07 1.26-3.2 3.1-3.2.88 0 1.64.07 1.87.1v2.16h-1.29c-1 0-1.1
48-1.19 1.18V8.4h2.39l-.31 2.42h-2.08V17h-2.5z'
									fill='#4167B2'></path>
							</svg>
							Facebook
						</a>
					</div>
					<p class='text-center mb-2'>
						Already have an account? <a href='#'>Sign in now</a>
					</p>
				</div>
			</div>
		</section>
	);
};

export default UserRegistration;
