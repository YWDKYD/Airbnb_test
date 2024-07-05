import PropTypes from "prop-types";
import React, { memo } from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

import { PaginationWrapper } from "./style";
import { useDispatch, useSelector } from "react-redux";
import { fetchRoomListAction } from "@/store/modules/entire/createAction";

const EntirePagination = memo((props) => {
  const { totalCount, currentPage } = useSelector((state) => ({
    totalCount: state.entire.totalCount,
    currentPage: state.entire.currentPage,
  }));
  // console.log(currentPage, totalCount);

  const totalPage = Math.ceil(totalCount / 20);
  // const startCount = currentPage * 20 + 1;
  // const endCount = (currentPage + 1) * 20;

  const dispatch = useDispatch();
  const pageChangeHandle = (event, pageCount) => {
    dispatch(fetchRoomListAction(pageCount - 1));
  };
  return (
    <PaginationWrapper>
      <Stack spacing={2}>
        <Pagination
          count={totalPage}
          variant="outlined"
          page={currentPage + 1}
          onChange={pageChangeHandle}
          color="secondary"
        />
      </Stack>
    </PaginationWrapper>
  );
});

EntirePagination.propTypes = {};

export default EntirePagination;
