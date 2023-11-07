import React from "react";
import {
  ICON_CSS_URL,
  ICON_HTML_URL,
  ICON_JAVASCRIPT_URL,
  ICON_JQUERY_URL,
  ICON_REACT_URL,
} from "../../constants/commonImageUrl";

const SkillSection = () => {
  return (
    <>
      <header>
        <h2>DEVELOPMENT STACK</h2>
      </header>
      <div className="content">
        <p className="stack">
          <strong>
            <img src={ICON_HTML_URL} alt="html icon" />
          </strong>
          웹접근성, 표준성을 준수하며 시멘틱태그를 이용해 마크업 할 수 있습니다.
        </p>
        <p className="stack">
          <strong>
            <img src={ICON_CSS_URL} alt="css icon" />
          </strong>
          SCSS 문법에 익숙하며 styled-component, emotion을 활용할 수 있습니다.
          크로스 브라우징에 대응할 수 있고 Antd, Tailwind 등의 css 라이브러리를
          활용할 수 있습니다.
        </p>
        <p className="stack">
          <strong>
            <img src={ICON_JAVASCRIPT_URL} alt="javascript icon" />
          </strong>
          ES+6 문법에 익숙하고 Javascript의 배열, 메소드, DOM을 이해하며 다양한
          상황에 적용할 수 있습니다.
        </p>
        <p className="stack">
          <strong>
            <img src={ICON_JQUERY_URL} alt="jquery icon" />
          </strong>
          관련 라이브러리와 애니메이션, 여러 메소드들을 잘 활용할 수 있습니다.
        </p>
        <p className="stack">
          <strong>
            <img src={ICON_REACT_URL} alt="react icon" />
          </strong>
          React 구조와 여러가지 hook들을 잘 알고 있으며, 범용적이고 재사용가능한
          컴포넌트 설계를 할 수 있습니다.
        </p>
      </div>
    </>
  );
};

export default SkillSection;
