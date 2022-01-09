import { Text, Flex, Image, Box, Heading } from "@chakra-ui/react";
import React from "react";
import LOGO from "../../assets/russo_logo.png";
import MyCarousel from "../../components/MyCarousel/MyCarousel";
import ScreenTemplate from "../../components/ScreenTemplate";
import { List, ListItem, ListIcon, OrderedList, UnorderedList } from "@chakra-ui/react";
import { MdCheckCircle } from "react-icons/md";

import LogoFirme1 from "../../assets/Firme/LogoFirme1.png";
import LogoFirme2 from "../../assets/Firme/LogoFirme2.png";
import LogoFirme3 from "../../assets/Firme/LogoFirme3.png";
import LogoFirme4 from "../../assets/Firme/LogoFirme4.png";
import LogoFirme5 from "../../assets/Firme/LogoFirme5.png";
import LogoFirme6 from "../../assets/Firme/LogoFirme6.png";
import LogoFirme7 from "../../assets/Firme/LogoFirme7.png";
import LogoFirme8 from "../../assets/Firme/LogoFirme8.png";
import LogoFirme9 from "../../assets/Firme/LogoFirme9.png";
import LogoFirme10 from "../../assets/Firme/LogoFirme10.png";
import LogoFirme11 from "../../assets/Firme/LogoFirme11.png";
import LogoFirme12 from "../../assets/Firme/LogoFirme12.png";
import LogoFirme13 from "../../assets/Firme/LogoFirme13.png";
import LogoFirme14 from "../../assets/Firme/LogoFirme14.png";
import LogoFirme15 from "../../assets/Firme/LogoFirme15.png";
import LogoFirme16 from "../../assets/Firme/LogoFirme16.png";
import LogoFirme17 from "../../assets/Firme/LogoFirme17.png";
import LogoFirme18 from "../../assets/Firme/LogoFirme18.png";
import LogoFirme19 from "../../assets/Firme/LogoFirme19.png";
import LogoFirme20 from "../../assets/Firme/LogoFirme20.png";

export default function OpportunitiesScreen() {
	const oportunities = [
		{ text: "Departamente de resurse umane și dezvoltare organizațională din organizaţii private, multinaționale, de stat şi non-guvernamentale" },
		{ text: "Firme de consultanţă în domeniul resurselor umane din ţară şi străinătate" },
		{ text: "Institute de cercetare privind munca, resursele umane, sănătatea organizaţională" },
		{ text: "Instituţii educaţionale din sistemul preuniversitar şi universitar" },
		{
			text: "Agenţii şi asociaţii naţionale şi internaţionale în domeniu (Masteratul este construit în acord cu principiile Asociaţiei Europene de Psihologia Muncii şi Organizaţională - EAWOP)",
		},
	];
	const logos = [
		{ LogoFirme1 },
		{ LogoFirme2 },
		{ LogoFirme3 },
		{ LogoFirme4 },
		{ LogoFirme5 },
		{ LogoFirme6 },
		{ LogoFirme7 },
		{ LogoFirme8 },
		{ LogoFirme9 },
		{ LogoFirme10 },
		{ LogoFirme11 },
		{ LogoFirme12 },
		{ LogoFirme13 },
		{ LogoFirme14 },
		{ LogoFirme15 },
		{ LogoFirme16 },
		{ LogoFirme17 },
		{ LogoFirme18 },
		{ LogoFirme19 },
		{ LogoFirme20 },
	];
	const firme = [];
	for (let index = 0; index < logos.length; index++) {
		console.log(logos[index]);
		// firme.push(`../../assets/Firme/LogoFirme${index}.png`);
		firme.push(
			<Flex align={"center"} justify={"center"} p={"5vh"} bgColor={"purple.200"}>
				<Image src={logos[index][`LogoFirme${index + 1}`]} h="50vh" objectFit={"fill"} />
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
