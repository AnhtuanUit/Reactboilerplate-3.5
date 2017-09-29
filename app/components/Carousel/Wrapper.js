import styled from 'styled-components';

export default styled.div`
  background-color: white;
  margin-top: 30px;
  .customer-header {
    text-align: center;
    padding: 70px 0 30px;
    h1 {
      font-size: 40px;
      color: #3B4563;
    }
    hr {
      width: 5%;
      border: none;
      height: 3px;
      background-color: #1DAAA0;
    }
    h2 {
      color: #8E9BAC;
      font-size: 18px;
    }
  }
  .header-carousel {
    text-align: center;
    img.company-logo {
      width: auto;
      height: 58px;
      padding: 10px 20px;
      opacity: 0.5;
      filter: grayscale(100%);
      cursor: pointer;
    }
    img:hover {
      opacity: 1;
      filter: grayscale(0%);
    }
  }
  .carousel {
    height: 500px;
    padding: 30px 0;
    text-align: center;
    position: relative;
    .content {
      overflow: hidden;
      padding: 40px 10px;
      position: absolute;
      width: 100%;
      .testimonial {
        display: block;
        padding: 20px 0;
        margin: auto;
        border-radius: 10px;
        box-shadow: 0 3px 8px 1px rgba(0,0,0,.15);
        p {
          text-align: center;
          color: #75808F;
          font-size: 18px;
          padding: 0px 30px;
        }
      }
      .author {
        padding-top: 50px;
        text-align: center;
        img {
          height: 70px;
          width: 70px;
          border-radius: 50%;
        }
        .author-company {
          color: #F5A623;
          font-size: 18px;
        }
        .author-name {
          font-size: 14px;
          color: #aaa;
        }
      }
    }
    .animation-enter {
      opacity: 0.01;
      transform: translateX(-100vw);
     }
    .animation-enter.animation-enter-active {
      opacity: 1;
      transition:  1100ms ease-out;
      transform: translateX(0%);
     }
    .animation-leave {
      opacity: 1;
      transform: translateX(0%);
    }
    .animation-leave.animation-leave-active {
      opacity: 0.01;
      transition:  900ms;
      transform: translateX(100vw);
    }
  }

  .first-name, .last-name, .email {
    background: #fff;
  }

  @media screen and (min-width: 768px) {
    .carousel {
      height: 400px;
    }
  }
`;
