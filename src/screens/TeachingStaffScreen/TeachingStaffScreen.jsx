import {
  Flex,
  Heading,
  Image,
  Text,
  Link,
  Button,
  Box,
} from "@chakra-ui/react";
import React from "react";
import MyCarousel from "../../components/MyCarousel/MyCarousel";
import ScreenTemplate from "../../components/ScreenTemplate";
import CadreDidactice from "../../assets/Cadre didactice.pdf";
import { staff } from "../../data/cadreDidactice";

export default function TeachingStaffScreen() {
  const teachers = staff;

  return (
    <ScreenTemplate
      title={"Cadre didactice"}
      sections={[
        {
          component: (
            <MyCarousel
              slides={teachers.map((obj) => (
                <Flex align={"center"} h={"60vh"}>
                  <Box>
                    <Image
                      src={obj.picture}
                      h="35vh"
                      borderRadius={"2vh"}
                      objectFit={"cover"}
                    />
                  </Box>
                  <Box ml={"2vh"}>
                    <Heading fontSize="3vh">{obj.title}</Heading>
                    <Text textAlign={"justify"}>{obj.description}</Text>
                    <Text fontWeight={"bolder"}>{obj.mail}</Text>
                    {(obj.cven || obj.cvro) && (
                      <Box>
                        <Text mt={"2vh"}>Descarcare CV</Text>
                        <Link href={obj.cvro} isExternal>
                          CV-ro
                        </Link>
                        <Link href={obj.cven} isExternal ml={"1vh"}>
                          CV-en
                        </Link>
                      </Box>
                    )}
                  </Box>
                </Flex>
              ))}
            />
          ),
        },
        {
          title: "Lista completa",
          description: "Vizualizare pdf cu cadre didactice",
          component: (
            <Button bgColor={"purple.200"} maxW={"300"}>
              <a href={CadreDidactice} target="_blank" rel="noreferrer">
                Vizualizare listă cadre didactice
              </a>
            </Button>
          ),
        },
      ]}
    />
  );
}
