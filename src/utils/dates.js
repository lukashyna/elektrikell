import moment from "moment";

export const getDefaultFrom = () => moment().subtract(10, "hour").format();
export const getDefaultUntil = () => moment().add(1, "day").format();

export const convertToInputFormat = (dateTime) =>
  moment(dateTime).format("YYYY-MM-DDTHH:mm");
export const convertToRequestFormat = (dateTime) => moment(dateTime).format();

export const currentTimeStamp = () => moment().minutes(0).seconds(0).unix();

export const addHourToCurrentTSMl = () => +moment().add(1, "hour");

export const secondsToHours = (sec) => moment.unix(sec).format("HH:mm");
export const secondsToHoursPlusHour = (sec) =>
  moment.unix(sec).add(1, "hours").format("HH:mm");
