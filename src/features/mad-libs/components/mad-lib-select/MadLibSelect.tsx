import React from "react";

import {
  deleteActive,
  setActive,
} from "../../state/active-mad-lib/active-mad-lib.service";
import { resetResponses } from "../../state/mad-lib-responses/mad-lib-response.service";
import "./MadLibSelect.css";
import { historyMadLibs } from "../../../../constants/mad-libs.config";

export class MadLibSelect extends React.Component<
  Record<string, never>,
  number
> {
  constructor(props: any) {
    super(props);
    this.handleStateChange = this.handleStateChange.bind(this);
  }

  handleStateChange(event: any): any {
    const { value }: any = event.target;
    deleteActive();
    resetResponses();
    setActive(+value);
    event.preventDefault();
  }

  render() {
    return (
      <label className={"select-container"}>
        Select Title:
        <select onChange={this.handleStateChange}>
          <option>Select ad-lib...</option>
          {historyMadLibs.map((madlib, i) => (
            <option key={i} value={madlib.id}>
              {madlib.title}
            </option>
          ))}
        </select>
      </label>
    );
  }
}
