import Info from "./Info";
import Logo from "./Logo";
import Row from "react-bootstrap/Row";
// import Search from "./Search";

function Head(props) {
  const { handleOpenSideBar, ...restProps } = props;
  return (
    <>
      <Row>
        <Logo handleOpenSideBar={handleOpenSideBar} />
        {/* <Search /> */}
      </Row>
      <Row>
        <Info {...restProps} />
      </Row>
    </>
  );
}

export default Head;
