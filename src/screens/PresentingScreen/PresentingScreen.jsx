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
  Td, } 
from "@chakra-ui/react";
import React from "react";
import MyCarousel from "../../components/MyCarousel/MyCarousel";
import ScreenTemplate from "../../components/ScreenTemplate";
import { Link } from "react-router-dom";
import { ExternalLinkIcon } from '@chakra-ui/icons'

export default function PresentingScreen() {
  return (
    <ScreenTemplate
      title={"Prezentare generală"}
      mainText={"Programul  de  masterat  Psihologia  Resurselor  Umane  şi  Sănătate Organizaţională  este  conceput pentru a oferi o fundamentare ştiinţifică în domeniul psihologiei aplicate în context industrial-organizaţional și urmărește dezvoltarea competențelor de diagnoză, evaluare și  intervenție  în organizații. "}
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
        {
          title: "Title",
          description: "Description",
          component: (
            <MyCarousel
              slides={[
                // 1
                <Flex
                  align={"center"}
                  justify={"center"}
                  height={"300px"}
                  // p={"5vh"}
                  // bgColor={"purple.200"}
                >
                  {/* <Image src={LOGO} h="50vh" objectFit={"cover"} /> */}
                  <Text>Ce face programul</Text>
                </Flex>,
                // 2
                <Flex align={"center"} justify={"center"} height={"300px"}>
                  {/* <Image src={LOGO} h="50vh" objectFit={"cover"} /> */}
                  <Text>Principiile programului</Text>
                </Flex>,
                // 3
                <Flex align={"center"} justify={"center"} height={"300px"}>
                  {/* <Image src={LOGO} h="50vh" objectFit={"cover"} /> */}
                  <Text>Taxe scolarizare</Text>
                </Flex>,
              ]}
            />
          ),
        },
        {
          title: "Taxe scolarizare",
          description: "",
          component: (
            <Link href='http://www.ubbcluj.ro/ro/taxe/taxe_de_scolarizare' isExternal>
              Detalii taxe scolarizare <ExternalLinkIcon mx='2px' />
            </Link>
          ),
        },
        {
          title: "",
          description: "",
          component: (
            <Table variant="simple">
              <Thead>
                <Tr>
                  <Th>Nivel</Th>
                  <Th>Specializarea</Th>
                  <Th isNumeric>Total</Th>
                  <Th isNumeric>Rata I</Th>
                  <Th isNumeric>Rata II</Th>
                  <Th isNumeric>Rata III</Th>
                  <Th isNumeric>Rata IV</Th>
                </Tr>
              </Thead>
              <Tbody>
                <Tr>
                  <Td>Licenta</Td>
                  <Td>Psihopedagogie Speciala</Td>
                  <Td isNumeric>2900</Td>
                  <Td isNumeric>725</Td>
                  <Td isNumeric>725</Td>
                  <Td isNumeric>725</Td>
                  <Td isNumeric>725</Td>
                </Tr>
                <Tr>
                  <Td>Licenta</Td>
                  <Td>Pedagogie</Td>
                  <Td isNumeric>2.900</Td>
                  <Td isNumeric>725</Td>
                  <Td isNumeric>725</Td>
                  <Td isNumeric>725</Td>
                  <Td isNumeric>725</Td>
                </Tr>
                <Tr>
                  <Td>Licenta</Td>
                  <Td>PIPP</Td>
                  <Td isNumeric>2.900</Td>
                  <Td isNumeric>725</Td>
                  <Td isNumeric>725</Td>
                  <Td isNumeric>725</Td>
                  <Td isNumeric>725</Td>
                </Tr>
                <Tr>
                  <Td>Licenta</Td>
                  <Td>PIPP - Resita</Td>
                  <Td isNumeric>2.400</Td>
                  <Td isNumeric>600</Td>
                  <Td isNumeric>600</Td>
                  <Td isNumeric>600</Td>
                  <Td isNumeric>600</Td>
                </Tr>
                <Tr>
                  <Td>Master</Td>
                  <Td>1Psihologie Clinica, Consiliere Psihologica si Psihoterapie 2Tehnici Psihologice de Control al Comportamentului si Dezvoltarea Potentialului Uman</Td>
                  <Td isNumeric>3.600</Td>
                  <Td isNumeric>900</Td>
                  <Td isNumeric>900</Td>
                  <Td isNumeric>900</Td>
                  <Td isNumeric>900</Td>
                </Tr>
                <Tr>
                  <Td>Master</Td>
                  <Td>1Psihologia Resurselor Umane si Sanatate Organizationala
                    2Consiliere si Internentie Psihologica in Dezvoltarea umana
                    3Psihologia Sanatatii Publice si Clinice 4Psihologie judiciara
                    5Consultanta si Interventie Psihologica (l.maghiara)</Td>
                  <Td isNumeric>3400</Td>
                  <Td isNumeric>850</Td>
                  <Td isNumeric>850</Td>
                  <Td isNumeric>850</Td>
                  <Td isNumeric>850</Td>
                </Tr>
                <Tr>
                  <Td>Master</Td>
                  <Td>1Management, consiliere si asistenta psihopedagogica in institutiile inclusive 2Terapia limbajului si audiologie educationala
                    3Metode si practici alternative in invatamantul primar si prescolar (l.maghiara)
                    4Consiliere scolara si asistenta psihopedagogica (IF si IFR)
                    5Designer Instructional
                    6Management Curricular (IF si IFR)
                    7Management educational
                    8 Didactica limbii si literaturii germane, culturii si civilizatiei germane a Europei Centrale si de Sud Est (l. germana);
                    9 Strategii de invatare eficienta (Odorheiu-Secuiesc l.maghiara)</Td>
                  <Td isNumeric>3.000</Td>
                  <Td isNumeric>750</Td>
                  <Td isNumeric>750</Td>
                  <Td isNumeric>750</Td>
                  <Td isNumeric>750</Td>
                </Tr>
                <Tr>
                  <Td>Master</Td>
                  <Td>1Management educational - Resita</Td>
                  <Td isNumeric>2.700</Td>
                  <Td isNumeric>675</Td>
                  <Td isNumeric>675</Td>
                  <Td isNumeric>675</Td>
                  <Td isNumeric>675</Td>
                </Tr>
                <Tr>
                  <Td>Conversie</Td>
                  <Td>Program de conversie profesională - Pedagogia Invatamantului Primar si Prescolar</Td>
                  <Td isNumeric>2.900</Td>
                  <Td isNumeric>725</Td>
                  <Td isNumeric>725</Td>
                  <Td isNumeric>725</Td>
                  <Td isNumeric>725</Td>
                </Tr>
                <Tr>
                  <Td>Licenta</Td>
                  <Td>Program de conversie profesională - Pedagogia Invatamantului Primar si Prescolar - Resita</Td>
                  <Td isNumeric>2.400</Td>
                  <Td isNumeric>600</Td>
                  <Td isNumeric>600</Td>
                  <Td isNumeric>600</Td>
                  <Td isNumeric>600</Td>
                </Tr>
              </Tbody>
            </Table>
          ),
        },
      ]}
    />
  );
}
