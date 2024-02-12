import { useEffect, useState } from "react";
import "./App.scss";
import Container from "react-bootstrap/Container";
import Head from "./Head";
import Body from "./Body";
import Footer from "./Footer";
import LeftSideBar from "./LeftSideBar";
import ErrorModal from "./ErrorModal";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setActiveHour } from "./services/stateService";

function ElectricPrice() {
  const params = useParams();
  const dispatch = useDispatch();

  const [showSideBar, setShowSideBar] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const [bestUntil, setBestUntil] = useState(0);

  const handleOpenSideBar = () => setShowSideBar(true);
  const handleCloseSideBar = () => setShowSideBar(false);

  useEffect(() => {
    if (params.hours) dispatch(setActiveHour(+params.hours));
  }, [params, dispatch]);
  return (
    <Container>
      <Head
        handleOpenSideBar={handleOpenSideBar}
        setErrorMessage={setErrorMessage}
      />
      <Body setErrorMessage={setErrorMessage} setBestUntil={setBestUntil} />
      <Footer bestUntil={bestUntil} />
      <LeftSideBar show={showSideBar} handleClose={handleCloseSideBar} />
      <ErrorModal
        show={!!errorMessage}
        handleClose={() => setErrorMessage(null)}
        errorMessage={errorMessage}
      />
    </Container>
  );
}

export default ElectricPrice;
