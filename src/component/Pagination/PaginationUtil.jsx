function generateArray(start, end) {
  return [...new Array(end - start)]
    .map((_, index) => start + index)
    .filter((page) => page > 0);
}

export default function usePagination({
  totalItem,
  page,
  items,
  itemsPerPage,
}) {
  const currentPage = page;
  const lastPage = Math.ceil(totalItem / itemsPerPage);
  const totalPage = lastPage === 0 ? 1 : lastPage;
  const prevPages =
    currentPage >= 4
      ? lastPage - currentPage > 3
        ? [currentPage - 2, currentPage - 1]
        : generateArray(lastPage - 6, currentPage)
      : generateArray(1, Math.max(currentPage, 1));

  const nextPages =
    currentPage < 4
      ? generateArray(currentPage + 1, Math.min(8, totalPage + 1))
      : lastPage - currentPage > 3
      ? [currentPage + 1, currentPage + 2]
      : generateArray(currentPage + 1, lastPage + 1);
  const pageStart = (currentPage - 1) * itemsPerPage;
  const pageEnd = pageStart + itemsPerPage;

  const pageItems = items.slice(pageStart, pageEnd);

  return {
    pageItems,
    totalPage,
    itemsPerPage,
    currentPage,
    lastPage,
    nextPages,
    prevPages,
  };
}
