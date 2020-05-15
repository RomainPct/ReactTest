import React, { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header'
import Row from './components/Row'

function App() {
    const [cryptosData, setCryptosData] = useState({
        active_cryptocurrencies: 0,
        total_market_cap: []
    })
    function load() {
        setCryptosData({
            active_cryptocurrencies: 'loading...',
            total_market_cap: []
        })
        fetch('https://api.coingecko.com/api/v3/global')
            .then(response => response.json())
            .then(json => {
                console.log(json.data)
                setCryptosData(json.data)
            })
    }
    useEffect(() => { load() }, [])
    return (
        <div className="app">
            <Header active_cryptocurrencies={cryptosData.active_cryptocurrencies} />
            <button onClickCapture={load}>Reload</button>
            <main>
                {Object.keys(cryptosData.total_market_cap).map(function(key, index) {
                    return <Row key={key} crypto={key} value={cryptosData.total_market_cap[key]} />
                })}
            </main>
        </div>
    );
}

export default App;
