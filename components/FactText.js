import React from "react";
import styled from "styled-components";
const Text = styled.h1 `
    font-family: 'Sans MS';
    font-size: 30px;
    text-align: center;
`;
export function FactText(props) {
    return (React.createElement(Text, null, props.text));
}
