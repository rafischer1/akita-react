import React from "react";
import { getActiveMadLib$ } from "../../state/active-mad-lib/active-mad-lib.query";
import { MadLibControl } from "../../../../interfaces/history-mad-libs.interface";
import "./MadLibControls.css";
import {
  resetResponses,
  updateMadLibResponse,
} from "../../state/mad-lib-responses/mad-lib-response.service";

export class MadLibControls extends React.Component<
  Record<string, never>,
  { controls: MadLibControl[]; value: any }
> {
  constructor(props: {} | MadLibControl[]) {
    // @ts-ignore
    super(props);
    this.state = { controls: [], value: "" };
    this.updateResponse = this.updateResponse.bind(this);
    this.clearResponses = this.clearResponses.bind(this);
  }

  componentDidMount() {
    getActiveMadLib$.subscribe((active) => {
      this.setState({ controls: active.controls });
    });
  }

  clearResponses = () => resetResponses();

  updateResponse(event: any, c: MadLibControl): any {
    if (event) {
      const val = event?.target?.value;
      updateMadLibResponse({
        controlId: c.id,
        type: c.type,
        value: val ? val : "",
      });
      this.setState({ value: val });
    }
  }

  render() {
    return (
      <div>
        <div className="controls-display">
          {this.state.controls?.map((c, i) => {
            if (c.type === "select") {
              return (
                <label key={i}>
                  {c.label}:
                  <select onChange={(e) => this.updateResponse(e, c)}>
                    <option>Select option...</option>
                    {c?.valueSet?.map((v, x) => (
                      <option key={x}>{v}</option>
                    ))}
                  </select>
                </label>
              );
            } else if (c.type === "color") {
              return (
                <label key={i}>
                  {c.label}:
                  <input
                    type="color"
                    onChange={(e) => this.updateResponse(e, c)}
                    list="presetColors"
                  />
                  <datalist id="presetColors">
                    <option>#40BBC9</option>
                    <option>#4076C9</option>
                    <option>#4E40C9</option>
                    <option>#9340C9</option>
                    <option>#C940BB</option>
                    <option>#C94077</option>
                  </datalist>
                </label>
              );
            } else {
              return (
                <label key={i}>
                  {c.label}:
                  <input
                    type={c.type}
                    onChange={(e) => this.updateResponse(e, c)}
                  />
                </label>
              );
            }
          })}
        </div>
        <button className="clear-btn" onClick={this.clearResponses}>
          Clear Responses
        </button>
      </div>
    );
  }
}
