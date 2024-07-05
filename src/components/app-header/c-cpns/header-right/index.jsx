import React, { memo, useEffect, useState } from "react";
import { HeaderRight } from "./style";
import IconGlobal from "@/assets/svg/icon-global";
import IconMenu from "@/assets/svg/icon-menu";
import IconAvatar from "@/assets/svg/icon-avatar";

export default memo(() => {
  const [showPanel, setShowPanel] = useState(false);

  useEffect(() => {
    function windowHandleClick() {
      setShowPanel(false);
    }
    // addEventListener第三个参数为true时表示为捕获，即先从最外部标签向内传递，默认为冒泡；由内逐层向上传递。
    window.addEventListener("click", windowHandleClick, true);
    return () => {
      window.removeEventListener("click", windowHandleClick, true);
    };
  }, []);

  function profileClickHandle() {
    setShowPanel(true);
  }
  return (
    <HeaderRight>
      <div className="btns">
        <span className="btn">登录</span>
        <span className="btn">注册</span>
        <span className="btn">
          <IconGlobal />
        </span>
      </div>

      <div className="profile" onClick={profileClickHandle}>
        <IconMenu />
        <IconAvatar />

        {showPanel && (
          <div className="panel">
            <div className="top">
              <div className="item register">注册</div>
              <div className="item login">登录</div>
            </div>
            <div className="bottom">
              <div className="item">出租房源</div>
              <div className="item">开展体验</div>
              <div className="item">帮助</div>
            </div>
          </div>
        )}
      </div>
    </HeaderRight>
  );
});
