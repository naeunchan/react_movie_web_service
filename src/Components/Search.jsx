import React, { useState, useContext } from "react";
import styled from "styled-components";
import style from "../style";
import { getMovieListsByTitle, getMovieInformationByID } from "../api";
import { LoadingContext } from "../store/LoadingState";
import OptionButton from "./OptionButton";
import { SearchContext } from "../store/SearchState";
import TextField from "@mui/material/TextField";
import { withStyles } from "@mui/styles";

const StyledTextField = withStyles({
    root: {
        "& .MuiOutlinedInput-root": {
            "&.Mui-focused fieldset": {
                borderColor: "transparent",
            },
        },
    },
})(TextField);

const SearchContainer = styled.div`
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    min-width: 20rem;
    min-height: 2rem;

    @media ${style.media.md} {
        width: 35rem;
    }

    @media ${style.media.lg} {
        width: 45rem;
    }
`;

const Search = ({ ...props }) => {
    const options = [
        {
            id: 1,
            option: "TITLE",
        },
        {
            id: 2,
            option: "IMDB ID",
        },
    ];

    const [value, setValue] = useState();

    const { setLoading, setMovieLists } = useContext(LoadingContext);
    const { state, changeInput } = useContext(SearchContext);

    const handleChange = (event) => {
        setValue(event.target.value);
    };

    const handleClick = async () => {
        setLoading(true);

        changeInput(value);

        if (state.optionId === 1) {
            const { Search, totalResults } = await getMovieListsByTitle(value);

            setMovieLists({
                data: Search,
                totalResults,
            });
        } else {
            const data = await getMovieInformationByID(value);

            setMovieLists({
                data: [data],
                totalResults: 1,
            });
        }

        setLoading(false);
    };

    const handleKeyUp = (event) => {
        if (event.key === "Enter") {
            handleClick();
        }
    };

    return (
        <SearchContainer>
            <OptionButton options={options} name="SearchType" />
            <StyledTextField
                hiddenLabel
                variant="outlined"
                placeholder={`${state.optionId === 1 ? "제목" : "IMDB ID"}으로 검색`}
                size="small"
                style={{
                    border: "1px solid #ffffff",
                }}
                InputProps={{
                    style: {
                        color: "white",
                    },
                }}
                onChange={handleChange}
                onKeyUp={handleKeyUp}
            />
        </SearchContainer>
    );
};

export default Search;
