import { useEffect, useState } from "react";
import "./App.scss";
import Container from "react-bootstrap/Container";
import Head, { DEFAULT_ACTIVE_BUTTON } from "./Head";
import Body from "./Body";
import Footer from "./Footer";
import LeftSideBar from "./LeftSideBar";
import { getDefaultFrom, getDefaultUntil } from "./utils/dates";
import ErrorModal from "./ErrorModal";
import { useParams } from "react-router-dom";

function ElectricPrice() {
  const params = useParams();

  const [activePrice, setActivePrice] = useState(DEFAULT_ACTIVE_BUTTON);
  const [activeHour, setActiveHour] = useState(1);
  const [showSideBar, setShowSideBar] = useState(false);
  const [from, setFrom] = useState(getDefaultFrom());
  const [until, setUntil] = useState(getDefaultUntil());
  const [errorMessage, setErrorMessage] = useState(null);
  const [bestUntil, setBestUntil] = useState(0);

  const handleOpenSideBar = () => setShowSideBar(true);
  const handleCloseSideBar = () => setShowSideBar(false);

  useEffect(() => {
    if (params.hours) setActiveHour(+params.hours);
  }, [params]);
  return (
    <Container>
      <Head
        activePrice={activePrice}
        setActivePrice={setActivePrice}
        handleOpenSideBar={handleOpenSideBar}
        setErrorMessage={setErrorMessage}
      />
      <Body
        activeHour={activeHour}
        from={from}
        until={until}
        setErrorMessage={setErrorMessage}
        setBestUntil={setBestUntil}
      />
      <Footer
        activePrice={activePrice}
        activeHour={activeHour}
        setActiveHour={setActiveHour}
        bestUntil={bestUntil}
      />
      <LeftSideBar
        show={showSideBar}
        handleClose={handleCloseSideBar}
        from={from}
        until={until}
        setFrom={setFrom}
        setUntil={setUntil}
      />
      <ErrorModal
        show={!!errorMessage}
        handleClose={() => setErrorMessage(null)}
        errorMessage={errorMessage}
      />
    </Container>
  );
}

export default ElectricPrice;
