import axios from "axios";
import { useCallback } from "react";

interface PokemonProps {
  pokemonName: string;
}

const getAllPokemons = async () => {
  const response = await axios.get(
    "https://pokeapi.co/api/v2/pokemon?limit=151"
  );
  return response.data;
};

const getPokemonByName = async (pokemonName) => {
  const response = await axios.get(
    `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
  );
  return response.data;
};

export { getAllPokemons, getPokemonByName };
export type { PokemonProps };
