import React, { useState } from "react";
import './collaps.css';

export default function Collapsible({content, title}) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="collapsible">
            <button className="pushdown" onClick={() => setIsOpen(!isOpen)}>
                {title}
            </button>
            {isOpen && <div className="content">{content}</div>}
        </div>
    );
}