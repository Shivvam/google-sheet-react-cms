import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Home from './components/public/home';
import Beds from './components/public/bedspage';
import Help from './components/public/help';
import Twitter from './components/public/twitter';
import BloodPage from './components/public/blood';
import GoogleForm from './components/public/googleform';
import LoginMobile from './components/volunteer/volunteers';
import Dashboard from './components/volunteer/dashboard';


function App() {
  return (
     <>
        <Router>
     

            <Switch>
              <Route exact path="/">
                <BloodPage />
              </Route>
              <Route path="/home">
                <BloodPage />
              </Route>
              <Route path="/beds">
                <BloodPage />
              </Route>
               <Route path="/blood">
                <BloodPage />
              </Route>
            <Route path="/addinfo">
                <GoogleForm />
              </Route>
              <Route path="/help">
                <Help />
              </Route>
              <Route path="/volunteers">
                <LoginMobile />
              </Route>
              <Route path="/twitter">
                <Twitter />
              </Route>
              <Route path="/dashboard">
                <Dashboard />
              </Route>
            </Switch>

        </Router>
     </>
  );
}

export default App;
