import { useState, useEffect } from "react";
import {
  Flex,
  Text,
  InputGroup,
  InputLeftElement,
  Input,
  InputRightElement,
  Button,
  FormControl,
  useToast,
  Spinner
} from "@chakra-ui/react";
import { BsFillPersonFill, BsEyeSlash, BsEye, BsFillLockFill } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import { PageAnimate } from "../layout/PageLayout";
import { useAuth } from "../hooks/useAuth";

export const Login = () => {
  const [show, setShow] = useState(false);
  const [log, setLog] = useState({
    username: "",
    password: ""
  });
  const [processing, setProcessing] = useState(false);
  const toast = useToast();
  const navigate = useNavigate();
  const auth = useAuth();

  const handleUsername = (e) => {
    setLog({ ...log, username: e.target.value });
  }

  const handlePassword = (e) => {
    setLog({ ...log, password: e.target.value });
  }

  const handleLogin = async () => {
    try {
      setProcessing(true);
      await auth.login(log)
    } catch (err) {
      toast({
        title: "Error",
        description: err.response?.data.message,
        status: "error",
        position: "top",
        isClosable: true
      });
      setLog({
        username: "",
        password: ""
      });
    }
    setProcessing(true);
  }

  useEffect(() => {
    document.title = "Login - BNMO";
    if (auth.user !== null) {
      navigate("/");
      toast({
        title: "Warning",
        description: "Kamu sudah login",
        status: "warning",
        position: "top",
        isClosable: true
      })
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [auth.user]);

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
          boxShadow= "3px 4px 4px gray, inset 3px 5px 4px lightgray"
          gap={3}
        >
          <FormControl>
            <InputGroup>
              <InputLeftElement
                pointerEvents="none"
                children={<BsFillPersonFill />}
              />
              <Input
                variant="flushed"
                type="text"
                placeholder="Username"
                value={log.username}
                onChange={handleUsername}
              />
            </InputGroup>
          </FormControl>
          <FormControl>
            <InputGroup>
              <InputLeftElement
                pointerEvents="none"
                children={<BsFillLockFill />}
              />
              <Input
                variant="flushed"
                type={show ? "text" : "password"}
                placeholder="Password" 
                value={log.password}
                onChange={handlePassword}
              />
              <InputRightElement
                children={!show ? <BsEyeSlash /> : <BsEye />}
                onClick={() => setShow(!show)}
                transition="all 0.1s"
                opacity={0}
                _hover={{ opacity: 1 }}
              />
            </InputGroup>
          </FormControl>
          <Text
            fontSize="xs"
            mt={-2}
            w="fit-content"
            alignSelf="flex-end"
            color="blue"
            _hover={{ opacity: 0.5 }}
            opacity={1}
            transition="all 0.15s"
          >
            <Link to="/register">
              Belum punya akun?
            </Link>
          </Text>
          <Button
            bg="#077B8A"
            color="white"
            borderRadius="lg"
            mt={2}
            onClick={handleLogin}
            isDisabled={processing}
          >
            {processing ? <Spinner speed="0.7s" size="md" /> : "Login"}
          </Button>
        </Flex>
      </Flex>
    </PageAnimate>
  )
}