"use client";
import { useState, useEffect } from "react";

export default function PokemonList({
    search
}:{
    search: (search: string) => Promise<string[]>;
}   
    ) {
    const [pokemonNames, setPokemonNames] = useState<string[]>([]);
    const [searchString, setSearchString] = useState("");

    useEffect(() => {
        search("").then((names) => setPokemonNames(names));
    }, [search]);

    const onClick = async () => {
        setPokemonNames(await search(searchString));
    };

    return (
        <>
            <div className="flex gap-2">
                <input 
                    type="text"
                    value={searchString}
                    onChange={(e) => setSearchString(e.target.value)}
                    className="border-2 border-gray-300 rounded-lg py-4 px-4 text-base text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                />
                <button
                    onClick={onClick}
                    className="bg-blue-600 inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                    Search
                </button>
            </div>
            <div className="text-4xl py-5">Names: {pokemonNames.join(", ")}</div>
        </>
    );
}