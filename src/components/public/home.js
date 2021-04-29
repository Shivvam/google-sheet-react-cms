import React,{useState} from 'react';
import Navbar from './navbar';
import Footer from './footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faUser, faCheckCircle, faBan, faClock} from '@fortawesome/free-solid-svg-icons';
import {
  Link
} from "react-router-dom";

const HomePage = () => {

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

 const plasmaResourceList = [
    {
	"type" : "Plasma",
	"city" : "Jabalpur",
	"description" : "O+",
	"contact_Name" : "Ramesh Kumar",
	"contact_Number" : "+91-9992229298",
	"isVerified" : true ,
	"last_verified" : "23:44 25-04-2021"
	},
	{
	"type" : "Plasma",
	"city" : "Jabalpur",
	"description" : "B+",
	"contact_Name" : "Dinesh Kumar",
	"contact_Number" : "+91-9992229298",
	"isVerified" : false,
	"last_verified" : "21:44 23-04-2021"
	}
 ]

 return(
	<>
		<div className="flex flex-col h-screen justify-between">
		  <Navbar />


		  <main className="mt-14 pb-20">
			 
		  <div className="flex flex-col md:flex-row">
			<div className="bg-gray-100 p-5 md:h-screen">
				<h4 className="text-center text-xl text-indigo-600 my-5">Search Verified Covid Resources</h4>
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
                          <label className="leading-loose">Category</label>
						  <select className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600">
						  {covidResources.map((ct,idx)=>{
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
						<div className="flex flex-col my-5 text-center">
                           <Link to="/help" className="text-indigo-600"  >Ask for Help</Link>
                        </div>
				</div>
			</div>

			<div className="bg-white border-gray-100 rounded-md p-4 border-2 w-full">
				<p className="text-center">Result for Plasma at Jabalpur</p>
				<div className="flex flex-col">
					{plasmaResourceList.map((pr,idx)=>{
					return(
						<div key={idx} className="border border-gray-200 shadow-xl rounded-md p-5 my-3">
	 
						 
								 <h3 className="m-3 text-xl font-bold">
								 {pr.type}
								 
								 <span className="mx-5 text-l font-semibold p-2 rounded-md bg-indigo-400 text-white">{pr.description}</span>
								 </h3>
								 
								 
			 
						 
						  
						  <div className="flex flex-col md:flex-row border-t md:p-3">
							<div className="mx-auto w-full mt-2 md:mt-0">
													  <p className="mx-5 text-l font-semibold"><FontAwesomeIcon icon={faUser} className="text-indigo-600" /> {pr.contact_Name}</p>
													  <p className="mx-5 text-l font-semibold"><FontAwesomeIcon icon={faPhone} className="text-indigo-600" /> {pr.contact_Number}</p>

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

export default HomePage;