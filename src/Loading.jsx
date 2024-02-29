import { useSelector } from "react-redux";
import { Container } from "react-bootstrap";
import { Circles } from "react-loader-spinner";

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
