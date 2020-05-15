import React from 'react';

export default function Row(props) {
    return (
        <div className="row">{props.crypto} : {props.value}$</div>
    )
}