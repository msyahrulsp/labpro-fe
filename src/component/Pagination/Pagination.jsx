import React from 'react';
import { Stack, Text } from '@chakra-ui/react';
import { ChevronRightIcon, ChevronLeftIcon } from '@chakra-ui/icons';

import PaginationItem from './PaginationItem'
import PaginationItemIcon from './PaginationIcon';

export default function Pagination({
  currentPage,
  lastPage,
  nextPages,
  prevPages,
  onPageChange,
}) {
  return (
    <Stack direction="row" mt="8" justify="center" spacing="5">
      <Stack direction="row" spacing="1" w={{ base: '70%', lg: 'fit-content' }} userSelect="none">
        {lastPage <= 1 ? null : (
          <>
            {prevPages.length >= 2 && currentPage >= 4 && lastPage > 7 ? (
              <>
                <PaginationItemIcon
                  icon={<ChevronLeftIcon w={5} h={5} />}
                  page={currentPage - 1}
                  onPageChange={onPageChange}
                />
                <Text w="8" textAlign="center">
                  ...
                </Text>
              </>
            ) : null}

            {prevPages.length > 0
              ? prevPages.map((page) => (
                  <PaginationItem
                    onPageChange={onPageChange}
                    page={page}
                    key={page}
                  />
                ))
              : null}

            <PaginationItem
              onPageChange={onPageChange}
              page={currentPage}
              isCurrent
            />

            {nextPages.length > 0
              ? nextPages.map((page) => (
                  <PaginationItem
                    onPageChange={onPageChange}
                    page={page}
                    key={page}
                  />
                ))
              : null}

            {nextPages.length >= 2 &&
            lastPage - currentPage > 3 &&
            lastPage > 7 ? (
              <>
                <Text w="8" textAlign="center">
                  ...
                </Text>
                <PaginationItemIcon
                  icon={<ChevronRightIcon w={5} h={5} />}
                  page={currentPage + 1}
                  onPageChange={onPageChange}
                />
              </>
            ) : null}
          </>
        )}
      </Stack>
    </Stack>
  );
}
