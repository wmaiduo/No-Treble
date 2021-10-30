import React, { useContext } from "react";
import ReactLoading from "react-loading";
import styled from "styled-components";

import { ThemingContext } from "../providers/ThemingProvider";

const StyledDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 75vh;
`;

const StyledLoading = styled(ReactLoading)`
  margin: auto;
  height: 60vh;
  width: 60vh;
`;

const Loading = ({ type }) => {
  const { theme } = useContext(ThemingContext);

  return (
    <StyledDiv>
      <StyledLoading type={type} color={theme.primary} />
    </StyledDiv>
  );
};

export default Loading;
