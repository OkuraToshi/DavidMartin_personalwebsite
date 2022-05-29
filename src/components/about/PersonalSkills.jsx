import React from "react";

const skillContent = [
  {
    label: "React.js/Redux",
    percentagePosition: "0%",
    percentageNo: "100%",
  },
  {
    label: "Solidity",
    percentagePosition: "0%",
    percentageNo: "100%",
  },
  {
    label: "Web3.js",
    percentagePosition: "0%",
    percentageNo: "100%",
  },
  {
    label: "Smart Contract",
    percentagePosition: "0%",
    percentageNo: "100%",
  },
  {
    label: "Rust",
    percentagePosition: "0%",
    percentageNo: "100%",
  },
  {
    label: "Solana",
    percentagePosition: "0%",
    percentageNo: "100%",
  },
  {
    label: "ERC-20/ERC-721/ERC-1155",
    percentagePosition: "0%",
    percentageNo: "100%",
  },
  {
    label: "DAO",
    percentagePosition: "0%",
    percentageNo: "100%",
  },
  {
    label: "Vue.js/VueX",
    percentagePosition: "0%",
    percentageNo: "100%",
  },
  {
    label: "TypeScript",
    percentagePosition: "0%",
    percentageNo: "100%",
  },
  {
    label: "Nuxt.js",
    percentagePosition: "0%",
    percentageNo: "100%",
  },
  {
    label: "Next.js",
    percentagePosition: "0%",
    percentageNo: "100%",
  },
  {
    label: "JavaScript/jQuery",
    percentagePosition: "0%",
    percentageNo: "100%",
  },
  {
    label: "Laravel/CodeIgniter/Yii2",
    percentagePosition: "0%",
    percentageNo: "100%",
  },
  {
    label: "Full-stack development",
    percentagePosition: "0%",
    percentageNo: "100%",
  },
  {
    label: "Frontend development",
    percentagePosition: "0%",
    percentageNo: "100%",
  },
  {
    label: "Backend development",
    percentagePosition: "0%",
    percentageNo: "100%",
  },
  {
    label: "MySQL/PostgreSQL/MongoDB",
    percentagePosition: "0%",
    percentageNo: "100%",
  },
  {
    label: "Github",
    percentagePosition: "0%",
    percentageNo: "100%",
  },
  {
    label: "Node.js/Express.js",
    percentagePosition: "0%",
    percentageNo: "100%",
  },
  {
    label: "PHP",
    percentagePosition: "0%",
    percentageNo: "100%",
  },
  {
    label: "Restful API",
    percentagePosition: "0%",
    percentageNo: "100%",
  },
  {
    label: "Socket.io",
    percentagePosition: "0%",
    percentageNo: "100%",
  },
  {
    label: "Java",
    percentagePosition: "0%",
    percentageNo: "100%",
  },
  {
    label: "Bootstrap/CSS/HTML/AJAX",
    percentagePosition: "0%",
    percentageNo: "100%",
  },
  {
    label: "Vercel/Netlify/Heroku/AWS",
    percentagePosition: "0%",
    percentageNo: "100%",
  },
  {
    label: "Python",
    percentagePosition: "0%",
    percentageNo: "100%",
  },
  {
    label: "React Native",
    percentagePosition: "0%",
    percentageNo: "100%",
  },
  {
    label: "Linux/Ubuntu",
    percentagePosition: "0%",
    percentageNo: "100%",
  },
  {
    label: "MacOS/xCode",
    percentagePosition: "0%",
    percentageNo: "100%",
  },
];

const PersonalSkills = () => {
  return (
    <div className="personal">
      <div className="dodo_progress">
        {skillContent.map((val, i) => (
          <div className="progress_inner" key={i}>
            <span>
              <span className="label">{val.label}</span>
              <span
                className="number"
                style={{ right: val.percentagePosition }}
              >
                {val.percentageNo}
              </span>
            </span>
            <div className="background">
              <div className="bar">
                <div
                  className="bar_in"
                  style={{ width: val.percentageNo }}
                ></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PersonalSkills;
