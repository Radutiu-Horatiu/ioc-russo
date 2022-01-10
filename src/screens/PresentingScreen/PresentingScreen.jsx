import { Text, Flex, UnorderedList, ListItem, Divider } from "@chakra-ui/react";
import React from "react";
import ScreenTemplate from "../../components/ScreenTemplate";
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
            "Programul abordează organizațiile ca sisteme complexe și oferă o perspectivă multinivelară asupra dinamicii și performanței organizaționale la nivel:  ",
          component: (
            <Flex flexDir="column">
              <UnorderedList>
                <ListItem>
                  individual  (prin  cursuri  precum:  Coaching:  metode  și 
                  tehnici,  Training  în  organizaţii, Psihologia
                  personalului), 
                </ListItem>
                <ListItem>
                  de grup (prin cursuri precum: Metode de optimizare a
                  performanței grupurilor, Colaborare  și negociere) și  
                </ListItem>
                <ListItem>
                  organizațional  (prin  cursuri  precum:  Complexitate  și 
                  dinamică  organizațională,  Diagnoză Organizațională, 
                  Dezvoltare  organizațională,  Management strategic, Technology
                  and Society) 
                </ListItem>
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
              <Text lineHeight="7">
                Din  punct  de  vedere  al  conținutului,  programul  masteral 
                oferă  o  <b>abordare interdisciplinară</b>,  reunind  arii 
                precum:  Resurse  Umane,  Dezvoltare  Organizațională, 
                Comportament  Organizațional și Sănătate  Ocupațională și {" "}
                <b>abordează  modalități inovatoare de formare</b>, ce mixează
                documentarea științifică cu învățarea experiențială (prin
                participarea la  simulări  extinse  ale  interacțiunilor  intra 
                și  inter-organizaționale),  învățarea  prin  contactul  direct
                cu practicienii (experți invitați) și cercurile de cercetare
                colaborativă.  
              </Text>
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
              <Text lineHeight="7">
                Aliniat  cu  paradigma  “scientist-practitioner”,  programul 
                dezvoltă  competențe  de  cercetare și oferă masteranzilor
                posibilitatea{" "}
                <b>
                  implicării directe în proiectele de cercetare și  dezvoltare 
                  organizațională ale Centrului de Cercetare  în  Psihologia 
                  Muncii  și  Organizaționale{" "}
                </b>{" "}
                –{" "}
                <a href="http://woprc.ro" style={{ color: "purple" }}>
                  WOPRC{" "}
                </a>
                , precum și oportunități de practică în domeniu prin
                parteneriate cu companii de consultanță în resurse umane și cu
                departamentele de resurse  umane din companii multinaționale sau
                naționale.  
              </Text>
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
              <Text lineHeight="7">
                În  plus,  prin  construirea  organizației  <b>Alumni</b>, 
                programul  masteral  urmărește  crearea  unei  comunități  de 
                profesioniști  (studenți,  cercetărori  și  practicieni)  care 
                să  faciliteze  dezvoltarea  profesională  continuă,  precum 
                și  identificarea  oportunităților  de  angajare  și  promovare
                în carieră. 
              </Text>
              <br></br>
              <Divider></Divider>
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
