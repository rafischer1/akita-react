import React from "react";
import { selectName$ } from "../../stores/session-state/session.query";

export class Hi extends React.Component<Record<string, never>, { value: string }> {
  constructor(props: any) {
    super(props);
    this.state = { value: "" };

  }

  componentDidMount() {
      selectName$.subscribe(name => this.setState({value: name}));
  }



  render() {
    return (
        <div>
          <div>
            <h1>Hi Component Works</h1>
            <h3>{ this.state.value }</h3>
          </div>
        </div>
    );
  }
}
