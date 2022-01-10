import { Box, Flex, Heading, Image, Input, Text } from "@chakra-ui/react";
import { collection, getDocs, orderBy, query } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import LOGO from "../../assets/russo_logo.png";
import ScreenTemplate from "../../components/ScreenTemplate";
import { db } from "../../firebase";

export default function HomeScreen() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    (async () => {
      fetchData();
    })();
  }, []);

  const fetchData = async () => {
    const q = query(collection(db, "news"), orderBy("date", "desc"));
    const querySnapshot = await getDocs(q);
    let data = [];
    querySnapshot.forEach((doc) => {
      data.push(doc.data());
    });

    setNews(data);
  };

  const search = (e) => {
    if (!e.target.value) fetchData();
    if (e.key === "Enter") {
      const searchText = e.target.value.toLowerCase();
      setNews((current) =>
        current.filter(
          (obj) =>
            obj.title.toLowerCase().includes(searchText) ||
            obj.text.toLowerCase().includes(searchText)
        )
      );
    }
  };

  return (
    <ScreenTemplate
      sections={[
        {
          component: (
            <Flex flexDir={"column"}>
              <Flex align={"center"}>
                <Image src={LOGO} w="12vh" h="12vh" />
                <Box ml={"1vh"}>
                  <Heading fontSize="3.5vh">RUSO</Heading>
                  <Text fontSize="1.5vh" fontWeight={"bold"}>
                    Psihologia Resurselor Umane şi Sănătate Organizaţională
                  </Text>
                </Box>
              </Flex>
              <Heading fontSize="4.5vh" my={"2vh"}>
                Salutare și bine ai venit
              </Heading>
              <Input
                placeholder="Căutare pe site.."
                my={"1vh"}
                onKeyUp={(e) => search(e)}
              />

              <Heading mt={"1vh"}>Noutăți și anunțuri</Heading>
              {news.map((obj, i) => (
                <Flex flexDir={"column"} my={"1vh"} key={i}>
                  <Text fontSize={"2vh"} fontWeight={"bold"}>
                    {obj.title}
                  </Text>
                  <Text fontSize={"1.5vh"}>
                    {new Date(obj.date).toLocaleString()}
                  </Text>
                  <Text>{obj.text}</Text>
                </Flex>
              ))}
            </Flex>
          ),
        },
      ]}
    />
  );
}
