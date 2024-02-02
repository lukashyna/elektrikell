import { currentTimeStamp } from "./utils/dates";

export const VAT = {
  estonia: 22,
}; ///%

export const COUNTRY_CODES = {
  ee: "estonia",
};

export const DEFAULT_MIN_PRICE = {
  price: 10,
  timestamp: currentTimeStamp() + 1000,
};
