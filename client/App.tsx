import React from "react";
import { FactsApi } from "./apis/FactsApi";
import { useState, useEffect } from "react";

export default  function App() {
    const [fact, setFact] = useState("");

    useEffect(() => {
        fetchFact();
    }, [])

    return (
        <div>
            <h1>{fact}</h1>
            <button onClick={() => fetchFact()}>REFRESH</button>
        </div>
    );

    async function fetchFact() {
        const randomFact = await FactsApi.getRandomFact();
        setFact(randomFact.text);
    }
}

