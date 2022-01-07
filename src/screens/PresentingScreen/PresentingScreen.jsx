import {
  Text,
  Flex,
  ListIcon,
  OrderedList,
  UnorderedList,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
} from "@chakra-ui/react";
import React from "react";
import MyCarousel from "../../components/MyCarousel/MyCarousel";
import ScreenTemplate from "../../components/ScreenTemplate";
import { Link } from "react-router-dom";
import { ExternalLinkIcon } from "@chakra-ui/icons";

export default function PresentingScreen() {
  return (
    <ScreenTemplate
      title={"Prezentare generală"}
      mainText={
        "Programul  de  masterat  Psihologia  Resurselor  Umane  şi  Sănătate Organizaţională  este  conceput pentru a oferi o fundamentare ştiinţifică în domeniul psihologiei aplicate în context industrial-organizaţional și urmărește dezvoltarea competențelor de diagnoză, evaluare și  intervenție  în organizații. "
      }
      sections={[
        {
          title: "Misiunea programului",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do ",
          component: (
            <Flex>
              <Text>
                Eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur.
              </Text>
            </Flex>
          ),
        },
        // {
        //   title: "Title",
        //   description: "Description",
        //   component: (
        //     <MyCarousel
        //       slides={[
        //         // 1
        //         <Flex
        //           align={"center"}
        //           justify={"center"}
        //           height={"300px"}
        //           // p={"5vh"}
        //           // bgColor={"purple.200"}
        //         >
        //           {/* <Image src={LOGO} h="50vh" objectFit={"cover"} /> */}
        //           <Text>Ce face programul</Text>
        //         </Flex>,
        //         // 2
        //         <Flex align={"center"} justify={"center"} height={"300px"}>
        //           {/* <Image src={LOGO} h="50vh" objectFit={"cover"} /> */}
        //           <Text>Principiile programului</Text>
        //         </Flex>,
        //         // 3
        //         <Flex align={"center"} justify={"center"} height={"300px"}>
        //           {/* <Image src={LOGO} h="50vh" objectFit={"cover"} /> */}
        //           <Text>Taxe scolarizare</Text>
        //         </Flex>,
        //       ]}
        //     />
        //   ),
        // },
        {
          title: "Taxe scolarizare",
          description: "",
          component: (
            <Flex>
              <a
                href="http://www.ubbcluj.ro/ro/taxe/taxe_de_scolarizare"
                target={"_blank"}
              >
                Detalii taxe scolarizare <ExternalLinkIcon mx="2px" />
              </a>
            </Flex>
          ),
        },
      ]}
    />
  );
}
