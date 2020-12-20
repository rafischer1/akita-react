import React from "react";
import { getActiveMadLib$ } from "../../../stores/active-mad-lib/active-mad-lib.query";
import { HistoryMadLib, TemplateElement } from "../../../interfaces/history-mad-libs.interface";
import { getResponseByControlId$ } from "../../../stores/mad-lib-responses/mad-lib-responses.query";

export class MadLibTemplate extends React.Component<Record<string, never>, { madLib: HistoryMadLib}> {
    constructor(props: {} | HistoryMadLib) {
        // @ts-ignore
        super(props);
        this.state = {madLib: {controls: [], categories: [], title: "", id:0, template: []}};
    }
    componentDidMount() {
        getActiveMadLib$.subscribe(active => {
            this.setState({ madLib: active });
        });
    }

   getResponseByControlId(id: number): string {
        let tmp = "";
       getResponseByControlId$(id).subscribe(res => {
            console.log("res on subscribe:", res);
            tmp = res || "No Val Yet";
        });
        return tmp;
    }

    componentWillUnmount() {
    }


    render() {
        return <div>{this.state?.madLib?.template?.map((el, i) => {
            return <div key={i} className={el.className || undefined}>
                {el.controlId ? this.getResponseByControlId(el.controlId) : el.text}
            </div>;
        })}</div>;
    }

}
