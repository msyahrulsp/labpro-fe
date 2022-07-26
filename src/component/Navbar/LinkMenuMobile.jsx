import { HamburgerIcon } from '@chakra-ui/icons';
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem
} from '@chakra-ui/react';

export const LinkMenuMobile = () => {
  // TODO masih belum implement per role
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