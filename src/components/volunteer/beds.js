import React,{useEffect,useState} from 'react';
import {FireBaseapp} from '../../config/config';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faUser, faCheckCircle, faBan, faClock} from '@fortawesome/free-solid-svg-icons';

const AllBeds = () => {

 
 
	   
       const [errorStack,seterrorStack] = useState({});

	   const [isChangeRequested,setisChangeRequested] = useState(-1);

	      useEffect(() => {
              let isCancelled = false;
              if(!isCancelled){
 
              }
              return () => {
                isCancelled = true;
              }
          },[]);


		const changedValue = (fieldName,e) => {
			  fieldName(e.target.value);
		}


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

	 const resourceVerificationStatus = [
		  "Verified",
		  "Not Verified",
		  "Scam"
	 ];


	 const handleChangeRequested = (item_index) => {
		  setisChangeRequested(item_index);
	 }



	return(
		<>
		
		 <div className="min-h-screen bg-gray-100 flex flex-col">
				 <div className="flex flex-row bg-white">
					<div className="mx-auto">
						<h5 className="my-2">Displaying Bed Availablity For</h5>
					</div>
					<div className="mx-auto">
						<div className="flex flex-col">
                		  <select className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600">
						  {cityNames.map((ct,idx)=>{
							return(
								<option key={idx} value={ct} >{ct}</option>
							)
						  })}
						  
						  </select>
                          <label className="leading-loose text-red-700">{errorStack?.city}</label>
                        </div>
					</div>
				 </div>
			   

				  <div className="flex bg-white p-2 border border-gray-100">
			 
				  {bedList&&
				  <table className="mx-auto">
				  <thead>
					<tr>
						<th className="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">Bed Type </th>
						<th className="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">Hopspital </th>
						<th className="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">Address </th>
						<th className="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell"> Map </th>
						<th className="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">Contact Number</th>
						<th className="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">Last Verified</th>
						<th className="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">Verified By</th>
						<th className="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">Total Beds</th>
						<th className="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">Available Beds</th>
						<th className="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">Verified</th>
						<th className="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">Action</th>
					</tr>
					</thead>
					<tbody>
					{bedList.map((res,idx)=>{
					return(
						<tr className="bg-white lg:hover:bg-gray-100 flex lg:table-row flex-row lg:flex-row flex-wrap lg:flex-no-wrap mb-10 lg:mb-0" key={idx}>
							<td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b block lg:table-cell relative lg:static">
								<span className="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">Bed Type</span>
								{res["type"]}  
							</td>
							<td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b block lg:table-cell relative lg:static">
								<span className="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">Hospital</span>
								{res["hospital_Name"]}
							</td>
							<td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b block lg:table-cell relative lg:static">
								<span className="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">Address</span>
								{res["address"]}
							</td>
							<td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b block lg:table-cell relative lg:static">
								<span className="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">Address</span>
								{res["google_pin"]}
							</td>
						
							<td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b block lg:table-cell relative lg:static">
								<span className="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">Contact Number</span>
								<a href={"tel:"+res["contact_Number"]}>{res["contact_Number"]}</a>
							</td>
							
							<td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b block lg:table-cell relative lg:static">
								<span className="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">Last Verified</span>
								{res["last_verified"]}
							</td>
							<td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b block lg:table-cell relative lg:static">
								<span className="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">Verified By</span>
								<span className="text-indigo-700">{res["verifiedBy"]}</span>
							</td>
							
							<td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b block lg:table-cell relative lg:static">
								<span className="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">Total Beds</span>
								<span className="text-indigo-700">{res["totalBeds"]}</span>
							</td>
							<td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b block lg:table-cell relative lg:static">
								<span className="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">Available Beds</span>
								{(isChangeRequested===idx)?
								<div className="flex flex-col m-5 md:m-0">
									<div className="flex flex-col">
                					  <input type="number" className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600" 
									  placeHolder="Available Beds"
									  />
									  <label className="leading-loose text-red-700">{errorStack?.city}</label>
									</div>
									<div className="flex flex-col mt-1">
                					  <button className="text-sm bg-green-700 px-2 py-2 mx-2 text-white rounded-md font-semibold" onClick={()=>{}} >Update</button>
									</div>
								</div>
								:
								<span className={(res["availableBeds"]>0)?"bg-green-500 text-white p-2 rounded-full":"bg-red-500 text-white p-2 rounded-full"}>{res["availableBeds"]}</span>
								}
							</td>
							<td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b block lg:table-cell relative lg:static">
								<span className="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">Verified</span>
								{(isChangeRequested===idx)?
								<div className="flex flex-col m-5 md:m-0">
									<div className="flex flex-col">
                					  <select className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600">
									  {resourceVerificationStatus.map((ct,idx)=>{
										return(
											<option key={idx} value={ct} >{ct}</option>
										)
									  })}
						  
									  </select>
									  <label className="leading-loose text-red-700">{errorStack?.city}</label>
									</div>
									<div className="flex flex-col mt-1">
                					  <button className="text-sm bg-green-700 px-2 py-2 mx-2 text-white rounded-md font-semibold" onClick={()=>{}} >Update</button>
									</div>
								</div>
								:
								<span className={res["contact_Number"]?"text-l font-semibold text-green-500":"text-l font-semibold text-red-400"}>{res["contact_Number"]? 
														  <span> <FontAwesomeIcon icon={faCheckCircle} className="text-green-600" /> Verified </span>
														  :
														  <span> <FontAwesomeIcon icon={faBan} className="text-red-600" /> Not Verified </span>
														}
							    </span>
								}
							</td>
							<td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b block lg:table-cell relative lg:static">
							<span className="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">Action</span>
								<button className="text-sm bg-indigo-600 px-2 py-1 text-white rounded-md font-semibold" onClick={()=>{handleChangeRequested(idx)}}  >Change Status</button>
							</td>
						</tr>
					)
					
					
					})}


					</tbody>

				  </table>
				  }


				  </div>
		 
	    </div>
			
		


		</>
	);
}

export default AllBeds;