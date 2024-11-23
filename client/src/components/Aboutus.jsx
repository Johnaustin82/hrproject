import React from "react";
import "./AboutUs.css";

const services = [
  {
    title: "Booking Tickets Online",
    description:
      "Effortlessly book tickets for your preferred vehicles online.",
  },
  {
    title: "Fleet Management",
    description: "Manage your fleet efficiently with our comprehensive tools.",
  },
];

const AboutUs = () => {
  return (
    <div className="about-us-background">
      <div className="about-us-container">
        <h2>About Us</h2>
        <div className="top-section">
        
        </div>
        <div className="bottom-section">
          <div className="text-container">
            <p className="description">
            Reinhard General Agencies Limited is a company used in transporting lime to Simba cement. we supply building and construction materials at affordable costs to enable local Kenyans to build their homes in a cost effective manner. We commenced production and supply of lime in 2010 under the brand name of Reinhard General Agencies, with limited capacity at economic cost. Sensing the growing demand for Cement, we were offered to be a sub-contractor by Simba cement to supply lime.
We continually acknowledge the support of our stakeholders for their long-standing loyalty, commitment and trust in our products and the company as a whole.
            </p>
          </div>
        </div>
        <div className="contact-us-section">
          <h2>Contact Us</h2>
          <p>
            If you have any questions or need further information, please feel
            free to contact us at:
          </p>
          <p>Email: reinhardgeneralagencies@gmail.com </p>
          <p>Phone: +254723579806</p>
          <p>Address: 123 Transport Lane, Nairobi, Kenya</p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
