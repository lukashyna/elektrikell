import Info from "./Info";
import Logo from "./Logo";
import Row from "react-bootstrap/Row";
import Search from "./Search";

function Head(props) {
  return (
    <>
      <Row>
        <Logo />
        <Search />
      </Row>
      <Row>
        <Info {...props} />
      </Row>
    </>
  );
}

export default Head;
