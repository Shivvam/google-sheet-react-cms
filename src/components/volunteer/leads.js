import React,{useEffect,useState} from 'react';
import {FireBaseapp} from '../../config/config';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faUser, faCheckCircle, faBan, faClock, faTimes} from '@fortawesome/free-solid-svg-icons';

const Leads = () => {

 
 
	   
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


		  const leadsList = [
			{
			"type" : "Oxygen Cylinder",
			"city" : "Jabalpur",
			"patientName" : "Munna Lal",
			"age" : "32",
			"disease" : "Corona",
			"attenderName" : "Chunna Lal",
			"attenderContact" : "+91-9992229298",
			"isVerified" : true ,
			"last_verified" : "23:44 25-04-2021",
			"verifiedBy": "Rakesh",
			"asignedTo" : "Sanketh",
			"leadStatus" : "Closed"
			},
			{
			"type" : "ICU Bed",
			"city" : "Bhopal",
			"patientName" : "Rabdi Devi",
			"age" : "52",
			"disease" : "Corona",
			"attenderName" : "Sahu Lal",
			"attenderContact" : "+91-9898229298",
			"isVerified" : false ,
			"last_verified" : "23:44 25-04-2021",
			"verifiedBy": "Chanki",
			"asignedTo" : "Manish",
			"leadStatus" : "Open"
			}
			 
		 ]

		  

	 const leadsVerificationStatus = [
		  "Verified",
		  "Not Verified",
		  "Scam"
	 ];

	 const leadsStatus = [
		  "Open",
		  "Closed"
	 ];


	 const handleChangeRequested = (item_index) => {
		  setisChangeRequested(item_index);
	 }



	return(
		<>
		
		 <div className="min-h-screen bg-gray-100 flex flex-col">
				 <div className="flex flex-row bg-white">
					<div className="mx-auto">
						<h5 className="my-2">Displaying Leads asigned to you</h5>
					</div>
					 
				 </div>
			   

				  <div className="flex bg-white p-2 border border-gray-100">
			 
				  {leadsList&&
				  <table className="mx-auto">
				  <thead>
					<tr>
						<th className="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">Asigned</th>
						<th className="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">City </th>
						<th className="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">Type</th>
						<th className="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">Patient  </th>
						<th className="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell"> Age </th>
						<th className="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">Disease</th>
						<th className="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">Attender</th>
						<th className="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">Contact</th>
 
						<th className="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">Verified By</th>
						 
						<th className="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">Verified</th>
						<th className="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">Status</th>
						<th className="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">Action</th>
					</tr>
					</thead>
					<tbody>
					{leadsList.map((res,idx)=>{
					return(
						<tr className="bg-white lg:hover:bg-gray-100 flex lg:table-row flex-row lg:flex-row flex-wrap lg:flex-no-wrap mb-10 lg:mb-0" key={idx}>
							<td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b block lg:table-cell relative lg:static">
								<span className="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">Asigned</span>
								{res["asignedTo"]}  
							</td>
							<td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b block lg:table-cell relative lg:static">
								<span className="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">City</span>
								{res["city"]}  
							</td>
							<td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b block lg:table-cell relative lg:static">
								<span className="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">Type</span>
								{res["type"]}
							</td>
							<td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b block lg:table-cell relative lg:static">
								<span className="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">Patient</span>
								{res["patientName"]}
							</td>
							<td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b block lg:table-cell relative lg:static">
								<span className="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">Age</span>
								{res["age"]}
							</td>
						
							<td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b block lg:table-cell relative lg:static">
								<span className="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">Disease</span>
								{res["disease"]}
							</td>
							<td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b block lg:table-cell relative lg:static">
								<span className="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">Attender</span>
								{res["attenderName"]}
							</td>
							<td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b block lg:table-cell relative lg:static">
								<span className="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">Contact</span>
								<a href={"tel:"+res["attenderContact"]} >{res["attenderContact"]}</a>
							</td>
							
						 
							<td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b block lg:table-cell relative lg:static">
								<span className="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">Verified By</span>
								<span className="text-indigo-700">{res["verifiedBy"]}</span>
								<p className="text-xs">At {res["last_verified"]} </p>
							</td>
							
							 
							<td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b block lg:table-cell relative lg:static">
								<span className="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">Verified</span>
								{(isChangeRequested===idx)?
								<div className="flex flex-col m-5 md:m-0">
									<div className="flex flex-col">
                					  <select className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600">
									  {leadsVerificationStatus.map((ct,idx)=>{
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
								<span className={res["isVerified"]?"text-l font-semibold text-green-500":"text-l font-semibold text-red-400"}>{res["isVerified"]? 
														  <span> <FontAwesomeIcon icon={faCheckCircle} className="text-green-600" /> Verified </span>
														  :
														  <span> <FontAwesomeIcon icon={faTimes} className="text-red-600" /> Not Verified </span>
														}
							    </span>
								}
							</td>
							<td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b block lg:table-cell relative lg:static">
								<span className="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">Status</span>
								{(isChangeRequested===idx)?
								<div className="flex flex-col m-5 md:m-0">
									<div className="flex flex-col">
                					  <select className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600">
									  {leadsStatus.map((ct,idx)=>{
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
								<span className={(res["leadStatus"]==="Closed")?"text-l font-semibold text-green-500":"text-l font-semibold text-red-400"}>
								{(res["leadStatus"]==="Closed")?
								<FontAwesomeIcon icon={faCheckCircle} className="text-green-600" />
								:
								<FontAwesomeIcon icon={faBan} className="text-red-600" />
								}
								{res["leadStatus"]}
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

export default Leads;