import React, { Fragment } from 'react';

import AppWatchers from './watches/components/App';
import AppNotes from './crud/components/App';

const Root = () => {
  return (
    <Fragment>
      <AppWatchers />
      <AppNotes />
    </Fragment>
  );
}

export default Root;

