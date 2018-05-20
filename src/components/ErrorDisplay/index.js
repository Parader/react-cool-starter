import React from 'react';

export default error => (
  <div className="ErrorDisplay">
    <p>Oops! {error.message}</p>
  </div>
);
