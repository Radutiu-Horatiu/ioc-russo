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
    Text,
    Flex,
    Heading
} from '@chakra-ui/react'

export default function EventsScreen() {
    return (
        <ScreenTemplate
            title={"Noutăți & Evenimente"}
            mainText={""}
            sections={[
                {
                    component: (
                        <Flex alignItems={"center"} justifyContent={"center"}>
                            <Flex flexDir="row" w="100vh">
                                <Flex flexDir="column" w="60vh" marginRight="50">
                                    <Heading fontSize={"24"}>Noutăți</Heading>
                                    <br />
                                    <Table variant='striped'>
                                        <TableCaption>Secțiunea de Noutăți</TableCaption>
                                        <Thead>
                                            <Tr>
                                                <Th>De interes pentru</Th>
                                                <Th>Anunț</Th>
                                            </Tr>
                                        </Thead>
                                        <Tbody>
                                            <Tr>
                                                <Td>Student</Td>
                                                <Td>A apărut structura anului universitar</Td>
                                            </Tr>
                                            <Tr>
                                                <Td>Student</Td>
                                                <Td>A apărut orarul semestrului 2</Td>
                                            </Tr>
                                            <Tr>
                                                <Td>Cadru didactic</Td>
                                                <Td>Au apărut listele cu studenții pentru fiecare specializare</Td>
                                            </Tr>
                                        </Tbody>
                                    </Table>
                                </Flex>
                                <Flex flexDir="column" w="60vh">
                                    <Heading fontSize={"24"}>Evenimente</Heading>
                                    <br />
                                    <Text>Aici se va afisa calendarul evenimentelor...</Text>
                                </Flex>
                            </Flex>
                        </Flex>


                    )
                },
            ]}
        />
    );
}
