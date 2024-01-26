import { useState } from "react";
import "./App.scss";
import Container from "react-bootstrap/Container";
import Head, { DEFAULT_ACTIVE_BUTTON } from "./Head";
import Body from "./Body";
import Footer from "./Footer";

function App() {
  const [activePrice, setActivePrice] = useState(DEFAULT_ACTIVE_BUTTON);
  const [activeHour, setActiveHour] = useState(); ////undefined

  return (
    <Container>
      <Head activePrice={activePrice} setActivePrice={setActivePrice} />
      <Body activeHour={activeHour} />
      <Footer
        activePrice={activePrice}
        activeHour={activeHour}
        setActiveHour={setActiveHour}
      />
    </Container>
  );
}

export default App;
