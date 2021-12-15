import { Text } from "@chakra-ui/react";
import React from "react";
import ScreenTemplate from "../../components/ScreenTemplate";
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
} from "@chakra-ui/react";

export default function UsefulLinksScreen() {
  return (
    <ScreenTemplate
      title={"Newsletter"}
      sections={[
        {
          component: (
            <Table variant="striped">
              <TableCaption>Newsletter</TableCaption>
              <Thead>
                <Tr>
                  <Th>Link</Th>
                </Tr>
              </Thead>
              <Tbody>
                <Tr>
                  <Td>
                    <Text>ceva</Text>
                  </Td>
                </Tr>
              </Tbody>
            </Table>
          ),
        },
      ]}
    />
  );
}
