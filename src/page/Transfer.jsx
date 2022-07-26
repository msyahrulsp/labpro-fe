import { useState, useEffect } from 'react';
import {
  Container,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Button,
  Select,
  useToast,
  Spinner
} from '@chakra-ui/react';
import { PageLayout } from '../layout/PageLayout';
import { currencyList } from '../util/currency';
import { useAuth } from '../hooks/useAuth';
import { useRole } from '../hooks/useRole';
import { Loading } from '../component/Loading/Loading';
import { postDataAPI } from '../util/api';
import { useNavigate } from 'react-router-dom';

export const Transfer = () => {
  const [validRek, setValidRek] = useState(false);
  const [val, setVal] = useState({
    norek: "",
    currency: "IDR",
    nominal: new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: "IDR",
      minimumFractionDigits: 0
    }).format(0),
  })
  const [processing, setProcessing] = useState(false);
  const { listRek, user, getToken } = useAuth();
  const { isAuthorized } = useRole('customer');
  const toast = useToast();
  const navigate = useNavigate();

  const handleRek = (e) => {
    setVal({
      ...val,
      norek: e.target.value
    })
  }

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
  
  const handleTranfer = async () => {
    const parsedNominal = parseInt(val.nominal.replace(/[^0-9]/g, ''));
    if (parsedNominal <= 0) {
      toast({
        title: 'Error',
        description: 'Nominal harus lebih dari 0',
        status: 'error',
        position: 'top',
        isClosable: true
      });
      return;
    }
    try {
      setProcessing(true);
      const payload = {
        username: user.username,
        norek: val.norek,
        currency: val.currency,
        nominal: parsedNominal
      }

      await postDataAPI("/transfer", {
        payload,
        authorization: getToken()
      })

      toast({
        title: "Success",
        description: "Transfer berhasil",
        status: "success",
        position: "top",
        isClosable: true,
      })
      navigate('/history');
    } catch (err) {
      toast({
        title: "Error",
        description: err.response?.data.message ?? err.message,
        status: "error",
        position: "top",
        isClosable: true
      })
    }
    setProcessing(false);
  }
  
  useEffect(() => {
    document.title = "Transfer - BNMO";
  }, []);
  
  return (
    <PageLayout>
      {isAuthorized ? (
        <Container maxW="70ch">
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
            {!validRek ? (
              <>
                <FormControl isRequired>
                  <FormLabel>Rekening Tujuan</FormLabel>
                  <Input
                    variant="flushed"
                    type="text"
                    pattern="[0-9]*"
                    placeholder="No. Rekening"
                    min="0"
                    value={val.norek}
                    onChange={handleRek}
                  />
                </FormControl>
                <Button
                  mt={5}
                  color="white"
                  bg="darkCyan"
                  w="100%"
                  onClick={() => 
                    {val.norek.length === 10 && listRek.includes(val.norek) ? (
                      setValidRek(true)
                    ) : toast({
                      title: "Error",
                      description: "No Rekening tidak terdaftar",
                      status: "error",
                      position: "top",
                      isClosable: true
                    })}
                  }
                >
                  Lanjut
                </Button>
              </>
            ) : (
              <>
                <FormControl isRequired mt={3}>
                  <FormLabel>Currency</FormLabel>
                  <Select
                    value={val.currency}
                    onChange={handleSelect}
                  >
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
                  onClick={handleTranfer}
                  isDisabled={processing}
                >
                  {processing ? <Spinner speed="0.7s" size="md" /> : "Transfer"}
                </Button>
              </>
            )}
          </Flex>
        </Container>
      ) : <Loading />}
    </PageLayout>
  )
}