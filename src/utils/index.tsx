const isFalsy = (value: any) => (value === 0 ? true : !!value);

export const cleanObject = (object: any) => {
  const result = { ...object };

  Object.keys(result).forEach((key) => {
    if (!isFalsy(object[key])) {
      delete result[key];
    }
  });

  return result;
};
