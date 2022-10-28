import styled from "styled-components";

export const SearchBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 30px;
`;

export const Bar = styled.div`
  align-items: center;

  input {
    padding: 11px 15px;
    margin: 0 10px;
    font-size: 1.1rem;
    width: 250px;
    border-radius: 7px;
    color: ${(props) => props.theme.color};
    background-color: ${(props) => props.theme.bgInput};
    border: none;
    outline: none;
    box-shadow: 0 0 3px black;
  }
`;

export const SearcHButton = styled.div`
  padding: 12px;
  background-color: ${(props) => props.theme.bgTitle};
  color: #fff;
  border-radius: 7px;
  cursor: pointer;
  font-weight: 600;
  box-shadow: 0 0 2px black;
  transition: 0.3s;

  &:hover {
    background-color: ${(props) => props.theme.bgTitleHover};
  }
`;
