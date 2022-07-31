import { useToast } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./useAuth";

export const useRole = (role) => {
  const [isAuthorized, setIsAuthorized] = useState(false);
  const auth = useAuth();
  const toast = useToast();
  const navigate = useNavigate();

  const checkRole = async () => {
    const curUser = await auth.getUserFromToken();
    if (!curUser || curUser === 'invalid') {
      navigate("/login");
      auth.logout();
      toast({
        title: "Error",
        description: !curUser ? "Kamu belum login" : "Token invalid. Silahkan login kembali",
        status: "error",
        position: "top",
        isClosable: true
      });
      return;
    }
    if (curUser.role !== role) {
      navigate("/");
      toast({
        title: "Error",
        description: "Kamu tidak punya akses",
        status: "error",
        position: "top",
        isClosable: true
      });
      return;
    }

    setIsAuthorized(true);
  }

  useEffect(() => {
    checkRole();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return { isAuthorized };
}