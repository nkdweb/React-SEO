import React, { Fragment } from 'react';
import { Helmet } from 'react-helmet-async';

export const HomePage = () => {
  return (
    <Fragment>
      <Helmet>
        <title>Home Page | React App</title>
        <meta name="description" content="Description for Home Page" />
      </Helmet>
      <h1>Home Page</h1>
      <h2>
        ReactJs and react-helmet-async - Manage SEO and Meta
        Data
      </h2>
    </Fragment>
  );
};
