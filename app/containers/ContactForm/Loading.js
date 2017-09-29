import styled, { keyframes } from 'styled-components';

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;
export default styled.div`
  display: ${props => props.loading ? 'block' : 'none' };
  border: 4px solid #f3f3f3; /* Light grey */
  border-top: 4px solid #29324B; /* Blue */
  border-radius: 50%;
  width: 50px;
  height:50px;
  animation: ${spin} 2s linear infinite;
  margin-top: 28px;
  margin-left: 128px;
`;
