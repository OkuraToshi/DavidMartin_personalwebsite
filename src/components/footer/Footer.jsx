import React from "react";

const Footer = () => {
  return (
    <>
      <div className="inner">
        <div className="left">
          <p>
            Designed with David Martin &copy; {new Date().getFullYear()} by{" "}
            <a href="#">
              David{" "}
            </a>
            All right reserved
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
