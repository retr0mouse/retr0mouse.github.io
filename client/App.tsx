import React from "react";
import { FactsApi } from "./apis/FactsApi";
import { useState, useEffect } from "react";
import { RefreshButton } from "./components/RefreshButton";
import { FactText } from "./components/FactText";

export default function App() {
    const [fact, setFact] = useState("");

    useEffect(() => {
        fetchFact();
    }, []);

    return (
        <div>
            <FactText
                text={fact}
            />
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
