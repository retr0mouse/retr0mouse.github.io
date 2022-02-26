import React from "react";
import { FactsApi } from "./apis/FactsApi";
import { useState, useEffect } from "react";
import { RefreshButton } from "./components/RefreshButton";

export default  function App() {
    const [fact, setFact] = useState("");

    useEffect(() => {
        fetchFact();
    }, [])

    return (
        <div>
            <h1>{fact}</h1>
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
