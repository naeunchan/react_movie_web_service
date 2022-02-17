import React from "react";
import Homepage from "./Page/Homepage";
import LoadingState from "./store/LoadingState";
import SearchState from "./store/SearchState";
import ModalState from "./store/ModalState";

function App() {
    return (
        <>
            <LoadingState>
                <SearchState>
                    <ModalState>
                        <Homepage />
                    </ModalState>
                </SearchState>
            </LoadingState>
        </>
    );
}

export default App;
