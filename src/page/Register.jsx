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
  useToast,
  Spinner
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
    ktp: null,
    ktp_name: ""
  })
  const [processing, setProcessing] = useState(false);
  const toast = useToast();
  const navigate = useNavigate();

  const getExt = (name) => {
    return name.split('.')[1];
  }

  const handleRegister = async () => {
    if (!registData.username && !registData.password && !registData.nama && !registData.ktp) {
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
      setProcessing(true);
      const formData = new FormData();
      formData.append("username", registData.username);
      formData.append("password", registData.password);
      formData.append("nama", registData.nama);
      formData.append("ktp", registData.ktp);
      formData.append("ktp_name", registData.ktp_name);
      await postDataAPI("/register", {
        payload: formData
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
    setProcessing(false);
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
            <Input
              size="sm"
              variant="flushed"
              type="file"
              onChange={(e) => {
                if (e.target.files[0].size < 1048576) {
                  setRegistData({ 
                    ...registData,
                    ktp: e.target.files[0],
                    ktp_name: registData.username + '.' + getExt(e.target.files[0].name)
                  })
                } else {
                  toast({
                    title: "Error",
                    description: "Ukuran file maksimal 1 MB",
                    status: "error",
                    position: "top",
                    isClosable: true
                  })
                  e.target.value = null;
                  setRegistData({
                    ...registData,
                    ktp: null,
                    ktp_name: "" 
                  })
                }
              }}
              accept=".jpeg, .jpg, .png"
            />
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
            <Link to="/login">
              Sudah punya akun?
            </Link>
          </Text>
          <Button
            bg="#077B8A"
            color="white"
            borderRadius="lg"
            mt={2}
            onClick={handleRegister}
            isLoading={processing}
          >
            {processing ? <Spinner speed="0.7s" size="md" /> : "Register"}
          </Button>
        </Flex>
      </Flex>
    </PageAnimate>
  )
}