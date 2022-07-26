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

export const LinkMenu = () => {
  return (
    <Menu>
      <MenuButton bg="darkCyan" as={Button}>
        <Flex alignItems="center" gap={2}>
          <Avatar name="Pie KABARE" size="sm" />
          <Text color="white">Profile</Text>
        </Flex>
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