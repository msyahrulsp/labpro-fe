import { useEffect } from "react";
import {
  Flex,
  Image,
  Button,
  Text
} from "@chakra-ui/react";
import { PageLayout } from "../layout/PageLayout";
import { BiRightArrowAlt } from "react-icons/bi";
import { useAuth } from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";

export const Home = () => {
  const auth = useAuth();
  const navigate = useNavigate();
  useEffect(() => {
    document.title = "Home - BNMO";
  }, []);

  return (
    <PageLayout>
      <Flex
        flexDirection="row"
        justifyContent="space-evenly"
        alignItems="center"
        borderRadius="lg"
        flexWrap="wrap"
        mt={10}
        py={{ base: "6", lg: "0" }}
        minH="70vh"
      >
        <Flex
          flexDirection="column"
          gap={2}
        >
          <Text as="b" fontSize="2xl" color="darkCyan">
            Memainkan Uang dengan<br />BNMO
          </Text>
          {auth.user === null ? (
            <Button bg="blue" color="white" onClick={() => navigate("/login")}>Login&nbsp;<BiRightArrowAlt /></Button>
          ) : (
            auth.user?.role === 'admin' ? (
              <Button bg="blue" color="white" onClick={() => navigate("/verifikasi")}>Cek Verifikasi&nbsp;<BiRightArrowAlt /></Button>
            ) : (
              <Button bg="blue" color="white" onClick={() => navigate("/profile")}>Cek Profile&nbsp;<BiRightArrowAlt /></Button>
            )
          )}
        </Flex>
        <Image src={require("../image/logo.png")} alt="logo" objectFit="inherit" />
      </Flex>
    </PageLayout>
  )
}