import { Container, Flex, Text, Avatar } from "@chakra-ui/react"
import { useEffect } from "react"
import { PageLayout } from "../layout/PageLayout"

const dummyData = [
  {
    label: "Nama Lengkap",
    value: "M Syahrul Surya Putra",
  },
  {
    label: "No. Rekening",
    value: "123456789",
  },
  {
    label: "Saldo",
    value: "Rp. 123456789",
  }
]

export const Profile = () => {
  useEffect(() => {
    document.title = "Profile - BNMO"
  }, []);
  
  return (
    <PageLayout>
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
          <Avatar mb={4} src={require("../image/logo.png")} bg="inherit" size="lg" name="M Syahrul SP" />
          {dummyData.map((item, idx) => {
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
    </PageLayout>
  )
}