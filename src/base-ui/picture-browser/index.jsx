import PropTypes from "prop-types";
import React, { memo, useEffect, useState } from "react";
import { CSSTransition, SwitchTransition } from "react-transition-group";

import { BrowserWrapper } from "./style";
import IconArrowLeft from "@/assets/svg/icon-arrow-left";
import IconArrowRight from "@/assets/svg/icon-arrow-right";

const PictureBrowser = memo((props) => {
  const { pictureUrl, closeClick } = props;
  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  function closeBtnClickHandle() {
    if (closeClick) closeClick();
  }
  function controlClickHandle(isNext = true) {
    let newIndex = isNext ? currentIndex + 1 : currentIndex - 1;
    if (newIndex < 0) newIndex = pictureUrl.length - 1;
    if (newIndex > pictureUrl.length) newIndex = 0;
    setCurrentIndex(newIndex);
  }

  return (
    <BrowserWrapper>
      <div className="top">
        <div className="close-btn" onClick={closeBtnClickHandle}>
          <IconArrowLeft width="30" height="30" />
        </div>
      </div>
      <div className="slider">
        <div className="control">
          <div className="btn left" onClick={(e) => controlClickHandle(false)}>
            <IconArrowLeft width="70" height="70" />
          </div>
          <div className="btn right" onClick={(e) => controlClickHandle(true)}>
            <IconArrowRight width="70" height="70" />
          </div>
        </div>
        <div className="picture">
          <SwitchTransition mode="in-out">
            <CSSTransition
              key={pictureUrl[currentIndex]}
              classNames="pic"
              timeout={200}
            >
              <img src={pictureUrl[currentIndex]} alt="" />
            </CSSTransition>
          </SwitchTransition>
        </div>
      </div>
      <div className="preview"></div>
    </BrowserWrapper>
  );
});

PictureBrowser.propTypes = {
  pictureUrl: PropTypes.array,
};

export default PictureBrowser;
