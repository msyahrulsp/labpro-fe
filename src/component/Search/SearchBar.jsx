import React from 'react';
import {
  Stack,
  Input, 
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Checkbox,
  Button,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverBody,
  PopoverHeader,
  PopoverCloseButton
} from '@chakra-ui/react';
import { QuestionIcon } from '@chakra-ui/icons';

export const SearchBar = ({
  onChange,
  value,
  handleTrue,
  handleFalse,
  trueVal,
  falseVal,
  options,
  description,
  query
}) => {
  return (
    <Stack direction="row" gap="2" mb={8}>
      <Input
        bg="white"
        value={value}
        placeholder="Keyword"
        onChange={onChange}
        type="search"
        boxShadow= "3px 4px 4px lightgray"
      />
      <Menu>
        <MenuButton textAlign="center" bg="blue" color="white" as={Button}>
          Filter
        </MenuButton>
        <MenuList bg="darkCyan" color="white">
          <MenuItem _hover={{ bg: "blue" }}>
            <Checkbox colorScheme="linkedin" isChecked={trueVal} onChange={handleTrue}>{options[0]}</Checkbox>
          </MenuItem>
          <MenuItem _hover={{ bg: "blue" }}>
            <Checkbox colorScheme="linkedin" isChecked={falseVal} onChange={handleFalse}>{options[1]}</Checkbox>
          </MenuItem>
        </MenuList>
      </Menu>
      <Popover placement="bottom" closeOnBlur={true}>
        <PopoverTrigger>
          <Button bg="blue" color="white" leftIcon={<QuestionIcon />}>Help</Button>
        </PopoverTrigger>
        <PopoverContent
          color="white"
          bg="darkCyan"
        >
          <PopoverHeader pt={3} fontWeight="bold" border="0">
            Search Help
          </PopoverHeader>
          <PopoverCloseButton />
          <PopoverBody>{description}</PopoverBody>
          <PopoverBody>
            Contoh Query:
            {query.map((el, idx) => {
              return (
                <React.Fragment key={idx}>
                  <br />- {el}
                </React.Fragment>
              );
            })}
          </PopoverBody>
        </PopoverContent>
      </Popover>
    </Stack>
  )
}