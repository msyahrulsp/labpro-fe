import { useState, useEffect } from "react";
import {
  Flex,
  Text,
  InputGroup,
  Input,
  InputRightElement,
  Button,
  FormControl,
  FormLabel
} from "@chakra-ui/react";
import { BsEyeSlash, BsEye } from "react-icons/bs";
import { Link } from "react-router-dom";
import { PageAnimate } from "../layout/PageLayout";

export const Register = () => {
  const [show, setShow] = useState({
    password: false,
    confirmPassword: false
  });

  useEffect(() => {
    document.title = "Register - BNMO";
  }, []);

  return (
    <PageAnimate>
      <Flex
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        minH="100vh"
      >
        <Flex
          bg="#FFFFFF"
          boxShadow= "3px 4px 4px gray, inset 3px 5px 4px lightgray"
          py={5}
          px={7}
          borderRadius="lg"
          flexDirection="column"
          gap={3}
          minW="30vw"
        >
          <FormControl isRequired>
            <FormLabel>Nama</FormLabel>
            <Input size="sm" variant="flushed" type="text" placeholder="Masukkan Nama" />
          </FormControl>
          <FormControl isRequired>
            <FormLabel>Username</FormLabel>
            <Input size="sm" variant="flushed" type="text" placeholder="Masukkan Username" />
          </FormControl>
          <FormControl isRequired>
            <FormLabel>Password</FormLabel>
            <InputGroup>
              <Input
                size="sm"
                variant="flushed"
                type={show.password ? "text" : "password"}
                placeholder="Masukkan Password"
              />
              <InputRightElement
                children={!show.password ? <BsEyeSlash /> : <BsEye />}
                onClick={() => setShow({ ...show, password: !show.password })}
                transition="all 0.1s"
                opacity={0}
                _hover={{ opacity: 1 }}
              />
            </InputGroup>
          </FormControl>
          <FormControl isRequired>
            <FormLabel>Konfirmasi Password</FormLabel>
            <InputGroup>
              <Input
                size="sm"
                variant="flushed"
                type={show.confirmPassword ? "text" : "password"}
                placeholder="Konfirmasi Password"
              />
              <InputRightElement
                children={!show.confirmPassword ? <BsEyeSlash /> : <BsEye />}
                onClick={() => setShow({ ...show, confirmPassword: !show.confirmPassword })}
                transition="all 0.1s"
                opacity={0}
                _hover={{ opacity: 1 }}
              />
            </InputGroup>
          </FormControl>
          <FormControl isRequired>
            <FormLabel>Upload KTP</FormLabel>
            <Input size="sm" variant="flushed" type="file" />
          </FormControl>
          <Link to="/login">
            <Text
              fontSize="xs"
              mt={-2}
              textAlign="right"
              color="blue"
              _hover={{ opacity: 0.5 }}
              opacity={1}
              transition="all 0.15s"
            >
              Sudah punya akun?
            </Text>
          </Link>
          <Button
            bg="#077B8A"
            color="white"
            borderRadius="lg"
            mt={2}
            onClick={() => console.log("Handle Login")}
          >
            Register
          </Button>
        </Flex>
      </Flex>
    </PageAnimate>
  )
}