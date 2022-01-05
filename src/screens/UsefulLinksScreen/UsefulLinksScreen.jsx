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
                    <Link href="http://psychology.psiedu.ubbcluj.ro/ro/" isExternal>
                      Departamentul de Psihologie, UBB
                    </Link>
                  </Td>
                </Tr>
                <Tr>
                  <Td>
                    <Link href="https://psiedu.ubbcluj.ro/index.php" isExternal>
                      Facultatea de psihologie şi Ştiinţe ale educaţiei, Universitatea Babeş-Bolyai
                    </Link>
                  </Td>
                </Tr>
                <Tr>
                  <Td>
                    <Link href="https://www.ubbcluj.ro/ro/" isExternal>
                      Universitatea Babeş-Bolyai
                    </Link>
                  </Td>
                </Tr>
                <Tr>
                  <Td>
                    <Link href="http://www.eawop.org/" isExternal>
                      European Association of Work and Organizational Psychology
                    </Link>
                  </Td>
                </Tr>
                <Tr>
                  <Td>
                    <Link href="https://www.siop.org/" isExternal>
                      Society for Industrial and Organizational Psychology
                    </Link>
                  </Td>
                </Tr>
                <Tr>
                  <Td>
                    <Link href="https://iaapsy.org/divisions/division1/" isExternal>
                      International Association of Applied Psychology - Division 1: Work &amp; Organizational Psychology
                    </Link>
                  </Td>
                </Tr>
                <Tr>
                  <Td>
                    <Link href="http://aom.org/" isExternal>
                      Academy of Management
                    </Link>
                  </Td>
                </Tr>
                <Tr>
                  <Td>
                    <Link href="http://www.apio.ro/" isExternal>
                      Asociaţia de Psihologie Industrială şi Organizaţională
                    </Link>
                  </Td>
                </Tr>
                <Tr>
                  <Td>
                    <Link href="https://www.facebook.com/woprc" isExternal>
                      Facebook Masterat Psihologia Resurselor Umane şi Sănătate Organizaţională
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
