import React from 'react';
import './Card.css';

const Card = props => (
    <div className="card bg-dark" onClick={props.imageClick}>
        <div className="card-img img-fluid">
            <img alt={props.image.replace(".jpg", "")} src={require("../../images/" + props.image)} />
        </div>
    </div>
);

export default Card;