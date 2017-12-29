import React from 'react';
import { node } from 'prop-types';
import { compose, pure } from 'recompose';

import MainBar from 'containers/MainBarConnected';

Layout.propTypes = {
  children: node.isRequired,
};

function Layout({ children }) {
  return (
    <div id="layout">
      <MainBar />
      <main>{children}</main>
    </div>
  );
}

export default compose(pure)(Layout);
