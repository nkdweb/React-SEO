import React, { Fragment } from 'react';

import { Seo } from '../Seo';

export const AboutPage = () => {
  return (
    <Fragment>
      <Seo
        title="About Page | React App"
        description="Description for about page"
        type="webapp"
      />
      <h1>About Page</h1>
      <h2>
        react-helmet-async is a ReactJs library that provides an API and
        Components for managing SEO and Meta Data In SPAs on both the server and
        client sides.
      </h2>
    </Fragment>
  );
};
