import { Text, Flex, Image } from "@chakra-ui/react";
import React from "react";
import LOGO from "../../assets/russo_logo.png";
import MyCarousel from "../../components/MyCarousel/MyCarousel";
import ScreenTemplate from "../../components/ScreenTemplate";

export default function TestimonialsScreen() {
	return (
		<ScreenTemplate
              title={"Testimoniale"}
              sections={[
                {
                  component: (
                    <MyCarousel
                      slides={[
                        // 1
                        <Flex
                          align={"center"}
                          justify={"center"}
                          p={"5vh"}
                          bgColor={"purple.200"}
                        >
                          <Image src={LOGO} h="50vh" objectFit={"cover"} />
                        </Flex>,
                        // 2
                        <Flex align={"center"} justify={"center"}>
                          <Image src={LOGO} h="50vh" objectFit={"cover"} />
                        </Flex>,
                        // 3
                        <Flex align={"center"} justify={"center"}>
                          <Image src={LOGO} h="50vh" objectFit={"cover"} />
                        </Flex>,
                      ]}
                    />
                  ),
                },
              ]}
            />
          );
}