import React from "react";
import { MadLibSelect } from "../components/mad-lib-select/MadLibSelect";
import { MadLibControls } from "../components/mad-lib-controls/MadLibControls";
import { MadLibTemplate } from "../components/mad-lib-template/MadLibTemplate";
import "./MadLibContainer.css";

export const MadLibContainer = () => {
  return (
    <div className="container-div">
      <MadLibSelect />
      <div className="mad-lib-body">
        <MadLibControls />
        <MadLibTemplate />
      </div>
    </div>
  );
};
