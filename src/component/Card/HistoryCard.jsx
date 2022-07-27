import { Flex, Text, Container } from '@chakra-ui/react';

export const HistoryCard = (props) => {
  return (
    <Container
      display="flex"
      flexDirection={{ base:"column", sm: "row" }}
      gap={5}
      bg="#FFFFFF"
      borderRadius="lg"
      px={6}
      py={4}
      boxShadow= "3px 4px 4px gray, inset 3px 5px 4px lightgray"
      alignItems="center"
      mt={4}
      maxW="70ch"
    >
      <Text
        textAlign="center"
        w={{ base: "fit-content", sm: "5ch" }}
        as="b"
        color="darkCyan"
      >
        {props.tipe.toUpperCase()}
      </Text>
      <Flex direction="column" w="100%" gap={{ base: 0, sm: 2 }}>
        <Flex direction="row" justifyContent="space-between" flexWrap="wrap">
          <Flex direction="column">
            <Text as="b" color="blue">
              {props.tipe === 'request' ? 'Tipe Request' : 'Rekening Tujuan'}
            </Text>
            <Text opacity="0.85">
              {props.tipe === 'request' ? props.tipeRequest : props.rekeningTujuan}
            </Text>
          </Flex>
          <Flex direction="column">
            <Text as="b" color="blue" textAlign={{ base: "left", sm: "right"}}>Nominal</Text>
            <Text opacity="0.85">Rp. 123456789</Text>
          </Flex>
        </Flex>
        <Flex direction="row" justifyContent="space-between" flexWrap="wrap">
          <Flex direction="column">
            <Text as="b" color="blue">Tanggal</Text>
            <Text opacity="0.85">22/07/2022</Text>
          </Flex>
          <Flex direction="column">
            <Text as="b" color="blue" textAlign={{ base: "left", sm: "right"}}>Waktu</Text>
            <Text opacity="0.85">13:15 WIB</Text>
          </Flex>
        </Flex>
        {props.status ? (
          <Flex direction="column">
            <Text as="b" color="blue">Status</Text>
            <Text opacity="0.85">{props.status}</Text>
          </Flex>
        ) : null}
      </Flex>
    </Container>
  )
}