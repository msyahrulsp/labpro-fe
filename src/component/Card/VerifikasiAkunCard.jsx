import { Flex, Text, Container, Button, Image, useToast, Spinner } from '@chakra-ui/react';
import { parseDate } from '../../util/date';
import { ConfirmModal } from '../Modal/ConfirmModal';
import { putDataAPI } from '../../util/api';
import { useAuth } from '../../hooks/useAuth';
import { useState } from 'react';
import { ImageModal } from '../Modal/ImageModal';

export const VerifikasiAkunCard = (props) => {
  const temp = parseDate(props.created).split('-');
  const tgl = temp[0];
  const waktu = temp[1] + ' WIB';
  const [isAccepted, setIsAccepted] = useState(true);
  const [processing, setProcessing] = useState(false);
  const toast = useToast();
  const { getToken } = useAuth();

  const handleAction = async () => {
    const payload = {
      id_verifikasi_akun: props.id,
      isAccepted
    }

    try {
      setProcessing(true);
      await putDataAPI('/verification/accounts', {
        payload,
        authorization: getToken()
      })

      toast({
        title: 'Success',
        description: 'Berhasil mengubah status verifikasi akun',
        status: 'success',
        position: 'top',
        isClosable: true
      })

      setTimeout(() => {
        window.location.reload()
      }, 1000)
    } catch (err) {
      toast({
        title: 'Error',
        description: err.response?.data.message ?? err.message,
        status: 'error',
        position: 'top',
        isClosable: true
      })
    }
    setProcessing(false);
  }

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
            <ImageModal src={`https://drive.google.com/uc?export=view&id=${props.util}`} align="flex-end">
              <Image
                cursor="pointer"
                src={`https://drive.google.com/uc?export=view&id=${props.util}`}
                alt="ktp"
                objectFit="contain"
                w="15ch"
              />
            </ImageModal>
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
        <ConfirmModal handleAction={handleAction}>
          <Button
            w="100%"
            color="white"
            bg="redLight"
            onClick={() => setIsAccepted(false)}
            isDisabled={processing}
          >
            {processing && !isAccepted ? <Spinner speed="0.7s" size="md" /> : 'Reject'}
          </Button>
        </ConfirmModal>
        <ConfirmModal handleAction={handleAction}>
          <Button
            w="100%"
            color="white"
            bg="darkCyan"
            onClick={() => setIsAccepted(true)}
            isDisabled={processing}
          >
            {processing && isAccepted ? <Spinner speed="0.7s" size="md" /> : 'Approve'}
          </Button>
        </ConfirmModal>
      </Flex>
    </Flex>
  )
}