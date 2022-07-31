import { Flex, Text, Container, Button } from '@chakra-ui/react';

export const VerifikasiRequestCard = (props) => {
  return (
    <Flex
      direction="column"
      bg="#FFFFFF"
      borderRadius="lg"
      maxW="70ch"
      boxShadow= "3px 4px 4px gray, inset 3px 5px 4px lightgray"
      px={6}
      pt={5}
      pb={3}
      alignItems="center"
      mt={4}flexWrap="wrap"
    >
      <Container
        display="flex"
        flexDirection={{ base: "column", sm: "row-reverse" }}
        gap={5}
      >
        <Text
          alignSelf="center"
          textAlign="center"
          w={{ base: "fit-content", sm: "5ch" }}
          as="b"
          color="darkCyan"
        >
          REQUEST
        </Text>
        <Flex direction="column" w="100%" gap={2}>
          <Flex direction="row" justifyContent="space-between" flexWrap="wrap">
            <Text as="b" color="blue">Nama Akun</Text>
            <Text opacity="0.85">M Syahrul Surya Putra</Text>
          </Flex>
          <Flex direction="row" justifyContent="space-between" flexWrap="wrap">
            <Text as="b" color="blue">Tipe Request</Text>
            <Text opacity="0.85">Pengambilan</Text>
          </Flex>
          <Flex direction="row" justifyContent="space-between" flexWrap="wrap">
            <Text as="b" color="blue">Nominal</Text>
            <Text opacity="0.85">Rp. 20000</Text>
          </Flex>
          <Flex direction="row" justifyContent="space-between" flexWrap="wrap">
            <Text as="b" color="blue">Tanggal</Text>
            <Text opacity="0.85">22/07/2022</Text>
          </Flex>
          <Flex direction="row" justifyContent="space-between" flexWrap="wrap">
            <Text as="b" color="blue">Waktu</Text>
            <Text opacity="0.85">20:04 WIB</Text>
          </Flex>
        </Flex>
      </Container>
      <Flex
        direction="row"
        color="white"
        w="100%"
        justifyContent="space-between"
        mt={4}
        gap={4}
      >
        <Button w="100%" bg="redLight">Reject</Button>
        <Button w="100%" bg="darkCyan">Approve</Button>
      </Flex>
    </Flex>
  )
}