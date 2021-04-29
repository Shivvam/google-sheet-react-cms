import React,{useEffect,useState} from 'react';
import {FireBaseapp} from '../../config/config';
import Firebase from "firebase";

import Navbar from '../public/navbar';
import Footer from '../public/footer';
 import { createBrowserHistory } from "history";


const LoginMobile  = (props) => {
    
   



        


      


      
	
	return(
		<>

            <div className="flex flex-col h-screen justify-between">
		          <Navbar />


		          <main className="pt-20 px-2 flex flex-col mx-80">
					<img  src={process.env.PUBLIC_URL + '/pz.jpeg'}  alt="Tarun Shakti" className="rounded-md mx-auto h-screen w-full shadow-2xl mb-20"/>
					 


		          </main>


		          <Footer />
		        </div>

           

						 
		</>
	);
}

export default LoginMobile;