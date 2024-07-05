import PropTypes from "prop-types";
import React, { memo, useCallback } from "react";
import { RoomsWrapper } from "./style";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import RootItem from "@/components/root-item";
import { useNavigate } from "react-router-dom";
import { changeDetailInfoAction } from "@/store/modules/detail";

const EntireRooms = memo((props) => {
  const { roomList, totalCount, isLoading } = useSelector(
    (state) => ({
      roomList: state.entire.roomList,
      totalCount: state.entire.totalCount,
      isLoading: state.entire.isLoading,
    }),
    shallowEqual
  );

  const navigation = useNavigate();
  const dispatch = useDispatch();
  // 回调函数，如果子函数点击了就调用itemClick函数，父组件会执行对应的itemClickHandle函数，并处理子组件的原函数itemClick函数传递过来的参数值
  const itemClickHandle = useCallback(
    (item) => {
      navigation("/detail");
      dispatch(changeDetailInfoAction(item));
    },
    [navigation, dispatch]
  );
  // const itemClickHandle = (item) => {
  //   console.log("回调后的:", item);
  // };

  return (
    <RoomsWrapper>
      <h2 className="title">{totalCount}处住房</h2>
      <div className="list">
        {roomList.map((item, index) => {
          return (
            <RootItem
              itemData={item}
              itemWidth="20%"
              key={item.id}
              itemClick={itemClickHandle}
            />
          );
        })}
      </div>
      {isLoading && <div className="loading"></div>}
    </RoomsWrapper>
  );
});

EntireRooms.propTypes = {};

export default EntireRooms;
