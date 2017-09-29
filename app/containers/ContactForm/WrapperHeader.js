import styled from 'styled-components';

export default styled.div`
  height: 100px;
  padding: 0px 5px;
  .button-close {
    padding: 6px 6px;
  }
  .man-chat {
    img {
      display: block;
      float: left;
      height: 50px;
      border-radius: 50%;
      width: 50px;
    }
    span {
      font-family: Avenir Next;
      display: block;
      float: left;
      padding: 0px 15px;
      p {
        font-family: Avenir Next;
      }
    }
  }
  .message {
    img { float: left;}
    p {
      margin-left: 38px;
      font-family: Avenir Next;
    }
  }
`;
