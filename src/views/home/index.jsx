import React, { memo, useEffect } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";

import { HomeWarpper } from "./style";
import HomeBanner from "./c-cpns/homeBanner";
import { fetchHomeDateAction } from "@/store/modules/home";
import HomeSection1 from "./c-cpns/homeSection1";

import HomeSection2 from "./c-cpns/homeSection2";
import HomeLonger from "./c-cpns/homeLonger";
import { changeHeaderConfigAction } from "@/store/modules/main";

export default memo(() => {
  const {
    goodPriceInfo,
    highScoreInfo,
    disCountInfo,
    reCommendInfo,
    longforInfo,
  } = useSelector(
    (state) => ({
      goodPriceInfo: state.home.goodPriceInfo,
      highScoreInfo: state.home.highScoreInfo,
      disCountInfo: state.home.disCountInfo,
      reCommendInfo: state.home.reCommendInfo,
      longforInfo: state.home.longforInfo,
    }),
    shallowEqual
  );

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchHomeDateAction());
    dispatch(changeHeaderConfigAction({ isFixed: true }));
  }, [dispatch]);

  return (
    <HomeWarpper>
      <HomeBanner />
      <div className="content">
        {Object.keys(disCountInfo).length && (
          <HomeSection2 infoData={disCountInfo} />
        )}
        {Object.keys(reCommendInfo).length && (
          <HomeSection2 infoData={reCommendInfo} />
        )}
        {Object.keys(goodPriceInfo).length && (
          <HomeSection1 infoData={goodPriceInfo} />
        )}

        {Object.keys(highScoreInfo).length && (
          <HomeSection1 infoData={highScoreInfo} />
        )}
        {Object.keys(longforInfo).length && (
          <HomeLonger infoData={longforInfo} />
        )}
      </div>
    </HomeWarpper>
  );
});
