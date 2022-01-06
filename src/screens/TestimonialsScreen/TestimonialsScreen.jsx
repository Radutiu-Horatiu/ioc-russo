import { Text, Flex, Button, VStack } from "@chakra-ui/react";
import React from "react";
import MyCarousel from "../../components/MyCarousel/MyCarousel";
import ScreenTemplate from "../../components/ScreenTemplate";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from "@chakra-ui/react";

export default function TestimonialsScreen() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const testimonials = [
    {
      displayText: `„Utilitatea şi valoarea masterului de Psihologia Resurselor
      Umane şi Sănătate Organizaţională am înţeles-o mai ales când
      am ajuns în câmpul muncii. Ca student, masterul mi-a deschis
      oportunitatea de a aprofunda subiecte care m-au atras încă
      din timpul facultăţii, cum ar fi coaching, training,
      consiliere, dezvoltare organizaţională. Chiar dacă în acel
      moment nu aş fi ştiut să spun la ce îmi vor folosi aceste
      discipline pe viitor, acum pot spune că au fost esenţiale
      pentru a putea să-mi desfăşor activitatea de Trainer si
      Consultant într-o companie de Resurse Umane. Am înţeles că
      un bagaj teoretic bun este baza unei bune practici. Şi mai
      mult decât bagaj teoretic, masterul RUSO, m-a pregătit
      pentru ceea ce înseamnă un mediu organizaţional în zilele
      noastre: procese de grup, planificare si auto-organizare,
      interacţiuni 1 la 1`,
      fullText: `leadership, provocări în medii şi
      echipe diverse. Toate acestea au fost studiate dar si
      experimentate de către mine la masterul RUSO, mai ales
      datorită proiectelor de grup care uneori m-au scos din zona
      de confort. Fără acest Master, probabil ar fi fost mai greu
      să înţeleg mediul de muncă de astăzi, in dinamica şi
      diversitatea lui, şi as fi avut mai puţină încredere în
      profesionalismul muncii mele.Utilitatea şi valoarea masterului de Psihologia Resurselor
      Umane şi Sănătate Organizaţională am înţeles-o mai ales când
      am ajuns în câmpul muncii. Ca student, masterul mi-a deschis
      oportunitatea de a aprofunda subiecte care m-au atras încă
      din timpul facultăţii, cum ar fi coaching, training,
      consiliere, dezvoltare organizaţională. Chiar dacă în acel
      moment nu aş fi ştiut să spun la ce îmi vor folosi aceste
      discipline pe viitor, acum pot spune că au fost esenţiale
      pentru a putea să-mi desfăşor activitatea de Trainer si
      Consultant într-o companie de Resurse Umane. Am înţeles că
      un bagaj teoretic bun este baza unei bune practici. Şi mai
      mult decât bagaj teoretic, masterul RUSO, m-a pregătit
      pentru ceea ce înseamnă un mediu organizaţional în zilele
      noastre: procese de grup, planificare si auto-organizare,
      interacţiuni 1 la 1, leadership, provocări în medii şi
      echipe diverse. Toate acestea au fost studiate dar si
      experimentate de către mine la masterul RUSO, mai ales
      datorită proiectelor de grup care uneori m-au scos din zona
      de confort. Fără acest Master, probabil ar fi fost mai greu
      să înţeleg mediul de muncă de astăzi, in dinamica şi
      diversitatea lui, şi as fi avut mai puţină încredere în
      profesionalismul muncii mele.Utilitatea şi valoarea masterului de Psihologia Resurselor
      Umane şi Sănătate Organizaţională am înţeles-o mai ales când
      am ajuns în câmpul muncii. Ca student, masterul mi-a deschis
      oportunitatea de a aprofunda subiecte care m-au atras încă
      din timpul facultăţii, cum ar fi coaching, training,
      consiliere, dezvoltare organizaţională. Chiar dacă în acel
      moment nu aş fi ştiut să spun la ce îmi vor folosi aceste
      discipline pe viitor, acum pot spune că au fost esenţiale
      pentru a putea să-mi desfăşor activitatea de Trainer si
      Consultant într-o companie de Resurse Umane. Am înţeles că
      un bagaj teoretic bun este baza unei bune practici. Şi mai
      mult decât bagaj teoretic, masterul RUSO, m-a pregătit
      pentru ceea ce înseamnă un mediu organizaţional în zilele
      noastre: procese de grup, planificare si auto-organizare,
      interacţiuni 1 la 1, leadership, provocări în medii şi
      echipe diverse. Toate acestea au fost studiate dar si
      experimentate de către mine la masterul RUSO, mai ales
      datorită proiectelor de grup care uneori m-au scos din zona
      de confort. Fără acest Master, probabil ar fi fost mai greu
      să înţeleg mediul de muncă de astăzi, in dinamica şi
      diversitatea lui, şi as fi avut mai puţină încredere în
      profesionalismul muncii mele.” `,
      subTitle: `(Andreea Munteanu, coach
        Brussels, Belgia)`,
      author: `Testimonial: Bogdan Corduneanu, HR Manager`,
    },
    {
      fullText: `leadership, provocări în medii şi
      echipe diverse. Toate acestea au fost studiate dar si
      experimentate de către mine la masterul RUSO, mai ales
      datorită proiectelor de grup care uneori m-au scos din zona
      de confort. Fără acest Master, probabil ar fi fost mai greu
      să înţeleg mediul de muncă de astăzi, in dinamica şi
      dive`,
      subTitle: `(Andreea Munteanu, coach
        Brussels, Belgia)`,
      author: `Testimonial: Bogdan Corduneanu, HR Manager`,
    },
  ];

  return (
    <ScreenTemplate
      title={"Testimoniale"}
      sections={[
        {
          component: (
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
                    noOfLines={15}
                    mb={"1vh"}
                  >
                    {obj.displayText ? obj.displayText : obj.fullText}
                  </Text>

                  {/* Read more option */}
                  {obj.displayText && (
                    <Button onClick={onOpen} mt={"1vh"} mb={"2vh"}>
                      Citește mai mult
                    </Button>
                  )}

                  {/* Subtitle */}
                  <Text
                    ml={"40"}
                    mr={"40"}
                    align={"justify"}
                    fontWeight={"bold"}
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
                          <Button colorScheme="purple" mr={3} onClick={onClose}>
                            Închide
                          </Button>
                        </ModalFooter>
                      </ModalContent>
                    </Modal>
                  )}
                </Flex>
              ))}
            />
          ),
        },
      ]}
    />
  );
}
