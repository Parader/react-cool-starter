import React, { PureComponent } from 'react';
import Helmet from 'react-helmet';

// Export this for unit testing more easily
export default class Home extends PureComponent {
  constructor() {
    super();
    this.state = {
      bidon: 'Hello world'
    };
  }

  render() {
    return (
      <div className="Home">
        <Helmet title="Home" />
        <div>{this.state.bidon}</div>
      </div>
    );
  }
}
