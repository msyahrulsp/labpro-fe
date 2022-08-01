import { Flex, Text, Container, Button, useToast, Spinner } from '@chakra-ui/react';
import { parseDate } from '../../util/date';
import { ConfirmModal } from '../Modal/ConfirmModal';
import { putDataAPI } from '../../util/api';
import { useAuth } from '../../hooks/useAuth';
import { useState } from 'react';

export const VerifikasiRequestCard = (props) => {
  const temp = parseDate(props.created).split('-');
  const tgl = temp[0];
  const waktu = temp[1] + ' WIB';
  const [isAccepted, setIsAccepted] = useState(true);
  const [processing, setProcessing] = useState(false);
  const toast = useToast();
  const { getToken } = useAuth();

  const handleAction = async () => {
    const payload = {
      id_history: props.id,
      isAccepted
    }

    try {
      setProcessing(true);
      await putDataAPI('/verification/requests', {
        payload,
        authorization: getToken()
      })

      toast({
        title: 'Success',
        description: 'Berhasil mengubah status verifikasi request',
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
        description: err.response?.data.message,
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