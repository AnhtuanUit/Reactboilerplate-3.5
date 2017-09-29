import styled from 'styled-components';

const StyledButton = styled.button`
  border-radius: 40px;
  padding: 0 48px;
  height: 62px;
  border: none;
  font-size: 15px;
  color: ${props => !props.white ? 'rgb(255, 255, 255)':'rgb(29, 170, 160)'};
  background: ${props => !props.white ? 'rgb(29, 170, 160)' : 'rgb(255, 255, 255);'};
  box-shadow: 0 2px 4px 0 rgba(69,194,185,.98);
  display: ${props => props.loading ? 'none':'block'};
  &:hover {
    box-shadow: 0 7px 7px 0 rgba(69,194,185,.98);
  }
  &:focus {
    outline: none;
  }
`;

export default StyledButton;
