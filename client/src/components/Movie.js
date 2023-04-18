import styled from "styled-components";

export const Movie = ({ title, year, genre, poster, raiting, description }) => {
  return (
    <MovieContainer>
      <Title>{title}</Title>
      <Wrapper>
        <Text>{genre}</Text>
        <Text>|</Text>
        <Text>{year}</Text>
      </Wrapper>
      <PosterContainer>
        <Poster src={poster} />
      </PosterContainer>
      <Text>IMDB: {raiting}</Text>
      <Text>{description}</Text>
    </MovieContainer>
  );
};

const MovieContainer = styled.div`
  display: flex;
  flex-flow: column wrap;
  justify-content: space-evenly;
  align-items: center;
  height: 21rem;
  width: 17rem;
  border: solid #ececec;
  padding: 0.5rem;
  margin: 1rem;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 1.2rem;
  padding: 0.3rem;
  margin: 0;
`;

const Wrapper = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
  margin: 0;
`;

const Poster = styled.img`
  width: 50%;
`;

const PosterContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 55%;
`;
const Text = styled.p`
  font-size: 0.7rem;
  color: grey;
  margin: 0;
`;
