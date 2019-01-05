import React, { Component } from 'react';
import Loadable from 'react-loadable';

export class Loading extends Component<Loadable.LoadingComponentProps> {
  render() {
    const { error, isLoading } = this.props;

    if (error) {
      return <div>Error</div>;
    } else if (isLoading) {
      return <div>Loading.. Please wait</div>;
    } else {
      return <div>!</div>;
    }
  }
}
