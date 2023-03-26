import React from "react";
import './PoemCard.css';

function PoemCard({ line }) {
    return (
        <div className='all-poem'>
            <h3 className='title'>{line.title}</h3>
            <div className='poem-body'>
                <p className='poem-line'>{line.line_1}</p>
                <p className='poem-line'>{line.line_2}</p>
                <p className='poem-line'>{line.line_3}</p>
                <p className='author-line'>-- {line.username} || {new Date(line.date).toISOString().split("T")[0]}</p>
            </div>
        </div>
    );
}

export default PoemCard;