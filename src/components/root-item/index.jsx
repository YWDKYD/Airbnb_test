import PropTypes from "prop-types";
import React, { memo, useRef } from "react";
import { ItemWrapper } from "./style";
import IconArrowLeft from "@/assets/svg/icon-arrow-left";
import IconArrowRight from "@/assets/svg/icon-arrow-right";
import { Carousel } from "antd";

const RootItem = memo((props) => {
  const { itemData, itemWidth = "25%", itemClick } = props;
  const clickLeft = useRef();

  function controlClickHandle(isLeft = false, s) {
    isLeft ? clickLeft.current.prev() : clickLeft.current.next();

    // 阻止事件冒泡，css父级覆盖子模块功能
    s.stopPropagation();
  }

  // 首页的滚动
  const cover = (
    <div className="cover">
      <img src={itemData.picture_url} alt="" />
    </div>
  );

  // 更多房源的滚动
  const swiper = (
    <div className="swiper">
      <div className="control">
        <div className="btn left" onClick={(e) => controlClickHandle(true, e)}>
          <IconArrowLeft height="30" width="30" />
        </div>
        <div
          className="btn right"
          onClick={(e) => controlClickHandle(false, e)}
        >
          <IconArrowRight height="30" width="30" />
        </div>
      </div>
      <Carousel dots={false} ref={clickLeft}>
        {itemData?.picture_urls?.map((item) => {
          return (
            <div className="cover">
              <img src={item} alt="" />
            </div>
          );
        })}
      </Carousel>
    </div>
  );

  // 点击回传给父组件，用于跳转
  function itemClickHandle() {
    // console.log(itemData);
    if (itemClick) itemClick(itemData);
  }
  return (
    <ItemWrapper
      verifyColor={itemData?.verify_info?.text_color || "#39576a"}
      itemWidth={itemWidth}
      onClick={itemClickHandle}
    >
      {itemData.picture_urls ? swiper : cover}
      <div className="inner">
        <div className="desc">{itemData.verify_info.messages.join(" · ")}</div>
        <div className="name">{itemData.name}</div>
        <div className="price">￥{itemData.price}/晚</div>
        <div className="bottom"></div>

        <span className="count"></span>
      </div>
    </ItemWrapper>
  );
});

RootItem.propTypes = {
  itemData: PropTypes.object,
};

export default RootItem;
