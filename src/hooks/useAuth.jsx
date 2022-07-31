import { useToast } from "@chakra-ui/react";
import { useContext, useEffect } from "react";
import { UserContext } from "../context/UserContext";
import { getDataAPI, postDataAPI } from "../util/api";

export const useAuth = () => {
  const { user, setUser, listRek, setListRek } = useContext(UserContext);
  const toast = useToast();

  const getToken = () => {
    const token = localStorage.getItem('token') ?? null;
    return token;
  }
  
  const setToken = (token) => {
    localStorage.setItem('token', token);
  }

  const destroyToken = () => {
    localStorage.removeItem('token');
  }
  
  const getUserFromToken = async () => {
    const token = getToken();
    if (token) {
      try {
        const { data } = await getDataAPI("/login", {
          authorization: `${token}`
        });
        setUser(data.user);
        setListRek(data.listRek);
        return data.user;
      } catch (err) {
        if (err.response?.data.message === 'Invalid token') {
          logout();
          return 'invalid'
        }
      }
    }
    logout();
    return null;
  }

  const login = async (auth) => {
    try {
      const { data } = await postDataAPI("/login", {
        payload: auth
      });
      setToken(data.token);
      setUser(data.user);
      setListRek(data.listRek);

      toast({
        title: "Success",
        description: "Login berhasil",
        status: "success",
        position: "top",
        isClosable: true
      })
      return data;
    } catch (err) {
      toast({
        title: "Error",
        description: err.response?.data.message,
        status: "error",
        position: "top",
        isClosable: true
      })
      logout();
    }
  }

  const logout = () => {
    destroyToken();
    setUser(null);
    setListRek([]);
  }

  useEffect(() => {
    const checkUser = async () => {
      await getUserFromToken();
    }
    checkUser();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return { user, listRek, login, logout, getUserFromToken, getToken };
}