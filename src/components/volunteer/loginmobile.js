import React,{useEffect,useState} from 'react';
import {FireBaseapp} from '../../config/config';
import Firebase from "firebase";

import Navbar from '../public/navbar';
import Footer from '../public/footer';
 import { createBrowserHistory } from "history";


const LoginMobile  = (props) => {
        const [errorStack,seterrorStack] = useState({});
        const [phoneNumber,setphoneNumber]  = useState(null);
        const [otpSentForVerification,setotpSentForVerification] = useState(false);
        const [userOTP,setuserOTP] = useState(null);
        const [recaptcha,setrecaptcha] = useState(null);

        		 


     
        const history = createBrowserHistory();

           useEffect(() => {
              let isCancelled = false;
              if(!isCancelled){
                initRecaptcha();
              }
              return () => {
                isCancelled = true;
              }
          },[]);


        const initRecaptcha = async () => {
            const  recaptchaVerifier  = await new Firebase.auth.RecaptchaVerifier('recaptcha-container');
            setrecaptcha(recaptchaVerifier);
        }

	    const changedValue = (fieldName,e) => {
              fieldName(e.target.value);
        }

        const validateMobile = () => {
            let validated =  false;
            if(phoneNumber!==null&&phoneNumber!==0){
                validated = true;
            }else{
                validated = false;
            }
            return validated;
        }

        const signinMobileHandle = () => {
           
            if(validateMobile()){
                seterrorStack({});
                FireBaseapp.auth().signInWithPhoneNumber("+91"+phoneNumber, recaptcha)
                .then((confirmationResult) => {
                   
                  window.confirmationResult = confirmationResult;
                  setotpSentForVerification(true);
                }).catch((error) => {
                  // Error; SMS not sent
                  // ...
                });
                
            }else{
                seterrorStack({"phone":"Please Enter Valid Phone Number"})
            }
            
        }

         const validateOTP = () => {
            let validated =  false;
            if(userOTP!==null&&userOTP.length===6){
                validated = true;
            }else{
                validated = false;
            }
            return validated;
        }


         const verifyOTPHandle = () => {
            if(validateOTP()){
                seterrorStack({});
                window.confirmationResult.confirm(userOTP).then((result) => {
                    history.push("/dashboard");				 
					 window.location.reload(); 
                  
                }).catch((error) => {
                    alert('Cant Sign In');
                });
                
            }else{
                seterrorStack({"otp":"Please Enter Valid Verification Code"})
            }
            
        }

   



        


      


      
	
	return(
		<>

            <div className="flex flex-col h-screen justify-between">
		          <Navbar />


		          <main className="pt-40 px-2 flex flex-col">
			 

                     {!otpSentForVerification&&
                     <div className="mx-auto bg-gray-100 p-10 rounded-md">
                        <form onSubmit={(e)=>{ signinMobileHandle(); e.preventDefault(); }}>
                    
                        <label className="text-xl">Login using  Your Phone Number</label>
                        

            			<div className="flex flex-col mt-5">
                          <label className="leading-loose">Phone Number</label>
                          <div className="flex flex-row">
                            
                            <div className="w-full">
                                 <input type="tel" className="px-4 py-2 border focus:ring-gray-500 focus:border-indigo-600 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600" 
                                      placeholder="Phone Number" 
                                      onChange={changedValue.bind(this,setphoneNumber)}
                                      required
                                      />
                            </div>

                          </div>
                       

                         

                          <label className="leading-loose text-red-700">{errorStack?.phone}</label>
                        </div>
                        <div className="flex">
                            <div className="mx-auto pt-4">
                             <div   id="recaptcha-container"></div>
                             </div>
                        </div>
                        <div className="flex flex-col py-4 mt-2">
                          <button id="sign-in-button" className="bg-indigo-600 flex justify-center items-center w-full text-white px-4 py-3 rounded-md focus:outline-none" 
                          >Continue</button>
                        </div>

                        
                        </form>
                    </div>
                    }

                    {otpSentForVerification&&
                    <div className="mx-auto bg-gray-100 p-10 rounded-md">
                        <form onSubmit={(e)=>{ verifyOTPHandle(); e.preventDefault(); }}>
            			<div className="flex flex-col">
                          <label className="leading-loose">Enter Verification Code</label>
                          <input type="text" className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600" 
                          placeholder="Verification Code" 
                          autoFocus
                          onChange={changedValue.bind(this,setuserOTP)}
                          />
                          <label className="leading-loose text-red-700">{errorStack?.otp}</label>
                        </div>
                        <div className="flex flex-col py-4">
                          <button  className="bg-indigo-600 flex justify-center items-center w-full text-white px-4 py-3 rounded-md focus:outline-none" 
                          >Continue</button>
                        </div>
                        </form>
                    </div>
                    }



		          </main>


		          <Footer />
		        </div>

           

						 
		</>
	);
}

export default LoginMobile;