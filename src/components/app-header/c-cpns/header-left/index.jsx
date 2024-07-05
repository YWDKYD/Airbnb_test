import React, { memo } from "react";
import { Headerleft } from "./style";
import IconLogo from "@/assets/svg/icon-logo";
import { useNavigate } from "react-router-dom";

export default memo(() => {
  const Navigate = useNavigate();
  function handleLogo() {
    Navigate("/");
  }
  return (
    <Headerleft>
      <div className="logo" onClick={handleLogo}>
        <IconLogo />
      </div>
    </Headerleft>
  );
});
