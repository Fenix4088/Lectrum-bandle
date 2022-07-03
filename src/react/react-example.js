import React from 'react';
import ReactDOM from "react-dom";
import Styles from './postcss.css'

export const Component = () => {
    const [state, setState] = React.useState(0);
    return (
        <div className={Styles.clicker}>
            <div>Hello</div>
            <div>{state}</div>
            <button onClick={() => setState(s => s + 1)}>inc</button>
        </div>
    )
}

const app = document.getElementById('app')

const root = ReactDOM.createRoot(app);

root.render(<Component/>)