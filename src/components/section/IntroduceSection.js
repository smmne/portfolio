import React from "react";

const IntroduceSection = () => {
  return (
    <>
      <header>
        <h2>ABOUT ME</h2>
      </header>
      <div className="content">
        <p>
          <strong style={{ display: "block" }}>Kim Seonmin</strong>
          현재 위치에 안주하지 않고 점점 더 성장하고 끊임없이 배움을 게을리하지
          않는 프론트엔드 개발자가 되고 싶습니다. <br />
          완성도 높은 코드, 그리고 완성도 높은 UI를 위해 매일 고민하는 사람이
          되도록 하겠습니다.
        </p>
        <span className="image main">
          <img src="" alt="" />
        </span>
      </div>
    </>
  );
};

export default IntroduceSection;
