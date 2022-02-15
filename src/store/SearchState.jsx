import React, { createContext, useState } from "react";

export const SearchContext = createContext();

const SearchState = (props) => {
    const [state, setState] = useState({
        optionId: 1,
        input: "",
        type: "",
        year: "",
        page: 1,
    });

    const changeOption = (optionId) => {
        setState({
            ...state,
            optionId,
        });
    };

    const changeInput = (input) => {
        setState({
            ...state,
            input,
        });
    };

    const changeType = (type) => {
        setState({
            ...state,
            type,
        });
    };

    const changeYear = (year) => {
        setState({
            ...state,
            year,
        });
    };

    const changePage = (page) => {
        setState({
            ...state,
            page,
        });
    };

    return (
        <SearchContext.Provider
            value={{
                state,
                changeOption,
                changeInput,
                changeType,
                changeYear,
                changePage,
            }}
        >
            {props.children}
        </SearchContext.Provider>
    );
};

export default SearchState;
