import React, { useState, useRef } from 'react';
import './App.css';
import PokemonCard from "./components/pokemon_card";
import { IPokemon } from "./interfaces/IPokemon";
import axios from "axios";
import { Route, Routes } from "react-router-dom";
import PokemonDetail from "./components/pokemon_detail";
import PokemonList from "./components/pokemon_list";

function App() {
    return (
        <Routes>
            <Route path="/" element={<PokemonList />} />
            <Route path="/detail/:id" element={<PokemonDetail />} />
        </Routes>
    )
}

export default App;
