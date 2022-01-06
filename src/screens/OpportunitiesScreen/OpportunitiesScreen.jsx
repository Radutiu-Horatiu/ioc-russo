import { Text, Flex, Image } from "@chakra-ui/react";
import React from "react";
import LOGO from "../../assets/russo_logo.png";
import MyCarousel from "../../components/MyCarousel/MyCarousel";
import ScreenTemplate from "../../components/ScreenTemplate";
import { List, ListItem, ListIcon, OrderedList, UnorderedList } from "@chakra-ui/react";
import { MdCheckCircle } from "react-icons/md";
export default function OpportunitiesScreen() {
	return (
		/*
		• Departamente de resurse umane și dezvoltare organizațională din organizaţii private, multinaționale, de stat şi non-guvernamentale
• Firme de consultanţă în domeniul resurselor umane din ţară şi străinătate
• Institute de cercetare privind munca, resursele umane, sănătatea organizaţională
• Instituţii educaţionale din sistemul preuniversitar şi universitar
• Agenţii şi asociaţii naţionale şi internaţionale în domeniu (Masteratul este construit în
acord cu principiile Asociaţiei Europene de Psihologia Muncii şi Organizaţională – EAWOP)

		*/
		<ScreenTemplate
			title={"Oportunitati profesionale"}
			sections={[
				{
					component: (
						<List spacing={6} fontSize={20}>
							<ListItem>
								<ListIcon as={MdCheckCircle} color="green.500" />
								Departamente de resurse umane și dezvoltare organizațională din organizaţii private, multinaționale, de stat şi non-guvernamentale
							</ListItem>
							<ListItem>
								<ListIcon as={MdCheckCircle} color="green.500" />
								Firme de consultanţă în domeniul resurselor umane din ţară şi străinătate
							</ListItem>
							<ListItem>
								<ListIcon as={MdCheckCircle} color="green.500" />
								Institute de cercetare privind munca, resursele umane, sănătatea organizaţională
							</ListItem>
							<ListItem>
								<ListIcon as={MdCheckCircle} color="green.500" />
								Instituţii educaţionale din sistemul preuniversitar şi universitar
							</ListItem>
							<ListItem>
								<ListIcon as={MdCheckCircle} color="green.500" />
								Agenţii şi asociaţii naţionale şi internaţionale în domeniu (Masteratul este construit în acord cu principiile Asociaţiei Europene de Psihologia
								Muncii şi Organizaţională - EAWOP)
							</ListItem>
						</List>
					),
				},
			]}
		/>
	);
}
