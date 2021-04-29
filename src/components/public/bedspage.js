import React,{useState} from 'react';

import Navbar from './navbar';
import Footer from './footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faUser, faCheckCircle, faBan, faClock, faBed} from '@fortawesome/free-solid-svg-icons';


const BedsPage = () => {

 const [errorStack,seterrorStack] = useState({});

 const cityNames = [
	  "--City--",
	  "Jabalpur",
	  "Satna",
	  "Katni",
	  "Dindori",
	  "Mandala",
	  "Damoh",
	  "Sagar",
	  "Indore",
	  "Bhopal"
 ];

 const covidResources = [
	  "--Select--",
	  "Bed",
	  "Plasma",
	  "Oxygen",
	  "Injection/Medicine",
	  "Ambulance",
	  "Meal Service",
	  "Online Consultation"
 ]

 const bedList = [
			{
			"type" : "Normal",
			"city" : "Jabalpur",
			"hospital_Name" : "City Hospital",
			"contact_Number" : "+91-9992229298",
			"address" : "Chungi Chowki",
			"google_pin" : "lat_long",
			"totalBeds" : 230,
			"availableBeds" : 18,
			"isVerified" : true ,
			"last_verified" : "23:44 25-04-2021",
			"verifiedBy": "Rakesh"
			},
			{
			"type" : "ICU",
			"city" : "Jabalpur",
			"hospital_Name" : "Sukh Sagar Hospital",
			"contact_Number" : "+91-9992229298",
			"address" : "Damoh Naka Chowki",
			"google_pin" : "lat_long",
			"totalBeds" : 410,
			"availableBeds" : 0,
			"isVerified" : true ,
			"last_verified" : "23:08 26-04-2021",
			"verifiedBy": "Salman Khan"
			},
		 ]


 const bedTypes = [
	  "--Select--",
	  "Normal",
	  "Oxygen",
	  "Ventialtor",
	  "ICU"
 ];

 return(
	<>
		<div className="flex flex-col h-screen justify-between">
		  <Navbar />


		  <main className="mt-14 pb-20">
			 
		  <div className="flex flex-col md:flex-row">
			<div className="bg-gray-100 p-5 md:h-screen">
				<h4 className="text-center text-xl text-indigo-600 my-5">Search Hospital Beds</h4>
				<div>
				    
						<div className="flex flex-col">
                          <label className="leading-loose">City</label>
						  <select className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600">
						  {cityNames.map((ct,idx)=>{
							return(
								<option key={idx} value={ct} >{ct}</option>
							)
						  })}
						  
						  </select>
                          <label className="leading-loose text-red-700">{errorStack?.city}</label>
                        </div>
						<div className="flex flex-col my-5">
                          <label className="leading-loose">Type</label>
						  <select className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600">
						  {bedTypes.map((ct,idx)=>{
							return(
								<option key={idx} value={ct} >{ct}</option>
							)
						  })}
						  
						  </select>
                          <label className="leading-loose text-red-700">{errorStack?.city}</label>
                        </div>

						<div className="flex flex-col my-5">
                           <button className="bg-indigo-600 hover:bg-indigo-800 px-3 py-4 text-white font-bold  rounded-md" >Search</button>
                        </div>
				</div>
			</div>

			<div className="bg-white border-gray-100 rounded-md p-4 border-2 w-full">
				<p className="text-center"> Bed Availability at Jabalpur</p>
				<div className="flex flex-col">
					{bedList.map((pr,idx)=>{
					return(
						<div key={idx} className="border border-gray-200 shadow-xl rounded-md p-5 my-3">
	 
								 <div className="flex flex-col md:flex-row">
									<div className="w-1/2">
										<h3 className="m-3 text-xl font-bold">
										 <FontAwesomeIcon icon={faBed} className="text-indigo-600" /> {pr.type}
										 </h3>
										 <p className="m-3">
											{pr.hospital_Name}
										 </p>
										 <p className="m-3">
											{pr.address} | {pr.google_pin}
										 </p>
									</div>
									<div className="w-1/2 md:float-right">
										<div className="flex flex-row">
											<div className="bg-gray-200 md:mx-5 px-8 md:px-4 py-2 mb-1 rounded-md text-center">
												<h5>Total Beds</h5>
												<p className="text-3xl font-semibold">{pr.totalBeds}</p>
											</div>
											<div className={(pr.availableBeds>0)?"bg-green-500 mx-2 px-8 md:px-4 py-2 mb-1 rounded-md text-center text-white":"bg-red-600 mx-2 py-2 md:px-4 px-8 mb-1 rounded-md text-center text-white"}>
												<h5>Availabile Beds</h5>
												<p className="text-3xl font-semibold">{pr.availableBeds}</p>
											</div>
											
										</div>
									</div>
								 </div>
								 
								 
								 
			 
						 
						  
						  <div className="flex flex-col md:flex-row border-t md:p-3">
							<div className="mx-auto w-full mt-2 md:mt-0">
												 	  <p className="mx-5 text-l font-semibold"><FontAwesomeIcon icon={faPhone} className="text-indigo-600" /> <a href={"tel:"+pr.contact_Number}> {pr.contact_Number} </a></p>

							</div>
							<div className="mx-auto w-full mt-5 md:mt-0">
										<div className="md:float-right">
						  								<p className={pr.isVerified?"mx-5 text-l font-semibold text-green-500":"mx-5 text-l font-semibold text-red-400"}>{pr.isVerified? 
														  <span> <FontAwesomeIcon icon={faCheckCircle} className="text-green-600" /> Verified </span>
														  :
														  <span> <FontAwesomeIcon icon={faBan} className="text-red-600" /> Not Verified </span>
														}</p>
							    						<p className="mx-5 text-sm text-gray-400 ">Last Verified : <FontAwesomeIcon icon={faClock} className="text-indigo-600" /> {pr.last_verified}</p>
										</div>
													  

							</div>
						  </div>
							
						</div>
					)
					})}
					
				</div>

			</div>
			
		  </div>




		  </main>


		  <Footer />
		</div>
	</>
 );
}

export default BedsPage;