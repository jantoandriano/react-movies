import styled from "styled-components";

export const Wrapper = styled.button`
  display: block;
  background: var(--lightGray);
  width: 25%;
  min-width: 200px;
  height: 60px;
  border-radius: 30px;
  color: var(--darkGray);
  border: 0;
  font-size: var(--fontBig);
  margin: 20px auto;
  transform: all 0.3s;
  outline: none;
  cursor: pointer;

  :hover {
    opacity: 0.8;
  }
`;