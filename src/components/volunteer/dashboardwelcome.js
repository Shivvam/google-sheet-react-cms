import React,{useEffect,useState} from 'react';
import {FireBaseapp} from '../../config/config';

const DashboardWelcome = () => {

    const [errorStack,seterrorStack] = useState({});
	const [brandName,setbrandName] = useState("");
 
	   
        const [uDetails,setuDetails] = useState({});

	      useEffect(() => {
              let isCancelled = false;
              if(!isCancelled){
                checkandSetUpLogin();
              }
              return () => {
                isCancelled = true;
              }
          },[uDetails]);


		const changedValue = (fieldName,e) => {
			  fieldName(e.target.value);
		}


		 const checkandSetUpLogin = async() => {

			let user = await FireBaseapp.auth().currentUser;
			if (user != null) {
                setuDetails(user);
				setbrandName(user.displayName);
			}else{
                    setuDetails({});
			}	
          }


		const createUserInDB = (uid) => {
			const  database = FireBaseapp.database();
			database.ref('volunteers/'+uid).set({
				"userName":brandName,
		   }).then(() => {
		 		 
					 window.location.reload(); 
		   });
		}


		const saveProfileHandle = async () => {
			let user = await FireBaseapp.auth().currentUser;
			if (user != null) {
				if(!user.displayName){
					createUserInDB(user.uid);
				}
				user.updateProfile({
				  displayName: brandName,
				}).then(function() {
			          updateUserInDB(user.uid);   
				}).catch(function(error) {
		   
				});
			}		 	
		}

		const updateUserInDB = (uid) => {
			const  database = FireBaseapp.database();
			database.ref('volunteers/'+uid).update({
				"userName" :brandName,
		 
		   }).then(() => {
				 
					 window.location.reload(); 
		   });
		}

		


	return(
		<>
		
		 <div className="min-h-screen bg-gray-100 flex flex-col">
				 
			  {!uDetails.displayName&&
              <div className="relative mt-5 sm:max-w-xl sm:mx-auto">
                <div className="relative px-4  bg-white   md:mx-0 shadow rounded-md">
					  <div className="flex">
                          <label className="leading-loose text-2xl text-indigo-600">Update Information</label>
					 </div>
					 
					 <form  onSubmit={(e)=>{ e.preventDefault(); saveProfileHandle();  }}  className="flex flex-row" >	
					 <div className="flex flex-col">
                          <label className="leading-loose">Name</label>
						 
						  <input type="text" placeholder="Name"   className="px-4 py-2 border focus:ring-gray-500 focus:border-indigo-500 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600" 
					      onChange={changedValue.bind(this,setbrandName)}
						  value={brandName}
                          />
                     </div>
					

					 <div className="flex flex-col m-7">
                        <button className="bg-indigo-500 flex justify-center items-center w-full text-white px-4 py-2 rounded-md focus:outline-none">
						 Update
						</button>
                     </div>

					
					
			     </form>

				</div>
		      </div>
			  }
			  {uDetails.displayName&&
			  <div className="relative px-4  bg-white   md:mx-0 shadow rounded-md">
				<p className="leading-loose text-2xl text-indigo-600">Welcome <strong>{uDetails.displayName}</strong></p>
			  </div>
			  }

			  <div className="bg-white mt-20  shadow rounded-md max-w-xl mx-auto">
				<div className="flex flex-row">
					<div className="mx-auto">
						<button className="m-5 px-4 py-3 bg-indigo-600 text-white font-bold rounded-md">Join a Group</button>
					</div>
					<div className="mx-auto">
						<button className="m-5 px-4 py-3 bg-white border-2 rounded-md border-indigo-600 text-indigo-600 font-bold">Create a Group</button>
					</div>
					
				</div>
			  </div>
	    </div>
			
		


		</>
	);
}

export default DashboardWelcome;