import styled from 'styled-components';

export default styled.nav`
  background-color: #29324b;
  border: none;
  border-radius: 0;
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 1000;

  .container-fluid .navbar-brand {
    height: 60px;
    line-height: 30px;
    font-family: Avenir Next;
    img {
      display: block;
      float: left;
      height: 20px;
      margin-right: 5px;
      margin-top: 5px;
    }
    .left {
      font-size: 15px;
      color: #f1f1f1;
      font-weight: 600;
      letter-spacing: 2;
      letter-spacing: 0;
      box-sizing: border-box;
      @media (min-width: 768px) {
        font-size: 18px;
      }
    }
    .mid {
      color: #a6b2d6;
      font-size: 15px;
      padding: 0 5px;
      @media (min-width: 768px) {
        font-size: 15px;
      }
    }
    .right {
      font-size: 10px;
      font-weight: 500;
      color: #fff;
      opacity: .53;
      @media (min-width: 768px) {
        font-size: 12px;
        color: #a6b2d6;
        font-weight: 200;
      }
    }
  }

  .navbar-collapse {
    font-family: Avenir Next;
    .navbar-nav {
      padding-top: 60px;
      font-weight: 700;
      background-color: #364160;
      font-size: 18px;
      margin: 0 -30px 0 -15px;
      height: 1000px;

      @media (min-width: 768px) {
        padding-top: 0;
        margin-top: 0;
        background-color: inherit;
        height: auto;
      }
    }

    .navbar-nav>li>a {
      text-align: center;
      color: #aab3d0;
      height: 80px;
      line-height: 60px;
      cursor: pointer;
      &:hover, &:focus {
        background-color: #364160;
      }

      @media (min-width: 768px) {
        display: none;
        line-height: 30px;
        height: 60px;
        &:hover, &:focus {
          background-color: #29324b;
        }
      }
    }

    hr {
      width: 68%;
      border: 0;
      border-top: 1px solid #47567f;

      @media (min-width: 768px) {
        display: none;
      }
    }

    .navbar-nav>li>.want-us {
      line-height: 60px;
      font-size: 12px;
      color: #aab3d0;
      font-weight: 100;

      @media (min-width: 768px) {
        line-height: 30px;
        display: block;
        &:hover, &:focus {
          background-color: #29324b;
        }
      }
    }
    .navbar-nav>li>.contact-us {
      span {
        border-radius: 32px;
        background-color: #47567f;
        padding: 8px 22px;
        color: #00d8c9;
        font-weight: 700;
        font-size: 18px;

        @media (min-width: 768px){
          font-size: 14px;
        }
      }

      @media (min-width: 768px) {
        display: block;
        &:hover, &:focus {
          background-color: #29324b;
        }
      }
    }
  }

  .navbar-toggle {
    width: 32px;
    height: 32px;
    padding: 8px 6px;
    background-color: #364160;
    border: none;
    margin: 14px 15px 14px 0;
    &:hover, &:focus {
      background-color: #364160;
    }
    .icon-bar {
      width: 20px;
      height: 3px;
      background-color: #717b97;
      border-radius: 25%;
    }
  }
`;
