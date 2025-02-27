import styled from "styled-components";

export const HeaderRight = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;

  color: ${(props) => props.theme.text.primaryColor};
  font-size: 14px;
  font-weight: 600;
  align-items: center;

  .btns {
    display: flex;
    .btn {
      height: 18px;
      line-height: 18px;
      padding: 12px 15px;
      cursor: pointer;
      border-radius: 22px;
      $:hover {
        background-color: #f5f5f5;
      }
    }
  }

  .profile {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 77px;
    height: 42px;
    margin-right: 24px;
    box-sizing: border-box;
    border: 1px solid #ccc;
    border-radius: 25px;
    background-color: #fff;
    color: ${(props) => props.theme.text.primaryColor};
    cursor: pointer;
    ${(props) => props.theme.minix.boxShadow}

    .panel {
      position: absolute;
      top: 80px;
      right: 0;
      width: 240px;
      background-color: #fff;
      border-radius: 10px;
      box-shadow: 0 0 6px rgba(0, 0, 0, 0.2);
      color: #666;

      .top,
      .bottom {
        padding: 10px 0;

        .item {
          height: 40px;
          line-height: 40px;
          padding: 0 16px;

          &:hover {
            background-color: #f5f5f5;
          }
        }
      }
      .top {
        border-bottom: 1px solid #ddd;
      }
    }
  }
`;
