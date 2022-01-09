import React from "react";
import ScreenTemplate from "../../components/ScreenTemplate";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption,
  Flex,
  Heading,
} from "@chakra-ui/react";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import format from "date-fns/format";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import getDay from "date-fns/getDay";
import "react-big-calendar/lib/css/react-big-calendar.css";

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
    title: "Modular",
    allDay: true,
    start: new Date(2022, 0, 3),
    end: new Date(2022, 0, 8),
  },
  {
    title: "Meeting RUSO",
    start: new Date(2022, 0, 7),
    end: new Date(2022, 0, 7),
  },
  {
    title: "Prezentare finala RUSO",
    start: new Date(2022, 0, 12),
    end: new Date(2022, 0, 12),
  },
  {
    title: "Eveniment master RUSO",
    start: new Date(2022, 1, 28),
    end: new Date(2022, 1, 28),
  },
];

const news = [
  { description: "A apărut structura anului universitar" },
  { description: "A apărut lista cu studenții care au primit bursă" },
  { description: "A apărut organigrama anului universitar 2021/2022" },
  { description: "Ofertă de job" },
  { description: "A apărut modalitatea de evaluare a studenților de la master anul 1" },
  { description: "A apărut modalitatea de evaluare a studenților de la master anul 2" },
  { description: "Internship" },
  { description: "Internship în străinătate" },
  { description: "Au apărut listele cu studenții pentru fiecare specializare" },
];

export default function EventsScreen() {
  return (
    <ScreenTemplate
      title={"Noutăți & Evenimente"}
      mainText={""}
      sections={[
        {
          component: (
            <Flex alignItems={"center"}>
              <Flex flexDir="row" w="100vh">
                <Flex flexDir="column" w="50vw" marginRight="50">
                  <Heading fontSize={"24"}>Noutăți</Heading>
                  <br />
                  <Table variant="striped" style={{ height: 700, width: 600 }}>
                    <TableCaption>Secțiunea de Noutăți</TableCaption>
                    <Thead>
                      <Tr>
                        <Th>Anunț</Th>
                      </Tr>
                    </Thead>
                    <Tbody>
                      {news.map((obj) => (
                        <Tr>
                          <Td>{obj.description}</Td>
                        </Tr>
                      ))}
                    </Tbody>
                  </Table>
                </Flex>
                <Flex flexDir="column" w="50vw">
                  <Heading fontSize={"24"}>Evenimente</Heading>
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
                      style: { backgroundColor: "#D6BCFA" },
                    })}
                  />
                </Flex>
              </Flex>
            </Flex>
          ),
        },
      ]}
    />
  );
}
