import moment from "moment";
import { mwToKw } from "./priceFormats";
import { addTax } from "./priceFormats";

export default function chartDataConvertor(priceData) {
  return priceData.map((data) => ({
    ...data,
    price: +addTax(mwToKw(data.price), "ee"),
    hour: moment.unix(data.timestamp).format("HH"),
  }));
}
