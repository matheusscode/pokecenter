import styled from "styled-components";

export const Favorites = styled.div`
  margin: 60px auto;

  .empty-title {
    color: ${(props) => props.theme.color};
    text-align: center;
    margin-top: 50px;
  }

  .options__container a {
    position: absolute;
    bottom: 30px;
    left: 20px;
    font-weight: 600;
    padding: 15px;
    width: 120px;
    border-radius: 10px;
    border: none;
    font-size: 1.3rem;
    background-color: rgba(157, 255, 0, 0.747);
    color: aliceblue;
    cursor: pointer;
    transition: 0.3s;

    &:hover {
      color: #fff;
      background-color: rgba(157, 255, 0, 0.452);
    }
  }
`;

export const TitleFavorites = styled.h1`
  margin: 0 auto;
  text-align: center;
  text-shadow: 1px 1px 1px black;
  background-color: ${(props) => props.theme.bgTitle};
  max-width: 350px;
  border-radius: 10px;
  font-family: "Bungee Spice", cursive;
  padding: 10px 0;
`;

export const PFCards = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  ul {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    padding-top: 50px;
    gap: 60px;
    list-style-type: none;

    @media (max-width: 1780px) {
      grid-template-columns: repeat(4, 1fr);
    }

    @media (max-width: 1400px) {
      grid-template-columns: repeat(3, 1fr);
    }

    @media (max-width: 1100px) {
      grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: 750px) {
      grid-template-columns: 1fr;
    }
  }

  ul img {
    margin-bottom: 110px;
    width: 200px;
    height: 200px;
    border-radius: 30%;
    padding: 25px;
    background-color: orange;
  }
`;

export const DeleteButton = styled.button`
  position: absolute;
  bottom: 30px;
  right: 20px;
  font-weight: 600;
  padding: 15px;
  width: 120px;
  border-radius: 10px;
  border: none;
  font-size: 1.3rem;
  background-color: red;
  color: aliceblue;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    background-color: #791515;
  }
`;

export const PokemonName = styled.h3`
  display: flex;
  margin-bottom: 30px;
  text-align: center;
  gap: 10px;
  font-size: 1.5rem;
  text-transform: uppercase;
  text-shadow: 1px 1px 3px black;
  color: #fff;

  span {
    color: yellow;
    text-shadow: 1px 1px 3px black;
  }
`;
