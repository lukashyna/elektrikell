import Container from "react-bootstrap/Container";
import { Circles } from "react-loader-spinner";
import { useSelector } from "react-redux";

function Loading() {
  const isLoading = useSelector((state) => state.main.isLoading);
  return (
    <>
      {isLoading && (
        <Container
          fluid
          className="vh-100 bg-white z-1 position-absolute top-0 start-0"
        >
          <Circles
            height="280"
            width="280"
            color="#0A26CB"
            ariaLabel="circles-loading"
            wrapperStyle={{}}
            wrapperClass="position-absolute top-50 start-50 translate-middle "
            visible={true}
          />
        </Container>
      )}
    </>
  );
}

export default Loading;
