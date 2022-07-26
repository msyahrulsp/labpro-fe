import { HamburgerIcon } from '@chakra-ui/icons';
import {
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Avatar,
  Text,
  Flex
} from '@chakra-ui/react';

export const LinkMenuMobile = () => {
  return (
    <Menu>
      <MenuButton>
        <HamburgerIcon w={6} h={6} display="flex" alignSelf="center" />
      </MenuButton>
      <MenuList>
        <MenuItem onClick={() => console.log("GO TO PROFILE")}>
          Profile
        </MenuItem>
        <MenuItem onClick={() => console.log("GO TO LOGOUT")}>
          Logout
        </MenuItem>
      </MenuList>
    </Menu>
  )
}