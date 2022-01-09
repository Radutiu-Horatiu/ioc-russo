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

const links = [
  {
    link: "http://psychology.psiedu.ubbcluj.ro/ro/",
    description: "Departamentul de Psihologie, UBB"
  },
  {
    link: "https://psiedu.ubbcluj.ro/index.php",
    description: "Facultatea de psihologie şi Ştiinţe ale educaţiei, Universitatea Babeş-Bolyai"
  },
  {
    link: "https://www.ubbcluj.ro/ro/",
    description: "Universitatea Babeş-Bolyai"
  },
  {
    link: "http://www.eawop.org/",
    description: "European Association of Work and Organizational Psychology"
  },
  {
    link: "https://www.siop.org/",
    description: "Society for Industrial and Organizational Psychology"
  },
  {
    link: "https://iaapsy.org/divisions/division1/",
    description: "International Association of Applied Psychology - Division 1: Work & Organizational Psychology"
  },
  {
    link: "http://aom.org/",
    description: "Academy of Management"
  },
  {
    link: "http://www.apio.ro/",
    description: "Asociaţia de Psihologie Industrială şi Organizaţională"
  },
  {
    link: "https://www.facebook.com/woprc",
    description: "Facebook Masterat Psihologia Resurselor Umane şi Sănătate Organizaţională"
  },
];

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
                {links.map((obj) => (
                  <Tr>
                    <Td>
                      <Link href={obj.link} isExternal>
                        {obj.description}
                      </Link>
                    </Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>
          ),
        },
      ]}
    />
  );
}
