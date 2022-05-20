import { MouseEvent, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getAllPokemons, getPokemonByName, PokemonProps } from "../../service";

export const List = () => {
  const [pokemonList, setPokemonList] = useState<PokemonListItems[]>([]);
  const [pokemonDetail, setPokemonDetail] = useState([]);
  const [pokemonName, setPokemonName] = useState("");

  const navigate = useNavigate();

  const goToDetail = (event: MouseEvent, id: number) => {
    event.preventDefault();
    navigate(`/detail/${id}`, { replace: true });
  };

  const fetchAllPokemonData = async () => {
    const data = await getAllPokemons();
    setPokemonList(data.results);
  };

  const pokemonCard = async (pokemonName: string) => {
    const data = await getPokemonByName(pokemonName);
    setPokemonDetail(data.results);
  };

  const createHashFromArray = (array) => {
    const hashFromArray = array.map((value) => {
      return {
        [`${value.name}`]: value.url,
      };
    });
    return hashFromArray;
  };

  const filterPokemonByName = (event) => {
    const { target } = event;
    setPokemonName(target.value);

    if (target.value !== "") {
      const resultFilterPokemonByName = pokemonList.filter((pokemon) => {
        return pokemon.name.toLowerCase().startsWith(pokemonName.toLowerCase());
      });
      setPokemonList(resultFilterPokemonByName);
    } else {
      fetchAllPokemonData();
    }
  };

  useEffect(() => {
    fetchAllPokemonData();
  }, []);

  return (
    <div className="pokemon-list-container">
      {/* <p>list works!</p>
      <Link to="/detail/new">New Pokemon</Link>
      <br />
      <a href="#" onClick={(event) => goToDetail(event, 1)}>
        Edit Pokemon 1
      </a> */}
      <span> Escolha o seu Primeiro Pokemon!</span>
      <div className="input-container">
        <span>Nome do Pokemon</span>
        <input
          className="pokemon-input-name"
          type="text"
          value={pokemonName}
          onChange={filterPokemonByName}
        />
      </div>
      <div className="pokemon-list">
        {pokemonList.map((pokemon) => (
          <div className="pokemon-card">
            <div
              className="pokemon-line"
              onClick={() => pokemonCard(pokemon.name)}
            >
              {pokemon.name}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
