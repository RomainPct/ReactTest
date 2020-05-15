import React from 'react';

export default function Header(props) {
    return (
        <header>
            <h2><a href="/">Cours des cryptos</a></h2>
            <p>Active cryptocurrencies : {props.active_cryptocurrencies}</p>
        </header>
    )
}