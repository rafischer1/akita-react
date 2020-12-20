import React from "react";
import { MadLibSelect } from "../MadLibSelect";
import { MadLibControls } from "../mad-lib-controls/MadLibControls";
import { MadLibTemplate } from "../mad-lib-template/MadLibTemplate";

const madLibBody = {
    display: "flex",
    justifyContent: "space-between",
    marginTop: "5px"
};

export const MadLibContainer = () => {
    return <div>
        <MadLibSelect />
        <div style={madLibBody}>
          <MadLibControls />
          <MadLibTemplate />
        </div>
    </div>;
};


