import { useDispatch, useSelector } from "react-redux";
import { userActions } from "../store/user/user-slice";
import { Flex, Image, Box } from "@chakra-ui/react";
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

  console.log(user);

  return (
    <Flex
      flexDir="column"
      w="25%"
      backgroundColor="gray.200"
      justify="space-between"
      p="1vh"
    >
      {/* Up */}
      <Flex flexDir={"column"}>
        <Flex mb="3vh" align={"center"}>
          <Image src={LOGO} w="12vh" h="12vh" />
          <Box ml={"1vh"}>
            <Heading fontSize="3.5vh">RUSO</Heading>
            <Text fontSize="1.5vh" fontWeight={"bold"}>
              Psihologia Resurselor Umane şi Sănătate Organizaţională
            </Text>
          </Box>
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
          onClick={() => history.push("/applications")}
          my="0.5vh"
        >
          <Text>Admitere</Text>
        </Button>
        <Button
          variant="ghost"
          justifyContent="flex-start"
          onClick={() => history.push("/presenting")}
          my="0.5vh"
        >
          <Text>Prezentare generală</Text>
        </Button>
        <Button
          variant="ghost"
          justifyContent="flex-start"
          onClick={() => history.push("/presentingDetailed")}
          my="0.5vh"
        >
          <Text>Descriere detaliată program</Text>
        </Button>
        <Button
          variant="ghost"
          justifyContent="flex-start"
          onClick={() => history.push("/opportunities")}
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
          <Text>Cadre didactice</Text>
        </Button>
        <Button
          variant="ghost"
          justifyContent="flex-start"
          onClick={() => history.push("/testimonials")}
          my="0.5vh"
        >
          <Text>Testimoniale</Text>
        </Button>
        <Button
          variant="ghost"
          justifyContent="flex-start"
          onClick={() => history.push("/events")}
          my="0.5vh"
        >
          <Text>Noutăți & Evenimente</Text>
        </Button>
        <Button
          variant="ghost"
          justifyContent="flex-start"
          onClick={() => history.push("/usefulLinks")}
          my="0.5vh"
        >
          <Text>Link-uri utile</Text>
        </Button>
      </Flex>

      {/* Down */}
      <Flex flexDir="column">
        {user.email ? (
          <>
            <Button
              justifyContent="flex-start"
              variant="ghost"
              mb={"1vh"}
              onClick={() => history.push("/login")}
            >
              <Text>{user.email}</Text>
            </Button>
            <Button
              justifyContent="flex-start"
              variant="ghost"
              mb={"1vh"}
              onClick={() => history.push("/login")}
            >
              <Text>Admin</Text>
            </Button>
            <Button
              justifyContent="flex-start"
              variant="ghost"
              onClick={logUserOut}
            >
              <Text>Deconectare</Text>
            </Button>
          </>
        ) : (
          <Button
            justifyContent="flex-start"
            variant="ghost"
            onClick={() => history.push("/login")}
          >
            <Text>Conectare</Text>
          </Button>
        )}
      </Flex>
    </Flex>
  );
}
