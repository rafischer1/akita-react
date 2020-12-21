import React from "react";
import { TemplateElement } from "../../../interfaces/history-mad-libs.interface";
import { getResponseByControlId$ } from "../../../stores/mad-lib-responses/mad-lib-responses.query";
import "./ViewResponse.css";

export const ViewResponse = (props: { template: TemplateElement }) => {
  let response = "";
  if (props.template.controlId) {
    getResponseByControlId$(props.template.controlId).subscribe(
      (res) => (response = res)
    );
    return <div className={props.template.className}>{response}</div>;
  } else {
    return (
      <div className={props.template.className}>
        {props.template?.text ? props.template.text : ""}
      </div>
    );
  }
};
