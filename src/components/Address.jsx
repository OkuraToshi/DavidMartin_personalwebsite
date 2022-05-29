import React from "react";

const addressContent = [
  {
    icon: "icon-letter",
    title: "Email Us",
    info: "david1005martin@gmail.com",
    href: "mailto:david1005martin@gmail.com",
  },
  {
    icon: "icon-placeholder",
    title: "Address",
    info: "Boulevard Robert Bourassa, Tokyo, Japan",
    href: "",
  },
];

const Address = () => {
  return (
    <ul>
      {addressContent.map((val, i) => (
        <li key={i}>
          <div className="list_inner">
            <span className="icon">
              <span className={`svg ${val.icon}`}></span>
            </span>
            <div className="short">
              <h3>{val.title}</h3>
              <span>
                <a href={val.href}>{val.info}</a>
              </span>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default Address;
