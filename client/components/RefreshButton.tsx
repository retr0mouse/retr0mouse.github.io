import React, { ReactElement } from "react";
import styled from "styled-components";

interface Props {
    onClicked(): void;
}

const ButtonContainer = styled.div`
    position:absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display:inline-block;
    margin:20px;
    height: 150px;
    width: 600px;
    &:after {
        content:"";
        height:100%;
        width:100%;
        padding:4px;
        position: absolute;
        bottom:-15px;
        left:-4px;
        z-index:-1;
        background-color:#2B1800;
        -webkit-border-radius: 5px;
        -moz-border-radius: 5px;
        border-radius: 5px;
    }
`

const A = styled.a`
    height: 72%;
    color:white;
    font-family:Helvetica, sans-serif;
    font-weight:bold;
    font-size:100px;
    text-align: center;
    text-decoration:none;
    background-color:#FFA12B;
    display:block;
    position:relative;
    padding:20px 40px;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    text-shadow: 0px 1px 0px #000;
    filter: dropshadow(color=#000, offx=0px, offy=1px);
    -webkit-box-shadow:inset 0 1px 0 #FFE5C4, 0 10px 0 #915100;
    -moz-box-shadow:inset 0 1px 0 #FFE5C4, 0 10px 0 #915100;
    box-shadow:inset 0 1px 0 #FFE5C4, 0 10px 0 #915100;
    -webkit-border-radius: 5px;
    -moz-border-radius: 5px;
    border-radius: 5px;

    &:active {
        top:10px;
        background-color:#F78900;
        -webkit-box-shadow:inset 0 1px 0 #FFE5C4, inset 0 -3px 0 #915100;
        -moz-box-shadow:inset 0 1px 0 #FFE5C4, inset 0 -3pxpx 0 #915100;
        box-shadow:inset 0 1px 0 #FFE5C4, inset 0 -3px 0 #915100;
    }
`

export function RefreshButton(props: Props): ReactElement {
    return (
        <ButtonContainer onClick={() => props.onClicked()}><A href="#">REFRESH</A></ButtonContainer>   
    );
}
