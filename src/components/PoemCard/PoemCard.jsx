import React from "react";

function PoemCard({ line }) {
    return (
        <div>
            <h3>{line.title}</h3>
            <p>{line.line_1}</p>
            <p>{line.line_2}</p>
            <p>{line.line_3}</p>
            <p>-- {line.username} || {new Date(line.date).toISOString().split("T")[0]}</p>
        </div>
    );
}

export default PoemCard;