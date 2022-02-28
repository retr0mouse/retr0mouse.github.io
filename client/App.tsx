import React from "react";
import { FactsApi } from "./apis/FactsApi";
import { useState, useEffect } from "react";
import { RefreshButton } from "./components/RefreshButton";
import { FactText } from "./components/FactText";
import styled from "styled-components";

const Body = styled.div`
    background-color: #80808034;
    border-radius: 10px;
    border: black solid;
`;

export default function App() {
    const [fact, setFact] = useState("");

    useEffect(() => {
        fetchFact();
    }, [])

    return (
        <div>
            <Body>
                <FactText
                    text={fact}
                />
            </Body>
            <RefreshButton
                onClicked={() => fetchFact()}
            />
        </div>
    );

    async function fetchFact() {
        const randomFact = await FactsApi.getRandomFact();
        setFact(randomFact.text);
    }
}
