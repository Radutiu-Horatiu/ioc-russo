import {
  Button,
  Flex,
  Input,
  Text,
  Textarea,
  useToast,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import ScreenTemplate from "../../components/ScreenTemplate";
import {
  collection,
  deleteDoc,
  doc,
  getDocs,
  orderBy,
  query,
  setDoc,
} from "firebase/firestore";
import { db } from "../../firebase";
import { useRef } from "react";
import { nanoid } from "nanoid";

export default function LoginScreen() {
  const [news, setNews] = useState([]);

  const toast = useToast();
  const textRef = useRef(null);
  const titleRef = useRef(null);

  useEffect(() => {
    (async () => {
      const q = query(collection(db, "news"), orderBy("date", "desc"));
      const querySnapshot = await getDocs(q);
      let data = [];
      querySnapshot.forEach((doc) => {
        data.push(doc.data());
      });

      setNews(data);
    })();
  }, []);

  const deleteObj = async (id) => {
    setNews((current) => current.filter((obj) => obj.id !== id));
    await deleteDoc(doc(db, "news", id.toString()));

    toast({
      title: "Success.",
      description: "Element sters.",
      status: "success",
      duration: 5000,
      isClosable: true,
      position: "top-right",
    });
  };

  const addObj = () => {
    const myId = nanoid();

    const newObj = {
      title: titleRef.current.value,
      text: textRef.current.value,
      id: myId,
      date: new Date().getTime(),
    };

    titleRef.current.value = "";
    textRef.current.value = "";

    setDoc(doc(db, "news", myId), newObj);
    setNews((current) => [newObj, ...current]);

    toast({
      title: "Success.",
      description: "Element adaugat cu succes.",
      status: "success",
      duration: 5000,
      isClosable: true,
      position: "top-right",
    });
  };

  return (
    <ScreenTemplate
      title={"Admin"}
      mainText={"Meniu de gestionare a website-ului."}
      sections={[
        {
          title: "Adaugare",
          component: (
            <Flex flexDir={"column"}>
              <Text>Titlu</Text>
              <Input placeholder="Titlu sugestiv.." ref={titleRef} />
              <Text mt={"1vh"}>Text</Text>
              <Textarea
                placeholder="Descrierea noutatii aici.."
                ref={textRef}
              />
              <Button bgColor={"purple.200"} mt={"2vh"} onClick={addObj}>
                + Adaugare noutate
              </Button>
            </Flex>
          ),
        },
        {
          title: "Noutatile mele",
          component: (
            <Flex flexDir={"column"}>
              {news.map((obj, i) => (
                <Flex flexDir={"column"} my={"1vh"} key={i}>
                  <Text fontSize={"2vh"} fontWeight={"bold"}>
                    {obj.title}
                  </Text>
                  <Text fontSize={"1.5vh"}>
                    {new Date(obj.date).toLocaleString()}
                  </Text>
                  <Text>{obj.text}</Text>
                  <Button
                    w={"33%"}
                    mt={"1vh"}
                    onClick={() => deleteObj(obj.id)}
                  >
                    Stergere
                  </Button>
                </Flex>
              ))}
            </Flex>
          ),
        },
      ]}
    />
  );
}
