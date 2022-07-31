import { Flex, Text, Container, Button } from '@chakra-ui/react';
import { parseDate } from '../../util/date';

export const VerifikasiRequestCard = (props) => {
  const temp = parseDate(props.created).split('-');
  const tgl = temp[0];
  const waktu = temp[1] + ' WIB'
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
      mt={4}
      flexWrap="wrap"
    >
      <Container
        display="flex"
        flexDirection={{ base: "column", sm: "row" }}
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
            <Text opacity="0.85">{props.nama}</Text>
          </Flex>
          <Flex direction="row" justifyContent="space-between" flexWrap="wrap">
            <Text as="b" color="blue">Tipe Request</Text>
            <Text opacity="0.85" textTransform="capitalize">{props.next_nama}</Text>
          </Flex>
          <Flex direction="row" justifyContent="space-between" flexWrap="wrap">
            <Text as="b" color="blue">Nominal</Text>
            <Text opacity="0.85">
              {new Intl.NumberFormat('en-EN', {
                style: 'currency',
                currency: props.util,
              }).format(props.util2)}
            </Text>
          </Flex>
          <Flex direction="row" justifyContent="space-between" flexWrap="wrap">
            <Text as="b" color="blue">Tanggal</Text>
            <Text opacity="0.85">{tgl}</Text>
          </Flex>
          <Flex direction="row" justifyContent="space-between" flexWrap="wrap">
            <Text as="b" color="blue">Waktu</Text>
            <Text opacity="0.85">{waktu}</Text>
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