import React, { memo, useRef, useState } from "react";
import { HeaderWraper } from "./style";
import "@/hooks/useScrollPosition";
import HeaderLeft from "./c-cpns/header-left";
import HeaderCenter from "./c-cpns/header-center";
import HeaderRight from "./c-cpns/header-right";
import useScrollPosition from "@/hooks/useScrollPosition";
import { useSelector } from "react-redux";
import classNames from "classnames";

export default memo(() => {
  const { headerConfig } = useSelector((state) => ({
    headerConfig: state.main.headerConfig,
  }));
  const { isFixed } = headerConfig;

  const [isSearch, setIsSearch] = useState(0);

  // 监听滚动 实现中间搜索框滑动就缩回去，点击搜索框就单独放大效果
  const [scrollX, scrollY] = useScrollPosition();
  const prev = useRef(0);
  if (!isSearch) prev.current = scrollY;
  if (isSearch && Math.abs(scrollY - prev.current) > 30) setIsSearch(false);
  return (
    <HeaderWraper className={classNames({ fixed: isFixed })}>
      <div className="content">
        <div className="top">
          <HeaderLeft />
          <HeaderCenter
            isSearch={isSearch}
            searchBarClick={(e) => setIsSearch(true)}
          />

          <HeaderRight />
        </div>
      </div>
      {/* <div className="cover"></div> */}
    </HeaderWraper>
  );
});
