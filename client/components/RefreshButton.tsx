import React, { ReactElement } from "react";

interface Props {
    onClicked(): void;
}

export function RefreshButton(props: Props): ReactElement {
    return (
        <div>
            <button onClick={() => props.onClicked()}>REFRESH</button>   
        </div>
    );
}
