import { HamburgerIcon } from '@chakra-ui/icons';
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  useToast
} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';

export const LinkMenuMobile = () => {
  const auth = useAuth();
  const role = auth.user?.role ?? 'default';
  const navigate = useNavigate();
  const toast = useToast();
  const link = {
    default: [
      { label: "Login", to: "/login" }
    ],
    customer: [
      { label: "Request", to: "/request" },
      { label: "Transfer", to: "/transfer" },
      { label: "History", to: "/history" },
      { label: "Logout", to: "/" }
    ],
    admin: [
      { label: "Verifikasi", to: "/verifikasi" },
      { label: "Search", to: "/search" },
      { label: "Logout", to: "/" }
    ]
  }
  return (
    <Menu>
      <MenuButton>
        <HamburgerIcon w={6} h={6} display="flex" alignSelf="center" />
      </MenuButton>
      <MenuList>
        {link[role].map((item) => {
          return (
            <MenuItem key={item.label} onClick={() => {
              navigate(item.to)
              if (item.label === "Logout") {
                auth.logout();
                toast({
                  title: "Auth",
                  description: "Kamu berhasil logout",
                  status: "success",
                  position: "top",
                  isClosable: true
                });
              }
            }}>
              {item.label}
            </MenuItem>
          )
        })}
      </MenuList>
    </Menu>
  )
}