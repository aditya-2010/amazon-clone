import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import { useStateValue } from "./StateProvider";
import Header from "./Header";
import Home from "./Home";
import Checkout from "./Checkout";
import Login from "./Login";
import { auth } from "./firebase";
import * as Animate from "./animate";
import { AnimatedSwitch } from "react-router-transition";
import "./animate.css";

function App() {
  const [{ user }, dispatch] = useStateValue();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        //user is logged in

        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        //user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
      // console.log("USER>>>", authUser);
    });

    return () => {
      // cleanup
      unsubscribe();
    };
  }, []);

  return (
    <Router>
      <div className="app">
        <AnimatedSwitch
          atEnter={Animate.bounceTransition.atEnter}
          atLeave={Animate.bounceTransition.atLeave}
          atActive={Animate.bounceTransition.atActive}
          mapStyles={Animate.mapStyles}
          className="route-wrapper"
        >
          {/* <Switch> */}
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/signin">
            <Login />
          </Route>
          <Route path="/">
            <Header />
            <Home />
          </Route>
          {/* </Switch> */}
        </AnimatedSwitch>
      </div>
    </Router>
  );
}

export default App;
