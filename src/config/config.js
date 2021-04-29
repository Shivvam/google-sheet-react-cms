import Firebase from "firebase";
import "firebase/storage";

const firebaseConfig = {
   apiKey: "AIzaSyAuqPlwqOx13IBOtiEZP45CP0OzAuFFi7U",
    authDomain: "covidhelp-28f8f.firebaseapp.com",
    databaseURL: "https://covidhelp-28f8f-default-rtdb.firebaseio.com",
    projectId: "covidhelp-28f8f",
    storageBucket: "covidhelp-28f8f.appspot.com",
    messagingSenderId: "280211308365",
    appId: "1:280211308365:web:c355bbb1d59f9210484104",
    measurementId: "G-MBEP4JZPQS"
  };

export const FireBaseapp = Firebase.initializeApp(firebaseConfig);