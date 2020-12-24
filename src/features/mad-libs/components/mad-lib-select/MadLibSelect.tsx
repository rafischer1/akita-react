import React from "react";
import { historyMadLibs } from "../../../interfaces/history-mad-libs.interface";
import {
  deleteActive,
  setActive,
} from "../state/active-mad-lib/active-mad-lib.service";
import { resetResponses } from "../state/mad-lib-responses/mad-lib-response.service";

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
      <label style={styles.container}>
        Select Title:
        <select onChange={this.handleStateChange} style={styles.select}>
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

const styles = {
  container: { margin: "auto" },
  select: {
    cursor: "pointer",
    marginLeft: "5px",
    height: "30px",
    verticalAlign: "center",
  },
};
