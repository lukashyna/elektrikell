import { Badge } from "react-bootstrap";
import { BADGES, LOW, AVERAGE, HIGH } from "./constants";

function BadgePrice({ currentPrice, averagePrice }) {
  const findPrice = (arr, id) => {
    return arr.find((a) => a.id === id);
  };

  const range = {
    min: currentPrice * 0.8,
    max: currentPrice * 1.2,
  };

  const badge =
    (averagePrice > range.max && findPrice(BADGES, LOW)) ||
    (averagePrice >= range.min &&
      averagePrice <= range.max &&
      findPrice(BADGES, AVERAGE)) ||
    (averagePrice < range.min && findPrice(BADGES, HIGH));

  return (
    <Badge bg={badge.name} className="my-badge">
      {badge.id}
    </Badge>
  );
}

export default BadgePrice;
