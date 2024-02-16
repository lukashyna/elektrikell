import Badge from "react-bootstrap/Badge";
import { BADGES } from "./constants";
import { LOW, AVERAGE, HIGH } from "./constants";

function BadgePrice({ currentPrice, averagePrice }) {
  const findPrice = (arr, id) => {
    return arr.find((a) => a.id === id);
  };

  const badge =
    (averagePrice > currentPrice && findPrice(BADGES, LOW)) ||
    (averagePrice === currentPrice && findPrice(BADGES, AVERAGE)) ||
    (averagePrice < currentPrice && findPrice(BADGES, HIGH));

  return <Badge bg={badge.name}>{badge.id}</Badge>;
}

export default BadgePrice;
