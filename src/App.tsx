import React from "react";
import "./App.css";
import { Header } from "./features/header/Header";
import { MadLibContainer } from "./features/mad-libs/mad-lib-container/MadLibContainer";

function App(): any {
  return (
    <>
      <Header />
      <div className="App">
        {/*<Form />*/}
        {/*<Hi />*/}
        <MadLibContainer />
      </div>
    </>
  );
}

export default App;
