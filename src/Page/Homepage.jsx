import React, { useContext } from "react";
import Header from "../Components/Header";
import LoadingBar from "../Components/LoadingBar";
import MovieLists from "../Components/MovieLists";
import { LoadingContext } from "../store/LoadingState";
import InformationState from "../store/InformationState";

const Homepage = () => {
    const { loading } = useContext(LoadingContext);

    return (
        <InformationState>
            {loading && <LoadingBar />}
            <Header />
            <MovieLists />
        </InformationState>
    );
};

export default Homepage;
