import React, { Fragment } from 'react';

import { Seo } from '../Seo';

export const AboutPage = () => {
  return (
    <Fragment>
      <Seo
        title="React SEO | About Page"
        description="description for about page"
        type="webapp"
        name="Sachin Chaurasiya"
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
