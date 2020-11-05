import Rect from "react";
import { Container } from "react-bootstrap";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import HomeScreen from "./screens/HomeScreen.js";

const App = () => {
  return (
    <>
      <Header />
      <main>
        <Container>
          <HomeScreen />
        </Container>
      </main>
      <Footer />
    </>
  );
};

export default App;
