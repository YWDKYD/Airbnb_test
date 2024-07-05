import styled from "styled-components";

export const ScrollWrapper = styled.div`
  position: relative;

  .content {
    position: absolute;
    display: flex;
    z-index: 9;
    justify-content: center;
    align-items: center;
    width: 28px;
    height: 28px;
    border-radius: 50%;
    text-align: center;
    border-width: 2px;
    border-style: solid;
    border-color: #fff;
    background: #fff;
    box-shadow: 0px 1px 1px 1px rgba(0, 0, 0, 0.14);
    cursor: pointer;

    &.left {
      left: 0;
      top: 50%;
      transform: translate(-50%, -50%);
    }
    &.right {
      right: 0;
      top: 50%;
      transform: translate(50%, -50%);
    }
  }
  .scroll {
    overflow: hidden;

    .scroll-content {
      display: flex;
      transition: transform 200ms ease;
    }
  }
`;
