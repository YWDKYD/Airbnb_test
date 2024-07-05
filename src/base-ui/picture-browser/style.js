import styled from "styled-components";

export const BrowserWrapper = styled.div`
  position: fixed;
  z-index: 999;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  background-color: #333;

  .top {
    position: relative;
    height: 86px;

    .close-btn {
      position: absolute;
      top: 15px;
      right: 25px;
      color: #fff;
      width: 60px;
      height: 60px;
      z-index: 9;
      cursor: pointer;
    }
  }

  .slider {
    position: relative;
    flex: 1;
    display: flex;
    justify-content: center;

    .control {
      position: absolute;
      z-index: 1;
      left: 0;
      right: 0;
      top: 0;
      display: flex;
      justify-content: space-between;
      bottom: 0;
      color: #fff;
      .btn {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 83px;
        height: 100%;
      }
    }

    .picture {
      position: relative;
      overflow: hidden;
      width: 100%;
      max-width: 105vh;

      // 从最左边开始，完全透明
      .pic-enter {
        transform: translateX(100%);
        opacity: 0;
      }
      // 到最右边，完全不透明，表示切换完毕
      .pic-enter-active {
        transform: translateX(0%);
        opacity: 1;
        transition: all 1s ease;
      }
      .pic-exit {
        opacity: 1;
      }
      .pic-exit-active {
        opacity: 0;
        transition: all 1s ease;
      }

      .img {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        margin: 0 auto;
        height: 100%;
        user-select: none;
      }
    }
  }
  .preview {
    height: 100px;
    margin-top: 10px;
  }
`;
