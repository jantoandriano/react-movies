import styled from "styled-components";

export const Wrapper = styled.div`
  color: var(--white);
  border-radius: 20px;
  padding: 5px;
  text-align: center;

  h3 {
    margin: 10px 0 0 0;
  }

  p {
    margin: 5px 0px;
  }
`;
export const Image = styled.img`
  border-radius: 50%;
  height: 140px;
  width: 140px;
  margin-bottom: 5px;
  object-fit: cover;
  cursor: pointer;
  box-shadow: 0px 0px 10px rgb(0, 0, 0);
  border: 2px solid white;
`;
