import { Flex, Heading, Text } from "@chakra-ui/react";
import React from "react";

export default function ScreenTemplate({ title, mainText, sections }) {
  return (
    <Flex
      flexDir="column"
      w={"100%"}
      ml={"5vh"}
      h={"98vh"}
      overflowY={"scroll"}
    >
      <Heading size="3xl" mb={"1vh"}>
        {title}
      </Heading>
      <Heading size="1xl" mb={"3vh"}>
        {mainText}
      </Heading>

      {/* Section content */}
      {sections.map((obj, i) => (
        <Flex flexDir="column" key={i} mb={"5vh"}>
          <Text fontWeight={"bold"}>{obj.title}</Text>
          <Text mb={"1vh"}>{obj.description}</Text>
          {obj.component}
        </Flex>
      ))}
    </Flex>
  );
}
