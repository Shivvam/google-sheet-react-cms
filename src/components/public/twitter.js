import React,{useState} from 'react';
import Navbar from './navbar';
import Footer from './footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faUser, faCheckCircle, faBan, faClock} from '@fortawesome/free-solid-svg-icons';


const TwitterPage = () => {

	const [threadURL,setthreadURL] = useState(null)

	const chnagedVal = (fieldName,e) => {
		fieldName(e.target.value)
	}

	const handleGetThread = () =>{
		alert(threadURL)
	}


 
 return(
	<>
		<div className="flex flex-col h-screen justify-between">
		  <Navbar />


		  <main className="mt-14 pb-20">
			 
		  

			<p>Enter Thhred</p>
			<input type="text" className="px-4 py-2 border focus:ring-gray-500 focus:border-indigo-600 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
			onChange={chnagedVal.bind(this,setthreadURL)}
			/>
			<button onClick={()=>{handleGetThread()}}>Get</button>

		  </main>


		  <Footer />
		</div>
	</>
 );
}

export default TwitterPage;