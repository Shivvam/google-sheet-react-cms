import React,{useState,useEffect} from 'react';
import  axios  from 'axios';
import Navbar from './navbar';
import Footer from './footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faUser, faCheckCircle, faBan, faClock, faBed, faHeartbeat} from '@fortawesome/free-solid-svg-icons';
import GoogleSheetTable from '../gsheet/gTable';
import {
  Link
} from "react-router-dom";


const BloodPage = () => {
 
			 const [errorStack,seterrorStack] = useState({});
			 const [searchCity,setsearchCity] = useState("");
			 const [searchBloodGroup,setsearchBloodGroup] = useState("");
			 const [isCovidPlasmaDoner,setisCovidPlasmaDoner] = useState(false);
			 const [gsheetresult,setgsheetresult] = useState({});

			 const GOOGLE_SHEET_ID = "1aJQzbL29q8mJNirZrQ9kUZewyh4V6Zb95zpdTnFhPdA";
 
 
			useEffect(() => {
              let isCancelled = false;
              if(!isCancelled){
                 
              }
              return () => {
                isCancelled = true;
              }
          },[gsheetresult]);




 const chnagedVal = (fieldName,e) => {
		fieldName(e.target.value)
 }

  const chnagedValCB = (fieldName,e) => {
		fieldName(e.target.checked)
 }

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

  

 const bloodGroup = [
	  "--Select--",
	  "A+",
	  "A-",
	  "B+",
	  "B-",
	  "AB+",
	  "AB-",
	  "O+",
	  "O-"
 ];

 const getBloodRecords = async () => {
	setgsheetresult(await readRecordsFromGSheet());
	
	if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
		window.scrollTo({
			top: 400,
			behavior: 'smooth',
		});
	}else{
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		});
	}
 }


 const readRecordsFromGSheet = async () => {
	const resultData = await axios.get('https://spreadsheets.google.com/feeds/cells/'+GOOGLE_SHEET_ID+'/1/public/full?alt=json');
	return resultData;
 }

 return(
	<>
		<div className="flex flex-col h-screen justify-between">
		  <Navbar />


		  <main className="mt-14 pb-20">
			 
		  <div className="flex flex-col md:flex-row">
			<div className="bg-gray-100 p-5 md:h-screen">
				<h4 className="text-center text-xl text-pink-600 my-5">Search Blood(Plasma)</h4>
				<div>
						<div className="flex flex-col my-5">
                          <label className="leading-loose">Blood Group</label>
						  <select className="px-4 py-2 border focus:ring-gray-500 focus:border-indigo-600 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
						 onChange={chnagedVal.bind(this,setsearchBloodGroup)}
						  >
						  {bloodGroup.map((ct,idx)=>{
							return(
								<option key={idx} value={ct} >{ct}</option>
							)
						  })}
						  
						  </select>
                          <label className="leading-loose text-red-700">{errorStack?.city}</label>
                        </div>

						<div className="flex flex-col">
                          <label className="leading-loose">City</label>
						  <select className="px-4 py-2 border focus:ring-gray-500 focus:border-indigo-600 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
						  onChange={chnagedVal.bind(this,setsearchCity)}
						  >
						  {cityNames.map((ct,idx)=>{
							return(
								<option key={idx} value={ct} >{ct}</option>
							)
						  })}
						  
						  </select>
                          <label className="leading-loose text-red-700">{errorStack?.city}</label>
                        </div>
						
						<div className="flex flex-col my-5">
						  	 <label className="md:text-sm"> <input type="checkbox" className="p-2" onClick={chnagedValCB.bind(this,setisCovidPlasmaDoner)} /> Covid Plasma Doner ?</label>
						 
                          <label className="leading-loose text-red-700">{errorStack?.city}</label>
                        </div>

						<div className="flex flex-col my-5">
                           <button 
						   onClick={()=>{getBloodRecords()}}
						   className="bg-pink-600 hover:bg-red-800 px-3 py-4 text-white font-bold  rounded-md" >Search</button>

						   <Link to="/addinfo" className="text-pink-600 text-center py-2 px-1 m-5 rounded-md bg-white border-pink-500 border-2 shadow-xl"> <FontAwesomeIcon icon={faHeartbeat} className="text-red-500 pt-1 text-2xl" />
						   Add Doner Information </Link>
                        </div>
				</div>
			</div>

			<div className="bg-white border-gray-100 rounded-md p-4 border-2 w-full">
				{searchBloodGroup&&searchCity&&<p className="text-center"> Results for {searchBloodGroup} at {searchCity} </p>}
				<div className="flex flex-col">
					{gsheetresult&&<GoogleSheetTable json_data={gsheetresult?.data?.feed?.entry||{}} searchBlood={searchBloodGroup} city={searchCity} covidstatus={isCovidPlasmaDoner} />  }					
				</div>

			</div>
			
		  </div>




		  </main>


		  <Footer />
		</div>
	</>
 );
}

export default BloodPage;