import React from "react";
import { TemplateElement } from "../../../../interfaces/history-mad-libs.interface";
import "./ViewResponse.css";
import { getResponseByControlId$ } from "../../state/mad-lib-responses/mad-lib-responses.query";
import { MadLibResponse } from "../../../../interfaces/mad-lib-response.interface";

export const TextTemplate = (props: { template: TemplateElement }) => {
  return (
    <div className={props.template.className}>
      {props.template?.text ? props.template.text : ""}
    </div>
  );
};

export class ControlTemplate extends React.Component<
  { controlId: string | undefined; className: string },
  { response: MadLibResponse }
> {
  constructor(props: { controlId: string | undefined; className: string }) {
    super(props);
    this.state = {
      response: { type: "", controlId: "", value: "" },
    };
  }

  componentDidMount() {
    getResponseByControlId$(this.props.controlId || "0").subscribe((res) =>
      this.setState({ response: res })
    );
  }

  componentWillUnmount() {}

  render() {
    return (
      <div>
        {this.state.response.type === "color" ? (
          <div
            style={{ background: this.state.response.value }}
            className="color-div"
          />
        ) : (
          <div className={this.props.className}>
            {this.state.response.value}
          </div>
        )}
      </div>
    );
  }
}
