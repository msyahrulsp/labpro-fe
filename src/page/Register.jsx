import { useState, useEffect } from "react";
import {
  Flex,
  Text,
  InputGroup,
  Input,
  InputRightElement,
  Button,
  FormControl,
  FormLabel,
  useToast
} from "@chakra-ui/react";
import { BsEyeSlash, BsEye } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import { PageAnimate } from "../layout/PageLayout";
import { postDataAPI } from "../util/api";

export const Register = () => {
  const [show, setShow] = useState({
    password: false,
    confirmPassword: false
  });
  const [registData, setRegistData] = useState({
    username: "",
    password: "",
    nama: "",
    ktp: null
  })
  const toast = useToast();
  const navigate = useNavigate();

  const handleRegister = async () => {
    if (!registData.username && !registData.password && !registData.nama) {
      toast({
        title: "Error",
        description: "Harap semua isi semua field",
        status: "error",
        position: "top",
        isClosable: true
      })
      return;
    }
    if (registData.password.length < 6) {
      toast({
        title: "Error",
        description: "Password minimal 6 karakter",
        status: "error",
        position: "top",
        isClosable: true
      })
      return;
    }
    if (registData.password !== registData.confirmPassword) {
      toast({
        title: "Error",
        description: "Password tidak sama",
        status: "error",
        position: "top",
        isClosable: true
      })
      return;
    }

    try {
      const data = {
        username: registData.username,
        password: registData.password,
        nama: registData.nama,
        ktp: registData.ktp
      }
      await postDataAPI("/register", {
        payload: data
      });
      toast({
        title: "Success",
        description: "Data berhasil diregister. Silahkan tunggu konfirmasi dari admin",
        status: "success",
        position: "top",
        isClosable: true
      });
      navigate('/');
    } catch (e) {
      toast({
        title: "Error",
        description: e.response?.data.message,
        status: "error",
        position: "top",
        isClosable: true
      })
    }
  }

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
            <Input
              size="sm"
              variant="flushed"
              type="text"
              placeholder="Masukkan Nama"
              value={registData.nama}
              onChange={(e) => setRegistData({ ...registData, nama: e.target.value })}
            />
          </FormControl>
          <FormControl isRequired>
            <FormLabel>Username</FormLabel>
            <Input
              size="sm"
              variant="flushed"
              type="text"
              placeholder="Masukkan Username" 
              value={registData.username}
              onChange={(e) => setRegistData({ ...registData, username: e.target.value })}
            />
          </FormControl>
          <FormControl isRequired>
            <FormLabel>Password</FormLabel>
            <InputGroup>
              <Input
                size="sm"
                variant="flushed"
                type={show.password ? "text" : "password"}
                placeholder="Masukkan Password"
                value={registData.password}
                onChange={(e) => setRegistData({ ...registData, password: e.target.value })}
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
                value={registData.confirmPassword}
                onChange={(e) => setRegistData({ ...registData, confirmPassword: e.target.value })}
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
            onClick={handleRegister}
          >
            Register
          </Button>
        </Flex>
      </Flex>
    </PageAnimate>
  )
}