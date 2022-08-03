import React from 'react';
import { Box } from '@chakra-ui/react';

export const PaginationItemIcon = ({
  icon,
  page,
  onPageChange,
}) => {
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      fontSize="xs"
      width="8"
      height="8"
      borderRadius={6}
      cursor="pointer"
      bg="blue"
      color="#FFFFFF"
      _hover={{
        bg: '#588BCC',
      }}
      onClick={() => onPageChange(page)}
    >
      {icon}
    </Box>
  );
}
