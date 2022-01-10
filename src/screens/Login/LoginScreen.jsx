import { Flex, useToast } from "@chakra-ui/react";
import React, { useState } from "react";
import { FormControl, FormLabel, Input } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import { signInWithEmailAndPassword } from "@firebase/auth";
import { auth } from "../../firebase";
import { useDispatch } from "react-redux";
import { userActions } from "../../store/user/user-slice";
import { useHistory } from "react-router";
import ScreenTemplate from "../../components/ScreenTemplate";

export default function LoginScreen() {
  const history = useHistory();
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const toast = useToast();

  const login = () => {
    if (!email || !password)
      toast({
        title: "Eroare.",
        description: "Va rugam introduceti numele de utilizator si parola.",
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "top-right",
      });

    let myEmail = email + "@ruso.com";

    signInWithEmailAndPassword(auth, myEmail, password)
      .then((userCredentials) => {
        dispatch(userActions.setEmail({ email: userCredentials?.user?.email }));
        history.push("/");
      })
      .catch((e) => {
        console.log(e);
        toast({
          title: "Eroare.",
          description: "Datele introduse nu sunt corecte.",
          status: "error",
          duration: 5000,
          isClosable: true,
          position: "top-right",
        });
      });
  };

  return (
    <ScreenTemplate
      title={"Conectare"}
      mainText={
        "Conectare ca Admin pentru a intretine/modifica datele de pe site."
      }
      sections={[
        {
          component: (
            <Flex flexDir={"column"}>
              <FormControl id="email" isRequired>
                <FormLabel>Nume utilizator</FormLabel>
                <Input
                  w={"50%"}
                  type="text"
                  placeholder="Nume utilizator"
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
              </FormControl>
              <FormControl id="password" isRequired mt={"1vh"}>
                <FormLabel>Parola</FormLabel>
                <Input
                  w={"50%"}
                  type={"password"}
                  placeholder="Parola"
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                />
              </FormControl>
              <FormControl>
                <Button
                  bgColor={"purple.200"}
                  onClick={login}
                  w={"50%"}
                  mt={"5vh"}
                >
                  Logare
                </Button>
              </FormControl>
            </Flex>
          ),
        },
      ]}
    />
  );
}
