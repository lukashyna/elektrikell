import { useEffect, useState } from "react";
import "./App.scss";
import Container from "react-bootstrap/Container";
import Head, { DEFAULT_ACTIVE_BUTTON } from "./Head";
import Body from "./Body";
import Footer from "./Footer";
import LeftSideBar from "./LeftSideBar";
import { getCurrentPrice } from "./services/apiService";

function App() {
  const [activePrice, setActivePrice] = useState(DEFAULT_ACTIVE_BUTTON);
  const [activeHour, setActiveHour] = useState(); ////undefined
  const [showSideBar, setShowSideBar] = useState(false);
  const [currentPrice, setCurrentPrice] = useState(null);

  useEffect(() => {
    getCurrentPrice().then(({ data }) => setCurrentPrice(data[0].price));
  }, []);

  const handleOpenSideBar = () => setShowSideBar(true);
  const handleCloseSideBar = () => setShowSideBar(false);
  return (
    <Container>
      <Head
        activePrice={activePrice}
        setActivePrice={setActivePrice}
        handleOpenSideBar={handleOpenSideBar}
        currentPrice={currentPrice}
      />
      <Body activeHour={activeHour} />
      <Footer
        activePrice={activePrice}
        activeHour={activeHour}
        setActiveHour={setActiveHour}
        currentPrice={currentPrice}
      />
      <LeftSideBar show={showSideBar} handleClose={handleCloseSideBar} />
    </Container>
  );
}

export default App;
