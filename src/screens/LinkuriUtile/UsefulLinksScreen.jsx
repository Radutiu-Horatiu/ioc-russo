import { Flex, Heading, Text } from "@chakra-ui/react";
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
} from '@chakra-ui/react'
import { Link } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'

export default function UsefulLinksScreen() {
    return (
        <ScreenTemplate
            title={"Link-uri utile"}
            sections={[
                {
                    component: (
                        <Table variant='striped'>
                            <TableCaption>Sectiunea de Linkuri Utile</TableCaption>
                            <Thead>
                                <Tr>
                                    <Th>Link</Th>
                                </Tr>
                            </Thead>
                            <Tbody>
                                <Tr>
                                    <Td><Link href='https://www.facebook.com/woprc' isExternal>
                                        Facebook Masterat Ruso <ExternalLinkIcon mx='2px' />
                                    </Link></Td>
                                </Tr>
                            </Tbody>
                        </Table>
                    )
                },
            ]}

        />
    );
}
