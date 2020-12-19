import React from "react";
import "./App.css";
import { Hi } from "./features/hi/hi";
import { Form } from "./features/form/Form";

function App(): any {
  return (
    <div>
      <Hi />
      <Form />
    </div>
  );
}

export default App;
