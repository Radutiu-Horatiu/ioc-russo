import "./App.css";
import React from "react";
import HomeScreen from "./screens/HomeScreen/HomeScreen";
import TeachingStaffScreen from "./screens/TeachingStaffScreen/TeachingStaffScreen";
import TestimonialsScreen from "./screens/TestimonialsScreen/TestimonialsScreen";
import ApplicationsScreen from "./screens/ApplicationsScreen/ApplicationsScreen";
import { Route, Switch } from "react-router";
import LoginScreen from "./screens/Login/LoginScreen";
import RegisterScreen from "./screens/Register/RegisterScreen";
import Navbar from "./components/Navbar";
import { Flex } from "@chakra-ui/layout";
import PresentingScreen from "./screens/PresentingScreen/PresentingScreen";
import PresentingDetailedScreen from "./screens/PresentingDetailedScreen/PresentingDetailedScreen";
import OpportunitiesScreen from "./screens/OportunutiesScreen/OpportunitiesScreen";
import EventsScreen from "./screens/Evenimente/EventsScreen.jsx";
import UsefulLinksScreen from "./screens/LinkuriUtile/UsefulLinksScreen.jsx";

function App() {
  return (
    <Flex h="100vh">
      <Navbar />
      {/* Right content */}
      <Flex flexDir="column" w="100%" p={"1vh"}>
        {/* Dynamic content screen */}
        <Flex h="100%">
          <Switch>
            <Route path="/usefulLinks">
              <UsefulLinksScreen />
            </Route>
            <Route path="/events">
              <EventsScreen />
            </Route>
            <Route path="/staff">
              <TeachingStaffScreen />
            </Route>
            <Route path="/testimonials">
              <TestimonialsScreen />
            </Route>
            <Route path="/staff">
              <TeachingStaffScreen />
            </Route>
            <Route path="/presenting">
              <PresentingScreen />
            </Route>
            <Route path="/presentingDetailed">
              <PresentingDetailedScreen />
            </Route>
            <Route path="/opportunities">
              <OpportunitiesScreen />
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
