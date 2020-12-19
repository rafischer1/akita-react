import React from "react";
import {  sessionQuerySelectForm$ } from "../../stores/session-state/session.query";
import { SessionState } from "../../stores/session-state/session-state.store";

export class Hi extends React.Component<Record<string, never>, { value: SessionState }> {
  constructor(props: any) {
    super(props);
    this.state = { value: {city: "", name: "", state: ""} };

  }

  componentDidMount() {
      sessionQuerySelectForm$.subscribe(state => this.setState({value: {city: state[1], name: state[0], state: state[2]}}));
  }



  render() {
    return (
        <div>
          <div>
            <h1>Hi Component Works</h1>
            <h3>{ this.state.value.name }</h3>
              <h3>{ this.state.value.city }</h3>
              <h3>{ this.state.value.state }</h3>
          </div>
        </div>
    );
  }
}
