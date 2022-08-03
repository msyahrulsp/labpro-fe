import {
  Flex,
  Text,
  Container,
  Image
} from '@chakra-ui/react';

export const AkunCard = (props) => {
  return (
    <Flex
      direction="column"
      bg="#FFFFFF"
      borderRadius="lg"
      boxShadow= "3px 4px 4px gray, inset 3px 5px 4px lightgray"
      px={6}
      py={5}
      alignItems="center"
      mt={4}
      flexWrap="wrap"
    >
      <Container
        display="flex"
        flexDirection={{ base: "column", sm: "row-reverse" }}
        gap={5}
      >
        <Flex direction="column" w="100%" gap={2}>
          <Image
            src={`https://drive.google.com/uc?export=view&id=${props.ktp}`}
            alt="ktp"
            objectFit="contain"
            alignSelf="center"
            cursor="pointer"
            mb={3}
            borderRadius="lg"
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
          <Flex direction="row" justifyContent="space-between" flexWrap="wrap">
            <Text as="b" color="blue">Status Akun</Text>
            <Text
              as="b"
              opacity="0.85"
              color={props.status_akun ? "green" : "redLight"}  
            >
              {props.status_akun ? "Verified" : "Not Verified"}
            </Text>
          </Flex>
        </Flex>
      </Container>
    </Flex>
  )
}