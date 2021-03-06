import React, {useEffect} from 'react'
import Header from "./Header";
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './Home';
import Login from "./Login";
import Footer from './Footer';
import Checkout from './Checkout';
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
// import { loadStripe } from "@stripe/stripe-js";
// import { Elements } from "@stripe/react-stripe-js";

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => { 
    // will only run once when the app component loads...

    auth.onAuthStateChanged((authUser) => {
       console.log("THE USER IS >>> ", authUser);

      if (authUser) {
        // the user just logged in / the user was logged in

        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  return (
    <Router>
   <div className="app">
     <Switch>
      <Route path="/checkout">
        <Header/>
       <Checkout />

      </Route>
        <Route path= "/login">
       <Login />     
          
        </Route>
        
         {/* default page  */}
        <Route path ="/">
          <Header />
          <Home/>

        </Route>
     </Switch>
     
    </div>
    <Footer />
    </Router>
      
  );
}

export default App;
