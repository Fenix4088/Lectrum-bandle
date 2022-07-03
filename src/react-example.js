import React from 'react';
import ReactDOM from "react-dom";

export const Component = () => {
    const [state, setState] = React.useState(0);
    return (
        <>
            <div>Hello</div>
            <div>{state}</div>
            <button onClick={() => setState(s => s + 1)}>inc</button>
        </>
    )
}

const app = document.getElementById('app')

const root = ReactDOM.createRoot(app);

root.render(<Component/>)