import { useState, useEffect } from "react";
import "./App.scss";
import Container from "react-bootstrap/Container";
import Head, { DEFAULT_ACTIVE_BUTTON } from "./Head";
import Body from "./Body";
import Footer from "./Footer";
import LeftSideBar from "./LeftSideBar";
import { getDefaultFrom, getDefaultUntil, currentTime } from "./utils/dates";
import { getPriceData } from "./services/apiService";
import { DEFAULT_MIN_PRICE } from "./constants.js";
import intervalWithMinPrice from "./utils/intervalWithMinPrice.js";

function App() {
  const [activePrice, setActivePrice] = useState(DEFAULT_ACTIVE_BUTTON);
  const [activeHour, setActiveHour] = useState(1);
  const [showSideBar, setShowSideBar] = useState(false);
  const [from, setFrom] = useState(getDefaultFrom());
  const [until, setUntil] = useState(getDefaultUntil());
  const [intervalMinPrice, setIntervalMinPrice] = useState([DEFAULT_MIN_PRICE]);

  const handleOpenSideBar = () => setShowSideBar(true);
  const handleCloseSideBar = () => setShowSideBar(false);

  useEffect(() => {
    getPriceData(currentTime(), getDefaultUntil()).then(({ data }) =>
      setIntervalMinPrice(intervalWithMinPrice(data.ee, activeHour))
    );
  }, [activeHour]);
  return (
    <Container>
      <Head
        activePrice={activePrice}
        setActivePrice={setActivePrice}
        handleOpenSideBar={handleOpenSideBar}
      />
      <Body
        activeHour={activeHour}
        from={from}
        until={until}
        intervalMinPrice={intervalMinPrice}
      />
      <Footer
        activePrice={activePrice}
        activeHour={activeHour}
        setActiveHour={setActiveHour}
        intervalMinPrice={intervalMinPrice}
      />
      <LeftSideBar
        show={showSideBar}
        handleClose={handleCloseSideBar}
        from={from}
        until={until}
        setFrom={setFrom}
        setUntil={setUntil}
      />
    </Container>
  );
}

export default App;
