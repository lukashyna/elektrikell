import moment from "moment";
// import lodash from "lodash";

export const removePast = (data) => {
  return data.filter(({ timestamp }) => {
    return moment.unix(timestamp).isAfter(moment());
  });
};

export const getLowPriceInterval = (data, interval) => {
  let minimum = Infinity;
  let result = [];
  let averagePrice = 0;
  const futureData = removePast(data);
  futureData.forEach((_, i) => {
    const dataInterval = futureData.slice(i, interval + i + 1); ////one more obj for point reachart

    if (dataInterval.length <= interval) return;

    const sumInterval = dataInterval
      .slice(0, dataInterval.length - 1) //// remove obj for point reachart
      .reduce((acc, { price }) => {
        return acc + parseFloat(price);
      }, 0);

    // const sumInterval = lodash.sum(dataInterval.map(({ price }) => price));

    if (minimum > sumInterval) {
      minimum = sumInterval;
      result = dataInterval;
    }
    averagePrice = minimum / interval;
  });

  const dataIntervaltWithIndex = result.map((r) => {
    return {
      ...r,
      index: data.findIndex(({ timestamp }) => timestamp === r.timestamp),
    };
  });

  return {
    averagePrice,
    dataIntervaltWithIndex,
  };
};
