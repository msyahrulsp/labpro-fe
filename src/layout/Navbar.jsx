import { Link, matchPath, useNavigate } from 'react-router-dom';
import {
  Flex,
  Box,
  Text,
  Button,
  Show
} from '@chakra-ui/react';
import { LinkMenu } from '../component/Navbar/LinkMenu';
import { LinkMenuMobile } from '../component/Navbar/LinkMenuMobile';
import { useAuth } from '../hooks/useAuth';

export const Navbar = () => {
  const navigate = useNavigate();
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
  const auth = useAuth();
  const role = auth.user?.role ?? 'default';

  return (
    <Flex
      w="100%"
      px={10}
      py={2}
      bg="#FFFFFF"
      boxShadow= "3px 4px 4px lightgray, inset 5px 5px 4px lightgray"
      flexDirection="row"
      justifyContent="space-between"
      alignItems="center"
      flexWrap="wrap"
      borderBottomRadius="lg"
      position="sticky"
      top="0"
      zIndex="100"
    >
      <Link to="/">
        <Text as="b" color="darkCyan" opacity="0.8" fontSize="xl">BNMO</Text>
      </Link>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        gap={2}
        flexDirection="row"
      >
        <Show above="lg">
          {role !== 'default' ? (
            link[role].map((item) => {
              const loc = window.location.pathname.includes("/verifikasi") ?
                "/verifikasi" : window.location.pathname;
              const match = matchPath({ path: item.to }, loc);
              return (
                <Link to={item.to} key={item.label}>
                  <Button
                    key={item.label}
                    color={match ? "white" : "blue"}
                    borderRadius="lg"
                    bg={match ? "blue" : "white"}
                    variant={match ? "solid" : "ghost"}
                  >
                    {item.label}
                  </Button>
                </Link>
              )
            })
          ) : (
            <Button
              onClick={() => navigate("/login")}
              borderColor="darkCyan"
              border="1px solid"
              bg="blue"
              color="white"
              borderRadius="full"
              w="15ch"
            >
              Login
            </Button>
          )}
          {role !== 'default' && <LinkMenu />}
        </Show>
        <Show below="lg">
          <LinkMenuMobile />
        </Show>
      </Box>
    </Flex>
  )
}