import { Flex, Heading, Image, VStack, Text, Link, Button } from "@chakra-ui/react";
import React from "react";
import oanabenga from "../../assets/oanabenga.png";
import adriana_baban from "../../assets/adriana_baban.png";
import SofiaChirica from "../../assets/SofiaChirica.png";
import no_photo_male from "../../assets/no_photo_male.png";
import mirceamiclea from "../../assets/mirceamiclea.png";
import Andrei_Miu_2010 from "../../assets/Andrei_Miu_2010.png";
import adrian_opre from "../../assets/adrian_opre.png";
import busioan_77x100 from "../../assets/busioan_77x100.png";
import theaionescu2018 from "../../assets/theaionescu2018.png";
import viorel_mih from "../../assets/viorel_mih.png";
import oana_negru from "../../assets/oana_negru.png";
import LauraVisuPetra2 from "../../assets/LauraVisuPetra2.png";
import robertbalazsi from "../../assets/robertbalazsi.png";
import LaviniaCheie from "../../assets/LaviniaCheie.png";
import CatrinelCraciun from "../../assets/CatrinelCraciun.png";
import MariusCraciun from "../../assets/MariusCraciun.png";
import LaviniaDamian2 from "../../assets/LaviniaDamian2.png";
import OanaFodor from "../../assets/Oana Fodor.png";
import renataheilman from "../../assets/renataheilman.png";
import EvaKallay from "../../assets/EvaKallay.png";
import ramona_moldovan from "../../assets/ramona_moldovan.png";
import DanaOpre130x160 from "../../assets/DanaOpre130x160.jpg";
import SebastianPintea from "../../assets/SebastianPintea.png";
import lucia_ratiu from "../../assets/lucia_ratiu.png";
import ClaudiaRus from "../../assets/ClaudiaRus.png";
import CatrinelStefan from "../../assets/CatrinelStefan.png";
import diana_taut from "../../assets/diana_taut.png";
import no_photo_female from "../../assets/no_photo_female.png";
import CatalinaOtoiu from "../../assets/Catalina Otoiu.png";
import CadreDidactice from "../../assets/Cadre didactice.pdf";
import MyCarousel from "../../components/MyCarousel/MyCarousel";
import ScreenTemplate from "../../components/ScreenTemplate";

export default function TeachingStaffScreen() {
  const teachers = [
    {
      title: `Director departament Prof. univ. dr. Oana Benga`,
      picture: oanabenga,
      description: `Domenii de cercetare: Psihologia dezvoltării tipice și atipice, Sănătate mintală timpurie`,
      mail: `oanabenga@psychology.ro`,
      cvro: `https://docs.google.com/document/d/1zY4-EW83hWfV_emHcXNGyM9nzJ3ECIOJ84LUInLp-Gw/edit`,
      cven: `https://docs.google.com/document/d/1DECjO_2RhayVT70doFdp7GaLx05HvOctrURAyWM4Tzo/edit`
    },
    {
      title: `Prof. univ. dr. Adriana Băban`,
      picture: adriana_baban,
      description: `Profesor specializat în Psihologia Sănătății, Medicină Comportamentală & Psihosomatică și Metode de Cercetare Calitativă`,
      mail: `adrianababan@psychology.ro`,
      cvro: `https://drive.google.com/file/d/12FFIaj0iJ_i4SPgy2v_lVMHOUireQiGH/view`,
      cven: `https://drive.google.com/file/d/12FFIaj0iJ_i4SPgy2v_lVMHOUireQiGH/view`
    },
    {
      title: `Prof. univ. dr. Sofia Chirică`,
      picture: SofiaChirica,
      mail: `sofiachirica@psychology.ro`,
      cvro: `https://docs.google.com/document/d/1IHMtajNC5TsMoyayM2n7-BWT6Txft78XqW6AjZw_KmA/edit`,
      cven: `https://docs.google.com/document/d/1TK9XEGoI3wprl0w0y00K5qbQ8-xtcQEf5Zc2bB1VwVY/edit`
    },
    {
      title: `Prof. Univ. Dr. Petru L. Curșeu`,
      picture: no_photo_male,
      mail: `petrucurseu@psychology.ro`,
      cven: `https://www.tilburguniversity.edu/webwijs/show/?uid=p.l.curseu`
    },
    {
      title: `Prof. univ. dr. Mircea Miclea`,
      picture: mirceamiclea,
      mail: `mirceamiclea@psychology.ro`,
      cvro: `https://drive.google.com/file/d/0Bzswdr6cSo4-MWdJR1NXVGNSYkU/view?resourcekey=0-PuouGpbffIg50G76z2-R-g`,
      cven: `https://drive.google.com/file/d/0Bzswdr6cSo4-Z2I5bl9fTE9YLTA/view?resourcekey=0-x1HciVEkiaC_168jkRAShQ`
    },
    {
      title: `Prof. univ. dr. Andrei C. Miu`,
      picture: Andrei_Miu_2010,
      mail: `andreimiu@psychology.ro`,
      cvro: `https://docs.google.com/document/d/1FCiFATr75daR5_7GqMq-n60inRBeHQNxTjDRpFDvcvs/edit`,
      cven: `https://docs.google.com/document/d/1V7SBdz5ocD91cqQ4JmbTFLy9dLVhH6--psuQdNOHGf4/edit`
    },
    {
      title: `DProf. univ. dr. Adrian Opre`,
      picture: adrian_opre,
      mail: `adrianopre@psychology.ro`,
      cvro: `https://docs.google.com/document/d/13KU6Y7eQzsa0IdFugn35yG5A8328oRLBqS9fhC_dBss/edit`,
      cven: `https://docs.google.com/document/d/16Qp2rPH9YWEqXb6nrq4TAB4fUFKlA3PI_9w3n8SQysg/edit`
    },
    {
      title: `Conf. univ. dr. Ioan Buș`,
      picture: busioan_77x100,
      mail: `ioanbus@psychology.ro`,
      cvro: `https://docs.google.com/document/d/1qsqqC64ujCOr2QZGn91DfuWqy16t6P6eXc9oxA1ZOmQ/edit`,
      cven: `https://docs.google.com/document/d/1IHWHDabQLaWESOHktL-F39pUlG6j_Sum-9p2FXzXhvQ/edit`
    },
    {
      title: `Conf. univ. dr. Dorothea (Thea) A. Ionescu`,
      picture: theaionescu2018,
      description: `Domenii de interes: Flexibilitate cognitivă – dezvoltare şi mecanisme; Dezvoltarea categorizării; Formarea conceptelor; Cogniţie ancorată (Embodied/Grounded Cognition) – implicaţii pentru dezvoltare şi educaţie; Supradotare şi fenomenul de insight în rezolvarea creativă de probleme; Educaţie timpurie`,
      mail: `theaionescu@psychology.ro`,
      cvro: `https://docs.google.com/document/d/1p5EyNMcYMo6xFFWrkObrjbdZMW6_crzGoGVM77dTHwg/edit`,
      cven: `https://docs.google.com/document/d/1PYmCLgXHsEReYUhVPx84FrqngjvUrVzSIIzcRAyKqf8/edit`
    },
    {
      title: `Conf. Univ. dr. Viorel Mih`,
      picture: viorel_mih,
      description: `Conf. dr. Mih Viorel Beniamin este titular la Catedra de Psihologie din cadrul Universitatii Babes Bolyai.`,
      mail: `viorelmih@psychology.ro`,
      cvro: `https://docs.google.com/document/d/10s-Rb7cS2XQKwmT4zUGFL4qOtHNBgJ3mSePqOTnI6Ns/edit`,
      cven: `https://docs.google.com/document/d/1gLQpxhhrRUC0FUMYaGwp4v3RcwnjCN5-43aqLyFKflY/edit`
    },
    {
      title: `Conf. univ. dr. Oana Negru-Subțirică`,
      picture: oana_negru,
      description: `Activitatea mea de cercetare vizează investigarea structurilor şi mecanismelor implicate în dezvoltarea intenţionalităţii în adolescenţă şi în perioada de emergenţă a vârstei adulte, din perspectiva motivaţiei, a scopurilor şi a formării identităţii educaţionale şi vocaţionale.`,
      mail: `oananegru@psychology.ro`,
      cvro: `https://docs.google.com/document/d/1JbD5VIFY9PxaAuHSuZGMtzJNQ7simHAvZOWjoAS9ZOw/edit`,
      cven: `https://docs.google.com/document/d/1Zt30SwYs-A_LausHo3hP2kBpU7A46eRfjSFZBB7UoX0/edit`
    },
    {
      title: `Conf. univ. dr. Laura Visu Petra`,
      picture: LauraVisuPetra2,
      description: `Conf. dr. Laura Visu-Petra este cercetător principal în Laboratorul de Psihologia Dezvoltării, temele de interes fiind dezvoltarea tipică și atipică, la intersecția cu domeniul aplicativ al psihologiei judiciare.`,
      mail: `laurapetra@psychology.ro`,
      cvro: `https://docs.google.com/document/d/1hliVzzGEM8lgUFyMInzG5xZx1rmibmq9c6cOUZZk3W0/edit`,
      cven: `https://docs.google.com/document/d/1g6L_fOv1OFX_QHE54OYlkhfrXlW25MkxVWtkYTsIvns/edit`
    },
    {
      title: `Lect. univ. dr. Robert Balazsi`,
      picture: robertbalazsi,
      mail: `robertbalazsi@psychology.ro`,
      cvro: `https://docs.google.com/document/d/1dAya9qcI9ly9IR25EhGFDlAunr1oQI1dcj7_Q_sx_ZE/edit`,
      cven: `https://docs.google.com/document/d/1jsGrBLP49SAt5fQ2T9JsQpCHVodkrMeiQ1RmwP-5P4A/edit`
    },
    {
      title: `Lect. Univ. dr. Lavinia Cheie`,
      picture: LaviniaCheie,
      description: `Lavinia Cheie este cercetător în cadrul Laboratorului de Psihologia Dezvoltării și lector în domeniul psihologiei dezvoltării tipice și atipice, respectiv în domeniul psihologiei judiciare.`,
      mail: `laviniacheie@psychology.ro`,
      cvro: `https://docs.google.com/document/d/1Pdo1VFS7WM0AtqyzAfH7GJyKsbN_OzPcQBrZ6xFvJfQ/edit`,
      cven: `https://docs.google.com/document/d/1Z3_RMI2GI-jWkswk_jJooA6Rhtr2o_nwbcuUzyZi5GY/edit`
    },
    {
      title: `Lect. univ. dr. Irina Catrinel Crăciun`,
      picture: CatrinelCraciun,
      mail: `catrinelcraciun@psychology.ro`,
      cvro: `https://docs.google.com/document/d/1tCX2D2m6sKg1bOYnl7VR5zLvkevlprYeCcU6ZWepSxA/edit`,
      cven: `https://docs.google.com/document/d/1X2VuuOEKnQ_UxdNRHiJyHhCa46yRMKotpdCd0xNZwHQ/edit`
    },
    {
      title: `Lect. univ. dr. Marius Crăciun`,
      picture: MariusCraciun,
      mail: `mariuscraciun@psychology.ro`,
      cvro: `https://docs.google.com/document/d/1zl8V-hQl3cFyQMmTLNKEEUxfZI6EcS9ucNc_y2uqBCo/edit`,
      cven: `https://docs.google.com/document/d/19HVX-TWAS8bLNJXWEq9XUXaYivbHpyu1H0a3clBYxqU/edit`
    },
    {
      title: `Lect. Univ. Dr. Lavinia Damian`,
      picture: LaviniaDamian2,
      description: `Dr. Lavinia E. Damian este lector universitar în cadrul Departamentului de Psihologie, Universitatea Babeş-Bolyai unde predă seminarii de psihologie şcolară şi consiliere şcolară şi orientare în carieră la nivel licenţă şi promovarea sănătăţii mintale la copil şi adolescent la nivel masteral.`,
      mail: `laviniadamian@psychology.ro`,
      cvro: `https://docs.google.com/document/d/1gmU3nKyo5ojaGZg4QK7FpfCE157KQg3qo_khM6SxHeg/edit`,
      cven: `https://docs.google.com/document/d/1CTSg46Kinb1aYvHlDJwPf-lHggFlfhelH4VyvKPDq8A/edit`
    },
    {
      title: `Lect. univ. dr. Oana Fodor`,
      picture: OanaFodor,
      description: `Oana Fodor este membră în Work and Organizational Psychology Research Centre (WOPRC), în cadrul Departamentului de Psihologie, FPSE, Universitatea Babeş-Bolyai.`,
      mail: `oanafodor@psychology.ro`,
      cvro: `https://docs.google.com/document/d/1CibqySt8P6CPO_LtGDu7RppXRk1wn48nk7IzHBQ7O7A/edit`,
      cven: `https://docs.google.com/document/d/1FV5z0RdvFlQvp1av2KKw10i-wKqLn_23SpQk1Aj4zOw/edit`
    },
    {
      title: `Lect. univ. dr. Renata Heilman`,
      picture: renataheilman,
      description: `Interesele mele de cercetare se centrează pe influenţa diferențelor individuale (ex: emoţii şi strategii de reglare emoţională, trăsături de personalitate, factori cognitivi) asupra diferitelor aspecte ale procesului decizional.`,
      mail: `renataheilman@psychology.ro`,
      cvro: `https://docs.google.com/document/d/1XvTNHCd4e2dfA2qv439NPIE4RMU35w60g_buDAy7INA/edit`,
      cven: `https://docs.google.com/document/d/1lHl_pihXpGIN5FNsx2s4n7rTm33A8S6T04Dpts0FLV0/edit`
    },
    {
      title: `Lect. univ. dr. Éva Kállay`,
      picture: EvaKallay,
      description: `Domenii și interese de cercetare: Sănătate emoţională, Inteligența emoţională, Trauma şi dezvoltarea posttraumatică, Construcţia sensului, Coaching, Psihologie Educaţională, Promovarea sănătăţii în şcoli, Dezvoltarea abilităţilor emoţionale şi sociale la copii şi adolescenţi`,
      mail: `evakallay@psychology.ro`,
      cvro: `https://docs.google.com/document/d/1sbvH2Rh5snbbyGdXI53rNogSM3O23XzhmNpg-1iBpSU/edit`,
      cven: `https://docs.google.com/document/d/1-GjGNcyhlQzYLMmnmbWPw7AT9XKQxIbN2NRibIYB3Rc/edit`
    },
    {
      title: `Lect. Univ. Dr. Ramona Moldovan`,
      picture: ramona_moldovan,
      mail: `ramonamoldovan@psychology.ro`,
      cvro: `https://docs.google.com/document/d/1Kf9x0bTowQESm7kpYj43XjPd-QA90QtegHXLGC4FPpo/edit`,
      cven: `https://docs.google.com/document/d/16QarFZavnll2XqqWnITenHAWkW986Ak9KH3jbF6o5uc/edit`
    },
    {
      title: `Lect. univ. dr. Dana Opre`,
      picture: DanaOpre130x160,
      mail: `danaopre@psychology.ro`,
      cvro: `https://docs.google.com/document/d/1DPNfC8Ria-mPzDmW8j4CokRcq1768d5JAEVx_JSvy6Q/edit`,
      cven: `https://docs.google.com/document/d/1lwPrqZMtMHsgANJxNCzrW0eCY4LBPXWqpZn1s4VjMrI/edit`
    },
    {
      title: `Lect. univ. dr. Sebastian Pintea`,
      picture: SebastianPintea,
      description: `Sebastian Pintea este lector in cadrul Departamentului de Psihologie, UBB, fiind licentiat in specializarile Sociologie (Universitatatea Babes-Bolyai din Cluj-Napoca) si Psihologie (Universitatea de Vest din Timisoara).`,
      mail: `sebastianpintea@psychology.ro`,
      cvro: `https://docs.google.com/document/d/16ziUZ6sr0sKDjGfJ4sq7JWipOJh7S0CLzvN30nBF7e0/edit`,
      cven: `https://docs.google.com/document/d/1ikYLTnD77gFR38B4CxJeZtfXFnwhyG6hAx3_PzkdQVc/edit`
    },
    {
      title: `Lect. univ. dr. Lucia Rațiu`,
      picture: lucia_ratiu,
      description: `Lucia Ratiu este lector universitar în cadrul Departamentului de Psihologie al Universităţii Babeş-Bolyai şi membră a grupului de cercetare în Psihologia Muncii şi Organizaţională.`,
      mail: `luciaratiu@psychology.ro`,
      cvro: `https://docs.google.com/document/d/1FBgaSsPay5Q_4gJyN70g6m1gvub61rBxRH_Crn1A_EI/edit`,
      cven: `https://docs.google.com/document/d/13mJgjwukfPPknzgkaJdg-5gYXECWrwZjgkWbNQYGVd4/edit`
    },
    {
      title: `Lect. univ. dr. Claudia Rus`,
      picture: ClaudiaRus,
      description: `Claudia L. Rus este membru al Centrului de cercetare în Psihologia Muncii şi Organizaţională.`,
      mail: `claudiarus@psychology.ro`,
      cvro: `https://docs.google.com/document/d/1oGvVpGKZDDmk1-5CVrHXEQRGyCOg9m7dJ__1hdd-WwA/edit`,
      cven: `https://docs.google.com/document/d/1B5EmkLMf0viJlEElmfF2u79-1dl5VgEykvqCs2UgoMk/edit`
    },
    {
      title: `Lect. Univ. dr. Catrinel Alice Ștefan`,
      picture: CatrinelStefan,
      description: `Interesele mele de cercetare se situează la intersecția dintre psihologia educațională, psihologia dezvoltării și psihologia sănătății.`,
      mail: `catrinelstefan@psychology.ro`,
      cvro: `https://docs.google.com/document/d/1pZAJm91ZknYN3l2z-I2-Cqh3I3ucY_Q98s9PqnOeyTw/edit`,
      cven: `https://docs.google.com/document/d/1HlTvniYg-WS6chy2UHQxEtLZcaTQVv3iRhbq5QpuEEk/edit`
    },
    {
      title: `Lect. univ. dr. Diana Tăut`,
      picture: diana_taut,
      mail: `dianataut@psychology.ro`,
      cvro: `https://docs.google.com/document/d/18M7HZZXNgg8sfu1tnoszOVtQc_qz_KDZZbGaU_UMhjo/edit`,
      cven: `https://docs.google.com/document/d/1d89M3nRj5_tDhSQtqSE1gJ9ZCFNm2SojREEPlF_boXM/edit`
    },
    {
      title: `Asist. univ. Dr. Bianca Macavei`,
      picture: no_photo_female,
      mail: `biancamacavei@psychology.ro`,
      cvro: `https://docs.google.com/document/d/1A8toMq2Yx2-1LJQACfLZ6GiafcBx5MinolTyYHtw3KU/edit`,
      cven: `https://docs.google.com/document/d/1QE1Ep9sMx8wRh2OOyfP9rEdrSdYNA5zFoZ8E6zec0_w/edit`
    },
    {
      title: `Asist. univ. dr. Cătălina Oțoiu`,
      picture: CatalinaOtoiu,
      mail: `catalinaotoiu@psychology.ro`,
      cvro: `https://docs.google.com/document/d/1f-PpXZ65mqzNyJ9jrf9SldDVfUX6ETGeSHLCt7fvLNI/edit`,
      cven: `https://docs.google.com/document/d/1pnwcMfIV2uWdY1oqbfmQJipB-lFbuPWHAnb19yPnRmY/edit`
    },
  ];

  return (
    <ScreenTemplate
      title={"Cadre didactice"}
      sections={[
        {
          component: (
            <MyCarousel
              slides={teachers.map((obj) => (
                <Flex align={"center"} justify={"center"} p={"5vh"}>
                  <VStack>
                    <Heading fontSize="3vh">
                      {obj.title}
                    </Heading>
                    <br />
                    <Image src={obj.picture} h="30vh" />
                    <br />
                    <Text align={"center"}>
                      {obj.description} <br />
                      <b>Contact:</b> {obj.mail} <br />{" "}
                      <b>CV:</b>{" "}
                      <Link
                        href={obj.cvro}
                        isExternal
                      >
                        CV-ro
                      </Link>
                      ,{" "}
                      <Link
                        href={obj.cven}
                        isExternal
                      >
                        CV-en
                      </Link>
                    </Text>
                  </VStack>
                </Flex>
              ))}
            />
          ),
        },
        {
          component: (
            <Button bgColor={"purple.200"} maxW={"300"}>
              <a href={CadreDidactice} target="_blank" rel="noreferrer">
                Vizualizare listă cadre didactice
              </a>
            </Button>
          ),
        },
      ]}
    />
  );
}
