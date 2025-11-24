const parseBoolean = (value) => {
  const isString = typeof value === 'string';
  if (!isString) return undefined;
  const normalizedValue = value.toLowerCase();
  if (normalizedValue === 'true') return true;
  if (normalizedValue === 'false') return false;
  return undefined;
};

export const parseFilterParams = (query) => {
  const { type, isFavourite } = query;

  const parsedFilter = {};

  if (type) {
    parsedFilter.contactType = type;
  }

  const parsedIsFavourite = parseBoolean(isFavourite);
  if (parsedIsFavourite !== undefined) {
    parsedFilter.isFavourite = parsedIsFavourite;
  }

  return parsedFilter;
};
