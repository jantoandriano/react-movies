import styled from "styled-components";

export const CarouselWrapper = styled.div`
  height: 420px;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  margin-bottom: 20px;
  position: relative;
  z-index: 10;
  background-image: ${(props) => props.url && props.url};

  &:after {
    content: "";
    position: absolute;
    background-image: linear-gradient(
      to top,
      rgb(15 15 40) 50px,
      rgba(31, 31, 31, 0.4) 50%
    );
    height: inherit;
    width: inherit;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
  }

  @media screen and (max-width: 450px) {
    width: 100%;
    height: 350px !important;

    $:after {
      background-image: linear-gradient(
        to top,
        rgb(8, 8, 41) 50px,
        rgba(9, 7, 27, 0.4) 50%
      ) !important;
    }
  }
`;

export const CarouselBody = styled.div`
  color: #fff;
  z-index: 1000;
  position: absolute;
  width: 60%;
  bottom: 40px;
  display: flex;
  flex-direction: column;
  padding-left: 50px !important;
  text-align: left;
  font-family: "Roboto", sans-serif;

  h3 {
    font-size: 2.5rem;
    font-family: "Roboto", sans-serif !important;
    font-weight: 700;
  }
  p {
    color: #ced2d6;
    font-size: 14px;
    font-weight: 100 !important;
    line-height: 1.3em;
    font-family: "Open Sans", Arial, sans-serif !important;
  }

  @media screen and (max-width: 1240px) {
    h3 {
      font-size: 2rem !important;
    }
  }

  @media screen and (max-width: 1005px) {
    h3 {
      font-size: 1.5rem !important;
    }
  }

  @media screen and (max-width: 900px) {
    width: 90% !important;
    bottom: 20px !important;

    h3 {
      font-size: 2rem;
    }

    p {
      line-height: 15px;
      font-weight: 300 !important;
    }
  }

  @media screen and (max-width: 450px) {
    align-items: center;
    display: flex;
    text-align: center;
    justify-content: center;
    margin-bottom: 50px !important;
    width: 90% !important;
    bottom: 20px !important;

    h3 {
      font-size: 1.6rem;
      font-weight: 200;
    }

    p {
      display: none;
    }
  }
`;

export const CarouselButton = styled.button`
  margin-top: 1rem;
  background: rgb(102, 31, 184);
  border: none;
  border-radius: 2px;
  height: 40px;
  font-family: "Roboto", sans-serif;
  letter-spacing: 1.2px;
  width: 110px;
  color: #d7dee6;
  font-size: 11px;
  box-shadow: 0px 24px 38px 3px rgba(0, 0, 0, 0.14),
    0px 9px 46px 8px rgba(0, 0, 0, 0.12), 0px 11px 15px -7px rgba(0, 0, 0, 0.2);
  transition: 0.5s ease-out;

  span {
    padding-top: 6px;
    color: #abb7c4;
    font-weight: 100 !important;
  }

  &:hover {
    background: rgb(87, 5, 180);
    transform: scale(1.05);
    border: 1px solid transparent;
    color: #fff;
  }
`;
