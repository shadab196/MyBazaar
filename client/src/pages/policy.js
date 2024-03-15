import React from 'react';
import Layout from '../components/layout/layout';

const Policy = () => {
  return (
    <Layout title={"our policies"}>
      <div className="container mt-5">
        <div className="row">
          {/* Left side for photo */}
          <div className="col-md-6">
          <img 
               src = "/images/contact_us.jpg"
               alt="contact us"
               style={{width:"100%"}}
              />
          </div>
          {/* Right side for text */}
          <div className="col-md-6">
            <h2>Privacy Policy</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam hendrerit
              purus at lacus ultrices convallis. Proin luctus lacus nec urna fermentum,
              nec aliquam leo convallis. Duis nec justo semper, tincidunt eros nec,
              consequat odio. Donec nec aliquam risus.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Policy;
