import { Flex, Heading, Image, VStack, Text, Link, Button } from "@chakra-ui/react";
import React from "react";
import adriana_baban from "../../assets/adriana_baban.png";
import no_photo_male from "../../assets/no_photo_male.png";
import mirceamiclea from "../../assets/mirceamiclea.png";
import robertbalazsi from "../../assets/robertbalazsi.png";
import OanaFodor from "../../assets/Oana Fodor.png";
import renataheilman from "../../assets/renataheilman.png";
import DanaOpre130x160 from "../../assets/DanaOpre130x160.jpg";
import SebastianPintea from "../../assets/SebastianPintea.png";
import ClaudiaRus from "../../assets/ClaudiaRus.png";
import diana_taut from "../../assets/diana_taut.png";
import no_photo_female from "../../assets/no_photo_female.png";
import CatalinaOtoiu from "../../assets/Catalina Otoiu.png";
import lucia_ratiu from "../../assets/lucia_ratiu.png";
import MyCarousel from "../../components/MyCarousel/MyCarousel";
import ScreenTemplate from "../../components/ScreenTemplate";
import CadreDidactice from "../../assets/Cadre didactice.pdf";

export default function TeachingStaffScreen() {
  const teachers = [
    {
      title: `Prof. Univ. Dr. Petru L. Curșeu (Coordonator Program de master)`,
      picture: no_photo_male,
      mail: `petrucurseu@psychology.ro`,
      cven: `https://www.tilburguniversity.edu/webwijs/show/?uid=p.l.curseu`
    },
    {
      title: `Prof. Univ. Dr. Adriana Băban`,
      picture: adriana_baban,
      description: `Profesor specializat în Psihologia Sănătății, Medicină Comportamentală & Psihosomatică și Metode de Cercetare Calitativă`,
      mail: `adrianababan@psychology.ro`,
      cvro: `https://drive.google.com/file/d/12FFIaj0iJ_i4SPgy2v_lVMHOUireQiGH/view`,
      cven: `https://drive.google.com/file/d/12FFIaj0iJ_i4SPgy2v_lVMHOUireQiGH/view`
    },
    {
      title: `Prof. Univ. Dr. Mircea Miclea`,
      picture: mirceamiclea,
      mail: `mirceamiclea@psychology.ro`,
      cvro: `https://drive.google.com/file/d/0Bzswdr6cSo4-MWdJR1NXVGNSYkU/view?resourcekey=0-PuouGpbffIg50G76z2-R-g`,
      cven: `https://drive.google.com/file/d/0Bzswdr6cSo4-Z2I5bl9fTE9YLTA/view?resourcekey=0-x1HciVEkiaC_168jkRAShQ`
    },
    {
      title: `Conf. Univ. Dr. Robert Balazsi`,
      picture: robertbalazsi,
      mail: `robertbalazsi@psychology.ro`,
      cvro: `https://docs.google.com/document/d/1dAya9qcI9ly9IR25EhGFDlAunr1oQI1dcj7_Q_sx_ZE/edit`,
      cven: `https://docs.google.com/document/d/1jsGrBLP49SAt5fQ2T9JsQpCHVodkrMeiQ1RmwP-5P4A/edit`
    },
    {
      title: `Lect. Univ. Dr. Dana Opre`,
      picture: DanaOpre130x160,
      mail: `danaopre@psychology.ro`,
      cvro: `https://docs.google.com/document/d/1DPNfC8Ria-mPzDmW8j4CokRcq1768d5JAEVx_JSvy6Q/edit`,
      cven: `https://docs.google.com/document/d/1lwPrqZMtMHsgANJxNCzrW0eCY4LBPXWqpZn1s4VjMrI/edit`
    },
    {
      title: `Lect. Univ. Dr. Sebastian Pintea`,
      picture: SebastianPintea,
      description: `Sebastian Pintea este lector in cadrul Departamentului de Psihologie, UBB, fiind licentiat in specializarile Sociologie (Universitatatea Babes-Bolyai din Cluj-Napoca) si Psihologie (Universitatea de Vest din Timisoara).`,
      mail: `sebastianpintea@psychology.ro`,
      cvro: `https://docs.google.com/document/d/16ziUZ6sr0sKDjGfJ4sq7JWipOJh7S0CLzvN30nBF7e0/edit`,
      cven: `https://docs.google.com/document/d/1ikYLTnD77gFR38B4CxJeZtfXFnwhyG6hAx3_PzkdQVc/edit`
    },
    {
      title: `Lect. Univ. Dr. Claudia Lenuța Rus`,
      picture: ClaudiaRus,
      description: `Claudia L. Rus este membru al Centrului de cercetare în Psihologia Muncii şi Organizaţională.`,
      mail: `claudiarus@psychology.ro`,
      cvro: `https://docs.google.com/document/d/1oGvVpGKZDDmk1-5CVrHXEQRGyCOg9m7dJ__1hdd-WwA/edit`,
      cven: `https://docs.google.com/document/d/1B5EmkLMf0viJlEElmfF2u79-1dl5VgEykvqCs2UgoMk/edit`
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
      title: `Lect. Univ. Dr. Cătălina Oțoiu`,
      picture: CatalinaOtoiu,
      mail: `catalinaotoiu@psychology.ro`,
      cvro: `https://docs.google.com/document/d/1f-PpXZ65mqzNyJ9jrf9SldDVfUX6ETGeSHLCt7fvLNI/edit`,
      cven: `https://docs.google.com/document/d/1pnwcMfIV2uWdY1oqbfmQJipB-lFbuPWHAnb19yPnRmY/edit`
    },
    {
      title: `Lect. Univ. Dr. Oana Cătălina Fodor`,
      picture: OanaFodor,
      description: `Oana Fodor este membră în Work and Organizational Psychology Research Centre (WOPRC), în cadrul Departamentului de Psihologie, FPSE, Universitatea Babeş-Bolyai.`,
      mail: `oanafodor@psychology.ro`,
      cvro: `https://docs.google.com/document/d/1CibqySt8P6CPO_LtGDu7RppXRk1wn48nk7IzHBQ7O7A/edit`,
      cven: `https://docs.google.com/document/d/1FV5z0RdvFlQvp1av2KKw10i-wKqLn_23SpQk1Aj4zOw/edit`
    },
    {
      title: `Lect. Univ. Dr. Diana Tăut`,
      picture: diana_taut,
      mail: `dianataut@psychology.ro`,
      cvro: `https://docs.google.com/document/d/18M7HZZXNgg8sfu1tnoszOVtQc_qz_KDZZbGaU_UMhjo/edit`,
      cven: `https://docs.google.com/document/d/1d89M3nRj5_tDhSQtqSE1gJ9ZCFNm2SojREEPlF_boXM/edit`
    },
    {
      title: `Lect. Univ. Dr. Renata Melinda Heilman`,
      picture: renataheilman,
      description: `Interesele mele de cercetare se centrează pe influenţa diferențelor individuale (ex: emoţii şi strategii de reglare emoţională, trăsături de personalitate, factori cognitivi) asupra diferitelor aspecte ale procesului decizional.`,
      mail: `renataheilman@psychology.ro`,
      cvro: `https://docs.google.com/document/d/1XvTNHCd4e2dfA2qv439NPIE4RMU35w60g_buDAy7INA/edit`,
      cven: `https://docs.google.com/document/d/1lHl_pihXpGIN5FNsx2s4n7rTm33A8S6T04Dpts0FLV0/edit`
    },
    {
      title: `Dr. Mara Bria`,
      picture: no_photo_female
    },
    {
      title: `Dr. Daniela Dumulescu`,
      picture: no_photo_female
    }
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
