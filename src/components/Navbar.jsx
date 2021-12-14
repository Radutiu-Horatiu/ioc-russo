import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userActions } from "../store/user/user-slice";
import { Flex, Image } from "@chakra-ui/react";
import { Heading, Text } from "@chakra-ui/layout";
import { Button } from "@chakra-ui/react";
import { useHistory } from "react-router";
import { logout } from "../store/user/utils";
import LOGO from "../assets/russo_logo.png";

export default function Navbar() {
  const dispatch = useDispatch();
  const history = useHistory();
  const user = useSelector((state) => state.user);

  const logUserOut = () => {
    logout();
    dispatch(userActions.signOut());
    history.push("/login");
  };

  return (
    <Flex
      flexDir="column"
      w="25%"
      backgroundColor="purple.200"
      justify="space-between"
      p="1vh"
    >
      {/* Up */}
      <Flex flexDir="column">
        <Flex align="center" mb="3vh">
          <Image src={LOGO} w="10vh" h="10vh" />
          <Heading fontSize="3vh" ml="1vh">
            RUSO
          </Heading>
        </Flex>
        <Button
          variant="ghost"
          justifyContent="flex-start"
          onClick={() => history.push("/")}
          my="0.5vh"
        >
          <Text>Acasă</Text>
        </Button>
        <Button
          variant="ghost"
          justifyContent="flex-start"
          onClick={() => history.push("/prezentare")}
          my="0.5vh"
        >
          <Text>Prezentare generală</Text>
        </Button>
        <Button
          variant="ghost"
          justifyContent="flex-start"
          onClick={() => history.push("/test")}
          my="0.5vh"
        >
          <Text>Descriere detaliată program</Text>
        </Button>
        <Button
          variant="ghost"
          justifyContent="flex-start"
          onClick={() => history.push("/test")}
          my="0.5vh"
        >
          <Text>Oportunități profesionale</Text>
        </Button>
        <Button
          variant="ghost"
          justifyContent="flex-start"
          onClick={() => history.push("/staff")}
          my="0.5vh"
        >
          <Text>Staff predare</Text>
        </Button>
        <Button
          variant="ghost"
          justifyContent="flex-start"
          onClick={() => history.push("/testimoniale")}
          my="0.5vh"
        >
          <Text>Testimoniale</Text>
        </Button>
        <Button
          variant="ghost"
          justifyContent="flex-start"
          onClick={() => history.push("/test")}
          my="0.5vh"
        >
          <Text>Evenimente</Text>
        </Button>
        <Button
          variant="ghost"
          justifyContent="flex-start"
          onClick={() => history.push("/test")}
          my="0.5vh"
        >
          <Text>Link-uri utile</Text>
        </Button>
        <Button
          variant="ghost"
          justifyContent="flex-start"
          onClick={() => history.push("/test")}
          my="0.5vh"
        >
          <Text>Newsletter</Text>
        </Button>
      </Flex>

      {/* Down */}
      {user?.email && (
        <Flex flexDir="column">
          <Button
            justifyContent="flex-start"
            variant="ghost"
            onClick={logUserOut}
          >
            <Text>Log out</Text>
          </Button>
        </Flex>
      )}
    </Flex>
  );
}
