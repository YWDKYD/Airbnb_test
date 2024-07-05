import PropTypes from "prop-types";
import React, { memo, useEffect } from "react";
import { EntireWrapper } from "./style";
import EntireFilter from "./c-cpns/entire-filter";
import EntireRooms from "./c-cpns/entire-rooms";
import EntirePagination from "./c-cpns/entire-pagination";
import { useDispatch } from "react-redux";
import { fetchRoomListAction } from "@/store/modules/entire/createAction";
import { changeHeaderConfigAction } from "@/store/modules/main";

const Entire = memo((props) => {
  const dispatch = useDispatch();
  useEffect(() => {
    // 由于在action中编写了一个网络请求成功后获取数据的aciton，因此在此dispatch去它
    dispatch(fetchRoomListAction());
    dispatch(changeHeaderConfigAction({ isFixed: true }));
  }, [dispatch]);
  return (
    <EntireWrapper>
      <EntireFilter />
      <EntireRooms />
      <EntirePagination />
    </EntireWrapper>
  );
});

Entire.propTypes = {};

export default Entire;
