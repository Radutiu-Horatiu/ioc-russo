import {
  Text,
  Flex,
  UnorderedList,
  ListItem,
  Divider,
} from "@chakra-ui/react";
import React from "react";
import MyCarousel from "../../components/MyCarousel/MyCarousel";
import ScreenTemplate from "../../components/ScreenTemplate";
import { Link } from "react-router-dom";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { infos, listItems } from "../../data/informatiiPrezentareGenerala";

export default function PresentingScreen() {
  const infoItems = listItems;
  const info = infos;
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
            "Programul abordează organizațiile ca sisteme complexe și oferă o perspectivă multinivelară asupra dinamicii și performanței organizaționale la nivel:  ",
          component: (
            <Flex flexDir="column">
              <UnorderedList>
                { infoItems.map((obj) =>  ( 
                  <ListItem>
                    {obj.itemText}
                  </ListItem>
                ))}
              </UnorderedList>
              <br></br>
              <Divider />
            </Flex>
          ),
        },
        {
          title: "",
          description: "",
          component: (
            <Flex flexDir="column">
              { info.map((obj) =>  (
                <Flex flexDir="column" paddingTop="10px">
                  {obj.info}
                  <br></br>
                  <Divider></Divider>
                </Flex>
              ))}
            </Flex>
          ),
        },
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
