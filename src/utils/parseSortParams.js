const SORT_ORDER = {
  ASC: 'asc',
  DESC: 'desc',
};

export const parseSortParams = (query) => {
  const { sortBy, sortOrder } = query;

  const parsedSortBy = sortBy || '_id';

  const parsedSortOrder = [SORT_ORDER.ASC, SORT_ORDER.DESC].includes(sortOrder)
    ? sortOrder
    : SORT_ORDER.ASC;

  return {
    sortBy: parsedSortBy,
    sortOrder: parsedSortOrder,
  };
};
