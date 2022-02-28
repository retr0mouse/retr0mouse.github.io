import React from "react";
import { ReactElement } from "react";
import styled from "styled-components";

interface Props {
    text: string;
}

const Text = styled.h1`
    font-family: "Comic Sans MS";
    font-size: 50px;
    text-align: center;
`;

const TextContainer = styled.div`
    background-color: #80808034;
    border-radius: 10px;
    border: black solid;
`;

export function FactText(props: Props): ReactElement {
    return (
        <TextContainer>
            <Text>{props.text}</Text>
        </TextContainer>
    );
}