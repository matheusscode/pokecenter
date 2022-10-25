import styled from "styled-components";

export const Switch = styled.label`
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;

  input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  input:checked + span:before {
    transform: translateX(26px);
  }

  input:checked + span {
    background-color: #003b7e;
  }
`;

export const Slider = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border-radius: 20px;

  background-color: #ccc;
  transition: 0.3s;

  &::before {
    position: absolute;
    content: "";
    height: 26px;
    width: 26px;
    left: 4px;
    bottom: 4px;
    border-radius: 50%;
    background-color: white;
    transition: 0.3s;
  }
`;
