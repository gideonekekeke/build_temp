import React from 'react'

const Footer = () => {


    const dater = new Date().getFullYear()
    
  return (
		<footer class='main-footer font-xs'>
			<div class='row pb-30 pt-15'>
				<div class='col-sm-6'>
					{dater}
					&copy; Argone
				</div>
				<div class='col-sm-6'>
					<div class='text-sm-end'>All rights reserved</div>
				</div>
			</div>
		</footer>
	);
}

export default Footer