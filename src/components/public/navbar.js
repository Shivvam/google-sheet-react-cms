import React from 'react';
import {
  Link
} from "react-router-dom"; 


const NavBar = () => {


 return(
	<>
		<header className="h-14 bg-pink-600 fixed w-full">
			<nav>
				<div className="flex">
			 
					
					<div className="m-auto">
						<span className="text-white text-xl md:text-3xl">
						 Plasma Helpline
						</span>
					</div>
				 
				</div>
			</nav>
		</header>
	</>
 );
}

export default NavBar;