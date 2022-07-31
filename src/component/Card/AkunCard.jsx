import { Flex, Text, Container, Image } from '@chakra-ui/react';

export const AkunCard = (props) => {
  return (
    <Flex
      direction="column"
      bg="#FFFFFF"
      borderRadius="lg"
      maxW="70ch"
      boxShadow= "3px 4px 4px gray, inset 3px 5px 4px lightgray"
      px={6}
      py={5}
      alignItems="center"
      mt={4}flexWrap="wrap"
    >
      <Container
        display="flex"
        flexDirection={{ base: "column", sm: "row-reverse" }}
        gap={5}
      >
        <Flex direction="column" w="100%" gap={2}>
          <Image
            src={require("../../image/logo.png")}
            alt="Logo"
            objectFit="contain"
            w="15ch"
            alignSelf="center" 
          />
          <Flex direction="row" justifyContent="space-between" flexWrap="wrap">
            <Text as="b" color="blue">Nama Akun</Text>
            <Text opacity="0.85">{props.nama}</Text>
          </Flex>
          <Flex direction="row" justifyContent="space-between" flexWrap="wrap">
            <Text as="b" color="blue">Username</Text>
            <Text opacity="0.85">{props.username}</Text>
          </Flex>
          <Flex direction="row" justifyContent="space-between" flexWrap="wrap">
            <Text as="b" color="blue">No. Rekening</Text>
            <Text opacity="0.85">{props.norek}</Text>
          </Flex>
          <Flex direction="row" justifyContent="space-between" flexWrap="wrap">
            <Text as="b" color="blue">Saldo</Text>
            <Text opacity="0.85">
              {new Intl.NumberFormat("id-ID", {
                style: "currency",
                currency: "IDR",
              }).format(props.saldo)}
            </Text>
          </Flex>
        </Flex>
      </Container>
    </Flex>
  )
}