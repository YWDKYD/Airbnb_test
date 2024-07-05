import PropTypes from "prop-types";
import React, { memo } from "react";
import { TabsWrapper } from "./style";

const SearchTabs = memo((props) => {
  const { titles } = props;
  return <TabsWrapper></TabsWrapper>;
});

SearchTabs.propTypes = {};

export default SearchTabs;
