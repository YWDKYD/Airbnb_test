import PropTypes from "prop-types";
import React, { memo, useState } from "react";
import { FilterWrapper } from "./style";
import FilterData from "@/assets/data/filter_data.json";
import classNames from "classnames";

const EntireFilter = memo((props) => {
  const [selectItem, setSelectItem] = useState([]);

  // 用于选中或不选中标签
  function itemClickHandle(item) {
    const newItem = [...selectItem];
    if (newItem.includes(item)) {
      const SliceIndex = newItem.findIndex((index) => index === item);
      newItem.splice(SliceIndex, 1);
    } else {
      newItem.push(item);
    }
    setSelectItem(newItem);
  }
  return (
    <FilterWrapper>
      <div className="filter">
        {FilterData.map((item, index) => {
          return (
            <div
              className={classNames("item", {
                active: selectItem.includes(item),
              })}
              key={item}
              onClick={(e) => itemClickHandle(item)}
            >
              {item}
            </div>
          );
        })}
      </div>
    </FilterWrapper>
  );
});

EntireFilter.propTypes = {};

export default EntireFilter;
