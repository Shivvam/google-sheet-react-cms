import React,{useState} from 'react';
import Navbar from './navbar';
import Footer from './footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faUser, faCheckCircle, faBan, faClock} from '@fortawesome/free-solid-svg-icons';


const HelpPage = () => {

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
			 
		  <div className="flex pt-2">
			<div className="bg-gray-100 m-auto p-5 rounded-md">
				<h4 className="text-center text-2xl text-indigo-600  ">Tell us your problem</h4>
				<p className="text-sm text-gray-700 text-center">Our volunteers will try their best to contact you</p>
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
						<div className="flex flex-col">
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
						<div className="flex flex-col">
                          <label className="leading-loose">Patient Name</label>
						  <input type="text" className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
						  placeHolder="Patient Name"
						  />
                          <label className="leading-loose text-red-700">{errorStack?.patient}</label>
                        </div>
						<div className="flex flex-col">
                          <label className="leading-loose">Patient Age</label>
						  <input type="number" className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
						  placeHolder="Patient Age"
						  />
                          <label className="leading-loose text-red-700">{errorStack?.patient}</label>
                        </div>
						<div className="flex flex-col">
                          <label className="leading-loose">Attender Name</label>
						  <input type="text" className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
						  placeHolder="Attender Name"
						  />
                          <label className="leading-loose text-red-700">{errorStack?.attender}</label>
                        </div>
						<div className="flex flex-col">
                          <label className="leading-loose">Attender Contact</label>
						  <input type="tel" className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
						  placeHolder="Attender Contact"
						  />
                          <label className="leading-loose text-red-700">{errorStack?.attender}</label>
                        </div>

						<div className="flex flex-col my-5">
                           <button className="bg-indigo-600 hover:bg-indigo-800 px-3 py-4 text-white font-bold  rounded-md" >Submit</button>
                        </div>
					 
				</div>
			</div>

		 
			
		  </div>




		  </main>


		  <Footer />
		</div>
	</>
 );
}

export default HelpPage;