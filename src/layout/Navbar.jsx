import { Link } from 'react-router-dom';
import { Flex, Box, Avatar } from '@chakra-ui/react';
import { AiOutlineHome, AiOutlineDatabase } from 'react-icons/ai';

export const Navbar = () => {
  return (
    <Flex
      w="100%"
      px={5}
      py={2}
      bg="#FFFFFF"
      boxShadow= "4px 5px 5px -2px lightgray"
      flexDirection="row"
      justifyContent="space-between"
      alignItems="center"
      flexWrap="wrap"
      borderBottomRadius="lg"
    >
      <Link to="/">
        <Avatar
          size="sm"
          name="User Name"
        />
      </Link>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        gap={{ base: 5, lg: 8 }}
        flexDirection="row"
      >
        <Link to="/">
          <AiOutlineHome size={20} />
        </Link>
        <Link to="/login">
          <AiOutlineDatabase size={20} />
        </Link>
      </Box>
    </Flex>
  )
}