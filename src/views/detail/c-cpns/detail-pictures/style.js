import styled from "styled-components";

export const PictureWrapper = styled.div`
  position: relative;
  .picture {
    width: 60%;
    height: 300px;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .show-btn {
    position: absolute;
    z-index: 99;
    right: 15px;
    bottom: 15px;
    line-height: 12px;
    padding: 6px 15px;
    border-radius: 4px;
    background-color: #fff;
    cursor: pointer;
  }
`;
