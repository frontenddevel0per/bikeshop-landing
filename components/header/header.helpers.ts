export const scrollDurationCalc = (distance: number) => {
  if (distance > 0) {
    return distance / 2;
  } else {
    return -distance / 2;
  }
};
