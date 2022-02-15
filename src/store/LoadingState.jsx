import React, { createContext, useState } from "react";

export const LoadingContext = createContext();

const LoadingState = (props) => {
    const [loading, setLoading] = useState(false);
    const [movieLists, setMovieLists] = useState({
        data: null,
        totalResults: 0,
    });

    return (
        <LoadingContext.Provider value={{ loading, movieLists, setLoading, setMovieLists }}>
            {props.children}
        </LoadingContext.Provider>
    );
};

export default LoadingState;
