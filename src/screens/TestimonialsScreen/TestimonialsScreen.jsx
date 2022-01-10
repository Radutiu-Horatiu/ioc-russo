import {
  Text,
  Flex,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Box,
} from "@chakra-ui/react";
import React from "react";
import MyCarousel from "../../components/MyCarousel/MyCarousel";
import ScreenTemplate from "../../components/ScreenTemplate";
import { myTestimonials } from "../../data/testimoniale";

export default function TestimonialsScreen() {
  const testimonials = myTestimonials;
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <ScreenTemplate
      title={"Testimoniale"}
      sections={[
        {
          component: (
            <Box mt={"7vh"}>
              <MyCarousel
                slides={testimonials.map((obj) => (
                  <Flex
                    align={"center"}
                    flexDir={"column"}
                    justify={"center"}
                    bgColor={"purple.200"}
                    height={"550px"}
                  >
                    {/* Main text */}
                    <Text
                      ml={"40"}
                      mr={"40"}
                      align={"justify"}
                      noOfLines={18}
                      mb={"1vh"}
                    >
                      {obj.displayText ? obj.displayText : obj.fullText}
                    </Text>

                    {/* Read more option */}
                    {obj.displayText && (
                      <Button onClick={onOpen} mt={"1vh"} mb={"2vh"}>
                        Citește mai mult...
                      </Button>
                    )}

                    {/* Subtitle */}
                    <Text
                      fontWeight={"bold"}
                      pos={"absolute"}
                      bottom={"7vh"}
                      right={"10vh"}
                    >
                      {obj.subTitle}
                    </Text>

                    {/* Modal */}
                    {obj.displayText && (
                      <Modal isOpen={isOpen} onClose={onClose}>
                        <ModalOverlay />
                        <ModalContent maxW={"78rem"}>
                          <ModalHeader>{obj.author}</ModalHeader>
                          <ModalCloseButton />
                          <ModalBody>
                            <Text align={"justify"}>{obj.fullText}</Text>
                          </ModalBody>

                          <ModalFooter>
                            <Button
                              colorScheme="purple"
                              mr={3}
                              onClick={onClose}
                            >
                              Închide
                            </Button>
                          </ModalFooter>
                        </ModalContent>
                      </Modal>
                    )}
                  </Flex>
                ))}
              />
            </Box>
          ),
        },
      ]}
    />
  );
}
