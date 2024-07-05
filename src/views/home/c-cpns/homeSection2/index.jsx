import PropTypes from "prop-types";
import React, { memo, useCallback, useState } from "react";
import { SectionV2Wrapper } from "./style";
import SectionHeader from "@/components/section-header";
import SectionTabs from "@/components/section-tabs";
import SectionRooms from "@/components/section-rooms";
import SectionFooter from "@/components/section-footer";

const HomeSection2 = memo((props) => {
  const { infoData } = props;

  const tabNames = infoData.dest_address?.map((item) => item.name);
  const initialName = Object.keys(infoData.dest_list)[0];
  const [tabName, setTabName] = useState(initialName);
  // 使用useCallback监听state状态改变,当点击tabNames变化后触发useCallback进行更新
  const tabClickHandle = useCallback(function (index, name) {
    setTabName(name);
  }, []);
  return (
    <SectionV2Wrapper>
      <SectionHeader title={infoData.title} subtitle={infoData.subtitle} />
      <SectionTabs tabNames={tabNames} tabClick={tabClickHandle} />
      <SectionRooms
        roomList={infoData.dest_list?.[tabName]}
        itemWidth="33.333333%"
      />
      <SectionFooter name={tabName} />
    </SectionV2Wrapper>
  );
});

HomeSection2.propTypes = {
  infoData: PropTypes.object,
};

export default HomeSection2;
