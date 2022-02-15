import React, { useContext, useState } from "react";
import styled from "styled-components";
import Button from "@mui/material/Button";
import { LoadingContext } from "../store/LoadingState";
import { SearchContext } from "../store/SearchState";
import { getMovieListsByTitle, getMovieInformationByID } from "../api";
import style from "../style";
import { withStyles } from "@mui/styles";

const StyledButton = withStyles({
    root: {
        "&.MuiButton-root": {
            border: `1px solid ${style.color.gray}`,
            borderRadius: "0",
            background: "transparent",
            color: `${style.color.gray}`,
            fontSize: "1rem",
            margin: "1.5rem",

            "&:hover": {
                color: `${style.color.white}`,
                borderColor: `${style.color.white}`,
                background: "transparent",
            },
        },
    },
})(Button);

const MovieListsContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    padding: 1rem;
    box-sizing: border-box;
`;

const PosterContainer = styled.div`
    display: flex;
    position: relative;
    width: 60%;
    flex-wrap: wrap;
    justify-content: center;
`;

const PosterImage = styled.div`
    padding: 1rem;
    box-sizing: border-box;
    width: 20%;
    display: flex;
    flex: auto;
    min-width: 170px;
    min-height: 240px;
`;

const StyledImg = styled.img`
    width: 100%;
    height: 100%;
    cursor: pointer;
`;

const MovieLists = () => {
    const { movieLists, setLoading, setMovieLists } = useContext(LoadingContext);
    const { state, changePage } = useContext(SearchContext);

    const handelClick = async () => {
        const { data, totalResults } = movieLists;
        setLoading(true);

        const { Search } = await getMovieListsByTitle(state.input, state.page + 1);

        changePage(state.page + 1);

        setLoading(false);
        setMovieLists({
            data: [...data, ...Search],
            totalResults,
        });
    };

    const handleClickedPoster = async (e) => {
        const index = e.target.id;
        const id = movieLists.data[index].imdbID;

        const info = await getMovieInformationByID(id);
        console.log(info);
    };

    return (
        <MovieListsContainer>
            <PosterContainer>
                {movieLists.data &&
                    movieLists.data.map((movie, index) => (
                        <PosterImage key={movie.imdbID}>
                            <StyledImg
                                id={index}
                                src={movie.Poster}
                                alt={movie.title}
                                onClick={handleClickedPoster}
                            />
                        </PosterImage>
                    ))}
            </PosterContainer>
            {movieLists.data && movieLists.data.length < movieLists.totalResults && (
                <StyledButton variant="contained" onClick={handelClick}>
                    MORE
                </StyledButton>
            )}
        </MovieListsContainer>
    );
};

export default MovieLists;
