import { getEntireRoomList } from "@/services/modelus/entire";
import * as actionTypes from "./constants";

export const changeCurrentPageAction = (currentPage) => ({
  type: actionTypes.CHANGE_CURRENT_PAGE,
  currentPage,
});

export const changeRoomListAction = (roomList) => ({
  type: actionTypes.CHANGE_ROOM_LIST,
  roomList,
});

export const changeTotalCountAction = (totalCount) => ({
  type: actionTypes.CHANGE_TOTAL_COUNT,
  totalCount,
});

// 用于在网络请求发送前后加载蒙版
export const changeIsLoadingAction = (isLoading) => ({
  type: actionTypes.CHANGE_ISLOADING,
  isLoading,
});

export const fetchRoomListAction = (page = 0) => {
  // action中在回调函数会有两个参数dispatch和payload,函数内容是网络请求的处理逻辑
  return async (dispatch, getState) => {
    dispatch(changeCurrentPageAction(page));

    dispatch(changeIsLoadingAction(true));
    const res = await getEntireRoomList(page * 20);
    dispatch(changeIsLoadingAction(false));

    // 再次派发action，此时是想redux中数据存储action派发
    const { list, totalCount } = res;
    dispatch(changeRoomListAction(list));
    dispatch(changeTotalCountAction(totalCount));
  };
};
