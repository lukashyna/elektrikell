import lodash from "lodash";
export const getAveragePrice = (data) =>
  lodash.round(
    data.reduce((acc, { price }) => acc + price, 0) / data.length,
    2
  );

export const getProfitabilityPercentage = (
  currentPrice,
  averageIntervalPrice
) => {
  return Math.round(100 - (averageIntervalPrice / currentPrice) * 100);
};
