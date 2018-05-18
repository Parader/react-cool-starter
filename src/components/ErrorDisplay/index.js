import React from 'react';

import styles from './styles.scss';

export default error => (
  <div className={styles.Error}>
    <p>Oops! {error.message}</p>
  </div>
);
