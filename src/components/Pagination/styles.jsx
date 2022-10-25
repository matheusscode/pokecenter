import styled from "styled-components";

export const Pagination = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 40px;
`;

export const InfoPages = styled.div`
  font-weight: 600;
  font-size: 1.3rem;
  color: ${(props) => props.theme.color};
`;

export const Button = styled.button`
  border: none;
  margin: 15px;
  background-color: ${(props) => props.theme.bgButton};

  .button-click {
    background-color: ${(props) => props.theme.bgIcon};
    cursor: pointer;
    font-size: 2.1rem;
    color: ${(props) => props.theme.color};
    transition: 0.4s;
  }
`;
