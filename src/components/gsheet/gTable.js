import React from 'react';
import Row from './gRow';
import getTwoDimesionArrayfromSerialData from '../../helper/helper';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faUser, faCheckCircle, faBan, faClock, faBed, faMapMarker, faHeartbeat} from '@fortawesome/free-solid-svg-icons';

const GoogleSheetTable = (props) => {


  const sheetDataInArray = Array.from(props.json_data);

  const lastElement = sheetDataInArray[sheetDataInArray.length-1];
 

  const filterByBloodGroup = (resultA,bg) => {
	let filterByCityFirst =resultA.filter((ra)=>{ return ra.city === props.city });
	let filterByBloodGroupSecond = filterByCityFirst.filter((ra)=>{ return ra.bloodGroup === bg });
	if(props.covidstatus){
		return filterByBloodGroupSecond.filter((ra)=>{ return ra.covidPlasmaDoner === (props.covidstatus?"Yes":"No") });
	}else{
		return filterByBloodGroupSecond;
	}
	
  }
  

  if(lastElement !== undefined)
  {
    let numberofRows =  lastElement['gs$cell']["row"];
    let numberofCols = 10;
	const extraCols = 3;
    const googleSheetDataInTwoDArray = filterByBloodGroup(getTwoDimesionArrayfromSerialData(numberofRows,numberofCols,extraCols,sheetDataInArray),props.searchBlood);

    return(
        <>
				{(googleSheetDataInTwoDArray.length===0)&&<p className="text-red-500 text-2xl text-center py-2 m-2">Sorry No records found..</p>}
				{googleSheetDataInTwoDArray.map((pr,idx)=>{
					return(
						<div key={idx} className="border border-gray-300 shadow-xl rounded-md p-5 my-3">
	 
						 
								 <h3 className="m-3 text-xl font-bold">
								 Blood Group : 
								 <span className="mx-5 text-l font-semibold px-2 py-1 rounded-md bg-red-400 text-white"><FontAwesomeIcon icon={faHeartbeat} className="text-white text-xl" /> {pr.bloodGroup}</span>
								 </h3>
								 <p className="mx-3 font-bold text-indigo-400" >{(pr.covidPlasmaDoner==="Yes")&&"Covid Plasma Doner"}</p>
								 {(pr.availableForDonation==="Yes")?<p className="mx-3 font-bold text-green-500" >Available</p>:<p className="mx-3 font-bold text-red-500" >Not Available</p>}
								 
								 
			 
						 
						  
						  <div className="flex flex-col md:flex-row border-t md:p-3">
							<div className="mx-auto w-full mt-2 md:mt-0">
													  <p className="mx-5 text-l font-semibold"><FontAwesomeIcon icon={faUser} className="text-indigo-600" /> {pr.contact_Name}   </p>
													  <p className="mx-5 text-l py-1 font-semibold"><FontAwesomeIcon icon={faMapMarker} className="text-indigo-600" /> {pr.city}</p>
													  <a href={"tel:"+pr.contact_Number}><p className="mx-5 text-xl py-2 font-semibold"><FontAwesomeIcon icon={faPhone} className="text-indigo-600" /> {pr.contact_Number}</p></a>

							</div>
							<div className="mx-auto w-full mt-5 md:mt-0">
										<div className="md:float-right">
						  								<p className={(pr.isVerified==="Yes")?"mx-5  text-sm md:text-xl font-semibold text-green-500":"mx-5 text-sm font-semibold text-red-400"}>{(pr.isVerified==="Yes")? 
														  <span> <FontAwesomeIcon icon={faCheckCircle} className="text-green-600" /> Verified </span>
														  :
														  <span> <FontAwesomeIcon icon={faBan} className="text-red-600" /> Not Verified </span>
														}</p>
							    						<p className="mx-5 text-xs md:text-l text-gray-400 ">Last Verified : <FontAwesomeIcon icon={faClock} className="text-indigo-600" /> {pr.last_verified}</p>
										</div>
													  

							</div>
						  </div>
							
						</div>
					)
					})}
        </>
    )
   
  }else {
    return(
      <span className="text-center text-pink-500 ">  Plasma Helpline</span>
    )
  }
}

export default GoogleSheetTable;
