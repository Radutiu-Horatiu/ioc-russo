import { Text, Flex, Image } from "@chakra-ui/react";
import React from "react";
import LOGO from "../../assets/russo_logo.png";
import MyCarousel from "../../components/MyCarousel/MyCarousel";
import ScreenTemplate from "../../components/ScreenTemplate";
import { List, ListItem, ListIcon, OrderedList, UnorderedList } from "@chakra-ui/react";
import { MdMenuBook } from "react-icons/md";

export default function PresentingDetailedScreen() {
	const subText = "Lista disciplinelor studiate în cadrul masteratului";
	const semestre = [
		{
			titlu: "Semestrul 1",
			materii: [
				"Psihologia personalului / Personnel Psychology",
				"Advanced Organizational Psychology / Psihologie organizațională avansată (în limba engleză)",
				"Metodologia cercetării și analiza datelor I (elemente de etică, noțiuni de bază de Excel & SPSS) / Research methodology and data analysis I (ethics, basic concepts of Excel & SPSS)",
				"Psihologie antreprenorială / Psychology of entrepreneurship",
				"Managerial Decision Making/Decizia managerială (în limba engleză)",
				"Stagiu practic 1 / Traineeship 1",
			],
		},
		{
			titlu: "Semestrul 2",
			materii: [
				"Occupational Health Psychology / Psihologia sănătății ocupaționale (în limba engleză)",
				"Methods of Enhancing Group Performance / Metode de optimizare a performanței grupurilor (în limba engleză)",
				"Knowledge Management and Innovation / Managementul cunoștințelor și inovație (în limba engleză)",
				"Metodologia cercetării și analiza datelor II (nivel avansat) / Research methodology and data analysis II (advanced)",
				"Managementul proiectelor / Project Management",
				"Stagiu practic 2 / Traineeship 2",
				"Curs opțional: Tehnici de analiză de conținut în organizații / Content analysis in organisations",
				"Curs opțional: Sănătate și stare de bine în organizații / Health and wellbeing in organizations",
			],
		},
		{
			titlu: "Semestrul 3",
			materii: [
				"Coaching: metode și tehnici / Coaching: methods and techniques",
				"Management strategic / Strategic Management",
				"Diagnoză organizațională / Organizational Diagnosis (în limba engleză)",
				"Psihologie antreprenorială / Psychology of entrepreneurship",
				"Training în organizații / Training in organizations",
				"Research in Organizations I / Stagiu de cercetare în organizații I (în limba engleză)",
				"Curs opțional: Consumer Psychology and Social Marketing / Psihologia consumatorului și marketing social (în limba engleză)",
				"urs opțional: Gaming and Simulations / Simulări și metoda jocurilor (în limba engleză)",
			],
		},
		{
			titlu: "Semestrul 4",
			materii: [
				"Research in Organizations II (applied research, research ethics and preparing the disertation) / Stagiu de cercetare în organizații II (cercetare aplicată, etica cercetării și pregătirea disertației) (în limba engleză)",
				"Dezvoltare organizațională / Organizational Development",
				"Multi-party Collaboration and Negotiation / Colaborare și negociere (în limba engleză)",
				"Writing and Presentation Skills / Abilități de redactare a unui manuscris științific și prezentare (în limba engleză)",
				"Technology and Society / Tehnologie și societate (în limba engleză)",
				"Centre de evaluare și dezvoltare a personalului / Assessment centers and personnel development",
			],
		},
	];
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
							<List spacing={6} fontSize={14} my={"5vh"}>
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
