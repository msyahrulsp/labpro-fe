import { Container, Flex, Text, Image, Button } from "@chakra-ui/react";
import { useEffect } from "react";
import { useRole } from "../hooks/useRole";
import { useAuth } from "../hooks/useAuth";
import { PageLayout } from "../layout/PageLayout";
import { Loading } from "../component/Loading/Loading";
import { Link } from "react-router-dom";

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
        <Container maxW="70ch">
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
              <Image
                src={`https://drive.google.com/uc?export=view&id=${user.ktp}`}
                alt="ktp"
                objectFit="contain"
                alignSelf="center"
                cursor="pointer"
                mb={5}
              />
              {data.map((item, idx) => {
                return (
                  <Container
                    mb={3}
                    key={idx}
                    borderRadius="lg"
                    px={3}
                    py={2}
                    border="1px solid gray"
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
              <Link to="/history">
                <Button color="white" bg="blue">
                  Lihat History
                </Button>
              </Link>
            </Flex>
          </Container>
      ) : <Loading />}
    </PageLayout>
  )
}