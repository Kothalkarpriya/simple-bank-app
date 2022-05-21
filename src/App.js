import React from "react";

import "./App.css";
import { Navbar, Footer } from "./component/component";
import RoutesPath from "./routes/RoutesPath";

function App() {
  return (
    <div className="App">
      <Navbar />
      <RoutesPath />
      <Footer />
    </div>
  );
}

export default App;
