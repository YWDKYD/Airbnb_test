import PropTypes from "prop-types";
import React, { memo } from "react";
import RootItem from "../root-item";
import { RoomsWrapper } from "./style";

const SectionRooms = memo((props) => {
  const { roomList = [], itemWidth } = props;
  return (
    <RoomsWrapper>
      {roomList?.slice(0, 8)?.map((item) => {
        return (
          <RootItem
            itemData={item}
            key={item.id}
            itemWidth={itemWidth}
          ></RootItem>
        );
      })}
    </RoomsWrapper>
  );
});

SectionRooms.propTypes = {
  roomList: PropTypes.array,
};

export default SectionRooms;
