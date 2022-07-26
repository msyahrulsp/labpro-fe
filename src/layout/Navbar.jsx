import { Link, matchPath } from 'react-router-dom';
import {
  Flex,
  Box,
  Text,
  Button,
  Avatar,
  Show
} from '@chakra-ui/react';
import { LinkMenu } from '../component/Navbar/LinkMenu';

export const Navbar = () => {
  const user = "PIE";
  const link = {
    customer: [
      { label: "Request", to: "/request" },
      { label: "Transfer", to: "/transfer" },
      { label: "History", to: "/history" },
    ],
    admin: [
      { label: "Verifikasi", to: "/verifikasi" },
      { label: "Search", to: "/search" },
    ]
  }

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
        <Text as="b" color="darkCyan" opacity="0.8" fontSize={{ base: "xs", lg: "md" }}>BNMO</Text>
      </Link>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        gap={2}
        flexDirection="row"
      >
        <Show above="lg">
          {link["customer"].map((item) => {
            const match = matchPath({ path: item.to }, window.location.pathname);
            return (
              <Link to={item.to}>
                <Button
                  key={item.label}
                  fontSize={{ base: "xs", lg: "md" }}
                  color={match ? "white" : "blue"}
                  borderRadius="lg"
                  bg={match ? "blue" : "white"}
                  variant={match ? "solid" : "ghost"}
                >
                  {item.label}
                </Button>
              </Link>
            )
          })}
          <LinkMenu />
        </Show>
        <Show below="lg">
          
        </Show>
      </Box>
    </Flex>
  )
}