import React from 'react';
import Navbar from './navbar';
import Footer from './footer';


const GoogleForm = () => {
 
			





 return(
	<>
		<div className="flex flex-col h-screen justify-between">
		  <Navbar />


		  <main className="mt-14 pb-20">
			 
		 
			<iframe className="mx-auto" src="https://docs.google.com/forms/d/e/1FAIpQLScuz1tyPcQ2mIfDtSbV3mVn-mLcH9wO-NjnZ7ZqnBq5q_7pNg/viewform?embedded=true" width="100%" height="1024" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
 
		  </main>


		  <Footer />
		</div>
	</>
 );
}

export default GoogleForm;

