import {
  Stack,
  Input, 
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Checkbox,
  Button
} from '@chakra-ui/react';

export const SearchBar = ({ onChange, value, handleTrue, handleFalse, trueVal, falseVal, options }) => {
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
      <Menu>
        <MenuButton bg="blue" color="white" as={Button}>
          Filter
        </MenuButton>
        <MenuList>
          <MenuItem>
            <Checkbox colorScheme="green" isChecked={trueVal} onChange={handleTrue}>{options[0]}</Checkbox>
          </MenuItem>
          <MenuItem>
            <Checkbox colorScheme="green" isChecked={falseVal} onChange={handleFalse}>{options[1]}</Checkbox>
          </MenuItem>
        </MenuList>
      </Menu>
    </Stack>
  )
}