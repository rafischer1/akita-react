import React from "react";
import { MadLibSelect } from "../MadLibSelect";
import { MadLibControls } from "../mad-lib-controls/MadLibControls";
import { ViewMadLib } from "../ViewMadLib";

const madLibBody = {
    display: "flex",
    justifyContent: "space-between"
};

export const MadLibContainer = () => {
    return <div>
        <MadLibSelect />
        <div style={madLibBody}>
          <MadLibControls />
          <ViewMadLib />
        </div>
    </div>;
};


