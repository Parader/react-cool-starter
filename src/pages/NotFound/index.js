import React, { PureComponent } from 'react';
import Helmet from 'react-helmet';

export default class staticContext extends PureComponent {
  constructor() {
    super();
    this.message = 'Oops, Page was not found!';
  }

  render() {
    // We have to check if staticContext exists
    // because it will be undefined if rendered through a BrowserRoute
    /* istanbul ignore next */
    if (staticContext) {
      staticContext.status = '404'; // eslint-disable-line no-param-reassign
    }

    return (
      <div className="NotFound">
        <Helmet title="Oops" />
        <p>{this.message}</p>
      </div>
    );
  }
}
