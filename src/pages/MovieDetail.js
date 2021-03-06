import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import {useHistory} from 'react-router-dom';
import {MovieState} from "../movieState";
import {pageAnimation} from "../animation";
import {motion} from "framer-motion";

const MovieDetail = () => {
    const history = useHistory();
    const url = history.location.pathname;

    // Ude State
    const [movies, setMovies] = useState(MovieState);
    const [movie, setMovie] = useState(null);

    // Use Effect
    useEffect(() => {
        const currentMovie = movies.filter(item => item.url === url);
        setMovie(currentMovie[0]);
    }, []);

    return (
        <>
            {movie && (
                <Details
                    variants={pageAnimation}
                    initial="hidden"
                    animate="show"
                    exit="exit"
                >
                    <HeadLine>
                        <h2>{movie.title}</h2>
                        <img src={movie.mainImg} alt="movie"/>
                    </HeadLine>
                    <Awards>
                        {movie.awards.map(({ title, description }) => {
                            return <Award
                            title={title}
                            description={description}
                            key={title}
                            />;
                        })}
                    </Awards>
                    <ImageDisplay>
                        <img src={movie.secondaryImg} alt="Movie"/>
                    </ImageDisplay>
                </Details>
            )
            }
        </>
    );
};

const Details = styled(motion.div)`
    color: white;
`;

const HeadLine = styled.div`
    min-height: 90vh;
    padding-top: 20vh;
    position: relative;
    
    h2 {
        position: absolute;
        top: 10%;
        left: 50%;
        transform: translate(-50%, -10%);
    }
    
    img {
        width: 100%;
        height: 70vh;
        object-fit: cover;
    }
`;

const Awards = styled.div`
    min-height: 80vh;
    display: flex;
    margin: 5rem 10rem;
    align-items: center;
    justify-content: space-around;
    @media (max-width: 1300px) {
        margin: 2rem;
        display: block;
    }
`;

const AwardStyle = styled.div`
    padding: 5rem;
    
    h3 {
        font-size: 2rem;
    }
    
    .line {
        width: 100%;
        background-color: #23d997;
        height: 0.5rem;
        margin: 1rem 0;
    }
    
    p {
        padding: 2rem 0;
    }
`;

const ImageDisplay = styled.div`
    min-height: 50vh;
    
    img {
        height: 100%;
        width: 100%;
        object-fit: cover;
    }
`;

// Award Component
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