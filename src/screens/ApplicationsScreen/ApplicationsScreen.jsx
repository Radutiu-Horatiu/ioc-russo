import {
  Text,
  Flex,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Button,
} from "@chakra-ui/react";
import React from "react";
import ScreenTemplate from "../../components/ScreenTemplate";

export default function ApplicationsScreen() {
  return (
    <ScreenTemplate
      title={"Admitere"}
      mainText={"Lorem ipsum dolor sit amet, consectetur adipiscing elit"}
      sections={[
        {
          title: "Informații admitere",
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
          title: "Calendar",
          description: "Aici puteti vedea calendarul admiterii",
          component: (
            <Flex height={"300px"} bgColor={"purple.200"}>
              <Text>Componenta de calendar</Text>
            </Flex>
          ),
        },
        {
          title: "Documente necesare",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
          component: (
            <Button bgColor={"purple.200"} size="lg" width="300px">
              Descarca documente
            </Button>
          ),
        },
        {
          title: "Rezultate admitere",
          description: "",
          component: (
            <Table variant="simple">
              <Thead>
                <Tr>
                  <Th>Student</Th>
                  <Th isNumeric>Nota</Th>
                </Tr>
              </Thead>
              <Tbody>
                <Tr>
                  <Td>Elon Musk</Td>
                  <Td isNumeric>10</Td>
                </Tr>
                <Tr>
                  <Td>Jeff Bezos</Td>
                  <Td isNumeric>9</Td>
                </Tr>
                <Tr>
                  <Td>Bill Gates</Td>
                  <Td isNumeric>8</Td>
                </Tr>
              </Tbody>
            </Table>
          ),
        },
      ]}
    />
  );
}
