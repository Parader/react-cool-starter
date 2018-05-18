import React, { PureComponent } from 'react';
import Helmet from 'react-helmet';

import styles from './styles.scss';

// Export this for unit testing more easily
export default class Home extends PureComponent {
  constructor() {
    super();
    this.state = {
      bidon: 'bidon'
    };
  }

  renderBidon() {
    return `<div>${this.state.bidon}</div>`;
  }

  render() {
    return (
      <div className={styles.Home}>
        <Helmet title="Home" />
        {this.renderBidon()}
      </div>
    );
  }
}
