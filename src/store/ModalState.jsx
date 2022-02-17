import React, { createContext, useState } from "react";

export const ModalContext = createContext();

const ModalState = (props) => {
    const [modal, setModal] = useState(false);

    return (
        <ModalContext.Provider value={{ modal, setModal }}>{props.children}</ModalContext.Provider>
    );
};

export default ModalState;
