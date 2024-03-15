import React from 'react';
import Layout from '../components/layout/layout';
import { Link } from 'react-router-dom';

const Pagenotfound = () => {
  return (
    <Layout title={"page not found"}>
      <div className="container text-center mt-5">
        <h1 className="display-4 text-danger">404 - Page Not Found</h1>
        <p className="lead">The page you are looking for does not exist.</p>
        <Link to='/' className='pnf-btn'>
          Go Back
        </Link>
      </div>
    </Layout>
  );
};

export default Pagenotfound;
