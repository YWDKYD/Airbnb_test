import styled from "styled-components";

export const Headerleft = styled.div`
  flex: 1;
  align-items: center;
  color: ${(props) => props.theme.color.primaryColor};
  .logo {
    margin-left: 24px;
    cursor: pointer;
  }
`;
