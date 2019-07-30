import React, { useState } from "react";
import styled from "styled-components";

const Card_div = styled.div`
    // background: red;
    z-index: 5;
    position: relative;

    .card__controls {
        z-index: -1;
        background: green;
        position: absolute;
        right: 15px;
        top: ${({ minimized }) => (minimized ? "-20px" : "0px")};
        font-size: 13px;
        transition: top 0.2s ease-in-out;
        padding: 5px;

        .card-controls-icon {
            margin: 0 8px;
        }
    }

    .card__content {
        z-index: 5;
        background: green;
        overflow: hidden;
        height: ${({ minimized }) => (minimized ? "10px" : "auto")};
    }

    .card__controls:hover,
    .card__content:hover + .card__controls {
        top: -20px;
    }

    .card__content,
    .card__controls {
        border-top-left-radius: 8px;
        border-top-right-radius: 8px;
    }
`;

function CardControls({ closed, setClosed, minimized, setMinimized }) {
    return (
        <div className="card__controls">
            <i
                className="fas fa-minus card-controls-icon"
                onClick={() => setMinimized(!minimized)}
            />
            <i
                className="fas fa-times card-controls-icon"
                onClick={() => setClosed(!closed)}
            />
        </div>
    );
}

function Card({ children }) {
    const [closed, setClosed] = useState(false);
    const [minimized, setMinimized] = useState(false);

    return closed ? null : (
        <Card_div className="card" minimized={minimized}>
            <div className="card__content">{children}</div>
            <CardControls
                closed={closed}
                setClosed={setClosed}
                minimized={minimized}
                setMinimized={setMinimized}
            />
        </Card_div>
    );
}

export default Card;
