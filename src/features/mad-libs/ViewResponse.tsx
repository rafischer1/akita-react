import React from "react";
import {  TemplateElement } from "../../interfaces/history-mad-libs.interface";
import { getResponseByControlId$ } from "../../stores/mad-lib-responses/mad-lib-responses.query";

export const ViewResponse = (props: { template: TemplateElement}) => {
    let response = "";
    if (props.template.controlId) {
        getResponseByControlId$(props.template.controlId).subscribe(res => response = res);
        return <div>{response}</div>;
    } else { return <div>{props.template?.text ? props.template.text : ""}</div>;}
};
