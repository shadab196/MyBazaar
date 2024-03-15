import React from 'react';
import Layout from '../components/layout/layout';
import { HiOutlineMail } from "react-icons/hi";
import { CiHeadphones } from "react-icons/ci";
import { IoMdHome } from "react-icons/io";

const Contact = () => {
  return (
    <Layout title={"contact now"}>
      <div className="container mt-5">
        <div className="row">
          {/* Left half for photo */}
          <div className="col-md-6">
              <img 
               src = "/images/contact_us.jpg"
               alt="contact us"
               style={{width:"100%"}}
              />
          </div>
          {/* Right half for contact information */}
          <div className="col-md-6">
            <h2>Contact Us</h2>
            <p>
              For any inquiries or assistance, please feel free to contact us via email
              or phone. We'll get back to you as soon as possible.
            </p>
            <ul className="list-unstyled">
              <li><HiOutlineMail />: help@shadabstore.com</li>
              <li><CiHeadphones />: +1234567890</li>
              <li><IoMdHome />: 123 Noida, U.P., India</li>
            </ul>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
