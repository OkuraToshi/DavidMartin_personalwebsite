import React from "react";

const experienceContent = [
  {
    position: "Senior Full-stack && Blockchain expert",
    compnayName: "self-employed",
    year: "   2022.01 - Present",
    details: ` • Contributing to project-Defi, Dex/Solidity open-source project.
               • Forked on-chain platforms : pancakeswap and uniswap.
               • Experience in yield farming protocol such a EVM protocol, DAO for 6 months.
               • Developed token staking platform based on ERC-20 : 10+ custom tokens.
               • Developed NFT minting & staking Platform based on ERC721/1155 contract for 4 months.
               • Developed NFT Gallery and Dynamic NFT Game platform :
               • Token investing contract : 2 months.  `,
  },
  {
    position: "Senior Full-Stack Developer",
    compnayName: "METICULOSITY, Kelowna, Canada",
    year: "2016.01-2021.01",
    details: ` • Enhanced efficiency, quality data, scope, operability, and flexibility of applications
              Solved challenging dataset problems by using ideas from distributed computing, largescale design. real-time data processing, data storage, machine learning, and artificial
              intelligence.
              •
              Created 7+ full-stack web applications which processed, analyzed, and visualized data
              for different clients.
              •
              • Managed ongoing projects by training and supervising team members.
              Ensure that applications are secure and that they can interact with multiple APIs and
              databases.
              •
              Collaborate with the app development team, including the project manager, developers,
              and quality assurance specialists, to identify problems, testing methods, and best
              practices.
              •
              • Write clean code, drive technical design, and take responsibility for technical delivery.
              • Managed, optimized and updated NoSQL databases as required.
              • Developed, improved, and operated web-based software.
              • Managed time-sensitive updates, such as changing content and upgrading databases.
              The technology used like AngularJS, React, JavaScript, Node, Express, MongoDB,
              GraphQL, etc.
              •
              • Creating and executing unit tests and performing basic application testing.
              `,
  },
  {
    position: "Senior React Developer",
    compnayName: "CONSULTADD, St.Albert United States",
    year: "2015.04-2016.01",
    details: ` UI Components Designing & Application
                Interface
                Code Debugging & Front-end Architecture
                Performance Optimization & Features
                Development
                Application Development & UI Designing
                2015/4 - 2016/1
                Identified web-based user interactions and
                developed highly-responsive user interface
                components via React concepts
                •
                Translated designs & wireframes into highquality code and wrote application interface
                code via JavaScript following React.js
                workflows
                •
                Troubleshot interface software and debugged
                application codes to improve functionality
                and performance by 50%
                •
                Developed and implemented front-end
                architecture to support user interface
                concepts with 100% accuracy
                •
                Monitored and improved front-end
                performance by 15% and documented
                application changes & worked on updates
                Optimized components for maximum
                performance across a vast array of webcapable devices and browsers
                •
                Developed the latest user-facing features
                using react.js and built reusable components
                & front-end libraries for future use
                •
                Optimized components for maximum
                performance across a vast array of web
                capable devices and browsers.
                •
                Coordinated with the development team of
                35 to discuss user interface ideas and
                applications
                •
                Reviewed application requirements and
                interface designs to ensure compatibility with
                existing applications
                NFT Minting Website / front-end guy, Solidity NFTs minting to IPFS`,
  },
];

const Experience = () => {
  return (
    <ul>
      {experienceContent.map((val, i) => (
        <li key={i}>
          <div className="list_inner">
            <div className="short">
              <div className="job">
                <h3>{val.position}</h3>
                <span>{val.compnayName}</span>
              </div>
              <div className="year">
                <span>{val.year}</span>
              </div>
            </div>
            <div className="text">
              <p>{val.details}</p>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default Experience;
