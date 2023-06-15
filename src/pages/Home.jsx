import React from 'react'
import { useState, useEffect } from 'react';
import SearchBar from '../components/SearchBar';

const Home = () => {

    const [players, setPlayers] = useState([]);
    const [value, setValue] = useState();

    useEffect(() => {
        if(players.length > 0) return;
        fetch('http://localhost:8080/players/all')
        .then(response => response.json())
        .then(data => {
            setPlayers(data);
        })
    }, [])
    
    const SearbarProps = {
        players,
        value,
        setValue
    }

  return (

    <div className='container'>
        <div className='container-searchBar'>
            <h1>FutUru</h1>
            <SearchBar {...SearbarProps}/>
        </div>
    </div>
  )
}

export default Home