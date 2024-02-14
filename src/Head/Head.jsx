import Info from "./Info";
import Logo from "./Logo";
import Row from "react-bootstrap/Row";
// import Search from "./Search";

function Head(props) {
  const { ...restProps } = props;
  return (
    <>
      <Row>
        <Logo />
        {/* <Search /> */}
      </Row>
      <Row>
        <Info {...restProps} />
      </Row>
    </>
  );
}

export default Head;
