export const splitArray = (flatArray, numCols) => {
  const newArray = Array.from({ length: numCols }, () => []);
  for (let i = 0; i < flatArray.length; i++) {
    const mod = i % numCols;
    newArray[mod].push(flatArray[i]);
  }
  return newArray;
};
