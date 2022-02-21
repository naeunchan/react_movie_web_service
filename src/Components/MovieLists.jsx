import React, { useContext } from "react";
import styled from "styled-components";
import Button from "@mui/material/Button";
import { LoadingContext } from "../store/LoadingState";
import { SearchContext } from "../store/SearchState";
import { getMovieListsByTitle, getMovieInformationByID } from "../api";
import style from "../style";
import { withStyles } from "@mui/styles";
import MovieInfoModal from "./MovieInfoModal";
import { ModalContext } from "../store/ModalState";
import { InformationContext } from "./../store/InformationState";

const StyledButton = withStyles({
    root: {
        "&.MuiButton-root": {
            border: `1px solid ${style.color.gray}`,
            borderRadius: "0",
            background: "transparent",
            color: `${style.color.gray}`,
            fontSize: "1rem",

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
    width: 80%;
    flex-wrap: wrap;
    justify-content: center;
`;

const PosterImage = styled.div`
    position: relative;
    padding: 1rem;
    margin: 1rem 0;
    box-sizing: border-box;
    display: flex;
    flex: auto;
    max-width: 20%;
    min-width: 170px;
    min-height: 240px;
`;

const StyledImg = styled.img`
    width: 100%;
    height: 100%;
    border-radius: 16px;
    object-fit: cover;
    cursor: pointer;
    transition: all ease-out 0.3s;

    &:hover {
        transform: scale(1.3);
    }
`;

const MovieLists = () => {
    const { movieLists, setLoading, setMovieLists } = useContext(LoadingContext);
    const { state, changePage } = useContext(SearchContext);
    const { modal, setModal } = useContext(ModalContext);
    const { setInfo } = useContext(InformationContext);

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

        setLoading(true);
        const information = await getMovieInformationByID(id);

        setInfo(information);
        setModal(true);
        setLoading(false);
    };

    return (
        <MovieListsContainer>
            {modal && <MovieInfoModal />}
            <PosterContainer>
                {movieLists.data &&
                    movieLists.data.map((movie, index) => (
                        <PosterImage key={movie.imdbID}>
                            <StyledImg
                                id={index}
                                src={movie.Poster}
                                alt={movie.Title}
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
