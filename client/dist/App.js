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
    return (React.createElement("div", null,
        React.createElement(FactText, { text: fact }),
        React.createElement(RefreshButton, { onClicked: () => fetchFact() })));
    async function fetchFact() {
        const randomFact = await FactsApi.getRandomFact();
        setFact(randomFact.text);
    }
}
