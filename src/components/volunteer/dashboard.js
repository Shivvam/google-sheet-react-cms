import React,{useEffect,useState} from 'react';
import { createBrowserHistory } from "history";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch
} from "react-router-dom";
import DashSection from './dashsection';
import DashboardWelcome from './dashboardwelcome';
import {FireBaseapp} from '../../config/config';

const Dashboard = (props) => {
        
        const [diplayMobileMenu,setdiplayMobileMenu] = useState(false);
        const [loggedIn,setloggedIn] = useState(null);
        const [uDetails,setuDetails] = useState({});

        let { path, url } = useRouteMatch();
 
 		const history = createBrowserHistory();

           useEffect(() => {
              let isCancelled = false;
              if(!isCancelled){
                checkandSetUpLogin();
                document.title = "CovidHelp Dashboard";
              }
              return () => {
                isCancelled = true;
              }
          },[loggedIn]);


        const logoutHandle = () => {
	        FireBaseapp.auth().signOut().then(() => {
                history.push('/');
			    window.location.reload();
            }).catch((error) => {
              
            });
			
		}
   
        const checkandSetUpLogin = () => {
            FireBaseapp.auth().onAuthStateChanged((user) => {
                  if (user) {
               
                     setloggedIn(true);
                     setuDetails(user);
                  }else {
                    setloggedIn(false);
                    setuDetails({});
                  }
            });
          }

        const handleMobileMenu = () => {
          setdiplayMobileMenu(!diplayMobileMenu);
        }

	return(
		<>

                  

                    <button type="button" onClick={()=>{handleMobileMenu();}} 
                      className="h-10 md:hidden   p-2  rounded-md" aria-expanded="false">
          
                      <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                      </svg>
           
                      <svg className="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>

					<div className="flex flex-no-wrap">

                    

                    
                  
                    <div className={diplayMobileMenu?" w-64 absolute sm:relative bg-gray-800 shadow md:h-auto flex-col justify-between z-50 sm:flex":" w-64  absolute sm:relative bg-gray-800 shadow md:h-auto flex-col justify-between z-50 hidden sm:flex"}   >
                        <button className="md:hidden float-right text-white text-2xl px-2" onClick={()=>{handleMobileMenu();}}>X</button>
                        <div className="px-8 h-screen">
                            
                            <div className="h-16 w-full flex items-center">
                                 <p className="text-white">Welcome {uDetails.displayName} </p>
                            </div>
                            <ul className="mt-12">
                                
                                <li className="flex w-full justify-between text-gray-300 hover:text-gray-500 cursor-pointer items-center mb-6">
                                    <div className="flex items-center">
                                        <span className="text-sm  ml-2">
                                            <a href="/">Home</a>
                                        </span>
                                    </div>
                                </li>
                                <li className="flex w-full justify-between text-gray-300 hover:text-gray-500 cursor-pointer items-center mb-6">
                                    <div className="flex items-center">
                                        <span className="text-sm  ml-2">
                                            <a href="/dashboard/profile/view">Profile</a>
                                        </span>
                                    </div>
                                </li>
                                <li className="flex w-full justify-between text-gray-300 hover:text-gray-500 cursor-pointer items-center mb-6">
                                    <div className="flex items-center">
                                        <span className="text-sm  ml-2">
                                            <a href="/dashboard/resources/all">Resources</a>
                                        </span>
                                    </div>
                                </li>
                                <li className="flex w-full justify-between text-gray-300 hover:text-gray-500 cursor-pointer items-center mb-6">
                                    <div className="flex items-center">
                                        <span className="text-sm  ml-2">
                                            <a href="/dashboard/beds/all">Beds</a>
                                        </span>
                                    </div>
                                </li>
                                <li className="flex w-full justify-between text-gray-300 hover:text-gray-500 cursor-pointer items-center mb-6">
                                    <div className="flex items-center">
                                        <span className="text-sm  ml-2">
                                            <a href="/dashboard/leads/all">Leads</a>
                                        </span>
                                    </div>
                                </li>
                                 
                                 
                                 <li className="flex w-full justify-between text-gray-300 hover:text-gray-500 cursor-pointer items-center mb-6">
                                    <div className="flex items-center">
                                        <span className="text-sm  ml-2">
                                            <button  onClick={()=>{logoutHandle();}}>Logout</button>
                                        </span>
                                    </div>
                                </li>
                            </ul>
                             
                        </div>
                         
                    </div>
                    
                    
                    <div className="container mx-auto   md:w-4/5 w-11/12">
                              <Switch>
                                <Route exact path={path}>
                                    <DashboardWelcome/>
                                </Route>
                                <Route path={`${path}/:section/:giveAwayId`}>
                                    <DashSection />
                                </Route>
                            </Switch>
                            
                    </div>
                </div>




	 
		</>
	);

}

export default Dashboard;