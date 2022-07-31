import {
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Avatar,
  Text,
  Flex,
  useToast
} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';

export const LinkMenu = () => {
  const auth = useAuth();
  const user = auth.user;
  const navigate = useNavigate();
  const toast = useToast();
  return (
    <Menu>
      <MenuButton bg="darkCyan" as={Button} borderRadius="full">
        <Flex alignItems="center" gap={2}>
          <Avatar name={user.name} size="sm" />
          <Text color="white">{user.role}</Text>
        </Flex>
      </MenuButton>
      <MenuList>
        {user.role === 'customer' ? (
          <MenuItem onClick={() => navigate("/profile")}>
            Profile
          </MenuItem>
        ) : null}
        <MenuItem onClick={() => {
          auth.logout();
          navigate("/");
          toast({
            title: "Auth",
            description: "Kamu berhasil logout",
            status: "success",
            position: "top",
            isClosable: true
          });
        }}>
          Logout
        </MenuItem>
      </MenuList>
    </Menu>
  )
}