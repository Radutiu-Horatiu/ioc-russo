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
} from '@chakra-ui/react'

export default function TestimonialsScreen() {
  const { isOpen, onOpen, onClose } = useDisclosure()
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
                  bgColor={"purple.200"}
                  height={"550px"}
                >
                  <Text ml={"40"} mr={"40"} align={"justify"}>„Îmi amintesc cu drag de cursurile avute şi informațiile primite. A fost o călatorie pe parcursul căreia am învăţat ce înseamnă munca în echipă, responsabilitatea şi rigoarea. Acum, după ce am absolvit, aceşti ani de învăţare, pot spune că, au pus bazele dezvoltării mele profesionale, reprezentând un instrument important în activitatea mea atât prin competenţele formate, cât şi prin informaţiile la care am avut acces.” (Violeta Mateș, Coach & Specialist Dezvoltare Organizaţională)
                  </Text>
                </Flex>,
                // 2
                <Flex align={"center"} justify={"center"} height={"550px"}>
                  <Text ml={"40"} mr={"40"} align={"justify"}>„Am ales acest program masteral (Masterul de Psihologia Resurselor Umane și Sănătate Organizațională) deoarece a fost printre puținele programe din domeniul resurselor umane pe care l-am considerat ca fiind în contact cu cerințele pieței muncii. Nu o dată mi s-a întâmplat să sesizez faptul că informațiile din cadrul masteratului se cer și se aplică în multinaționalele din Cluj-Napoca. Lăsând la o parte piața muncii, un alt argument în favoarea acestui master este dat de profesorii foarte deschiși și de cursurile care sunt în permanență ajustate cu cele mai noi informații din domeniu. Acest lucru se datorează în bună parte centrului de cercetare al departamentului de psihologia muncii și organizațională, care le oferă posibilitatea studenților să se implice activ în cercetările derulate în cadrul acestuia. În prezent există o comunitate de profesioniști alcătuită din colegi și profesori la care am certitudinea că pot să apelez oricând aș avea nevoie de o informație bine documentată.” (Cristian Talpos, membru fondator Choice)
                  </Text>
                </Flex>,
                // 3
                <Flex align={"center"} justify={"center"} height={"550px"} bgColor={"purple.200"}>
                  <Text ml={"40"} mr={"40"} align={"justify"}>„Utilitatea şi valoarea masterului de Psihologia Resurselor Umane şi Sănătate Organizaţională am înţeles-o mai ales când am ajuns în câmpul muncii. Ca student, masterul mi-a deschis oportunitatea de a aprofunda subiecte care m-au atras încă din timpul facultăţii, cum ar fi coaching, training, consiliere, dezvoltare organizaţională. Chiar dacă în acel moment nu aş fi ştiut să spun la ce îmi vor folosi aceste discipline pe viitor, acum pot spune că au fost esenţiale pentru a putea să-mi desfăşor activitatea de Trainer si Consultant într-o companie de Resurse Umane. Am înţeles că un bagaj teoretic bun este baza unei bune practici. Şi mai mult decât bagaj teoretic, masterul RUSO, m-a pregătit pentru ceea ce înseamnă un mediu organizaţional în zilele noastre: procese de grup, planificare si auto-organizare, interacţiuni 1 la 1, leadership, provocări în medii şi echipe diverse. Toate acestea au fost studiate dar si experimentate de către mine la masterul RUSO, mai ales datorită proiectelor de grup care uneori m-au scos din zona de confort. Fără acest Master, probabil ar fi fost mai greu să înţeleg mediul de muncă de astăzi, in dinamica şi diversitatea lui, şi as fi avut mai puţină încredere în profesionalismul muncii mele.” (Andreea Munteanu, coach Brussels, Belgia)
                  </Text>
                </Flex>,
                // 4
                <Flex align={"center"} justify={"center"} height={"550px"}>
                  <VStack>
                    <Text ml={"40"} mr={"40"} align={"justify"}>„Au trecut aproape cinci ani de zile de la începutul masteratului. Acum mă găsesc în postura de a evalua critic modul în care alegerea pe care am făcut-o, aceea de a studia RUSO, mi-a influențat modul de a gândi, de a relaționa și, de ce nu!?, cariera. Nu e o postură ușoară pentru că nu vreau să tratez superficial subiectul dar nici să cad în extrema prozelitului. Nu cred că trebuie să menţionez că  fac un efort mare de a identifica punctul cu care să încep mai ales că n-am fost obligat să fac nimic. Nimic mai mult decât a învăța să gândesc în relaționarea cu ceilalți, pentru mine, și să mă strădui să fiu parte din acea generație care face lucrurile să se întâmple. Dacă alegi să studiezi la acest master, sper să vii peste ceva vreme și să spui: Bogdan,  simt că am fost ajutat să înțeleg că "knowledge is the investment that pays the best interest".” (Bogdan Corduneanu, HR Manager)
                    </Text>
                    <Button onClick={onOpen}>Citește mai mult...</Button>
                    <Modal isOpen={isOpen} onClose={onClose}>
                      <ModalOverlay />
                      <ModalContent maxW={"78rem"}>
                        <ModalHeader>Testimonial: Bogdan Corduneanu, HR Manager</ModalHeader>
                        <ModalCloseButton />
                        <ModalBody>
                          <Text align={"justify"}>„Au trecut aproape cinci ani de zile de la începutul masteratului. Acum mă găsesc în postura de a evalua critic modul în care alegerea pe care am făcut-o, aceea de a studia RUSO, mi-a influențat modul de a gândi, de a relaționa și, de ce nu!?, cariera. Nu e o postură ușoară pentru că nu vreau să tratez superficial subiectul dar nici să cad în extrema prozelitului. Nu cred că trebuie să menţionez că  fac un efort mare de a identifica punctul cu care să încep mai ales că n-am fost obligat să fac nimic. Nimic mai mult decât a învăța să gândesc în relaționarea cu ceilalți, pentru mine, și să mă strădui să fiu parte din acea generație care face lucrurile să se întâmple.<br/>Dacă alegi să studiezi la acest master, sper să vii peste ceva vreme și să spui: Bogdan,  simt că am fost ajutat să înțeleg că "knowledge is the investment that pays the best interest".<br/>Una dintre valorile acestei școli este orientarea știnţifică iar această orientare nu poate exista decât într-un context  care încurajează cunoașterea. Ca să dau un exemplu concret, îmi aduc aminte de un Profesor entuziast care ne spunea cu multă pasiune despre cercetările lui Amy Edmondson. Ei, asta se întâmpla în 2011. Anul trecut, Amy a primit recunoaștere internațională, cu un articol devenit viral din NY Times, pentru munca depusă. Ah, o urmare a muncii ei este faptul că cei de la Google încearcă să-și organizeze echipele pentru a obține eficiență conform îndrumărilor primite de la Edmondson. Să ai acces la informații actuale de o reală calitate în mediul universitar înseamnă să ai șansă de a fi bun și la curent în orice zonă profesională te-ai îndrepta, de la specialist în resurse umane până la consilier de carieră sau chiar coach.<br/>Vreau să mai punctez un singur aspect pe care îl apreciez la acest master, știți voi "vorba lungă, sărăcia omului", și anume, ce am primit de la oamenii cu care am interacționat. Au fost multe momente în care proiectele de grup pe care trebuia să le livrăm nu au mers conform așteptărilor noastre, dezbateri aprinse, discuții în contradictoriu, termene depășite. În momentul de față, ne vedem cel puțin o dată pe lună la o cafea, a se citi bere, cu acei oameni alături de care lucram în proiecte. Cum de se întâmplă asta? O pun pe seama faptului că acest masterat ne-a ajutat să ne dezvoltăm abilități de gândire  de ascultare activă, de critică constructivă, de argumentare care pot fi puse sub o  umbrelă mai mare: muncă în echipă. Ei, toate aceste skill-uri îți vor oferi cu siguranță un avantaj competitiv în domeniul tău, oricare ar fi el.<br/>Dacă ai întrebări cu privire la acest master te încurajez să-i întrebi pe coordonatori. Îți spun cu siguranță că-ți vor răspunde. Multă baftă în orice alegi!”
                          </Text>
                        </ModalBody>

                        <ModalFooter>
                          <Button colorScheme='purple' mr={3} onClick={onClose}>
                            Închide
                          </Button>
                        </ModalFooter>
                      </ModalContent>
                    </Modal>
                  </VStack>
                </Flex>,
                // 5
                <Flex align={"center"} justify={"center"} height={"550px"} bgColor={"purple.200"}>
                  <Text ml={"40"} mr={"40"} align={"justify"}>„O colecţie nelimitată de cunoştinţe privind fenomenele din mediul organizaţional, care sintetizează, clarifică şi clasifică majoritatea situaţiilor trăite de o persoană într-o organizaţie. Fără suportul masterului RUSO, această colecţie de cunoştinţe se dobândeşte în decursul mai multor ani în diverse organizaţii, şi posibil fără susţinerea teoretică şi ştiinţifică a acestor fenomene. Experienţa celor 2 ani de master RUSO a fost inegalabilă şi incomparabilă cu anii de experienţă de lucru în companii private, fapt datorat în cea mai mare parte modului de învăţare experienţială care mi-a permis implicarea directă, reflecţia şi conceptualizarea experienţelor în situaţii noi din micro-organizaţiile din care am făcut parte, totul în mod real, nesimulat. În practică, colecţia de cunoştinţe dobândite la masterul RUSO a fost şi îmi este extrem de folositoare în două direcţii: una la nivel individual prin folosirea lor pentru optimizarea comportamentului individual faţă de orice organizaţie şi faţă de cei cu care interacţionez; alta la nivel organizaţional prin suportul teoretic şi practic pentru intervenţiile cu scopul de a îmbunătăţi anumite situaţii sau elimina anumite fenomene negative. Recomand masterul RUSO tuturor celor care îşi doresc să urmeze o carieră în domeniul resurselor umane, tuturor celor care deţin  o poziţie de conducere sau tuturor celor care au interes în studierea fenomenelor organizaţionale.” (Marius, manager)
                  </Text>
                </Flex>,
              ]}
            />
          ),
        },
      ]}
    />
  );
}