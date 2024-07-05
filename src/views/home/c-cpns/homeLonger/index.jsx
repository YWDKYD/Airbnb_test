import PropTypes from "prop-types";
import React, { memo } from "react";
import { LongerWrapper } from "./style";
import SectionHeader from "@/components/section-header";
import LongforItem from "@/components/longfor-item";
import ScrollView from "@/base-ui/scroll-view";

const HomeLonger = memo((props) => {
  const { infoData } = props;
  return (
    <LongerWrapper>
      <SectionHeader title={infoData.title} subtitle={infoData.subtitle} />
      <div className="longer-list">
        <ScrollView>
          {infoData.list.map((item) => {
            return <LongforItem itemData={item} key={item.city} />;
          })}
        </ScrollView>
      </div>
    </LongerWrapper>
  );
});

HomeLonger.propTypes = {
  infoData: PropTypes.object,
};

export default HomeLonger;
