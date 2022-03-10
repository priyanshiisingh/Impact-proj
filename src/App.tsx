import * as React from "react";
import Navbar from "./components/NavbarSettings/Navbar";

import Body from "./Body";
import Footer from "./components/FooterSettings/Footer";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Body />
      <Footer />
    </div>
  );
};
export default App;
