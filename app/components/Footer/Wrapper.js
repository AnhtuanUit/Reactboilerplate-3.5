import styled from 'styled-components';

const Wrapper = styled.section`
  padding: 50px 0 10px;
  background-color: #f6f9fd;
  ul {
    color:
    list-style-type: none;
    padding: 0;
    li {
      display: inline-block;
      padding: 10px;
      :first-child {
        padding-left: 0px;
      }
    }
  }

  .navigation a {
    color: #8e9bac;
    font-weight: 500;
    cursor: pointer;
  }
  .slogan {
    @media screen and (min-width: 400px) {
      font-size: 12px;

    }
  }
`;

export default Wrapper;
