import React, { useContext } from "react";
import styled from "styled-components";
import { SearchContext } from "../store/SearchState";

const OptionButtonContainer = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-bottom: 0.8rem;
`;

const OptionButtonWrapper = styled.div`
    display: flex;
    margin-right: 0.5rem;
    align-items: center;
`;

const StyledInput = styled.input`
    margin-right: 0.3rem;
`;

const StyledLabel = styled.label`
    font-size: 1rem;
    margin-right: 0.5rem;
`;

const OptionButton = ({ options, name, ...props }) => {
    const { changeOption } = useContext(SearchContext);

    const handleClick = (event) => {
        changeOption(parseInt(event.target.id));
    };

    return (
        <OptionButtonContainer>
            {options.map((opt) => (
                <OptionButtonWrapper key={opt.id}>
                    <StyledInput
                        type="radio"
                        id={opt.id}
                        value={opt.option}
                        name={name}
                        onClick={handleClick}
                        defaultChecked={opt.id === 1}
                    />
                    <StyledLabel htmlFor={opt.id}>{opt.option}</StyledLabel>
                </OptionButtonWrapper>
            ))}
        </OptionButtonContainer>
    );
};

export default OptionButton;
