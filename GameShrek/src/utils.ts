export const shuffleArray = (arr: any[]): any[] => {
  return arr
    .map((elem) => [Math.random(), elem])
    .sort((elem1, elem2) => elem1[0] - elem2[0])
    .map((elem) => elem[1]);
};
