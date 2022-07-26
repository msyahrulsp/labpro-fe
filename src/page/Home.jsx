import { useEffect } from "react";
import {
  Flex,
  Image,
  Button,
  Text
} from "@chakra-ui/react";
import { PageLayout } from "../layout/PageLayout";
import { BiRightArrowAlt } from "react-icons/bi";

export const Home = () => {
  useEffect(() => {
    document.title = "Home";
  }, []);
  
  return (
    <PageLayout>
      <Flex
        flexDirection="row"
        justifyContent="space-evenly"
        alignItems="center"
        bg="darkCyan"
        borderRadius="lg"
        flexWrap="wrap"
        py={{ base: "6", lg: "0" }}
      >
        <Flex
          flexDirection="column"
          gap={2}
        >
          <Text as="b" fontSize="2xl" color="white">
            Pentransferan Uang dengan<br />BNMO
          </Text>
          <Button>Cek Profile&nbsp;<BiRightArrowAlt /></Button>
        </Flex>
        <Image src={require("../image/logo.png")} alt="logo" objectFit="inherit" />
      </Flex>
    </PageLayout>
  )
}