import * as React from "react";

const HeaderSection = ({ siteTitle }) => (
  <header>
    <h1>KIM SEONMIN PORTFOLIO</h1>
    <p>Front-end Web Developer</p>
    <ul className="actions">
      <li>
        <a href="#first" className="arrow scrolly">
          <span className="label">Next</span>
        </a>
      </li>
    </ul>
  </header>
);

export default HeaderSection;
