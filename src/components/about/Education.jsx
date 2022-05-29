import React from "react";

const educationContent = [
  {
    degree: "Computer Science",
    institute: "University of Montreal",
    year: "2011 - 2015",
    details: `I mainly studied Information technology and Computer science at bachelor's Degree Program in this university.`,
  },
];

const Education = () => {
  return (
    <ul>
      {educationContent.map((val, i) => (
        <li key={i}>
          <div className="list_inner">
            <div className="short">
              <div className="job">
                <h3>{val.degree}</h3>
                <span>{val.institute}</span>
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

export default Education;
