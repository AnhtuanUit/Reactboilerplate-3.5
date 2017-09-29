import styled from 'styled-components';

export default styled.div`
  padding: 20px 12px;
  .mobytelab-logo {
    img {
      float: left;
      width: 25px;
    }
    .name {
      color: $color-title;
      float: left;
      font-weight: bold;
      padding: 0 10px;
      line-height: 30px;
    }
    .slogan {
      color: $color-sub;
      float: left;
      font-weight: 500;
      font-size: 10px;
      padding-left: 10px;
      border-left: 1px solid #a2b6d2;
      line-height: 30px;
    }
    margin-bottom: 30px;
    display: block;
    overflow: hidden;
  }
  p {
    font-size: 12px;
    color: #728093;
  }
`;
