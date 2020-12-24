import React from "react";
import { getActiveMadLib$ } from "../../state/active-mad-lib/active-mad-lib.query";
import { HistoryMadLib } from "../../../../interfaces/history-mad-libs.interface";
import { ControlTemplate, TextTemplate } from "../view-response/ViewResponse";

export class MadLibTemplate extends React.Component<
  Record<string, never>,
  { madLib: HistoryMadLib; value: string }
> {
  constructor(props: {} | HistoryMadLib) {
    // @ts-ignore
    super(props);
    this.state = {
      madLib: { controls: [], categories: [], title: "", id: 0, template: [] },
      value: "",
    };
  }
  componentDidMount() {
    getActiveMadLib$.subscribe((active) => {
      this.setState({ madLib: active });
    });
  }

  componentWillUnmount() {}

  render() {
    return (
      <div>
        {this.state?.madLib?.template?.map((el, i) => {
          if (el.text) {
            return <TextTemplate template={el} key={i} />;
          }
          return (
            <ControlTemplate
              controlId={el.controlId}
              className={el.className}
              key={i}
            />
          );
        })}
      </div>
    );
  }
}
