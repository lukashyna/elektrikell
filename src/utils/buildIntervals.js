// import lodash from "lodash";
import { currentTimeStamp } from "./dates";

export const removePast = (data) => {
  return data.filter(({ timestamp }) => {
    return timestamp >= currentTimeStamp();
  });
};

export const getLowPriceInterval = (data, interval) => {
  let minimum = Infinity;
  let result = [];
  const futureData = removePast(data);
  futureData.forEach((_, i) => {
    const dataInterval = futureData.slice(i, interval + i + 1);
    console.log(dataInterval);

    if (dataInterval.length < interval + 1) return;

    const sumInterval = dataInterval.reduce((acc, { price }) => {
      return acc + parseFloat(price);
    }, 0);

    // const sumInterval = lodash.sum(dataInterval.map(({ price }) => price));

    if (minimum > sumInterval) {
      minimum = sumInterval;
      result = dataInterval;
    }
  });
  return result.map((r) => {
    return {
      ...r,
      position: data.findIndex(({ timestamp }) => timestamp === r.timestamp),
    };
  });
};
