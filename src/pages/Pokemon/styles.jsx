import styled from "styled-components";

export const Pokemon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 100px;

  @media (max-width: 760px) {
    margin-top: 0px;
  }

  @media (max-width: 720px) {
    padding-top: 100px;
  }
`;

export const PokemonPage = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  border: 1px solid black;
  width: 1200px;
  border-radius: 20px;
  box-shadow: 1px 1px 1px black;
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

  a {
    font-size: 2rem;
    margin: 0 20px;
    color: #fff;
    transition: 0.4s;
  }

  a:hover {
    color: #ebebeb;
  }

  @media (max-width: 1300px) {
    width: 1000px;
  }

  @media (max-width: 1050px) {
    width: 900px;
  }

  @media (max-width: 920px) {
    flex-direction: column;
    width: 700px;
    margin-bottom: 40px;

    a {
      position: relative;
      right: -190px;
      top: 20px;
      font-size: 2rem;
    }
  }

  @media (max-width: 760px) {
    flex-direction: column;
    text-align: center;
    width: 450px;
    margin-top: 30px;
  }
`;

export const PokemonImg = styled.div`
  padding: 50px;

  img {
    width: 350px;
    transition: 0.5s;
    background-image: linear-gradient(-50deg, #ff0000, orange, transparent);
    padding: 20px;
    border-radius: 30%;
  }

  img:hover {
    transform: scale(1.06);
  }

  @media (max-width: 1300px) {
    img {
      width: 300px;
    }
  }

  @media (max-width: 1050px) {
    padding: 0;
    img {
      width: 300px;
    }
  }

  @media (max-width: 920px) {
    padding-top: 100px;
    img {
      width: 250px;
    }
  }

  @media (max-width: 920px) {
    img {
      width: 300px;
      margin-bottom: 30px;
    }
  }
`;

export const PokemonInfo = styled.div`
  padding: 50px;

  h2 {
    text-transform: uppercase;
    font-size: 2.5rem;
    color: #fff;
    border-bottom: 1px solid white;
    width: 300px;
    padding: 5px 0;
  }

  h2 span {
    color: #ffff5b;
    font-size: 2.3rem;
  }

  @media (max-width: 920px) {
    h2 {
      text-align: center;
      margin: 0 auto;
    }
  }

  @media (max-width: 720px) {
    padding: 10px;
    margin-bottom: 40px;

    h2 {
      margin: 0 auto;
    }
  }
`;

export const PokemonStatus = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  padding-top: 40px;
  gap: 30px;

  h3 {
    font-size: 1.2rem;
    color: #fff;
  }

  h3 span {
    color: #fffd74;
  }

  @media (max-width: 1300px) {
    gap: 20px;
  }

  @media (max-width: 720px) {
    gap: 20px;

    h3 {
      font-size: 1.2rem;
    }
  }
`;
