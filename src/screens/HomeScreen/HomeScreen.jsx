import { Box, Flex, Heading, Image, Input, Text } from "@chakra-ui/react";
import React from "react";
import LOGO from "../../assets/russo_logo.png";
import ScreenTemplate from "../../components/ScreenTemplate";

export default function HomeScreen() {
  const news = [
    {
      title: "Noutate 1",
      date: "31/01/2022",
      text: `Eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
    enim ad minim veniam, quis nostrud exercitation ullamco laboris
    nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
    in reprehenderit in voluptate velit esse cillum dolore eu fugiat
    nulla pariatur.`,
    },
    {
      title: "Noutate 2",
      date: "13/01/2022",
      text: `Eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
    enim ad minim veniam, quis nostrud exercitation ullamco laboris
    nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
    in reprehenderit in voluptate velit esse cillum dolore eu fugiat
    nulla pariatur.`,
    },
    {
      title: "Noutate 3",
      date: "12/01/2022",
      text: `Eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
    enim ad minim veniam, quis nostrud exercitation ullamco laboris
    nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
    in reprehenderit in voluptate velit esse cillum dolore eu fugiat
    nulla pariatur.`,
    },
    {
      title: "Noutate 4",
      date: "12/01/2022",
      text: `Eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
    enim ad minim veniam, quis nostrud exercitation ullamco laboris
    nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
    in reprehenderit in voluptate velit esse cillum dolore eu fugiat
    nulla pariatur.`,
    },
    {
      title: "Anunț 5",
      date: "12/01/2022",
      text: `Eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
    enim ad minim veniam, quis nostrud exercitation ullamco laboris
    nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
    in reprehenderit in voluptate velit esse cillum dolore eu fugiat
    nulla pariatur.`,
    },
    {
      title: "Anunț 6",
      date: "12/01/2022",
      text: `Eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
    enim ad minim veniam, quis nostrud exercitation ullamco laboris
    nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
    in reprehenderit in voluptate velit esse cillum dolore eu fugiat
    nulla pariatur.`,
    },
  ];

  return (
    <ScreenTemplate
      // title={"Salutare și bine ai venit"}
      sections={[
        {
          component: (
            <Flex flexDir={"column"}>
              <Flex align={"center"}>
                <Image src={LOGO} w="12vh" h="12vh" />
                <Box ml={"1vh"}>
                  <Heading fontSize="3.5vh">RUSO</Heading>
                  <Text fontSize="1.5vh" fontWeight={"bold"}>
                    Psihologia Resurselor Umane şi Sănătate Organizaţională
                  </Text>
                </Box>
              </Flex>
              <Heading fontSize="4.5vh" my={"2vh"}>
                Salutare și bine ai venit
              </Heading>
              <Input placeholder="Căutare pe site.." my={"1vh"} />

              <Heading mt={"1vh"}>Noutăți și anunțuri</Heading>
              {news.map((obj, i) => (
                <Flex flexDir={"column"} my={"1vh"} key={i}>
                  <Text fontSize={"2vh"}>{obj.title}</Text>
                  <Text fontSize={"1.5vh"}>{obj.date}</Text>
                  <Text>{obj.text}</Text>
                </Flex>
              ))}
            </Flex>
          ),
        },
      ]}
    />
  );
}
