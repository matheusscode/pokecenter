import styled from "styled-components";

export const Header = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.bg};
  max-width: 100%;
  padding: 35px;

  img {
    position: absolute;
    left: 5%;
    width: 180px;
  }

  @media (max-width: 720px) {
    position: fixed;
    top: 0;
    right: 0;
    width: 100%;
    z-index: 1;

    img {
      display: none;
    }
  }
`;

export const Nav = styled.nav`
  ul {
    list-style-type: none;
  }

  ul li {
    display: inline-block;
  }

  ul li a {
    margin: 0 10px;
    color: #fff;
    font-family: "Oxanium", cursive;
    text-transform: uppercase;
    font-weight: 600;
    text-decoration: none;
    font-size: 1.3rem;
    transition: 0.4s;
  }

  ul li a:hover {
    color: #e6e6e6;
    border-bottom: 3px solid #4fbeff;
    border-radius: 3px;
    padding-bottom: 3px;
  }

  @media (max-width: 720px) {
    position: relative;
    left: -100px;
  }
`;

export const Input = styled.div`
  position: absolute;
  right: 5%;
`;
