import styled from "styled-components";

export const Movie = ({ title, year, genre, poster, raiting, watched }) => {
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
      <Text>{watched ? "✅" : "☑️"}</Text>
    </MovieContainer>
  );
};

const MovieContainer = styled.div`
  display: flex;
  flex-flow: column wrap;
  justify-content: space-evenly;
  align-items: center;
  height: 15rem;
  width: 10rem;
  border: solid #ececec;
  padding: 0.5rem;
  margin: 1rem;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 1rem;
  padding: 0.3rem;
  margin: 0;
  height: 12%;
`;

const Wrapper = styled.div`
  display: flex;
  gap: 0.3rem;
  align-items: center;
  margin: 0;
`;

const Poster = styled.img`
  width: 90%;
`;

const PosterContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 55%;
`;
const Text = styled.p`
  font-size: 0.6rem;
  color: grey;
  margin: 0;
`;
