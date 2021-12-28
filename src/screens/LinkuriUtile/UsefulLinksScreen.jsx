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
} from "@chakra-ui/react";
import { Link } from "@chakra-ui/react";

export default function UsefulLinksScreen() {
  return (
    <ScreenTemplate
      title={"Link-uri utile"}
      sections={[
        {
          component: (
            <Table variant="striped">
              <TableCaption>Sectiunea de Linkuri Utile</TableCaption>
              <Thead>
                <Tr>
                  <Th>Link</Th>
                </Tr>
              </Thead>
              <Tbody>
                <Tr>
                  <Td>
                    <Link href="https://www.facebook.com/woprc" isExternal>
                      Facebook Masterat Ruso
                    </Link>
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
