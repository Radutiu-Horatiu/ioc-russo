import { Flex, Image, Box, Heading } from "@chakra-ui/react";
import React from "react";
import MyCarousel from "../../components/MyCarousel/MyCarousel";
import ScreenTemplate from "../../components/ScreenTemplate";
import { List, ListItem, ListIcon } from "@chakra-ui/react";
import { MdCheckCircle } from "react-icons/md";
import { myOpportunities } from "../../data/oportunitatiTexte";
import { myLogos } from "../../data/oportunitatiPoze";

export default function OpportunitiesScreen() {
  const oportunities = myOpportunities;
  const logos = myLogos;
  const firme = [];
  for (let index = 0; index < logos.length; index++) {
    firme.push(
      <Flex
        align={"center"}
        justify={"center"}
        p={"5vh"}
        bgColor={"purple.200"}
      >
        <Image
          src={logos[index][`LogoFirme${index + 1}`]}
          h="25vh"
          objectFit={"contain"}
        />
      </Flex>
    );
  }
  return (
    <ScreenTemplate
      title={"Oportunitati profesionale"}
      sections={[
        {
          component: (
            <Box>
              <List spacing={6} fontSize={20} my={"5vh"}>
                {oportunities.map((o) => {
                  return (
                    <ListItem>
                      <ListIcon as={MdCheckCircle} color="green.500" />
                      {o.text}
                    </ListItem>
                  );
                })}
              </List>

              {/* Carousel with sigle */}
              <Heading mb={"1vh"}>Firme partenere</Heading>
              <MyCarousel slides={firme} />
            </Box>
          ),
        },
      ]}
    />
  );
}
