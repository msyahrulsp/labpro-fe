import {
  Stack,
  Input
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
        boxShadow= "4px 5px 5px -2px lightgray"
      />
    </Stack>
  )
}