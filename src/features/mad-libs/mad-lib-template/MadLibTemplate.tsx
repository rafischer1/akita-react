import React from "react";
import { getActiveMadLib$ } from "../../../stores/active-mad-lib/active-mad-lib.query";
import { HistoryMadLib, TemplateElement } from "../../../interfaces/history-mad-libs.interface";
import { getResponseByControlId$, loading$ } from "../../../stores/mad-lib-responses/mad-lib-responses.query";
import { ViewResponse } from "../ViewResponse";

export class MadLibTemplate extends React.Component<Record<string, never>, { madLib: HistoryMadLib, value: string}> {
    constructor(props: {} | HistoryMadLib) {
        // @ts-ignore
        super(props);
        this.state = {madLib: {controls: [], categories: [], title: "", id:0, template: []}, value: ""};
    }
    componentDidMount() {
        getActiveMadLib$.subscribe(active => {
            this.setState({ madLib: active });
        });

        getResponseByControlId$("ws1").subscribe(res => {
            console.log("res on subscribe:", res);
            this.setState({value: res || ""});
        });
    }

   getResponseByControlId(id: string): any {

    }

    componentWillUnmount() {}

    render() {
        // return <div>{this.state?.madLib?.template?.map((el, i) => {
        //     return <div key={i} className={el.className || undefined}>
        //         {el.controlId ? this.state?.value : el.text}
        //     </div>;
        // })}</div>;
        return <div>{this.state?.madLib?.template?.map((el, i) => {
            return <ViewResponse key={i} template={el}/>;
        })}</div>;
    }

}
