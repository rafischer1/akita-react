import React from "react";
import {
  HistoryMadLib,
  TemplateElement,
} from "../../../interfaces/history-mad-libs.interface";
import "./ViewResponse.css";
import { getResponseByControlId$ } from "../../../stores/mad-lib-responses/mad-lib-responses.query";

export const TextTemplate = (props: { template: TemplateElement }) => {
  return (
    <div className={props.template.className}>
      {props.template?.text ? props.template.text : ""}
    </div>
  );
};

export class ControlTemplate extends React.Component<
  { controlId: string | undefined; className: string },
  { response: string }
> {
  constructor(props: { controlId: string | undefined }) {
    // @ts-ignore
    super(props);
    this.state = {
      response: "",
    };
  }
  componentDidMount() {
    getResponseByControlId$(this.props.controlId || "0").subscribe((res) =>
      this.setState({ response: res })
    );
  }

  componentWillUnmount() {}

  render() {
    return <div className={this.props.className}>{this.state.response}</div>;
  }
}
