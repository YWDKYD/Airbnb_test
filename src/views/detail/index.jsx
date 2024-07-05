import PropTypes from "prop-types";
import React, { memo, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { DetailWrapper } from "./style";
import DetailInfo from "./c-cpns/detail-infos";
import DetailPicture from "./c-cpns/detail-pictures";
import { changeHeaderConfigAction } from "@/store/modules/main";

const Detail = memo((props) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(changeHeaderConfigAction({ isFixed: false }));
  }, [dispatch]);
  return (
    <DetailWrapper>
      <DetailPicture />
      <DetailInfo />
    </DetailWrapper>
  );
});

Detail.propTypes = {};

export default Detail;
