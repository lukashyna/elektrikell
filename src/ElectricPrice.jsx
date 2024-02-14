import { useEffect, useState } from "react";
import "./App.scss";
import Container from "react-bootstrap/Container";
import Head from "./Head";
import Body from "./Body";
import Footer from "./Footer";
import LeftSideBar from "./LeftSideBar";
import ErrorModal from "./ErrorModal";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setActiveHour, setErrorMessage } from "./services/stateService";
import { Circles } from "react-loader-spinner";

function ElectricPrice() {
  const params = useParams();
  const dispatch = useDispatch();
  const errorMessage = useSelector((state) => state.main.errorMessage);

  const [showSideBar, setShowSideBar] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const handleOpenSideBar = () => setShowSideBar(true);
  const handleCloseSideBar = () => setShowSideBar(false);

  useEffect(() => {
    if (params.hours) dispatch(setActiveHour(+params.hours));
  }, [params, dispatch]);
  return (
    <Container>
      <Head handleOpenSideBar={handleOpenSideBar} />
      <Body setIsLoading={setIsLoading} />
      <Footer />
      <LeftSideBar show={showSideBar} handleClose={handleCloseSideBar} />
      <ErrorModal
        show={!!errorMessage}
        handleClose={() => dispatch(setErrorMessage(null))}
      />
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
    </Container>
  );
}

export default ElectricPrice;
