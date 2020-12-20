import React from "react";
import { getActiveMadLib$ } from "../../../stores/active-mad-lib/active-mad-lib.query";
import { HistoryMadLib } from "../../../interfaces/history-mad-libs.interface";

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

    componentWillUnmount() {
    }


    render() {
        return <div>{this.state.madLib.template.map((el, i) => {
            return React.createElement(el.tag, {className: el.className, key: i }, el.text);
        })}</div>;
    }

}
