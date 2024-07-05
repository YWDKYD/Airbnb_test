// import PropTypes from "prop-types";
import React, { memo, useEffect, useRef, useState } from "react";
import { ScrollWrapper } from "./style";
import IconArrowLeft from "@/assets/svg/icon-arrow-left";
import IconArrowRight from "@/assets/svg/icon-arrow-right";

const ScrollView = memo((props) => {
  // 设置showRight的显示与否
  const [showRight, setShowRight] = useState(false);
  const [showLeft, setShowLeft] = useState(false);

  // 设置右移动的个数
  const [potIndex, setPotIndex] = useState(0);
  // 绑定useRef来获取组件的位置信息
  const scrollContentRef = useRef();
  // 用于绑定隐藏的长度，由于只需要加载一次，所以使用useRef来设置
  const totalDistanceRef = useRef();

  useEffect(() => {
    const scrollWidth = scrollContentRef.current.scrollWidth; //滚动的宽度
    const clientWidth = scrollContentRef.current.clientWidth; //本身的宽度
    const totalDistance = scrollWidth - clientWidth;
    totalDistanceRef.current = totalDistance;
    // 当宽度大于0时，showRight设为true
    setShowRight(totalDistance > 0);
  }, [props.children]);

  // 实现点击按钮滑动效果
  function controClickHandle(isRight) {
    const newIndex = isRight ? potIndex + 1 : potIndex - 1;
    // 直接可以获取到children的
    const newEl = scrollContentRef.current.children[newIndex];
    // 设置偏移距离
    const newOffsetLeft = newEl.offsetLeft;
    // console.log(newEl, newOffsetLeft);
    scrollContentRef.current.style.transform = `translate(-${newOffsetLeft}px)`;
    setPotIndex(newIndex);
    setShowRight(totalDistanceRef.current > newOffsetLeft);
    setShowLeft(newOffsetLeft > 0);
  }
  return (
    <ScrollWrapper>
      {showLeft && (
        <div className="content left" onClick={(e) => controClickHandle(false)}>
          <IconArrowLeft />
        </div>
      )}

      {showRight && (
        <div className="content right" onClick={(e) => controClickHandle(true)}>
          <IconArrowRight />
        </div>
      )}
      <div className="scroll">
        <div className="scroll-content" ref={scrollContentRef}>
          {props.children}
        </div>
      </div>
    </ScrollWrapper>
  );
});

ScrollView.propTypes = {};

export default ScrollView;
