module.exports = (arr, rand, temp) => {
  const shuffled = [...arr];
  const length = arr.length;
  for (let i = length - 1; i > 0; i--) {
    rand = Math.floor(Math.random() * (i + 1));
    temp = shuffled[i];
    shuffled[i] = shuffled[rand];
    shuffled[rand] = temp;
  }
  return shuffled;
};
