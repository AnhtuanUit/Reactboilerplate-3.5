import styled, { keyframes } from 'styled-components';

const transition = keyframes`
    10%, 90% {
      transform: translate3d(-1px, 0, 0);
    }

    20%, 80% {
      transform: translate3d(2px, 0, 0);
    }

    30%, 50%, 70% {
      transform: translate3d(-4px, 0, 0);
    }

    40%, 60% {
      transform: translate3d(4px, 0, 0);
    }
`;

const WrapperForm = styled.div`
  border: 1px solid #CCCCCC;
  border-bottom: none;
  border-right: none;
  -webkit-border-radius: 0px;
  padding: 20px;
  background-color: white;
  overflow: visible;
  margin: 0;

  input {
    font-family: Avenir Next;
    font-size: 14px;
    width: 100%;
    &:focus {outline:0;}
    color: ${props => (props.touched && props.error)  ? 'red' : 'black'};
    animation: ${props => (props.touched && props.error)  ? `${transition} 0.82s cubic-bezier(.36,.07,.19,.97) both` : ''};
    &::placeholder {
      color: ${props => (props.touched && props.error)  ? 'red' : 'black'};
      animation: ${props => (props.touched && props.error)  ? `${transition} 0.82s cubic-bezier(.36,.07,.19,.97) both` : ''};
    }
  }
`;

const WrapperFormTextarea = styled.div`
  padding: 20px;
  border: 1px solid #ccc;
  border-right: none;
  background-color: #fff;
  height: 252px;

  textarea {
    font-family: Avenir Next;
    font-size: 14px;
    width: 100%;
    border: none;
    resize: none;
    &:focus {outline:0;}
    color: ${props => (props.touched && props.error)  ? 'red' : 'black'};
    animation: ${props => (props.touched && props.error)  ? `${transition} 0.82s cubic-bezier(.36,.07,.19,.97) both` : ''};
    &::placeholder {
      color: ${props => (props.touched && props.error)  ? 'red' : 'black'};
      animation: ${props => (props.touched && props.error)  ? `${transition} 0.82s cubic-bezier(.36,.07,.19,.97) both` : ''};
    }
  }
`;

export { WrapperForm, WrapperFormTextarea };
