import React from 'react';
import {
  Link
} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowCircleLeft, faHome , faBed, faHands, faHeartbeat} from '@fortawesome/free-solid-svg-icons';


const Footer = () => {


 return(
	<>
	 
		  <footer className="h-14 bg-pink-600 fixed bottom-0 w-full">
			<div className="flex">
					<div className="m-auto p-2 ">
						<Link to="/">
							<div className="text-center">
								<FontAwesomeIcon icon={faHome} className="text-white text-2xl" />
								<p className="text-white">Home</p>
							</div>
						</Link>
						
					</div>
				 
					<div className="m-auto p-2">
						<Link to="/blood">
							<div className="text-center">
								<FontAwesomeIcon icon={faHeartbeat} className="text-white text-2xl" />
								<p className="text-white">Blood</p>
							</div>
						</Link>
					</div>
					<div className="m-auto">
							<Link to="/volunteers">
							<div className="text-center">
								<FontAwesomeIcon icon={faHands} className="text-white text-2xl" />
								<p className="text-white">Volunteers</p>
							</div>
						</Link>
					</div>
					 
			</div>
		  
		  </footer>
		 
	</>
 );
}

export default Footer;