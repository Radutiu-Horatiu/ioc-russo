import {
  Text,
  Flex,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Heading,
  Divider,
  Center,
  List,
  ListItem,
  Slide,
  Button,
  Box,
  useDisclosure,
} from "@chakra-ui/react";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import format from "date-fns/format";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import getDay from "date-fns/getDay";
import "react-big-calendar/lib/css/react-big-calendar.css";
import React from "react";
import ScreenTemplate from "../../components/ScreenTemplate";
import { Link } from "react-router-dom";
import { CheckIcon } from '@chakra-ui/icons'


const locales = {
  ro: require("date-fns/locale/ro"),
};

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});

const events = [
  {
    title: "Depunere dosar",
    allDay: true,
    start: new Date(2022, 0, 3),
    end: new Date(2022, 0, 8),
  },
  {
    title: "Achitare taxa",
    start: new Date(2022, 0, 7),
    end: new Date(2022, 0, 7),
  },
  {
    title: "Admitere",
    start: new Date(2022, 0, 12),
    end: new Date(2022, 0, 12),
  },
  {
    title: "Afisare rezultate",
    start: new Date(2022, 0, 19),
    end: new Date(2022, 0, 19),
  },
];

function Slider() {
  const { isOpen, onToggle } = useDisclosure()

  return (
    <>
      <Button onClick={onToggle}>Click pentru mai multe informatii</Button>
      <Slide direction='bottom' in={isOpen} style={{ zIndex: 10 }}>
        <Box
          p='40px'
          color='white'
          mt='4'
          bg='teal.500'
          rounded='md'
          shadow='md'
        >
            <Flex direction="column">
              <Text>
              Date de contact pe perioada admiterii 2021:
              </Text>
              <Text>
                Oficiul permanent al admiterii - 0264405337 interval 9.00-13.00
              </Text>
              <Text>
                email: admitere.psiedu@ubbcluj.ro
              </Text>
              <Text>
                Psihologie LR- tel.0752587616
              </Text>
              <Text>
                Psihopedagogie Speciala, master MCA, TLA  - tel. 0752478420
              </Text>
              <Text>
                Pedagogie, PIPP LR, Master Consiliere Scolara si Asistenta Psihopedagogica. Management Educational - tel. 0752563311
              </Text>
              <Text>
                Linia Germana (licenta si master), Management Curicular, Designer Instructional  - tel. 0751627758
              </Text>
              <Text>
                Psihologie LM, Psihopedagogie Speciala LM, master Consultanta si interventie Psihologica  - tel. 0750723905- tel. 0751835721
              </Text>
              <Text>
                PIPP LM, master Metode si practici alternative in învătământul primar si prescolar LM, Strategii de învățare eficientă (Odorheiu-Secuiesc) LM
              </Text>
              <Text>
                Mastere Psihologie - tel. 0751330993
              </Text>
              <Text>
                Probleme legate de aplicatia de admitere online linia romana - tel.  0752618909 interval 9.00-13.00
              </Text>
              <Text>
                Probleme legate de aplicatia de admitere online linia maghiara - tel.  0752434337 interval 9.00-13.00
              </Text>
              <Text>
                Casierie Sindicatelor 7 - 0264405300, int.5516
              </Text>
              <Text>
                Modul pedagogic (DPPD) tel. 0264597000
              </Text>
              <Text>
                Casierie Sindicatelor - tel.0264405300 int.5516
              </Text>
              <Text>
                Candidatii care au glisat de la taxa la buget pot cere returnarea taxei dupa 1 octombrie 2021.
              </Text>
            </Flex>
        </Box>
      </Slide>
    </>
  )
}

export default function ApplicationsScreen() {
  return (
    <ScreenTemplate
      title={"Admitere"}
      mainText={"Aici puteti gasi informatii despre admitere, precum taxe de scolarizare, taxe de admitere, calendarul admiterii"}
      sections={[
        {
          title: "Informații admitere",
          description:
            "",
          component: (
            <Slider></Slider>
          ),
        },
        {
          title: "Documente necesare",
          description:
            "Actele necesare la înscriere (vor fi scanate și încărcate în format PDF) :",
          component: (
            <List spacing={3}>
              <ListItem>
               <CheckIcon />
               Fișa tip de înscriere, semnată (generată de platforma de admitere)
              </ListItem>
              <ListItem>
                <CheckIcon/>
                Diploma de bacalaureat și foaia matricolă (pentru diplomele însoțite de foaia matricolă) sau diploma echivalentă, diploma de licență și suplimentul de diplomă, sau adeverința de licență (doar pentru absolvenții promoției curente, cărora nu le-a fost încă eliberată diploma de licență până la data înscrierii). Cetățenii străini UE vor încărca originalul însoțit de traducerea legalizată după actele de studii, însoțită de echivalarea studiilor
              </ListItem>
              <ListItem>
                <CheckIcon/>
                Certificatul de naștere (față-verso, daca are cnp-ul pe verso)
              </ListItem>
              <ListItem>
                <CheckIcon/>
                Cartea de identitate Cetățenii străini UE vor încărca pașaportul, dacă e cazul și viza de ședere
              </ListItem>
              <ListItem>
                <CheckIcon/>
                Adeverință medicală
              </ListItem>
              <ListItem>
                <Text>
                <CheckIcon/>
                Certificat de competență lingvistică nivel minim B1, în termen de valabilitate, sau certificate sau atestate lingvistice acceptate conform <Link href='https://psiedu.ubbcluj.ro/51-competenta-lingvistica' color='teal.500'>listei</Link>.
                </Text>
              </ListItem>
              <ListItem>
                <CheckIcon/>
                Alte documente menționate la cazurile particulare (adeverința în baza căreia se solicită scutirea de taxă, cererea de loc de rrom, loc de protecție socială, adeverințe doveditoare a aparteneței la categoria de rrom sau protecție socială, etc.)
              </ListItem>
            </List>
          ),
        },
        {
          title: "",
          description: "",
          component: (
            <Flex flexDir="column" w="50vw">
              <Heading fontSize={"24"}>Calendarul admiterii</Heading>
              <Calendar
                localizer={localizer}
                events={events}
                startAccessor="start"
                endAccessor="end"
                style={{ height: 700, width: 600, margin: "30px" }}
                eventPropGetter={(event, start, end, isSelected) => ({
                  event,
                  start,
                  end,
                  isSelected,
                  style: { backgroundColor: "purple" },
                })}
              />
            </Flex>
          ),
        },
        {
          title: "Taxe admitere",
          description:
            "Taxa de admitere este compusă din: ",
          component: (
            <Flex>
              <Text paddingRight="10px">
                Taxa de înscriere (200 lei) se achită pentru fiecare specializare. Angajaţii şi copiii angajaţilor UBB, ai Bibliotecii Centrale Universitare, Grădinii Botanice, restaurantelor şi  cafeteriilor Universităţii, precum şi copiii personalului didactic şi didactic auxiliar în activitate sau pensionari din instituţiile de învăţământ universitar şi preuniversitar sunt scutiţi de  plata taxei de înscriere numai pentru o singură specializare. La înscriere candidatul este obligat să declare dacă s-a mai înscris la o altă facultate/specializare din Universitatea "Babeş–Bolyai" sau la o altă instituţie de învăţământ superior.  
              </Text>
              <Center height='200px'>
                <Divider orientation='vertical' />
              </Center>
              <Text paddingLeft="10px">
                Taxa de procesare  (în cuantum de 50 lei), se percepe pentru aspectele organizatorice si de comunicare, inclusiv pentru eventuala preînscriere, nu este supusă scutirilor, degrevărilor şi nu este returnabilă. Fac excepţie candidaţii care sunt orfani de ambii părinţi, provin  din centrele de plasament , care sunt scutiţi de la plata taxei de admitere (formată din taxa de înscriere şi taxa de procesare. Taxa de admitere se achită on line pentru fiecare specializare la care se înscrie candidatul (Psihologie, Psihopedagogie specială, etc), dar nu se achită decat o singură dată dacă în cadrul aceleiași specializări se optează și pentru „cu frecvență” și pentru „la distanță”. 
              </Text>
            </Flex>
          ),
        },
      ]}
    />
  );
}
