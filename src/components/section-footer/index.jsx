import PropTypes from "prop-types";
import React, { memo } from "react";
import { FooterWrapper } from "./style";
import IconMoreArrow from "@/assets/svg/icon-more-arrow";
import { useNavigate } from "react-router-dom";

const SectionFooter = memo((props) => {
  const { name } = props;
  const navigate = useNavigate();
  var showName = "更多房源";
  if (name) {
    showName = `更多房源${name}`;
  }
  function getMoreRoomData() {
    navigate("/entire");
  }
  return (
    <FooterWrapper color={name ? "#00848A" : "#000"}>
      <div className="info" onClick={getMoreRoomData}>
        <div className="text">{showName}</div>
        <IconMoreArrow />
      </div>
    </FooterWrapper>
  );
});

SectionFooter.propTypes = {
  name: PropTypes.string,
};

export default SectionFooter;
