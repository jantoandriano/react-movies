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
  ${(props) =>
    props.type === "login" &&
    "max-width: 100%; padding: 11px 13px; color: rgb(253, 249, 243); font-weight: 600; text-transform: uppercase; background: #f03d4e; border: none; border-radius: 3px; outline: 0; cursor: pointer; margin-top: 0.6rem; box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.1);"}
`;
