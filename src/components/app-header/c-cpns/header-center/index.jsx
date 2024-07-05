import React, { memo, useState } from "react";
import { HeaderCenter } from "./style";
import SearchTitles from "@/assets/data/search_title";
import IconSearch from "@/assets/svg/icon-search";
import SearchTabs from "./search-tabs";
import SearchSections from "./search-sections";

export default memo((props) => {
  const { isSearch, searchBarClick } = props;
  const [tabIndex, setTabIndex] = useState(0);

  // const title = SearchTitles.map((item) => item.title);
  function searchBarClickHandle() {
    if (searchBarClick) searchBarClick();
  }
  return (
    <HeaderCenter>
      <div className="search-bar" onClick={searchBarClickHandle}>
        <div className="text">搜索房源和体验</div>
        <div className="icon">
          <IconSearch />
        </div>
      </div>
      {/* <div className="search-detail">
        <SearchTabs titles={title} tabClick={setTabIndex} />
        <div className="infos">
          <SearchSections searchInfos={SearchTitles[tabIndex].searchInfos} />
        </div>
      </div> */}
    </HeaderCenter>
  );
});
