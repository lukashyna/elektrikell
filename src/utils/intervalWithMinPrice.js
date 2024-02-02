export default function intervalWithMinPrice(arr, n) {
  let minSum = Infinity;
  let minArr = [];

  for (let i = 0; i < arr.length - n + 1; i++) {
    const currentInterval = arr.slice(i, i + n);
    const currentSum = currentInterval.reduce(
      (acc, curr) => acc + curr.price,
      0
    );

    if (currentSum < minSum) {
      minSum = currentSum;
      minArr = [...currentInterval];
    }
  }
  console.log(minArr);
  return minArr;
}
