





// ================================================================================

export const timeToIndex = (time: string) => {
  const start = 6;

  const hour2 = (parseInt(time.substring(0, 2)) - start) * 2;
  const min = time.substring(3) == '00' ? 0 : 1;

  return hour2 + min;
};
