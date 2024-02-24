import Info from "./Info";
import Search from "./Search";
import Row from "react-bootstrap/Row";

function Head(props) {
  const { ...restProps } = props;
  return (
    <>
      <Row className="my-3">
        <Info {...restProps} />
      </Row>
      <Row className="my-3">
        <Search />
      </Row>
    </>
  );
}

export default Head;
