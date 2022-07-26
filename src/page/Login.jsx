import { useState, useEffect } from "react";
import {
  Flex,
  Text,
  InputGroup,
  InputLeftElement,
  Input,
  InputRightElement,
  Button,
  FormControl
} from "@chakra-ui/react";
import { BsFillPersonFill, BsEyeSlash, BsEye, BsFillLockFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { PageAnimate } from "../layout/PageLayout";

export const Login = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    document.title = "Login - BNMO";
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
          py={5}
          px={7}
          borderRadius="lg"
          flexDirection="column"
          gap={3}
        >
          <FormControl>
            <InputGroup>
              <InputLeftElement
                pointerEvents="none"
                children={<BsFillPersonFill />}
              />
              <Input variant="flushed" type="text" placeholder="Username" />
            </InputGroup>
          </FormControl>
          <FormControl>
            <InputGroup>
              <InputLeftElement
                pointerEvents="none"
                children={<BsFillLockFill />}
              />
              <Input variant="flushed" type={show ? "text" : "password"} placeholder="Password" />
              <InputRightElement
                children={!show ? <BsEyeSlash /> : <BsEye />}
                onClick={() => setShow(!show)}
                transition="all 0.1s"
                opacity={0}
                _hover={{ opacity: 1 }}
              />
            </InputGroup>
          </FormControl>
          <Link to="/register">
            <Text
              fontSize="xs"
              mt={-2}
              textAlign="right"
              color="blue"
              _hover={{ opacity: 0.5 }}
              opacity={1}
              transition="all 0.15s"
            >
              Belum punya akun?
            </Text>
          </Link>
          <Button
            bg="#077B8A"
            color="white"
            borderRadius="lg"
            mt={2}
            onClick={() => console.log(window.location.pathname)}
          >
            Login
          </Button>
        </Flex>
      </Flex>
    </PageAnimate>
  )
}