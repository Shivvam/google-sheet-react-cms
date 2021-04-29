import React,{useEffect,useState} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch
} from "react-router-dom";

import DashboardWelcome from './dashboardwelcome';
import AllResources from './allresources';
import AllBeds from './beds';
import Leads from './leads';
 
 




const DashSection = () => {
	
	const { section, giveAwayId } = useParams();
	 

	 useEffect(() => {
        let isCancelled = false;
		

		console.log(section);
        return () => {
          isCancelled = true;
        };
      }, [section]);

	
	const getSectionJSX = () => {
 
		switch(section){
			case 'profile':
			 return <DashboardWelcome   />;
		case 'resources':
			return <AllResources   />;
		case 'beds':
			return <AllBeds   />;
		case 'leads':
			return <Leads   />;
		 
			 
	 
			default:
			 return <DashboardWelcome />;
		}
	}


	return(
		<>
			{getSectionJSX()}
	 
		</>
	);

}

export default DashSection;