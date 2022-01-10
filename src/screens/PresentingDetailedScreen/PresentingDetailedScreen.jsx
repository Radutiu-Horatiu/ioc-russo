import { Flex } from "@chakra-ui/react";
import React from "react";
import ScreenTemplate from "../../components/ScreenTemplate";
import { List, ListItem, ListIcon } from "@chakra-ui/react";
import { MdMenuBook } from "react-icons/md";
import { mySemesters } from "../../data/prezentareDetaliataSemestre";

export default function PresentingDetailedScreen() {
  const subText = "Lista disciplinelor studiate în cadrul masteratului";
  const semestre = mySemesters;
  return (
    <ScreenTemplate
      title={"Prezentare detaliata"}
      mainText={subText}
      sections={semestre.map((s) => {
        return {
          title: s.titlu,
          // description: s.descriere,
          component: (
            <Flex>
              <List spacing={6} my={"5vh"}>
                {s.materii.map((m) => {
                  return (
                    <ListItem>
                      <ListIcon as={MdMenuBook} color="green.500" />
                      {m}
                    </ListItem>
                  );
                })}
              </List>
            </Flex>
          ),
        };
      })}
    />
  );
}
