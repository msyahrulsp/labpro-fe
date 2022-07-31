import { Flex, Text, Container } from '@chakra-ui/react';
import { parseDate } from '../../util/date';

const colors = {
  pending: 'orange',
  accepted: 'green',
  rejected: 'redLight'
}

export const HistoryCard = (props) => {
  const temp = parseDate(props.created_at).split('-');
  const tgl = temp[0];
  const waktu = temp[1] + ' WIB';
  return (
    <Container
      display="flex"
      flexDirection={{ 
        base:"column", 
        sm: props.tipe_transaksi === 'request' ? 'row' : 'row-reverse' 
      }}
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
        {props.tipe_transaksi.toUpperCase()}
      </Text>
      <Flex direction="column" w="100%" gap={{ base: 0, sm: 2 }}>
        <Flex direction="row" justifyContent="space-between" flexWrap="wrap">
          <Flex direction="column">
            <Text as="b" color="blue">
              {props.tipe_transaksi === 'request' ? 'Tipe Request' : 'Rekening Tujuan'}
            </Text>
            <Text opacity="0.85" textTransform="capitalize">
              {props.tipe_util}
            </Text>
          </Flex>
          <Flex direction="column">
            <Text as="b" color="blue" textAlign={{ base: "left", sm: "right"}}>Nominal</Text>
            <Text opacity="0.85">
              {new Intl.NumberFormat('id-ID', {
                style: 'currency',
                currency: props.currency,
              }).format(props.nominal)}
            </Text>
          </Flex>
        </Flex>
        <Flex direction="row" justifyContent="space-between" flexWrap="wrap">
          <Flex direction="column">
            <Text as="b" color="blue">Tanggal</Text>
            <Text opacity="0.85">{tgl}</Text>
          </Flex>
          <Flex direction="column">
            <Text as="b" color="blue" textAlign={{ base: "left", sm: "right"}}>Waktu</Text>
            <Text opacity="0.85">{waktu}</Text>
          </Flex>
        </Flex>
        {props.status !== 'success' ? (
          <Flex direction="column">
            <Text as="b" color="blue">Status</Text>
            <Text
              as="b"
              opacity="0.85"
              color={colors[props.status]}
              textTransform="capitalize"
            >
              {props.status}
            </Text>
          </Flex>
        ) : null}
      </Flex>
    </Container>
  )
}