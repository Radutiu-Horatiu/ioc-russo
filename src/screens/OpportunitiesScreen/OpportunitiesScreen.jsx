import { Text, Flex, Image, Box, Heading } from "@chakra-ui/react";
import React from "react";
import LOGO from "../../assets/russo_logo.png";
import MyCarousel from "../../components/MyCarousel/MyCarousel";
import ScreenTemplate from "../../components/ScreenTemplate";
import {
  List,
  ListItem,
  ListIcon,
  OrderedList,
  UnorderedList,
} from "@chakra-ui/react";
import { MdCheckCircle } from "react-icons/md";
export default function OpportunitiesScreen() {
  return (
    <ScreenTemplate
      title={"Oportunitati profesionale"}
      sections={[
        {
          component: (
            <Box>
              <List spacing={6} fontSize={20} my={"5vh"}>
                <ListItem>
                  <ListIcon as={MdCheckCircle} color="green.500" />
                  Departamente de resurse umane și dezvoltare organizațională
                  din organizaţii private, multinaționale, de stat şi
                  non-guvernamentale
                </ListItem>
                <ListItem>
                  <ListIcon as={MdCheckCircle} color="green.500" />
                  Firme de consultanţă în domeniul resurselor umane din ţară şi
                  străinătate
                </ListItem>
                <ListItem>
                  <ListIcon as={MdCheckCircle} color="green.500" />
                  Institute de cercetare privind munca, resursele umane,
                  sănătatea organizaţională
                </ListItem>
                <ListItem>
                  <ListIcon as={MdCheckCircle} color="green.500" />
                  Instituţii educaţionale din sistemul preuniversitar şi
                  universitar
                </ListItem>
                <ListItem>
                  <ListIcon as={MdCheckCircle} color="green.500" />
                  Agenţii şi asociaţii naţionale şi internaţionale în domeniu
                  (Masteratul este construit în acord cu principiile Asociaţiei
                  Europene de Psihologia Muncii şi Organizaţională - EAWOP)
                </ListItem>
              </List>

              {/* Carousel with sigle */}
              <Heading mb={"1vh"}>Firme partenere</Heading>
              <MyCarousel
                slides={[
                  // 1
                  <Flex
                    align={"center"}
                    justify={"center"}
                    p={"5vh"}
                    bgColor={"purple.200"}
                  >
                    <Image src={LOGO} h="50vh" objectFit={"cover"} />
                  </Flex>,
                  // 2
                  <Flex align={"center"} justify={"center"}>
                    <Image src={LOGO} h="50vh" objectFit={"cover"} />
                  </Flex>,
                  // 3
                  <Flex align={"center"} justify={"center"}>
                    <Image src={LOGO} h="50vh" objectFit={"cover"} />
                  </Flex>,
                ]}
              />
            </Box>
          ),
        },
      ]}
    />
  );
}
