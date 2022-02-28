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

export function FactText(props: Props): ReactElement {
    return (
        <Text>{props.text}</Text>
    );
}