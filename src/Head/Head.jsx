import Info from "./Info";
import Logo from "./Logo";
import Row from "react-bootstrap/Row";

function Head(props) {
  const { ...restProps } = props;
  return (
    <>
      <Row>
        <Logo />
      </Row>
      <Row>
        <Info {...restProps} />
      </Row>
    </>
  );
}

export default Head;
