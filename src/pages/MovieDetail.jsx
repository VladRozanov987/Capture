import { useState, useEffect } from "react";

//Import styled
import styled from "styled-components";

//Import react-router
import { useLocation } from "react-router-dom";

//Data
import { MovieState } from "../movieState";

//Animations
import { motion } from "framer-motion";
import { pageAnimation } from "../animation";

const MovieDetail = () => {
  const location = useLocation();
  const url = location.pathname;

  const [movies, setMovies] = useState(MovieState);
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const currentMovie = movies.filter((stateMovie) => stateMovie.url === url);
    setMovie(currentMovie[0]);
  }, [movies, url]);

  return (
    <>
      {movie && (
        <Details
          variants={pageAnimation}
          initial="hidden"
          animate="show"
          exit="exit"
        >
          <Headline>
            <h2>{movie.title}</h2>
            <img src={movie.mainImg} alt="" />
          </Headline>
          <Awards>
            {movie.awards.map((award) => (
              <Award
                title={award.title}
                description={award.description}
                key={award.title}
              />
            ))}
          </Awards>
          <ImageDisplay>
            <img src={movie.secondaryImg} alt="" />
          </ImageDisplay>
        </Details>
      )}
    </>
  );
};

const Details = styled(motion.div)`
  color: white;
`;

const Headline = styled.div`
  display: flex;
  flex-direction: column;
  h2 {
    padding: 2rem;
    text-align: center;
  }
  img {
    width: 100%;
    height: 70vh;
    object-fit: cover;
  }
`;

const Awards = styled.div`
  display: flex;
  margin: 5rem;
  align-items: center;
  justify-content: space-around;
  @media screen and (max-width: 1200px) {
    margin: 2rem;
  }
  @media screen and (max-width: 1200px) {
    margin: 2rem;
  }
`;

const AwardStyle = styled.div`
  padding: 5rem;
  @media screen and (max-width: 1200px) {
    padding: 3rem;
  }
  h3 {
    font-size: 2rem;
    @media screen and (max-width: 1200px) {
      font-size: 1rem;
    }
  }
  p {
    padding: 2rem 0;
    @media screen and (max-width: 1200px) {
      font-size: 0.9rem;
    }
  }
  .line {
    width: 100%;
    background: #23d997;
    height: 0.5rem;
    margin: 1rem 0;
    @media screen and (max-width: 1200px) {
      height: 0.2rem;
    }
  }
  @media screen and (max-width: 800px) {
    padding: 1rem;
  }
`;

const ImageDisplay = styled.div`
  min-height: 50vh;
  img {
    width: 100%;
    height: 100vh;
    object-fit: cover;
  }
`;

//Award component

const Award = ({ title, description }) => {
  return (
    <AwardStyle>
      <h3>{title}</h3>
      <div className="line"></div>
      <p>{description}</p>
    </AwardStyle>
  );
};

export default MovieDetail;
