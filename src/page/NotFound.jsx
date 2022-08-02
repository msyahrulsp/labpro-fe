import { useEffect } from "react";
import {
  Flex,
  Text,
  Button,
  Container
} from "@chakra-ui/react";
import { PageAnimate } from "../layout/PageLayout";
import { Link } from "react-router-dom";

export const PageNotFound = () => {
  console.log("Here");
  useEffect(() => {
    document.title = "404 - BNMO";
  }, []);

  return (
    <PageAnimate>
      <Flex
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        h="100vh"
      >
        <Container
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          bg="#FFFFFF"
          py={9}
          px={5}
          borderTopRadius="lg"
          boxShadow= "3px 4px 4px gray, inset 3px 5px 4px lightgray"
          gap={3}
        >
          <Text color="darkCyan" as="b">Halaman Tidak Ditemukan</Text>
          <Button bg="blue" color="white">
            <Link to="/">
              Kembali Ke Halaman Utama
            </Link>
          </Button>
        </Container>
      </Flex>
    </PageAnimate>
  )
}