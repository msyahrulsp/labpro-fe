import { useEffect } from 'react';
import {
  Container,
  Flex,
  FormControl,
  FormLabel,
  Text,
  Input,
  Button,
  Select
} from '@chakra-ui/react';
import { PageLayout } from '../layout/PageLayout';
import { currencyList } from '../util/currency';

export const Transfer = () => {
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
          <FormControl isRequired>
            <FormLabel>Rekening Tujuan</FormLabel>
            <Input variant="flushed" type="number" pattern="[0-9]*" placeholder="No. Rekening" min="0" />
          </FormControl>
          <FormControl isRequired mt={3}>
            <FormLabel>Currency</FormLabel>
            <Select defaultValue="IDR">
              {currencyList.map((item) => {
                return (
                  <option key={item} value={item}>{item}</option>
                )
              })}
            </Select>
          </FormControl>
          <FormControl isRequired mt={3}>
            <FormLabel>Nominal</FormLabel>
            <Input variant="flushed" type="number" pattern="[0-9]*" placeholder="Nominal" min="0" />
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