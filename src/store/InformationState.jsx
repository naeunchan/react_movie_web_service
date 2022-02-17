import React, { createContext, useState } from "react";

export const InformationContext = createContext();

const InformationState = (props) => {
    const [info, setInfo] = useState({});

    return (
        <InformationContext.Provider value={{ info, setInfo }}>
            {props.children}
        </InformationContext.Provider>
    );
};

export default InformationState;
