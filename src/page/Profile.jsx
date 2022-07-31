import { Container, Flex, Text, Avatar } from "@chakra-ui/react";
import { useEffect } from "react";
import { useRole } from "../hooks/useRole";
import { useAuth } from "../hooks/useAuth";
import { PageLayout } from "../layout/PageLayout";
import { Loading } from "../component/Loading/Loading";

export const Profile = () => {
  const { isAuthorized } = useRole('customer');
  const auth = useAuth();
  const user = auth.user;

  const data = [
    { label: "Nama Lengkap", value: user?.nama },
    { label: "No Rekening", value: user?.norek },
    { label: "Saldo", value: new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
    }).format(user?.saldo) },
  ]

  useEffect(() => {
    document.title = "Profile - BNMO"
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAuthorized]);
  
  return (
    <PageLayout>
      {isAuthorized ? (
        <Container maxW={{ base: "85%", lg: "70ch" }}>
          <Flex
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
              bg="#FFFFFF"
              py={5}
              px={7}
              mt={8}
              borderRadius="lg"
              boxShadow= "3px 4px 4px gray, inset 3px 5px 4px lightgray"
            >
              <Avatar mb={4} src={require("../image/logo.png")} bg="inherit" size="lg" name={user.nama} />
              {data.map((item, idx) => {
                return (
                  <Container
                    mb={2}
                    key={idx}
                    borderRadius="lg"
                    px={3}
                    py={2}
                    boxShadow="inset 3px 5px 10px lightgray"  
                  >
                    <Text color="darkCyan" as="b" textAlign="left">
                      {item.label}
                    </Text>
                    <Text textAlign="right">
                      {item.value}
                    </Text>
                  </Container>
                )
              })}
            </Flex>
          </Container>
      ) : <Loading />}
    </PageLayout>
  )
}