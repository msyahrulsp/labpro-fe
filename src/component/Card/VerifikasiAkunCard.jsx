import { Flex, Text, Container, Button, Image } from '@chakra-ui/react';
import { parseDate } from '../../util/date';

export const VerifikasiAkunCard = (props) => {
  const temp = parseDate(props.created).split('-');
  const tgl = temp[0];
  const waktu = temp[1] + ' WIB';
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
          AKUN
        </Text>
        <Flex direction="column" w="100%" gap={2}>
          <Flex direction="row" justifyContent="space-between" flexWrap="wrap">
            <Text as="b" color="blue">Nama Akun</Text>
            <Text opacity="0.85">{props.nama}</Text>
          </Flex>
          <Flex direction="row" justifyContent="space-between" flexWrap="wrap">
            <Text as="b" color="blue">Username</Text>
            <Text opacity="0.85">{props.next_nama}</Text>
          </Flex>
          <Flex direction="row" justifyContent="space-between" flexWrap="wrap">
            <Text as="b" color="blue">No Rekening</Text>
            <Text opacity="0.85">{props.util2}</Text>
          </Flex>
          <Flex direction="row" justifyContent="space-between" flexWrap="wrap">
            <Text as="b" color="blue">Tanggal</Text>
            <Text opacity="0.85">{tgl}</Text>
          </Flex>
          <Flex direction="row" justifyContent="space-between" flexWrap="wrap">
            <Text as="b" color="blue">Waktu</Text>
            <Text opacity="0.85">{waktu}</Text>
          </Flex>
          <Flex direction="row" justifyContent="space-between" flexWrap="wrap">
            <Text as="b" color="blue" alignSelf="center">KTP</Text>
            <Image src={require("../../image/logo.png")} alt="Logo" objectFit="contain" w="15ch" />
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