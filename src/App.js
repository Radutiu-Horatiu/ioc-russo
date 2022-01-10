import "./App.css";
import React from "react";
import HomeScreen from "./screens/HomeScreen/HomeScreen";
import TeachingStaffScreen from "./screens/TeachingStaffScreen/TeachingStaffScreen";
import TestimonialsScreen from "./screens/TestimonialsScreen/TestimonialsScreen";
import ApplicationsScreen from "./screens/AdmittanceScreen/AdmittanceScreen";
import { Route, Switch } from "react-router";
import LoginScreen from "./screens/Login/LoginScreen";
import Navbar from "./components/Navbar";
import { Flex } from "@chakra-ui/layout";
import PresentingScreen from "./screens/PresentingScreen/PresentingScreen";
import PresentingDetailedScreen from "./screens/PresentingDetailedScreen/PresentingDetailedScreen";
import OpportunitiesScreen from "./screens/OpportunitiesScreen/OpportunitiesScreen";
import AdminScreen from "./screens/AdminScreen/AdminScreen";
import EventsScreen from "./screens/EventsScreen/EventsScreen.jsx";
import UsefulLinksScreen from "./screens/UsefulLinksScreen/UsefulLinksScreen.jsx";
import { useSelector } from "react-redux";

function App() {
  const user = useSelector((state) => state.user);

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
            <Route path="/admittance">
              <ApplicationsScreen />
            </Route>

            {user?.email ? (
              <Route path="/admin">
                <AdminScreen />
              </Route>
            ) : (
              <Route path="/login">
                <LoginScreen />
              </Route>
            )}
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
