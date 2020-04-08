import styled from "styled-components";

export const FlexibleContainer = styled.div`
  display: flex;
  @media screen and (max-width: 500px) {
    display: initial;
  }
`;
export const FlexibleItem = styled.div`
  flex: 1;
  @media screen and (max-width: 500px) {
    padding-top: 5px;
    padding-bottom: 5px;
  }
`;
export const PersonalDetailsWrapper = styled.div`
  margin-top: 60px;
`;
