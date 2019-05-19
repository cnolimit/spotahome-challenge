import React from 'react';
import styled, { keyframes } from 'styled-components';

const rotate360 = keyframes`
  from { transform: rotate(0deg) translateZ(0); }
  to { transform: rotate(360deg) translateZ(0); }
`;

const StyledSpinner = styled.div`
  animation: ${rotate360} 1s infinite linear;
  border: 0.25rem solid #3d8f31;
  border-radius: 50%;
  border-top-color: #f7f7f7;
  height: 30px;
  width: 30px;
  left: 50%;
  margin-left: -13px;
  margin-top: -13px;
  position: absolute;
  top: 50%;
`;

const Spinner = ({ ...otherProps }) => <StyledSpinner {...otherProps} />;

export default Spinner;