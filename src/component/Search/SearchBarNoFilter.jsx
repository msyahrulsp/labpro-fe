import {
  Stack,
  Input, 
} from '@chakra-ui/react';

export const SearchBar = ({ onChange, value }) => {
  return (
    <Stack direction="row" gap="2">
      <Input
        bg="white"
        value={value}
        placeholder="Keyword"
        onChange={onChange}
        type="search"
        boxShadow= "3px 4px 4px lightgray"
      />
    </Stack>
  )
}