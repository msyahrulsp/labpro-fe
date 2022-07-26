import {
  Container,
  Flex,
  FormControl,
  FormLabel,
  Text,
  Input,
  RadioGroup,
  Radio,
  Stack,
  Button,
  Select
} from '@chakra-ui/react';
import { PageLayout } from '../layout/PageLayout';
import { currencyList } from '../util/currency';

export const Request = () => {
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
          <Text as="b" textAlign="center" mb={4}>Request Saldo</Text>
          <FormControl isRequired>
            <FormLabel>Tipe Request</FormLabel>
            <RadioGroup>
                <Stack direction={{ base: "column", sm: "row"}}>
                  <Radio value='1'>Penambahan</Radio>
                  <Radio value='0'>Pengurangan</Radio>
                </Stack>
              </RadioGroup>
          </FormControl>
          <FormControl isRequired mt={3}>
            <FormLabel>Currency</FormLabel>
            <Select value="IDR">
              {currencyList.map((item) => {
                return (
                  <option key={item.id} value={item}>{item}</option>
                )
              })}
            </Select>
          </FormControl>
          <FormControl isRequired mt={3}>
            <FormLabel>Nominal</FormLabel>
            <Input variant="flushed" type="number" pattern="[0-9]*" placeholder="Nominal" min="0" />
          </FormControl>
          <Button
            mt={3}
            color="white"
            bg="darkCyan"
            alignSelf="flex-end"
          >
            Submit
          </Button>
        </Flex>
      </Container>
    </PageLayout>
  )
}