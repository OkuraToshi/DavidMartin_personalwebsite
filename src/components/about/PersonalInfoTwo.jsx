import React from "react";

const personalDetails = [
  { title: "Name", info: "David Martin" },
  { title: "Birthday", info: "Octorber 5, 1994" },
  { title: "Mail", info: "david1005martin@gmail.com" },
  // { title: "Phone", info: "+123 456 7890" },
  { title: "Address", info: "(G0G 2R0) 1239 , Boulevard Robert Bourassa, Montreal" },
  { title: "Nationality", info: "CANADA" },
];

const aboutContentInfo = {
  meta: "About Me",
  title: "Full-stack developer",
  subTitle: "A senior Full-stack developer based In Montreal, CANADA",
  description: `Hi! My name is David Martin.
                Passionate full-stack engineer with 7+ years of hands-on experience in developing scalable websites/applications using a wide range of
                front-end and back-end skills like React.js, Next.js, Node.js, Python,
                etc. Developed 50+ websites from scratch at CONSULTADD and
                METICULOSITY.
                Looking to further enhance React/Material-UI || Next/Tailwind CSS
                for front-end, Node && Express for back-end skills as the future full
                stack developer.`,
};

const PersonalInfoTwo = () => {
  return (
    <div className="know_tm_about">
      <div className="left" data-aos="fade-right">
        <div className="left_inner">
          <div className="image">
            <img src="img/thumbs/35-44.jpg" alt="" />
            <div
              className="main"
              style={{
                backgroundImage: `url(${
                  process.env.PUBLIC_URL + "img/about/profile-photo.PNG"
                })`,
              }}
            ></div>
          </div>
          {/* End .image */}

          <div className="details">
            <ul>
              {personalDetails.map((value, i) => (
                <li key={i}>
                  <h3>{value.title}</h3>
                  <span>{value.info}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      {/* End .left */}

      <div className="right" data-aos="fade-right">
        <div className="know_tm_main_title">
          <span>{aboutContentInfo.meta}</span>
          <h3>{aboutContentInfo.title}</h3>
        </div>
        <div className="bigger_text">
          <p>{aboutContentInfo.subTitle}</p>
        </div>
        <div className="text">
          <p>{aboutContentInfo.description}</p>
        </div>
        <div className="know_tm_button">
          <a href="img/cv/my-cv.pdf" download>
            Download CV
          </a>
        </div>
      </div>
      {/* End .right */}
    </div>
  );
};

export default PersonalInfoTwo;
