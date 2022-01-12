import {
  Text,
  Flex,
  Heading,
  Divider,
  Center,
  List,
  ListItem,
  Slide,
  Button,
  Box,
  useDisclosure,
  ListIcon,
} from "@chakra-ui/react";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import format from "date-fns/format";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import getDay from "date-fns/getDay";
import "react-big-calendar/lib/css/react-big-calendar.css";
import React from "react";
import ScreenTemplate from "../../components/ScreenTemplate";
import { MdCheckCircle } from "react-icons/md";
import { myEvents } from "../../data/admitereEvenimente";
import { myNecessaryDocuments } from "../../data/admitereDocumenteNecesare";
import { information } from "../../data/admitereInformatii";
import { taxe } from "../../data/taxe";

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

const events = myEvents;

function Slider() {
  const { isOpen, onToggle } = useDisclosure();
  const informations = information;

  return (
    <>
      <Button onClick={onToggle}>Click pentru mai multe informatii</Button>
      <Slide direction="bottom" in={isOpen} style={{ zIndex: 10 }}>
        <Box
          p="40px"
          color="dark-grey"
          mt="4"
          bg="#D6BCFA"
          rounded="md"
          shadow="md"
        >
          <Flex direction="column">
            {informations.map((obj) => (
              <Text>{obj.text}</Text>
            ))}
          </Flex>
        </Box>
      </Slide>
      <br></br>
      <Divider></Divider>
    </>
  );
}

export default function ApplicationsScreen() {
  const necessaryDocuments = myNecessaryDocuments;
  const taxes = taxe;
  return (
    <ScreenTemplate
      title={"Admitere"}
      mainText={
        "Aici puteti gasi informatii despre admitere, precum taxe de scolarizare, taxe de admitere, calendarul admiterii"
      }
      sections={[
        {
          title: "Informații admitere",
          description: "",
          component: <Slider></Slider>,
        },
        {
          title: "Documente necesare",
          description:
            "Actele necesare la înscriere (vor fi scanate și încărcate în format PDF) :",
          component: (
            <List spacing={3}>
              {necessaryDocuments.map((obj) => (
                <ListItem>
                  <ListIcon as={MdCheckCircle} color="green.500" />
                  {obj.text}
                </ListItem>
              ))}
              <br></br>
              <Divider></Divider>
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
                  style: { backgroundColor: "#D6BCFA", color: "black" },
                })}
              />
              <br></br>
              <Divider></Divider>
            </Flex>
          ),
        },
        {
          title: "Taxe admitere",
          description: "Taxa de admitere este compusă din: ",
          component: (
            <Flex>
              {taxes.map((obj) => (
                <Text>{obj.taxa}</Text>
              ))}
            </Flex>
          ),
        },
      ]}
    />
  );
}
