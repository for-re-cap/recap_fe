export const getInstallList = () => {
  let arr = [];
  for (var i = 0; i < 36; i++) {
    arr.push({ id: i, instal: i + 1, name: i == 0 ? "일시불" : i + 1 + "개월" });
  }
  return arr;
};
