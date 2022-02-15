import React from "react";
import Homepage from "./Page/Homepage";
import LoadingState from "./store/LoadingState";
import SearchState from "./store/SearchState";

function App() {
    return (
        <>
            <LoadingState>
                <SearchState>
                    <Homepage />
                </SearchState>
            </LoadingState>
        </>
    );
}

export default App;
