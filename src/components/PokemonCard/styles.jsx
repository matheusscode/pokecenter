import styled from "styled-components";

export const PokemonCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transform-style: preserve-3d;
  background-image: linear-gradient(
    -30deg,
    #2479aa,
    #2a8cc5,
    #45a5dd,
    #5fc3fd,
    rgba(78, 248, 163, 0.781),
    rgba(66, 245, 155, 0.781),
    rgba(60, 252, 156, 0.781)
  );
  margin: 20px auto;
  width: 300px;
  padding: 20px;
  height: 450px;
  border-radius: 10px;
  box-shadow: 1px 1px 10px rgba(34, 34, 34, 0.459);
  transition: 0.6s;

  &:hover {
    transform: scale(1.08);
  }
`;

export const Card = styled.div``;

export const PokemonImage = styled.div`
  max-width: 200px;

  img {
    width: 100%;
    height: 200px;
    border-radius: 25%;
    padding: 10px 30px;
    background-image: linear-gradient(-50deg, #ff0000, orange, transparent);
    transition: 0.4s;
  }
`;

export const CardBody = styled.div``;

export const CardTop = styled.div`
  h3 {
    position: relative;
    top: -270px;
    font-size: 1.5rem;
    color: #fff;
    text-transform: uppercase;
    text-shadow: 1px 1px 1px black;
  }

  h3 span {
    color: yellow;
    font-size: 1.5rem;
  }
`;

export const CardBottom = styled.div``;

export const PokemonType = styled.div`
  margin-top: 3px;
  display: flex;
  flex-direction: column;
  text-align: center;

  div p {
    color: #fff;
    text-shadow: 1px 1px 1px black;
    font-size: 1.3rem;
    text-transform: uppercase;
  }

  .options__container {
    button {
      position: absolute;
      bottom: 20px;
      right: 20px;
      margin: 20px auto;
      width: 120px;
      cursor: pointer;
      background-color: rgba(157, 255, 0, 0.747);
      border-radius: 7px;
      outline: none;
      border: none;
      padding: 10px;
      font-size: 1.2rem;
      transition: 0.3s;
    }

    button:hover {
      color: #fff;
      background-color: rgba(157, 255, 0, 0.452);
    }

    a {
      color: black;
      position: absolute;
      bottom: 20px;
      left: 20px;
      margin: 20px auto;
      width: 120px;
      cursor: pointer;
      background-color: rgba(157, 255, 0, 0.747);
      border-radius: 7px;
      outline: none;
      border: none;
      padding: 10px;
      font-size: 1.2rem;
      transition: 0.3s;
    }

    a:hover {
      color: #fff;
      background-color: rgba(157, 255, 0, 0.452);
    }
  }
`;

export const PokemonDetailsButton = styled.a``;
