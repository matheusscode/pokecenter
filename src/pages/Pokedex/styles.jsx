import styled from "styled-components";

export const Pokedex = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  margin-top: 50px;
  text-align: center;

  .Title {
    font-size: 2.4rem;
    font-family: "Bungee Spice", cursive;
    text-shadow: 1px 1px 1px black;
    padding: 10px 30px;
    background-color: ${(props) => props.theme.bgTitle};
    border-radius: 10px;
    text-decoration: none;
    transition: 0.5s;
  }

  .scroll__up {
    padding: 40px 0;
    font-size: 1.1rem;
    width: 100px;
    margin: 0 auto;
    color: #3f3f3f;
    text-shadow: 1px 1px 1px black;
  }

  .scroll__up:hover {
    color: rgb(157, 255, 0);
  }

  @media (max-width: 720px) {
    padding-top: 100px;
  }
`;

export const PokedexHeader = styled.div``;

export const SearchContainer = styled.div``;

export const PokedexGrid = styled.div`
  display: grid;
  width: auto;
  grid-template-columns: repeat(5, 1fr);

  @media (max-width: 1600px) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media (max-width: 1300px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 1000px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 750px) {
    grid-template-columns: 1fr;
  }
`;

export const PaginationBar = styled.div``;

export const Loading = styled.div`
  .loading {
    margin: 80px auto;
    width: 120px;
    box-shadow: 1px 3px 5px ${(props) => props.theme.bshadow};
    border-radius: 50%;
    animation: rotate 2s ease infinite;
  }

  @keyframes rotate {
    0% {
      transform: rotate(360deg);
    }
    100% {
      transform: rotate(0deg);
    }
  }
`;
