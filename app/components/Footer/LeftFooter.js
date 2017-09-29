import styled from 'styled-components';

export default styled.div`
  .navigation {
    li:first-child {
      padding-left: 0;
    }
    a {
      color: $color-sub;
      font-weight: 500;
      cursor: pointer;
    }
    font-size: 13px;
  }
  h2 {
    color: $color-title;
    font-size: 17px;
  }
  .country-flags {
    div {
      img {
        width: 30px;
        height: 20px;
        margin: 5px 0px;
      }
    }
  }
`;
