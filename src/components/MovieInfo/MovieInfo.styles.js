import styled from "styled-components";
import { IMAGE_BASE_URL, BACKDROP_SIZE } from "../../config/config";

export const Wrapper = styled.div`
  background: ${({ backdrop }) =>
    backdrop ? `url(${IMAGE_BASE_URL}${BACKDROP_SIZE}${backdrop})` : "#000"};
  background-size: cover;
  background-position: center;
  padding: 40px 20px;
  animation: animateMovieInfo 1s;
  @keyframes animateMovieInfo {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

export const Content = styled.div`
  display: flex;
  max-width: var(--maxWidth);
  margin: 0 auto;
  background: rgba(0, 0, 0, 0.7);
  border-radius: 20px;
  @media screen and (max-width: 768px) {
    display: block;
    max-height: none;
  }
`;

export const Text = styled.div`
  width: 100%;
  padding: 60px;
  color: var(--white);
  overflow: hidden;

  .rating-directors {
    display: flex;
    justify-content: flex-start;
    padding: 30px 0px;
  }
  .score {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 35px;
    height: 35px;
    background: #fff;
    color: #000;
    font-weight: 800;
    border-radius: 50%;
    margin-left: 12px;
  }
  .director {
    margin: 0 0 0 80px;
    p {
      margin: 0;
      padding: 5px 0px;
    }
  }
  h1 {
    @media screen and (max-width: 768px) {
      font-size: var(--fontBig);
    }
  }
  h3 {
    padding-top: 20px;
    padding-bottom: 10px;
  }
`;

export const Flex = styled.div`
  display: flex;
  flex-direction: row;
  gap: 5%;
  margin-top: 0.5rem;
`;

export const MovieTitle = styled.h1`
  font-weigth: 600;
`;

export const MovieOverview = styled.p`
  margin-top: 0.5rem;

  @media screen and (max-width: 768px) {
    text-align: justify;
  }
`;

export const MovieRate = styled.div`
  color: #ffffff;
  background-color: grey;
  width: fit-content;
  border-radius: 10px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;
`;

export const MovieOtherInfo = styled.div`
  margin-top: 0.5rem;
  span {
    color: grey;
    font-weight: 500p;
  }
`;
