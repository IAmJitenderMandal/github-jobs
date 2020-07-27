import React from "react";
import "./viewJob.styles.scss";
import companylogo from "../../assets/companylogo2.jpeg";
//importing  material icon package
import MaterialIcon from "material-icons-react";

import Layout from "../layout/Layout.component";
import Logo from "../logo/Logo.component";
import ContentWrapper from "../contentWrapper/ContentWrapper.component";

export default function ViewJob() {
  return (
    <Layout>
      <div className="view-job">
        <Logo />
        <ContentWrapper>
          <div className="sidebar">
            <div className="previous-page-link">
              {" "}
              <span className="arrow-back">
                <MaterialIcon
                  icon="keyboard_backspace"
                  color="#1e86ff"
                  size={15}
                />
              </span>{" "}
              Back to Search
            </div>
            <div className="title-text">How to Apply</div>
            <div className="send-info">
              Please email a copy of your resume and online portfolio to
              <span className="email"> wes@kasisto.com</span> & CC
              eric@kasisto.com
            </div>
          </div>
          <div className="job-details">
            <div className="job-title">
              <span class="title-text">Front-End Software Engineer</span>{" "}
              <span className="job-type">Full Time</span>
            </div>
            <div className="posted-on">
              <MaterialIcon icon="watch_later" size={15} color="#b9bdcf" />{" "}
              <span className="text">5 days ago</span>{" "}
            </div>
            <div className="company">
              <div className="company-logo">
                <img src={companylogo} alt="logo" />
              </div>
              <div>
                <div className="company-name">Kasisto</div>
                <div className="company-address">
                  <span>
                    {" "}
                    <MaterialIcon icon="public" color="#b9bdcf" size={15} />
                  </span>{" "}
                  <span className="text">New York</span>
                </div>
              </div>
            </div>
            <div className="job-description">
              Humanizing Digital Experiences®
              <br /> Kasisto’s Digital Experience Platform, KAI, is designed for
              financial institutions to deliver the industry’s most amazing
              Conversational AI powered intelligent virtual assistants to their
              customers. KAI is open and extensible, and also fluent in the
              language of banking and finance. From simple retail transactions
              to the complex demands of corporate banks and wealth management,
              financial institutions can deliver meaningful digital interactions
              with KAI that help build their digital brand. Financial
              institutions around the world use KAI, including DBS Bank, J.P.
              Morgan, Mastercard, Standard Chartered, TD Bank, and Manulife Bank
              among others. They chose KAI for its proven track record to drive
              business results while improving customer experiences. The
              platform is used by millions of consumers around the world, all
              the time, across multiple channels, in different languages, and is
              optimized for performance, scalability, security, and compliance.
              This position We are looking for a Full-Stack, client side
              software engineer to help build and integrate responsive chat
              interfaces, analytics dashboards and reporting tools. What you’ll
              be doing Working closely with clients and internal engineering,
              product and design teams to gather requirements Building and
              integrating front-end applications with CSS, HTML, Javascript,
              jQuery, Vue.js, Webpack, Handlebars.js, LESS, Backbone, Python,
              Django and Java Working to improve user experience and
              functionality for tools Writing testable code utilizing common
              front-end unit and BDD testing frameworks What you need for this
              position 3+ years in client-side web development with CSS, HTML,
              Javascript and jQuery Proven, full-stack front-end experience
              using Python and Django Other Modern Web Framework(s) experience
              is a plus (React, Vue, Angular, Ember) Experience working
              collaboratively to build scalable, modular, production software in
              an Agile environment Experience using RESTful json services
              Node.js and API development familiarity is plus D3.js is a plus
              What we offer: Competitive compensation package Ground floor
              opportunity within rapidly growing tech startup Great
              collaborative team environment Full Benefits Fun perks Location -
              NYC, Flatiron District We welcome your cover letter with a
              description of your previous complete experience and your resume.
              Applicants must be authorized to work in the US as we are unable
              to sponsor. Kasisto is an equal opportunity employer.
            </div>
          </div>
        </ContentWrapper>
      </div>
    </Layout>
  );
}
