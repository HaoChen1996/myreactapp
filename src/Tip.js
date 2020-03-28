import React from 'react';
import logo from "./logo.svg";
import ReactTooltip from 'react-tooltip'

function Tip() {
    return (
        <div className="Tip">
            <p data-tip="hello world">Tooltip</p>
            <ReactTooltip />
        </div>
    );
}

export default Tip;