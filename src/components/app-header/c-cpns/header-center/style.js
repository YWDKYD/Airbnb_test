import styled from "styled-components";

export const HeaderCenter = styled.div`
  .search-bar {
    display: flex;
    justify-content: space-between;
    align-items: center; // 设置所有子元素在轴上对齐方式
    width: 300px;
    height: 48px;
    box-sizing: border-box;
    padding: 0 8px;
    border: 1px solid #ddd;
    border-radius: 24px;
    cursor: pointer;
    ${(props) => props.theme.minix.boxShadow}

    .text {
      padding: 0 16px;
      color: #222;
      font-size: 600;
    }

    .icon {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 32px;
      height: 32px;
      border-radius: 50%;
      color: #fff;
      background-color: ${(props) => props.theme.color.primaryColor};
    }
  }

  /* .search-detail {
    position: relative;
    transform-origin: 50% 0;
    will-change: transform, opacity;

    .infos {
      position: absolute;
      top: 60px;
      left: 50%;
      transform: translateX(-50%);
    }
  } */
`;
