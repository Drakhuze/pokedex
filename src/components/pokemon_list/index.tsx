import React, { useState, useRef } from 'react';
import { Route, Routes, useNavigate } from "react-router-dom";
import PokemonCard from "../pokemon_card";
import { IPokemon } from "../../interfaces/IPokemon";
import axios from "axios";

function PokemonList() {

    const tempData = [
        { name: "Arceus", id: "493", sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/493.png"},
    ]

    const [inputPokemonName, setInputPokemonName] = useState("");
    const [listPokemon, setListPokemon] = useState<IPokemon[]>(tempData);
    const [errorFlag, setErrorFlag] = useState(false);

    const navigate = useNavigate();

    function buttonSubmitHandler() {
        axios.get("https://pokeapi.co/api/v2/pokemon/" + inputPokemonName.toLowerCase())
            .then((response) => {
                console.log(response);
                setErrorFlag(false);
                setListPokemon(
                    [
                        ...listPokemon,
                        { name: response.data.name, id: response.data.id, sprite: response.data.sprites.front_default }
                    ]
                )
            })
            .catch((reason) => {
                setErrorFlag(true);
            });
    }

    function buttonDeleteHandler(index: number) {
        setListPokemon(listPokemon.filter((card, i) => i !== index));
    }
    function goToPokemonDetail(pokemonId: number){        
        navigate("/detail/" + pokemonId)
    }

    return (
        <div className="container mx-auto text-center">
            <div className="m-4">
                Input Pokemon Name
            </div>

            <div className="mb-4">
                <input type="text" className="rounded py-2 px-4" onChange={(e) => { setInputPokemonName(e.target.value) }} />
            </div>

            {errorFlag && "Pokemon not found"}

            <div className="mb-4">
                <button type="button" onClick={buttonSubmitHandler} className="rounded bg-blue-600 border px-4 py-2 hover:bg-blue-500 active:bg-blue-700">Submit</button>
            </div>

            <div className="flex flex-wrap justify-center">
                {
                    listPokemon.map((item, i) => {
                        return (
                            <PokemonCard key={i} index={i} pokemon={item} deletePokemon={buttonDeleteHandler} goToDetail={goToPokemonDetail}/>
                        )
                    })
                }
            </div>
        </div>
    );
}
export default PokemonList;