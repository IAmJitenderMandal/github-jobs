import React, { useEffect, useState, Fragment, useReducer } from "react";
import "./App.css";

import axios from "axios";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import { JobsContext } from "../src/context/context";
import reducer from "./context/reducer";

import Layout from "./components/layout/Layout.component";
import Logo from "./components/logo/Logo.component";
import Search from "./components/search/Search.component";
import ContentWrapper from "./components/contentWrapper/ContentWrapper.component";
import Filters from "./components/filters/Filters.component";
import ListItem from "./components/list-item/ListItem.component";
import ViewJob from "./components/view-job/ViewJob.component";

function App() {
  let initState = [
    {
      id: "315ce7c1-2ec0-4141-b012-907a05d0084c",
      type: "Full Time",
      url:
        "https://jobs.github.com/positions/315ce7c1-2ec0-4141-b012-907a05d0084c",
      created_at: "Mon Jul 27 15:54:04 UTC 2020",
      company: "Upserve",
      company_url: "http://Upserve",
      location: "Remote",
      title: "Principal Frontend Engineer",
      description:
        "<p>The Opportunity</p>\n<p>Upserve is looking for a Principal Frontend Engineer with a design-centric approach and a passion for mentoring to join our web applications team. This team designs and creates both core and supplemental products for Upserve’s customers. Frontend Engineers on this team create compelling and functional UX in collaboration with backend engineers to meet new and existing product requirements with robust, maintainable solutions.</p>\n<p>What You’ll Do</p>\n<ul>\n<li>Be a technical leader, gaining ownership and mutual respect over existing and new areas of the product, and collaboratively design with our customer’s needs as paramount.</li>\n<li>Imbue your team with passion for delightful user experiences.</li>\n<li>Drive quality and testing methodologies to ensure only robust solutions are delivered.</li>\n<li>Create maintainable solutions that meet Product and Engineering needs to grow the business.</li>\n<li>Collaborate with our Product and UX teams to disambiguate requirements and understand context to create the appropriate interfaces.</li>\n<li>Participate in sprint planning, code reviews, and retrospectives.</li>\n<li>Guide and mentor other engineers.</li>\n</ul>\n<p>Who You Are</p>\n<ul>\n<li>You have extensively worked with web technologies and frameworks such as React, TypeScript, JavaScript, Elm, webpack, babel, GraphQL and functional programming concepts such as ramda, reselect, React Hooks.</li>\n<li>You understand the web is consumed on many varied platforms with many varied levels of connectivity and bandwidth, and you design accordingly.</li>\n<li>You are an experienced and passionate technical leader who is comfortable defining technical solutions to stimulating challenges.</li>\n<li>You believe in building robust, rigorously-tested systems and components, and driving our quality bar cross-functionally.</li>\n<li>You take pride in your work and the value that it creates, enabling instrumentation and diagnostics post-release phase.</li>\n<li>You are a pragmatic idealist -- you strive for efficient and practical solutions not just theoretically ideal ones.</li>\n<li>You are a believer in moving fast with care and quality as key tenets.</li>\n<li>You enjoy talking about user functionality as much as you enjoy talking about functional programming.</li>\n<li>You feel a tremendous sense of urgency to get value to end users, and you tap into that energy to drive, lead, and motivate your colleagues.</li>\n<li>You get excited about types and algorithms, and know when to choose the right data structure for the right task.</li>\n</ul>\n",
      how_to_apply:
        '<p>Please follow this link to apply: <a href="https://recruit.hirebridge.com/v3/application/applink.aspx?cid=7958&amp;jid=526164">https://recruit.hirebridge.com/v3/application/applink.aspx?cid=7958&amp;jid=526164</a></p>\n',
      company_logo:
        "https://jobs.github.com/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBckdHIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--421183925e3943f46d6d246b2fbb25fbd8f85fc5/Upserve.Symbol.%20Black.png",
    },
    {
      id: "7e2c20f1-f129-4785-9979-c54e7872fca5",
      type: "Full Time",
      url:
        "https://jobs.github.com/positions/7e2c20f1-f129-4785-9979-c54e7872fca5",
      created_at: "Mon Jul 27 12:04:23 UTC 2020",
      company: "Gilat Satellite networks ",
      company_url: "http:",
      location: "Sofia City, Bulgaria ",
      title: "Software Engineer- Embedded Group (912)",
      description:
        "<p>Gilat’s satellite communications ecosystem is built around our inter-disciplinary platform, based on cutting edge technologies, state of the art communication protocols and modulation schemes, innovative optimization algorithms as well as advanced networking protocols.</p>\n<p>Gilat is establishing an SW group in Bulgaria and invite you to be a part of our success. We are looking for exceptional embedded software engineers to drive cutting-edge technologies for next-generation Gilat's Products.</p>\n<p>As part of this team, you will have the opportunity to make a major impact in the way that Gilat develops, tests and manufactures its products. Our Environment fosters product innovation, rapid product iterations, and a liberating amount of autonomy.</p>\n<p>What you will do:</p>\n<p>The ideal candidates will be a part of SW global projects, develop embedded software solutions for our next generation of networking technology focused on NGSO satellite constellations.\nParticipate in the software development lifecycle including in Design and Code Reviews\nDevelop test procedures, run tests and write test documentation to verify software functional requirements\nMake the vision a reality\nBe a part of the development of our future and legacy products\nWork with talented and experienced engineers\nWork on challenging &amp; complex systems</p>\n<p>﻿Desired skills &amp; experience :</p>\n<p>B.Sc. or higher degree in Computer Science \\ Engineering.\nExperience or familiar with operating systems.\nExperience with C programming.\nExperience or familiar with Networking\nGood English.\nAutodidact.\nTeam player\nHigh interpersonal skills</p>\n<p>Nice to have:</p>\n<p>Experience with embedded systems.</p>\n<p>What we offer:</p>\n<p>Be part of an innovative and pioneering spirit company.\nWhat You Do Matter: Impact the way millions of people communicate every day.\nWork on challenging &amp; complex systems.\nA great way to build your career.\nAdditional social benefits – food and transportation allowance, free parking, Multisport card.</p>\n<p>What you can expect:</p>\n<p>Successful applicants will be contacted by Talent Acquisition for an initial discussion.\nIf suitable you will be considered for the shortlist and our formal interview process.</p>\n",
      how_to_apply:
        '<p><a href="mailto:jobs@gilat.com">jobs@gilat.com</a></p>\n<p>Write in the Subject -912- Software Position</p>\n',
      company_logo:
        "https://jobs.github.com/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBcTZHIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--e96bdb73b073ec4be7e475023bd9602c0c306536/GILAT-LO%20(002).PNG",
    },
    {
      id: "0e8f447e-9f83-4257-921c-532f29ebfa63",
      type: "Full Time",
      url:
        "https://jobs.github.com/positions/0e8f447e-9f83-4257-921c-532f29ebfa63",
      created_at: "Mon Jul 27 10:37:11 UTC 2020",
      company: "Reveela Technolgies Limited",
      company_url: "http://www.reveela.com",
      location: "Newcastle",
      title: "Data Scientist & Machine Learning Engineer ",
      description:
        '<p>Role: Data Scientist &amp; Machine Learning Engineer\nLocation: Newcastle Upon Tyne\nSalary: £30,000-£36,000 per annum depending upon specialisms</p>\n<p>Working as part of an agile team, you will be involved in expanding and developing advanced methodologies &amp; data analytics for a next generation publishing ecosystem that facilitates collaboration between Publishers, Journalists and the Business Community by applying artificial intelligence (Natural Language Processing) and machine learning. Further background can be sought here: <a href="https://vimeo.com/371641177">https://vimeo.com/371641177</a></p>\n<p>Given the project involves behaviour analysis, as well as a large amount of data analysis, modelling of decision making and data interpretation; an ability to critically interpret results and experience of experimentation, modelling and data analysis is essential.</p>\n<p>Key areas of responsibility will include:</p>\n<ul>\n<li>Building &amp; optimizing a range of complex classifiers using machine learning &amp; statistical techniques.</li>\n<li>Collaborate with other system engineers to build data and model pipelines</li>\n<li>Manage the infrastructure and data pipelines needed to bring code to production</li>\n<li>Demonstrate end-to-end understanding of applications (including, but not limited to, the machine learning algorithms) being created</li>\n<li>Build algorithms based on statistical modelling procedures and build and maintain scalable machine learning solutions in production</li>\n<li>Use data modelling and evaluation strategy to find patterns and predict unseen instances</li>\n<li>Apply machine learning algorithms and libraries</li>\n<li>Lead on software engineering and software design with UX team.</li>\n<li>Communicate and explain complex processes to stakeholders who are not programming experts</li>\n<li>Liaise with stakeholders to analyse business problems, clarify requirements and define the scope of the resolution needed</li>\n<li>Analyse expansive, complex datasets to extract insights and decide on the appropriate technique</li>\n<li>Research and implement best practices to improve the existing machine learning infrastructure</li>\n<li>Provide support to engineers and product managers in implementing machine learning in the product.</li>\n<li>You\'ll be working with multifaceted systems, requiring you to have a high level of concentration and attention to detail.</li>\n<li>Testing and evaluating data mining models to select the most appropriate ones for any context.</li>\n<li>Handling systems architecture with cloud technologies (AWS, Azure, Google Cloud, IBM Cloud)</li>\n</ul>\n<p>Skills, Experience and Education Required</p>\n<ul>\n<li>A PhD in Computer Science, Software Engineering, or closely related discipline is needed for this interdisciplinary job role.</li>\n<li>Experience of using both MySQL and No SQL databases (MongoDB/Elastic Search)</li>\n<li>Highly competent in using Python</li>\n<li>Experience of exploratory data analysis</li>\n<li>The ability to work within a highly skilled team, adding value through idea generation &amp; implementation.</li>\n<li>Must be proactive about technology horizon scanning and willing to go the extra make to make a difference to the world through the real-world application of technological solutions.</li>\n</ul>\n<p>Additional Details</p>\n<p>Exceptional fun working environment\n25 days annual holiday\nAttractive benefits package Including Health insurance\nNOTE: Applicants MUST have a valid UK visa</p>\n',
      how_to_apply:
        '<p>E mail your CV to <a href="mailto:john@reveela.com">john@reveela.com</a> or <a href="mailto:john.graham@distinctivegroup.co.uk">john.graham@distinctivegroup.co.uk</a></p>\n',
      company_logo:
        "https://jobs.github.com/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBcXlHIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--13e8ad5220882e02b0092a98dde37872388bf6a0/ReveelaLogoGrey%20(002).png",
    },
    {
      id: "bdf6c777-8b70-4aa7-92cf-8a12bf2e5124",
      type: "Full Time",
      url:
        "https://jobs.github.com/positions/bdf6c777-8b70-4aa7-92cf-8a12bf2e5124",
      created_at: "Fri Jul 24 19:18:10 UTC 2020",
      company: "General Atomics",
      company_url: "https://www.ga-careers.com/",
      location: "Centennial, CO",
      title: "Space Systems Engineer- Fault Management",
      description:
        "<p>General Atomics (GA), and its affiliated companies, is one of the world’s leading resources for high-technology systems development ranging from the nuclear fuel cycle to remotely piloted aircraft, airborne sensors, and advanced electric, electronic, wireless and laser technologies.</p>\n<p>General Atomics Electromagnetic Systems (GA-EMS) designs and manufactures first-of-a-kind electromagnetic and electric power generation systems. GA-EMS’ expanding portfolio of specialized products and integrated system solutions support critical fleet, space systems and satellites, missile defense, power and energy, and process and monitoring applications for defense, industrial, and commercial customers worldwide.</p>\n<p>We currently have an exciting opportunity for a Satellite Fault Detection, Isolation and Recovery Engineer working on satellite systems to join our team located in Centennial, CO.</p>\n<p>DUTIES AND RESPONSIBILITIES:</p>\n<ul>\n<li>Provide proactive and pragmatic Fault Detection, Isolation and Recovery (FDIR) engineering support as part of an integrated satellite project team.</li>\n<li>Support projects to ensure that they are delivering to contractual availability requirements and applicable plans.</li>\n<li>Collect, document and present, as required, FDIR related information.</li>\n<li>Support project teams in management of discrepancies and bugs, working with the integrated satellite project team to address and close.</li>\n<li>Support project teams in the management of engineering changes.</li>\n<li>Manage and process requests for waiver and deviation of requirements in conjunction with the satellite system engineers, and wider project team.</li>\n<li>Support mandatory inspection points as needed, involving review of documentation and general verification of the status.</li>\n<li>Liaise with all levels of project team and engineering staff on FDIR related matters and support other teams / disciplines as necessary.</li>\n<li>Apply technical knowledge to analyze, investigate and resolve engineering problems.</li>\n<li>Perform other duties as assigned or required.\nWe recognize and appreciate the value and contributions of individuals with diverse backgrounds and experiences and welcome all qualified individuals to apply.</li>\n</ul>\n<p>JOB QUALIFICATIONS:</p>\n<ul>\n<li>Typically requires a bachelors degree, masters degree or PhD in engineering or a related technical discipline from an accredited institution and progressive engineering experience as follows; six or more years of experience with a bachelors degree, four or more years of experience with a masters degree, or two or more years with a PhD. May substitute equivalent engineering experience in lieu of education.</li>\n<li>Technical background working in an environment in which mission assurance is a major consideration.</li>\n<li>Experience with Failure Detection Isolation and Recovery (FDIR) analysis and testing.</li>\n<li>Experience in space technologies or similar engineering background would be preferable.</li>\n<li>Experience in a project led design and development environment.</li>\n<li>A working understanding of some of the following technologies/disciplines would be an advantage: analogue / digital electronics and components, satellite integration and test</li>\n<li>Familiarity with the satellite system life cycle, including launch, commissioning and operations.</li>\n<li>Must possess the ability to understand new concepts quickly and apply them accurately and organize work assignments to meet established timetables.</li>\n<li>Strong communication, computer, documentation, presentation, and interpersonal skills are required, as well as the ability to work both independently and as part of a team.</li>\n<li>Must be able to work extended hours as required.</li>\n<li>US citizenship is required.</li>\n<li>Ability to obtain and maintain a DoD Security Clearance is required.</li>\n<li>Travel Percentage Required 0% - 25%</li>\n<li>US Citizenship Required? Yes</li>\n<li>Clearance Required? No</li>\n</ul>\n",
      how_to_apply:
        '<p><a href="https://bit.ly/2WQ81fm">https://bit.ly/2WQ81fm</a></p>\n',
      company_logo:
        "https://jobs.github.com/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBcVdHIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--ca16fc6ca0984aa1e4bffa254e095306a9272767/GA%20icon%20logo.png",
    },
    {
      id: "42280cbe-448f-4902-9034-4703c932a3ba",
      type: "Full Time",
      url:
        "https://jobs.github.com/positions/42280cbe-448f-4902-9034-4703c932a3ba",
      created_at: "Fri Jul 24 18:52:09 UTC 2020",
      company: "General Atomics",
      company_url: "https://www.ga-careers.com/",
      location: "Centennial, CO",
      title: "Satellite Electrical Power Engineer",
      description:
        "<p>General Atomics (GA), and its affiliated companies, is one of the world’s leading resources for high-technology systems development ranging from the nuclear fuel cycle to remotely piloted aircraft, airborne sensors, and advanced electric, electronic, wireless and laser technologies.</p>\n<p>General Atomics Electromagnetic Systems (GA-EMS) designs and manufactures first-of-a-kind electromagnetic and electric power generation systems. GA-EMS’ expanding portfolio of specialized products and integrated system solutions support critical fleet, space systems and satellites, missile defense, power and energy, and process and monitoring applications for defense, industrial, and commercial customers worldwide.</p>\n<p>We currently have an exciting opportunity for a Satellite Electrical Power Engineer working on satellite systems to join our team located in Centennial, CO.</p>\n<p>DUTIES AND RESPONSIBILITIES:</p>\n<ul>\n<li>Responsible for providing electrical power subsystem subject matter expertise.</li>\n<li>Leads analysis, design, development, integration and testing of electrical power systems and components. To include design of power distribution units, power supplies, solar arrays and harnessing.</li>\n<li>Responsible for simulation and analysis of LEO/MEO and GEO satellite power systems.</li>\n<li>Provide box-level, spacecraft-level integration, testing and launch base support.</li>\n<li>Responsible for performing electrical power-related analysis, conceptual sizing and design of satellite power systems.</li>\n<li>Devises new approaches and develops new tools to resolve unusual or complex engineering problems.</li>\n<li>Troubleshoot conflicting design/development requirements.</li>\n<li>Support proposal and business development activities.</li>\n<li>Provides documentation and makes technical presentations as required.</li>\n<li>May represent the organization as the prime technical contact on some contracts or projects.</li>\n<li>Provides direction to design or technical staff and may lead a team of moderately experienced professional staff.</li>\n<li>Maintains the strict confidentiality of sensitive information.</li>\n<li>Performs other duties as assigned or required\nWe recognize and appreciate the value and contributions of individuals with diverse backgrounds and experiences and welcome all qualified individuals to apply.</li>\n</ul>\n<p>JOB QUALIFICATIONS:</p>\n<ul>\n<li>Typically requires a bachelors degree, masters degree or PhD in engineering or a related technical discipline from an accredited institution and progressive engineering experience as follows; six or more years of experience with a bachelors degree, four or more years of experience with a masters degree, or two or more years with a PhD. May substitute equivalent engineering experience in lieu of education.</li>\n<li>Ability to obtain and maintain a DoD Secret Security Clearance is required.</li>\n<li>US Citizenship is required.</li>\n<li>General understanding of spacecraft and launch vehicle systems/operation is desired.</li>\n<li>Experience in satellite electrical power subsystem design and operation is required</li>\n<li>Proficiency with using commercially available electrical components and analysis tools is highly desired. (MATLAB, STK, etc)</li>\n<li>Experience with developing custom electrical power design and analysis tools is desired.</li>\n<li>Demonstrates a detailed and technical expertise and application of engineering principles, concepts, theory, and practice with the ability to organize, plan, schedule, conduct, and coordinate workloads to meet established deadlines or milestones with some experience in project leadership.</li>\n<li>Must possess the ability to develop and communicate new concepts; apply them accurately throughout an evolving environment; organize, schedule, and coordinate work phases; and, determine the appropriate approach at the task level or, with assistance, at the project level to provide solutions to a range of complex problems.</li>\n<li>Travel Percentage Required 0% - 25%</li>\n<li>US Citizenship Required? Yes</li>\n<li>Clearance Required? No</li>\n</ul>\n",
      how_to_apply:
        '<p><a href="https://bit.ly/2BvWTg8">https://bit.ly/2BvWTg8</a></p>\n',
      company_logo:
        "https://jobs.github.com/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBcU9HIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--1b35e8290b1474a9f69b66b08b2f41ceb5a319d9/GA%20icon%20logo.png",
    },
    {
      id: "9d7fe486-f783-4546-8cdd-694b1e00b402",
      type: "Full Time",
      url:
        "https://jobs.github.com/positions/9d7fe486-f783-4546-8cdd-694b1e00b402",
      created_at: "Fri Jul 24 18:42:20 UTC 2020",
      company: "General Atomics",
      company_url: null,
      location: "Centennial, CO",
      title: "Satellite Electrical Engineering Manager",
      description:
        "<p>General Atomics (GA), and its affiliated companies, is one of the world’s leading resources for high-technology systems development ranging from the nuclear fuel cycle to remotely piloted aircraft, airborne sensors, and advanced electric, electronic, wireless and laser technologies.</p>\n<p>General Atomics Electromagnetic Systems (GA-EMS) designs and manufactures first-of-a-kind electromagnetic and electric power generation systems. GA-EMS' expanding portfolio of specialized products and integrated system solutions support critical fleet, space systems and satellites, missile defense, power and energy, and process and monitoring applications for defense, industrial, and commercial customers worldwide.</p>\n<p>We have an exciting opportunity for a Satellite Electrical Engineering Manager to join our Orbital Technologies team located in Centennial, CO.</p>\n<p>DUTIES AND RESPONSIBILITIES:</p>\n<ul>\n<li>Responsible for the planning, managing and technical performance of an engineering unit through all phases of assigned project(s) from inception through completion.</li>\n<li>Participate with technical staff, program managers and executive management to develop and implement current, annual and long-term technical, schedule, quality, business and financial objectives for the unit.</li>\n<li>Work with GA-EMS Engineering staff in the concept development and prototype design, integration, and test of embedded systems, circuit design and board layouts of satellite computer systems.</li>\n<li>Participate in and coordinate the establishment of design concepts, criteria, and engineering efforts for product research, development, testing, and integration.</li>\n<li>Interact internally with engineering team and/or with suppliers, vendors or customers to share information for problem resolution.</li>\n<li>May act as primary contact for engineering activities.</li>\n<li>May participate in the preparation of proposals, business plans, proposal work statements and specifications, operating budgets and financial terms/conditions of contract(s).</li>\n<li>Ensure technical leadership and excellence is maintained by participating in the planning, attraction, selection, retention, and development of the required management, professional, and technical talent.</li>\n<li>Identify engineering issues and provide leadership in developing solutions such as re-allocation of resources or modifying specifications.</li>\n<li>May participate in the development of new business opportunities and expansion of existing business opportunities.</li>\n<li>Generate electrical architecture solutions for new project needs, perform electrical engineering analyses for systems and circuits, document findings, communicate results to engineering and program management staff, give technical presentations, and manage technical effort schedules.</li>\n<li>Formulate plans, typically long-term, and coordinate solutions development and deployment including documentation, reporting, publishing, and making technical and other presentations to ensure viability of the solutions in an evolving environment.</li>\n<li>Plan for future applications of solutions based on new developments in engineering technology.</li>\n<li>Participate in or may lead the development of new or expansion of existing business opportunities.</li>\n<li>Communicate with colleagues and management throughout solution development and deployment cycles.</li>\n<li>Represent the company as a prime technical contact on contracts and/or projects and interact with senior external personnel on technical matters requiring coordination between the organizations.</li>\n<li>Perform other duties as assigned or required.\nWe recognize and appreciate the value and contributions of individuals with diverse backgrounds and experiences and welcome all qualified individuals to apply.</li>\n</ul>\n<p>JOB QUALIFICATIONS:</p>\n<ul>\n<li>Typically requires a Bachelors, Masters or PhD in engineering or a related technical field as well as nine or more years of progressively complex engineering experience with at least three of those years having management responsibilities. May substitute equivalent experience in lieu of education.</li>\n<li>Ability to obtain a DoD Secret Security Clearance is required.</li>\n<li>Required Experience: Mixed-signal (analog/digital) circuit design; embedded systems; analysis, design, and implementation of hardware systems to include digital, analog, and RF is required.</li>\n<li>Desirable Experience: Electronics design for Space Systems applications; embedded controls in power electronics or high-power computing; digital or microprocessor control of systems; deployment on the FPGA level, CPU/RTOS level; embedded systems architecture and project development for control of complex, high-consequence system-of-systems; familiarity with DoD technical review process (at a minimum: SRR, PDR, CDR, TRR)</li>\n<li>Desired Skills (ranked high to low and not limited to): Experience with C/C++, MATLAB/Simulink, Xilinx Vivado Design Suite, VHDL, PADS PCB Design Software, SPICE circuit simulation tools, Microsoft Project.</li>\n<li>Experience with design electronic systems for the space radiation environment, desired.</li>\n<li>Demonstrate an extensive technical expertise and application of engineering principles, concepts, theory, and practice with the ability to organize, plan, schedule, conduct, and coordinate workloads of an engineering unit to meet established deadlines or milestones with experience in project leadership.</li>\n<li>Must possess the ability to understand new concepts quickly and apply them accurately throughout an evolving environment.</li>\n<li>Strong communication, presentation, and interpersonal skills to effectively interface with other departments, customers, government representatives, and/or professionals.</li>\n<li>Customer-focused and able to formulate plans based on the development of innovative new designs in resolving advanced technical engineering problems.</li>\n<li>Some travel and extended work schedules may be required.</li>\n<li>US citizenship is required.</li>\n<li>Travel Percentage Required 0% - 25%</li>\n<li>US Citizenship Required? Yes</li>\n<li>Clearance Required? No</li>\n</ul>\n",
      how_to_apply:
        '<p><a href="https://bit.ly/2OQ34Pd">https://bit.ly/2OQ34Pd</a></p>\n',
      company_logo:
        "https://jobs.github.com/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBcHlHIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--31dfd5862be8b0a544cb591c2172ceeb23f6c0aa/GA%20icon%20logo.png",
    },
    {
      id: "45e4cac8-226e-4647-bc7d-60a4e043921e",
      type: "Full Time",
      url:
        "https://jobs.github.com/positions/45e4cac8-226e-4647-bc7d-60a4e043921e",
      created_at: "Fri Jul 24 18:33:21 UTC 2020",
      company: "General Atomics",
      company_url: "https://www.ga-careers.com/",
      location: "Centennial, CO",
      title: "Chief Satellite Systems Engineer",
      description:
        "<p>General Atomics (GA), and its affiliated companies, is one of the world’s leading resources for high-technology systems development ranging from the nuclear fuel cycle to remotely piloted aircraft, airborne sensors, and advanced electric, electronic, wireless and laser technologies.</p>\n<p>General Atomics Electromagnetic Systems (GA-EMS) designs and manufactures first-of-a-kind electromagnetic and electric power generation systems. GA-EMS’ expanding portfolio of specialized products and integrated system solutions support critical fleet, space systems and satellites, missile defense, power and energy, and process and monitoring applications for defense, industrial, and commercial customers worldwide.</p>\n<p>We currently have an exciting opportunity for a Chief Satellite Systems Engineer working on satellite systems to join our team located in Centennial, CO.</p>\n<p>DUTIES AND RESPONSIBILITIES:</p>\n<ul>\n<li>Lead the technical team in the satellite subsystem overall development and integration planning, and organization.</li>\n<li>Lead the satellite system and subsystem test configuration and procedure development, review and execution.</li>\n<li>Lead the technical team in solving hardware/software interface problems, define input/output parameters, and ensure integration of the entire system or subsystem.</li>\n<li>Liaise with all levels of program and engineering staff on design, integration and test matters and support other teams/disciplines as necessary.</li>\n<li>Formulate and maintain plans as execution occurs.</li>\n<li>Implement and support quality management in the execution of a program.</li>\n<li>Apply technical knowledge to determine and set technical objectives to analyze, investigate and resolve advanced engineering problems; including future applications, and engineering developments.</li>\n<li>Perform mission and system design on missions from bid generation through launch and operations.</li>\n<li>Prepare and lead the review of technical response to bids, presentation materials and reports.</li>\n<li>Liaise with customer and supplier staff, government representatives and other professionals.</li>\n<li>Performs other duties as assigned or required.\nWe recognize and appreciate the value and contributions of individuals with diverse backgrounds and experiences and welcome all qualified individuals to apply.</li>\n</ul>\n<p>JOB QUALIFICATIONS:</p>\n<ul>\n<li>Typically requires a bachelors degree, masters degree or PhD in engineering or a related technical discipline from an accredited institution and progressive engineering experience as follows; twelve or more years of experience with a bachelors degree, ten or more years of experience with a masters degree, or seven or more years with a PhD. May substitute equivalent engineering experience in lieu of education.</li>\n<li>Full understanding of clean room facilities, compliance and safe working practices.</li>\n<li>Detailed and extensive technical expertise and application of engineering principles, concepts, theory, and practice with all aspects of the satellite system life cycle.</li>\n<li>Demonstrated experience in organization, planning and technical leadership, including risk identification, assessment and mitigation.</li>\n<li>Must possess the ability to understand new concepts quickly and apply them accurately throughout an evolving environment and organize work assignments to meet established timetables.</li>\n<li>Strong communication, computer, documentation, presentation, and interpersonal skills are required, as well as the ability to work both independently and as part of a team.</li>\n<li>Must be able to work extended hours as required and be flexible and adaptable to changing priorities and workloads.</li>\n<li>US citizenship is required.</li>\n<li>Travel Percentage Required 0% - 25%</li>\n<li>US Citizenship Required? Yes</li>\n<li>Clearance Required? No</li>\n</ul>\n",
      how_to_apply:
        '<p><a href="https://bit.ly/3jBoXjo">https://bit.ly/3jBoXjo</a></p>\n',
      company_logo:
        "https://jobs.github.com/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBcHFHIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--4f930d189d6c16b7c7c638860c90da258a73561b/GA%20icon%20logo.png",
    },
  ];

  const [jobsData, dispatch] = useReducer(reducer, initState);

  // useEffect(() => {
  //   axios
  //     .get(
  //       "https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json"
  //     )
  //     .then((response) => setJobsData(response.data))
  //     .catch((err) => {
  //       console.log("error fetching", err);
  //     });
  // }, []);

  return (
    <JobsContext.Provider value={{ jobsData, dispatch }}>
      <div className="app">
        <Layout>
          <Switch>
            <Route exact path="/">
              <Fragment>
                <Logo />
                <Search />
                <ContentWrapper>
                  <Filters />
                  <div className="listings">
                    {jobsData.map((eachJob) => (
                      <ListItem eachJob={eachJob} key={eachJob.id} />
                    ))}
                    {/* <ListItem /> */}
                  </div>
                </ContentWrapper>
              </Fragment>
            </Route>
            <Route exact path="/:job_id">
              <ViewJob />
            </Route>
          </Switch>
        </Layout>
      </div>
    </JobsContext.Provider>
  );
}

export default App;
