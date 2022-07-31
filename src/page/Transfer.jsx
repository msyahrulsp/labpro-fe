import { useState, useEffect } from 'react';
import {
  Container,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Button,
  Select,
  FormErrorMessage
} from '@chakra-ui/react';
import { PageLayout } from '../layout/PageLayout';
import { currencyList } from '../util/currency';

export const Transfer = () => {
  const [val, setVal] = useState({
    norek: "",
    currency: "IDR",
    nominal: new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: "IDR",
      minimumFractionDigits: 0
    }).format(0),
  })
  const validRek =
    (val.norek.length === 10 && currencyList.includes(val.norek)) || val.norek.length === 0;

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
  
  useEffect(() => {
    document.title = "Transfer - BNMO";
  }, []);
  
  return (
    <PageLayout>
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
          <FormControl isRequired isInvalid={!validRek}>
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
            {!validRek && <FormErrorMessage>No. Rekening tidak terdaftar</FormErrorMessage>}
          </FormControl>
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
              textAlign="right"
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
          >
            Transfer
          </Button>
        </Flex>
      </Container>
    </PageLayout>
  )
}