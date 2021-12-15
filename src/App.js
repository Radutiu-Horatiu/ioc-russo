import "./App.css";
import React, { useState } from "react";
import HomeScreen from "./screens/HomeScreen/HomeScreen";
import TeachingStaffScreen from "./screens/TeachingStaffScreen/TeachingStaffScreen";
import TestimonialsScreen from "./screens/TestimonialsScreen/TestimonialsScreen";
import ApplicationsScreen from "./screens/ApplicationsScreen/ApplicationsScreen";
import { Route, Switch, useHistory } from "react-router";
import LoginScreen from "./screens/Login/LoginScreen";
import RegisterScreen from "./screens/Register/RegisterScreen";
import Navbar from "./components/Navbar";
import { Flex } from "@chakra-ui/layout";
import { onAuthStateChanged } from "@firebase/auth";
import { auth } from "./firebase";
import { useDispatch, useSelector } from "react-redux";
import { userActions } from "./store/user/user-slice";
import PresentingScreen from "./screens/PresentingScreen/PresentingScreen";

function App() {
  const dispatch = useDispatch();
  const history = useHistory();
  const [loggedIn, setloggedIn] = useState(false);
  const user = useSelector((state) => state.user);

  React.useEffect(() => {
    if (!user.email.length) setloggedIn(false);
    else setloggedIn(true);
  }, [user]);

  React.useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(userActions.setEmail({ email: user.email }));
      }
    });
  }, []);
  return (
    <Flex h="100vh">
      <Navbar />
      {/* Right content */}
      <Flex flexDir="column" w="100%" p={"1vh"}>
        {/* Dynamic content screen */}
        <Flex h="100%">
          <Switch>
            <Route path="/staff">
              <TeachingStaffScreen />
            </Route>
            <Route path="/testimoniale">
              <TestimonialsScreen />
            </Route>
            <Route path="/staff">
              <TeachingStaffScreen />
            </Route>
            <Route path="/prezentare">
              <PresentingScreen />
            </Route>
            <Route path="/applications">
              <ApplicationsScreen />
            </Route>
            <Route path="/register">
              <RegisterScreen />
            </Route>
            <Route path="/login">
              <LoginScreen />
            </Route>
            <Route path="/">
              <HomeScreen />
            </Route>
          </Switch>
        </Flex>
      </Flex>
    </Flex>
  );
}

export default App;
