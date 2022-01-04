import { Flex, Heading, Image, VStack, Text, Link, Button } from "@chakra-ui/react";
import React from "react";
import oanabenga from "../../assets/oanabenga.png"
import adriana_baban from "../../assets/adriana_baban.png"
import SofiaChirica from "../../assets/SofiaChirica.png"
import no_photo_male from "../../assets/no_photo_male.png"
import mirceamiclea from "../../assets/mirceamiclea.png"
import Andrei_Miu_2010 from "../../assets/Andrei_Miu_2010.png"
import adrian_opre from "../../assets/adrian_opre.png"
import busioan_77x100 from "../../assets/busioan_77x100.png"
import theaionescu2018 from "../../assets/theaionescu2018.png"
import viorel_mih from "../../assets/viorel_mih.png"
import oana_negru from "../../assets/oana_negru.png"
import LauraVisuPetra2 from "../../assets/LauraVisuPetra2.png"
import robertbalazsi from "../../assets/robertbalazsi.png"
import LaviniaCheie from "../../assets/LaviniaCheie.png"
import CatrinelCraciun from "../../assets/CatrinelCraciun.png"
import MariusCraciun from "../../assets/MariusCraciun.png"
import LaviniaDamian2 from "../../assets/LaviniaDamian2.png"
import OanaFodor from "../../assets/Oana Fodor.png"
import renataheilman from "../../assets/renataheilman.png"
import EvaKallay from "../../assets/EvaKallay.png"
import ramona_moldovan from "../../assets/ramona_moldovan.png"
import DanaOpre130x160 from "../../assets/DanaOpre130x160.jpg"
import SebastianPintea from "../../assets/SebastianPintea.png"
import lucia_ratiu from "../../assets/lucia_ratiu.png"
import ClaudiaRus from "../../assets/ClaudiaRus.png"
import CatrinelStefan from "../../assets/CatrinelStefan.png"
import diana_taut from "../../assets/diana_taut.png"
import no_photo_female from "../../assets/no_photo_female.png"
import CatalinaOtoiu from "../../assets/Catalina Otoiu.png"
import CadreDidactice from "../../assets/Cadre didactice.pdf"
import MyCarousel from "../../components/MyCarousel/MyCarousel";
import ScreenTemplate from "../../components/ScreenTemplate";

export default function TeachingStaffScreen() {
  return (
    <ScreenTemplate
      title={"Cadre didactice"}
      sections={[
        {
          component: (
            <MyCarousel
              slides={[
                // 1
                <Flex align={"center"} justify={"center"} p={"5vh"}>
                  <VStack>
                    <Heading fontSize="3vh">
                      Director departament Prof. univ. dr. Oana Benga
                    </Heading>
                    <br />
                    <Image src={oanabenga} h="30vh" />
                    <br />
                    <Text align={"center"} >
                      Domenii de cercetare: Psihologia dezvoltării tipice și atipice, Sănătate mintală timpurie <br /> <b>Contact:</b> oanabenga@psychology.ro <br /> <b>CV:</b> <Link href="https://docs.google.com/document/d/1zY4-EW83hWfV_emHcXNGyM9nzJ3ECIOJ84LUInLp-Gw/edit" isExternal>CV-ro</Link>, <Link href="https://docs.google.com/document/d/1DECjO_2RhayVT70doFdp7GaLx05HvOctrURAyWM4Tzo/edit" isExternal>CV-en</Link>
                    </Text>
                  </VStack>
                </Flex>,
                // 2
                <Flex align={"center"} justify={"center"} p={"5vh"}>
                  <VStack>
                    <Heading fontSize="3vh">
                      Prof. univ. dr. Adriana Băban
                    </Heading>
                    <br />
                    <Image src={adriana_baban} h="30vh" />
                    <br />
                    <Text align={"center"} >
                      Profesor specializat în Psihologia Sănătății, Medicină Comportamentală & Psihosomatică și Metode de Cercetare Calitativă<br /> <b>Contact:</b> adrianababan@psychology.ro <br /> <b>CV:</b> <Link href="https://drive.google.com/file/d/12FFIaj0iJ_i4SPgy2v_lVMHOUireQiGH/view" isExternal>CV-ro</Link>, <Link href="https://drive.google.com/file/d/12FFIaj0iJ_i4SPgy2v_lVMHOUireQiGH/view" isExternal>CV-en</Link>
                    </Text>
                  </VStack>
                </Flex>,
                // 3
                <Flex align={"center"} justify={"center"} p={"5vh"}>
                  <VStack>
                    <Heading fontSize="3vh">
                      Prof. univ. dr. Sofia Chirică
                    </Heading>
                    <br />
                    <Image src={SofiaChirica} h="30vh" />
                    <br />
                    <Text align={"center"} >
                      <b>Contact:</b> sofiachirica@psychology.ro <br /> <b>CV:</b> <Link href="https://docs.google.com/document/d/1IHMtajNC5TsMoyayM2n7-BWT6Txft78XqW6AjZw_KmA/edit" isExternal>CV-ro</Link>, <Link href="https://docs.google.com/document/d/1TK9XEGoI3wprl0w0y00K5qbQ8-xtcQEf5Zc2bB1VwVY/edit" isExternal>CV-en</Link>
                    </Text>
                  </VStack>
                </Flex>,
                // 4
                <Flex align={"center"} justify={"center"} p={"5vh"}>
                  <VStack>
                    <Heading fontSize="3vh">
                      Prof. Univ. Dr. Petru L. Curșeu
                    </Heading>
                    <br />
                    <Image src={no_photo_male} h="30vh" />
                    <br />
                    <Text align={"center"} >
                      <b>Contact:</b> petrucurseu@psychology.ro <br /> <b>CV:</b> <Link href="https://www.tilburguniversity.edu/webwijs/show/?uid=p.l.curseu" isExternal>CV-en</Link>
                    </Text>
                  </VStack>
                </Flex>,
                // 5
                <Flex align={"center"} justify={"center"} p={"5vh"}>
                  <VStack>
                    <Heading fontSize="3vh">
                      Prof. univ. dr. Mircea Miclea
                    </Heading>
                    <br />
                    <Image src={mirceamiclea} h="30vh" />
                    <br />
                    <Text align={"center"} >
                      <b>Contact:</b> mirceamiclea@psychology.ro <br /> <b>CV:</b> <Link href="https://drive.google.com/file/d/0Bzswdr6cSo4-MWdJR1NXVGNSYkU/view?resourcekey=0-PuouGpbffIg50G76z2-R-g" isExternal>CV-ro</Link>, <Link href="https://drive.google.com/file/d/0Bzswdr6cSo4-Z2I5bl9fTE9YLTA/view?resourcekey=0-x1HciVEkiaC_168jkRAShQ" isExternal>CV-en</Link>
                    </Text>
                  </VStack>
                </Flex>,
                // 6
                <Flex align={"center"} justify={"center"} p={"5vh"}>
                  <VStack>
                    <Heading fontSize="3vh">
                      Prof. univ. dr. Andrei C. Miu
                    </Heading>
                    <br />
                    <Image src={Andrei_Miu_2010} h="30vh" />
                    <br />
                    <Text align={"center"} >
                      <b>Contact:</b> andreimiu@psychology.ro <br /> <b>CV:</b> <Link href="https://docs.google.com/document/d/1FCiFATr75daR5_7GqMq-n60inRBeHQNxTjDRpFDvcvs/edit" isExternal>CV-ro</Link>, <Link href="https://docs.google.com/document/d/1V7SBdz5ocD91cqQ4JmbTFLy9dLVhH6--psuQdNOHGf4/edit" isExternal>CV-en</Link>
                    </Text>
                  </VStack>
                </Flex>,
                // 7
                <Flex align={"center"} justify={"center"} p={"5vh"}>
                  <VStack>
                    <Heading fontSize="3vh">
                      Prof. univ. dr. Adrian Opre
                    </Heading>
                    <br />
                    <Image src={adrian_opre} h="30vh" />
                    <br />
                    <Text align={"center"} >
                      <b>Contact:</b> adrianopre@psychology.ro <br /> <b>CV:</b> <Link href="https://docs.google.com/document/d/13KU6Y7eQzsa0IdFugn35yG5A8328oRLBqS9fhC_dBss/edit" isExternal>CV-ro</Link>, <Link href="https://docs.google.com/document/d/16Qp2rPH9YWEqXb6nrq4TAB4fUFKlA3PI_9w3n8SQysg/edit" isExternal>CV-en</Link>
                    </Text>
                  </VStack>
                </Flex>,
                // 8
                <Flex align={"center"} justify={"center"} p={"5vh"}>
                  <VStack>
                    <Heading fontSize="3vh">
                      Conf. univ. dr. Ioan Buș
                    </Heading>
                    <br />
                    <Image src={busioan_77x100} h="30vh" />
                    <br />
                    <Text align={"center"} >
                      <b>Contact:</b> ioanbus@psychology.ro <br /> <b>CV:</b> <Link href="https://docs.google.com/document/d/1qsqqC64ujCOr2QZGn91DfuWqy16t6P6eXc9oxA1ZOmQ/edit" isExternal>CV-ro</Link>, <Link href="https://docs.google.com/document/d/1IHWHDabQLaWESOHktL-F39pUlG6j_Sum-9p2FXzXhvQ/edit" isExternal>CV-en</Link>
                    </Text>
                  </VStack>
                </Flex>,
                // 9
                <Flex align={"center"} justify={"center"} p={"5vh"}>
                  <VStack>
                    <Heading fontSize="3vh">
                      Conf. univ. dr. Dorothea (Thea) A. Ionescu
                    </Heading>
                    <br />
                    <Image src={theaionescu2018} h="30vh" />
                    <br />
                    <Text align={"center"} >
                      Domenii de interes: Flexibilitate cognitivă – dezvoltare şi mecanisme; Dezvoltarea categorizării; Formarea conceptelor; Cogniţie ancorată (Embodied/Grounded Cognition) – implicaţii pentru dezvoltare şi educaţie; Supradotare şi fenomenul de insight în rezolvarea creativă de probleme; Educaţie timpurie <br /> <b>Contact:</b> theaionescu@psychology.ro <br /> <b>CV:</b> <Link href="https://docs.google.com/document/d/1p5EyNMcYMo6xFFWrkObrjbdZMW6_crzGoGVM77dTHwg/edit" isExternal>CV-ro</Link>, <Link href="https://docs.google.com/document/d/1PYmCLgXHsEReYUhVPx84FrqngjvUrVzSIIzcRAyKqf8/edit" isExternal>CV-en</Link>
                    </Text>
                  </VStack>
                </Flex>,
                // 10
                <Flex align={"center"} justify={"center"} p={"5vh"}>
                  <VStack>
                    <Heading fontSize="3vh">
                      Conf. Univ. dr. Viorel Mih
                    </Heading>
                    <br />
                    <Image src={viorel_mih} h="30vh" />
                    <br />
                    <Text align={"center"} >
                      Conf. dr. Mih Viorel Beniamin este titular la Catedra de Psihologie din cadrul Universitatii Babes Bolyai. <br /> <b>Contact:</b> viorelmih@psychology.ro <br /> <b>CV:</b> <Link href="https://docs.google.com/document/d/10s-Rb7cS2XQKwmT4zUGFL4qOtHNBgJ3mSePqOTnI6Ns/edit" isExternal>CV-ro</Link>, <Link href="https://docs.google.com/document/d/1gLQpxhhrRUC0FUMYaGwp4v3RcwnjCN5-43aqLyFKflY/edit" isExternal>CV-en</Link>
                    </Text>
                  </VStack>
                </Flex>,
                // 11
                <Flex align={"center"} justify={"center"} p={"5vh"}>
                  <VStack>
                    <Heading fontSize="3vh">
                      Conf. univ. dr. Oana Negru-Subțirică
                    </Heading>
                    <br />
                    <Image src={oana_negru} h="30vh" />
                    <br />
                    <Text align={"center"} >
                      Activitatea mea de cercetare vizează investigarea structurilor şi mecanismelor implicate în dezvoltarea intenţionalităţii în adolescenţă şi în perioada de emergenţă a vârstei adulte, din perspectiva motivaţiei, a scopurilor şi a formării identităţii educaţionale şi vocaţionale. <br /> <b>Contact:</b> oananegru@psychology.ro <br /> <b>CV:</b> <Link href="https://docs.google.com/document/d/1JbD5VIFY9PxaAuHSuZGMtzJNQ7simHAvZOWjoAS9ZOw/edit" isExternal>CV-ro</Link>, <Link href="https://docs.google.com/document/d/1Zt30SwYs-A_LausHo3hP2kBpU7A46eRfjSFZBB7UoX0/edit" isExternal>CV-en</Link>
                    </Text>
                  </VStack>
                </Flex>,
                // 12
                <Flex align={"center"} justify={"center"} p={"5vh"}>
                  <VStack>
                    <Heading fontSize="3vh">
                      Conf. univ. dr. Laura Visu Petra
                    </Heading>
                    <br />
                    <Image src={LauraVisuPetra2} h="30vh" />
                    <br />
                    <Text align={"center"} >
                      Conf. dr. Laura Visu-Petra este cercetător principal în Laboratorul de Psihologia Dezvoltării, temele de interes fiind dezvoltarea tipică și atipică, la intersecția cu domeniul aplicativ al psihologiei judiciare. <br /> <b>Contact:</b> laurapetra@psychology.ro <br /> <b>CV:</b> <Link href="https://docs.google.com/document/d/1hliVzzGEM8lgUFyMInzG5xZx1rmibmq9c6cOUZZk3W0/edit" isExternal>CV-ro</Link>, <Link href="https://docs.google.com/document/d/1g6L_fOv1OFX_QHE54OYlkhfrXlW25MkxVWtkYTsIvns/edit" isExternal>CV-en</Link>
                    </Text>
                  </VStack>
                </Flex>,
                // 13
                <Flex align={"center"} justify={"center"} p={"5vh"}>
                  <VStack>
                    <Heading fontSize="3vh">
                      Lect. univ. dr. Robert Balazsi
                    </Heading>
                    <br />
                    <Image src={robertbalazsi} h="30vh" />
                    <br />
                    <Text align={"center"} >
                      <b>Contact:</b> robertbalazsi@psychology.ro <br /> <b>CV:</b> <Link href="https://docs.google.com/document/d/1dAya9qcI9ly9IR25EhGFDlAunr1oQI1dcj7_Q_sx_ZE/edit" isExternal>CV-ro</Link>, <Link href="https://docs.google.com/document/d/1jsGrBLP49SAt5fQ2T9JsQpCHVodkrMeiQ1RmwP-5P4A/edit" isExternal>CV-en</Link>
                    </Text>
                  </VStack>
                </Flex>,
                // 14
                <Flex align={"center"} justify={"center"} p={"5vh"}>
                  <VStack>
                    <Heading fontSize="3vh">
                      Lect. Univ. dr. Lavinia Cheie
                    </Heading>
                    <br />
                    <Image src={LaviniaCheie} h="30vh" />
                    <br />
                    <Text align={"center"} >
                      Lavinia Cheie este cercetător în cadrul Laboratorului de Psihologia Dezvoltării și lector în domeniul psihologiei dezvoltării tipice și atipice, respectiv în domeniul psihologiei judiciare. <br /> <b>Contact:</b> laviniacheie@psychology.ro <br /> <b>CV:</b> <Link href="https://docs.google.com/document/d/1Pdo1VFS7WM0AtqyzAfH7GJyKsbN_OzPcQBrZ6xFvJfQ/edit" isExternal>CV-ro</Link>, <Link href="https://docs.google.com/document/d/1Z3_RMI2GI-jWkswk_jJooA6Rhtr2o_nwbcuUzyZi5GY/edit" isExternal>CV-en</Link>
                    </Text>
                  </VStack>
                </Flex>,
                // 15
                <Flex align={"center"} justify={"center"} p={"5vh"}>
                  <VStack>
                    <Heading fontSize="3vh">
                      Lect. univ. dr. Irina Catrinel Crăciun
                    </Heading>
                    <br />
                    <Image src={CatrinelCraciun} h="30vh" />
                    <br />
                    <Text align={"center"} >
                      <b>Contact:</b> catrinelcraciun@psychology.ro <br /> <b>CV:</b> <Link href="https://docs.google.com/document/d/1tCX2D2m6sKg1bOYnl7VR5zLvkevlprYeCcU6ZWepSxA/edit" isExternal>CV-ro</Link>, <Link href="https://docs.google.com/document/d/1X2VuuOEKnQ_UxdNRHiJyHhCa46yRMKotpdCd0xNZwHQ/edit" isExternal>CV-en</Link>
                    </Text>
                  </VStack>
                </Flex>,
                // 16
                <Flex align={"center"} justify={"center"} p={"5vh"}>
                  <VStack>
                    <Heading fontSize="3vh">
                      Lect. univ. dr. Marius Crăciun
                    </Heading>
                    <br />
                    <Image src={MariusCraciun} h="30vh" />
                    <br />
                    <Text align={"center"} >
                      <b>Contact:</b> mariuscraciun@psychology.ro <br /> <b>CV:</b> <Link href="https://docs.google.com/document/d/1zl8V-hQl3cFyQMmTLNKEEUxfZI6EcS9ucNc_y2uqBCo/edit" isExternal>CV-ro</Link>, <Link href="https://docs.google.com/document/d/19HVX-TWAS8bLNJXWEq9XUXaYivbHpyu1H0a3clBYxqU/edit" isExternal>CV-en</Link>
                    </Text>
                  </VStack>
                </Flex>,
                // 17
                <Flex align={"center"} justify={"center"} p={"5vh"}>
                  <VStack>
                    <Heading fontSize="3vh">
                      Lect. Univ. Dr. Lavinia Damian
                    </Heading>
                    <br />
                    <Image src={LaviniaDamian2} h="30vh" />
                    <br />
                    <Text align={"center"} >
                      Dr. Lavinia E. Damian este lector universitar în cadrul Departamentului de Psihologie, Universitatea Babeş-Bolyai unde predă seminarii de psihologie şcolară şi consiliere şcolară şi orientare în carieră la nivel licenţă şi promovarea sănătăţii mintale la copil şi adolescent la nivel masteral. <br /> <b>Contact:</b> laviniadamian@psychology.ro <br /> <b>CV:</b> <Link href="https://docs.google.com/document/d/1gmU3nKyo5ojaGZg4QK7FpfCE157KQg3qo_khM6SxHeg/edit" isExternal>CV-ro</Link>, <Link href="https://docs.google.com/document/d/1CTSg46Kinb1aYvHlDJwPf-lHggFlfhelH4VyvKPDq8A/edit" isExternal>CV-en</Link>
                    </Text>
                  </VStack>
                </Flex>,
                // 18
                <Flex align={"center"} justify={"center"} p={"5vh"}>
                  <VStack>
                    <Heading fontSize="3vh">
                      Lect. univ. dr. Oana Fodor
                    </Heading>
                    <br />
                    <Image src={OanaFodor} h="30vh" />
                    <br />
                    <Text align={"center"} >
                      Oana Fodor este membră în Work and Organizational Psychology Research Centre (WOPRC), în cadrul Departamentului de Psihologie, FPSE, Universitatea Babeş-Bolyai. <br /> <b>Contact:</b> oanafodor@psychology.ro <br /> <b>CV:</b> <Link href="https://docs.google.com/document/d/1CibqySt8P6CPO_LtGDu7RppXRk1wn48nk7IzHBQ7O7A/edit" isExternal>CV-ro</Link>, <Link href="https://docs.google.com/document/d/1FV5z0RdvFlQvp1av2KKw10i-wKqLn_23SpQk1Aj4zOw/edit" isExternal>CV-en</Link>
                    </Text>
                  </VStack>
                </Flex>,
                // 19
                <Flex align={"center"} justify={"center"} p={"5vh"}>
                  <VStack>
                    <Heading fontSize="3vh">
                      Lect. univ. dr. Renata Heilman
                    </Heading>
                    <br />
                    <Image src={renataheilman} h="30vh" />
                    <br />
                    <Text align={"center"} >
                      Interesele mele de cercetare se centrează pe influenţa diferențelor individuale (ex: emoţii şi strategii de reglare emoţională, trăsături de personalitate, factori cognitivi) asupra diferitelor aspecte ale procesului decizional. <br /> <b>Contact:</b> renataheilman@psychology.ro <br /> <b>CV:</b> <Link href="https://docs.google.com/document/d/1XvTNHCd4e2dfA2qv439NPIE4RMU35w60g_buDAy7INA/edit" isExternal>CV-ro</Link>, <Link href="https://docs.google.com/document/d/1lHl_pihXpGIN5FNsx2s4n7rTm33A8S6T04Dpts0FLV0/edit" isExternal>CV-en</Link>
                    </Text>
                  </VStack>
                </Flex>,
                // 20
                <Flex align={"center"} justify={"center"} p={"5vh"}>
                  <VStack>
                    <Heading fontSize="3vh">
                      Lect. univ. dr. Éva Kállay
                    </Heading>
                    <br />
                    <Image src={EvaKallay} h="30vh" />
                    <br />
                    <Text align={"center"} >
                      Domenii și interese de cercetare: Sănătate emoţională, Inteligența emoţională, Trauma şi dezvoltarea posttraumatică, Construcţia sensului, Coaching, Psihologie Educaţională, Promovarea sănătăţii în şcoli, Dezvoltarea abilităţilor emoţionale şi sociale la copii şi adolescenţi <br /> <b>Contact:</b> evakallay@psychology.ro <br /> <b>CV:</b> <Link href="https://docs.google.com/document/d/1sbvH2Rh5snbbyGdXI53rNogSM3O23XzhmNpg-1iBpSU/edit" isExternal>CV-ro</Link>, <Link href="https://docs.google.com/document/d/1-GjGNcyhlQzYLMmnmbWPw7AT9XKQxIbN2NRibIYB3Rc/edit" isExternal>CV-en</Link>
                    </Text>
                  </VStack>
                </Flex>,
                // 21
                <Flex align={"center"} justify={"center"} p={"5vh"}>
                  <VStack>
                    <Heading fontSize="3vh">
                      Lect. Univ. Dr. Ramona Moldovan
                    </Heading>
                    <br />
                    <Image src={ramona_moldovan} h="30vh" />
                    <br />
                    <Text align={"center"} >
                      <b>Contact:</b> ramonamoldovan@psychology.ro <br /> <b>CV:</b> <Link href="https://docs.google.com/document/d/1Kf9x0bTowQESm7kpYj43XjPd-QA90QtegHXLGC4FPpo/edit" isExternal>CV-ro</Link>, <Link href="https://docs.google.com/document/d/16QarFZavnll2XqqWnITenHAWkW986Ak9KH3jbF6o5uc/edit" isExternal>CV-en</Link>
                    </Text>
                  </VStack>
                </Flex>,
                // 22
                <Flex align={"center"} justify={"center"} p={"5vh"}>
                  <VStack>
                    <Heading fontSize="3vh">
                      Lect. univ. dr. Dana Opre
                    </Heading>
                    <br />
                    <Image src={DanaOpre130x160} h="30vh" />
                    <br />
                    <Text align={"center"} >
                      <b>Contact:</b> danaopre@psychology.ro <br /> <b>CV:</b> <Link href="https://docs.google.com/document/d/1DPNfC8Ria-mPzDmW8j4CokRcq1768d5JAEVx_JSvy6Q/edit" isExternal>CV-ro</Link>, <Link href="https://docs.google.com/document/d/1lwPrqZMtMHsgANJxNCzrW0eCY4LBPXWqpZn1s4VjMrI/edit" isExternal>CV-en</Link>
                    </Text>
                  </VStack>
                </Flex>,
                // 23
                <Flex align={"center"} justify={"center"} p={"5vh"}>
                  <VStack>
                    <Heading fontSize="3vh">
                      Lect. univ. dr. Sebastian Pintea
                    </Heading>
                    <br />
                    <Image src={SebastianPintea} h="30vh" />
                    <br />
                    <Text align={"center"} >
                      Sebastian Pintea este lector in cadrul Departamentului de Psihologie, UBB, fiind licentiat in specializarile Sociologie (Universitatatea Babes-Bolyai din Cluj-Napoca) si Psihologie (Universitatea de Vest din Timisoara). <br /> <b>Contact:</b> sebastianpintea@psychology.ro <br /> <b>CV:</b> <Link href="https://docs.google.com/document/d/16ziUZ6sr0sKDjGfJ4sq7JWipOJh7S0CLzvN30nBF7e0/edit" isExternal>CV-ro</Link>, <Link href="https://docs.google.com/document/d/1ikYLTnD77gFR38B4CxJeZtfXFnwhyG6hAx3_PzkdQVc/edit" isExternal>CV-en</Link>
                    </Text>
                  </VStack>
                </Flex>,
                // 24
                <Flex align={"center"} justify={"center"} p={"5vh"}>
                  <VStack>
                    <Heading fontSize="3vh">
                      Lect. univ. dr. Lucia Rațiu
                    </Heading>
                    <br />
                    <Image src={lucia_ratiu} h="30vh" />
                    <br />
                    <Text align={"center"} >
                      Lucia Ratiu este lector universitar în cadrul Departamentului de Psihologie al Universităţii Babeş-Bolyai şi membră a grupului de cercetare în Psihologia Muncii şi Organizaţională. <br /> <b>Contact:</b> luciaratiu@psychology.ro <br /> <b>CV:</b> <Link href="https://docs.google.com/document/d/1FBgaSsPay5Q_4gJyN70g6m1gvub61rBxRH_Crn1A_EI/edit" isExternal>CV-ro</Link>, <Link href="https://docs.google.com/document/d/13mJgjwukfPPknzgkaJdg-5gYXECWrwZjgkWbNQYGVd4/edit" isExternal>CV-en</Link>
                    </Text>
                  </VStack>
                </Flex>,
                // 25
                <Flex align={"center"} justify={"center"} p={"5vh"}>
                  <VStack>
                    <Heading fontSize="3vh">
                      Lect. univ. dr. Claudia Rus
                    </Heading>
                    <br />
                    <Image src={ClaudiaRus} h="30vh" />
                    <br />
                    <Text align={"center"} >
                      Claudia L. Rus este membru al Centrului de cercetare în Psihologia Muncii şi Organizaţională. <br /> <b>Contact:</b> claudiarus@psychology.ro <br /> <b>CV:</b> <Link href="https://docs.google.com/document/d/1oGvVpGKZDDmk1-5CVrHXEQRGyCOg9m7dJ__1hdd-WwA/edit" isExternal>CV-ro</Link>, <Link href="https://docs.google.com/document/d/1B5EmkLMf0viJlEElmfF2u79-1dl5VgEykvqCs2UgoMk/edit" isExternal>CV-en</Link>
                    </Text>
                  </VStack>
                </Flex>,
                // 26
                <Flex align={"center"} justify={"center"} p={"5vh"}>
                  <VStack>
                    <Heading fontSize="3vh">
                      Lect. Univ. dr. Catrinel Alice Ștefan
                    </Heading>
                    <br />
                    <Image src={CatrinelStefan} h="30vh" />
                    <br />
                    <Text align={"center"} >
                      Interesele mele de cercetare se situează la intersecția dintre psihologia educațională, psihologia dezvoltării și psihologia sănătății. <br /> <b>Contact:</b> catrinelstefan@psychology.ro <br /> <b>CV:</b> <Link href="https://docs.google.com/document/d/1pZAJm91ZknYN3l2z-I2-Cqh3I3ucY_Q98s9PqnOeyTw/edit" isExternal>CV-ro</Link>, <Link href="https://docs.google.com/document/d/1HlTvniYg-WS6chy2UHQxEtLZcaTQVv3iRhbq5QpuEEk/edit" isExternal>CV-en</Link>
                    </Text>
                  </VStack>
                </Flex>,
                // 27
                <Flex align={"center"} justify={"center"} p={"5vh"}>
                  <VStack>
                    <Heading fontSize="3vh">
                      Lect. univ. dr. Diana Tăut
                    </Heading>
                    <br />
                    <Image src={diana_taut} h="30vh" />
                    <br />
                    <Text align={"center"} >
                      <b>Contact:</b> dianataut@psychology.ro <br /> <b>CV:</b> <Link href="https://docs.google.com/document/d/18M7HZZXNgg8sfu1tnoszOVtQc_qz_KDZZbGaU_UMhjo/edit" isExternal>CV-ro</Link>, <Link href="https://docs.google.com/document/d/1d89M3nRj5_tDhSQtqSE1gJ9ZCFNm2SojREEPlF_boXM/edit" isExternal>CV-en</Link>
                    </Text>
                  </VStack>
                </Flex>,
                // 28
                <Flex align={"center"} justify={"center"} p={"5vh"}>
                  <VStack>
                    <Heading fontSize="3vh">
                      Asist. univ. Dr. Bianca Macavei
                    </Heading>
                    <br />
                    <Image src={no_photo_female} h="30vh" />
                    <br />
                    <Text align={"center"} >
                      <b>Contact:</b> biancamacavei@psychology.ro <br /> <b>CV:</b> <Link href="https://docs.google.com/document/d/1A8toMq2Yx2-1LJQACfLZ6GiafcBx5MinolTyYHtw3KU/edit" isExternal>CV-ro</Link>, <Link href="https://docs.google.com/document/d/1QE1Ep9sMx8wRh2OOyfP9rEdrSdYNA5zFoZ8E6zec0_w/edit" isExternal>CV-en</Link>
                    </Text>
                  </VStack>
                </Flex>,
                // 29
                <Flex align={"center"} justify={"center"} p={"5vh"}>
                  <VStack>
                    <Heading fontSize="3vh">
                      Asist. univ. dr. Cătălina Oțoiu
                    </Heading>
                    <br />
                    <Image src={CatalinaOtoiu} h="30vh" />
                    <br />
                    <Text align={"center"} >
                      <b>Contact:</b> catalinaotoiu@psychology.ro <br /> <b>CV:</b> <Link href="https://docs.google.com/document/d/1f-PpXZ65mqzNyJ9jrf9SldDVfUX6ETGeSHLCt7fvLNI/edit" isExternal>CV-ro</Link>, <Link href="https://docs.google.com/document/d/1pnwcMfIV2uWdY1oqbfmQJipB-lFbuPWHAnb19yPnRmY/edit" isExternal>CV-en</Link>
                    </Text>
                  </VStack>
                </Flex>,
              ]}
            />
          ),
        },
        {
          component: (
            <Button bgColor={"gray.200"} maxW={"300"}>
              <a href={CadreDidactice} target="_blank" rel="noreferrer">Vizualizare listă cadre didactice</a>
            </Button>
          )
        },
      ]}
    />
  );
}