import React, { useContext } from "react";
import Header from "../Components/Header";
import LoadingBar from "../Components/LoadingBar";
import MovieLists from "../Components/MovieLists";
import { LoadingContext } from "../store/LoadingState";

const Homepage = () => {
    const { loading } = useContext(LoadingContext);

    return (
        <>
            {loading && <LoadingBar />}
            <Header />
            <MovieLists />
        </>
    );
};

export default Homepage;
