import {
  Container,
  Flex,
  FormControl,
  FormLabel,
  Input,
  RadioGroup,
  Radio,
  Stack,
  Button,
  Select,
  useToast
} from '@chakra-ui/react';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import { useRole } from '../hooks/useRole';
import { PageLayout } from '../layout/PageLayout';
import { postDataAPI } from '../util/api';
import { currencyList } from '../util/currency';
import { Loading } from '../component/Loading/Loading';

export const Request = () => {
  const [type, setType] = useState('penambahan');
  const [val, setVal] = useState({
    currency: "IDR",
    nominal: new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: "IDR",
      minimumFractionDigits: 0
    }).format(0),
  })
  const { isAuthorized } = useRole('customer');
  const { user, getToken } = useAuth();
  const toast = useToast();
  const navigate = useNavigate();

  const handleSelect = (e) => {
    handleNominal(e.target.value, val.nominal);
  }

  const handleNominal = (cur, value) => {
    let num = parseInt(value.replace(/[^0-9]/g, ''));
    if (!num) num = 0; 
    setVal({
      ...val,
      currency: cur,
      nominal: new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: cur,
        minimumFractionDigits: 0
      }).format(num)
    });
  }

  const handleRequest = async () => {
    const parsedNominal = parseInt(val.nominal.replace(/[^0-9]/g, ''));
    try {
      const payload = {
        username: user.username,
        tipe_request: type,
        currency: val.currency,
        nominal: parsedNominal
      }

      await postDataAPI('/verification/requests', {
        payload,
        authorization: getToken()
      })

      toast({
        title: "Success",
        description: "Post Request berhasil",
        status: "success",
        position: "top",
        isClosable: true,
      })
      navigate('/history');
    } catch (err) {
      toast({
        title: "Error",
        description: err.response?.data.message,
        status: "error",
        position: "top",
        isClosable: true
      })
    }
  }

  useEffect(() => {
    document.title = "Request - BNMO";
  }, []);

  return (
    <PageLayout>
      {isAuthorized ? (
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
            <FormControl isRequired>
              <FormLabel>Tipe Request</FormLabel>
              <RadioGroup value={type} onChange={setType}>
                <Stack direction={{ base: "column", sm: "row"}}>
                  <Radio colorScheme="linkedin" value="penambahan">Penambahan</Radio>
                  <Radio colorScheme="linkedin" value="pengurangan">Pengurangan</Radio>
                </Stack>
              </RadioGroup>
            </FormControl>
            <FormControl isRequired mt={3}>
              <FormLabel>Currency</FormLabel>
              <Select value={val.currency} onChange={handleSelect}>
                {currencyList.map((item) => {
                  return (
                    <option key={item} value={item}>{item}</option>
                  )
                })}
              </Select>
            </FormControl>
            <FormControl isRequired mt={3}>
              <FormLabel>Nominal</FormLabel>
              <Input
                variant="flushed"
                type="text"
                pattern="[0-9]*"
                placeholder="Nominal"
                min="0"
                value={val.nominal}
                onChange={(e) => handleNominal(val.currency, e.target.value)}
              />
            </FormControl>
            <Button
              mt={5}
              color="white"
              bg="darkCyan"
              w="100%"
              onClick={handleRequest}
            >
              Request
            </Button>
          </Flex>
        </Container>
      ) : <Loading />}
    </PageLayout>
  )
}