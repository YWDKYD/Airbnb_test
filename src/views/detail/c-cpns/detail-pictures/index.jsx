import PropTypes from "prop-types";
import React, { memo, useState } from "react";
import { PictureWrapper } from "./style";
import { shallowEqual, useSelector } from "react-redux";
import PictureBrowser from "@/base-ui/picture-browser";

const DetailPicture = memo((props) => {
  const [showBrowser, setShowBrowser] = useState(0);
  const { detailInfo } = useSelector(
    (state) => ({
      detailInfo: state.detail.detailInfo,
    }),
    [shallowEqual]
  );
  return (
    <PictureWrapper>
      <div className="picture">
        <img src={detailInfo?.picture_urls?.[0]} alt="" />
      </div>
      <div className="show-btn" onClick={(e) => setShowBrowser(true)}>
        显示照片
      </div>
      {showBrowser && (
        <PictureBrowser
          pictureUrl={detailInfo.picture_urls}
          closeClick={(e) => setShowBrowser(false)}
        />
      )}
    </PictureWrapper>
  );
});

DetailPicture.propTypes = {};

export default DetailPicture;
