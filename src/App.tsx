import React from "react";
import "./App.css";
import { Hi } from "./features/hi/hi";
import { Form } from "./features/form/Form";
import { Header } from "./features/header/Header";

function App(): any {
  return (
    <div>
        <Header />
        <div className="App">
          <Form />
          <Hi />
        </div>
    </div>
  );
}

export default App;
