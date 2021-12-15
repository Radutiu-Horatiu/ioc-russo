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

export default function EventsScreen() {
    return (
        <ScreenTemplate
            title={"Evenimente"}
            mainText={"Aici va aparea calendarul evenimentelor..."}
            sections={[
                {
                    component: (
                        <Table variant='striped'>
                            <TableCaption>Sectiunea de Noutati</TableCaption>
                            <Thead>
                                <Tr>
                                    <Th>De interes pentru</Th>
                                    <Th>Anunt</Th>
                                </Tr>
                            </Thead>
                            <Tbody>
                                <Tr>
                                    <Td>Student</Td>
                                    <Td>A aparut structura anului universitar</Td>
                                </Tr>
                                <Tr>
                                    <Td>Student</Td>
                                    <Td>A aparut orarul semestrului 2</Td>
                                </Tr>
                                <Tr>
                                    <Td>Cadru didactic</Td>
                                    <Td>Au aparut listele cu studentii pentru fiecare specializare</Td>
                                </Tr>
                            </Tbody>
                        </Table>
                    )
                },
            ]}
        />
    );
}
