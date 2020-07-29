import React, { useEffect, useState } from "react";

import { useParams, useHistory, Link } from "react-router-dom";

import "./viewJob.styles.scss";
import companylogo from "../../assets/companylogo2.jpeg";
//importing  material icon package
import MaterialIcon from "material-icons-react";
import axios from "axios";
import parse from "html-react-parser";

import Layout from "../layout/Layout.component";
import Logo from "../logo/Logo.component";
import ContentWrapper from "../contentWrapper/ContentWrapper.component";

export default function ViewJob() {
  const { job_id } = useParams();
  const [job, setJob] = useState({});

  let history = useHistory();

  function handleClick() {
    history.push("/");
  }

  useEffect(() => {
    axios
      .get
      // `https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions/${job_id}.json`
      ()
      .then(({ data }) => {
        setJob(data);
      });
  });

  return (
    <Layout>
      <div className="view-job">
        <Logo />
        <ContentWrapper>
          <div className="sidebar">
            <div className="previous-page-link">
              <Link onClick={handleClick}>
                {" "}
                <span className="arrow-back">
                  <MaterialIcon
                    icon="keyboard_backspace"
                    color="#1e86ff"
                    size={15}
                  />
                </span>{" "}
                Back to Search
              </Link>{" "}
            </div>
            <div className="title-text">How to Apply</div>
            <div className="send-info">
              {job.how_to_apply !== undefined ? parse(job.how_to_apply) : ""}
            </div>
          </div>
          <div className="job-details">
            <div className="job-title">
              <span className="title-text">{job.title}</span>{" "}
              <span className="job-type">{job.type}</span>
            </div>
            <div className="posted-on">
              <MaterialIcon icon="watch_later" size={15} color="#b9bdcf" />{" "}
              <span className="text">{job.created_at}</span>{" "}
            </div>
            <div className="company">
              <div className="company-logo">
                <img src={job.company_logo} alt="logo" />
              </div>
              <div>
                <div className="company-name">{job.company}</div>
                <div className="company-address">
                  <span>
                    {" "}
                    <MaterialIcon icon="public" color="#b9bdcf" size={15} />
                  </span>{" "}
                  <span className="text">{job.location}</span>
                </div>
              </div>
            </div>
            <div className="job-description">
              {job.description !== undefined ? parse(job.description) : ""}
            </div>
          </div>
        </ContentWrapper>
      </div>
    </Layout>
  );
}
