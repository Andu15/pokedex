import axios from 'axios';

const baseUrl = "https://pokeapi.co/api/v2";

const getPokemons = async() => {
  try {
    const pokemons = await axios.get(`${baseUrl}/ability/`);
    return response.data;
  } catch (error) {
    console.error('Error fetching Pokemon data:', error.message);
    throw error;
  }
}

const getSpecificPokemonData = async (pokemonName) => {
  try {
    const response = await axios.get(`${baseUrl}/pokemon/${pokemonName}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching Pokemon data:', error.message);
    throw error;
  }
}

const getRandomPokemonData = async (pokemonId) => {
  try {
    const response = await axios.get(`${baseUrl}/pokemon/${pokemonId}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching Pokemon data:', error.message);
    throw error;
  }
}

const requestHandler = async (httpPokemon) => {
  try {
    // const response = await axios.get(`${baseUrl}/pokemon-species/${pokemonId}`);
    const response = await axios.get(httpPokemon);
    return response.data;
  } catch (error) {
    console.error('Error fetching Pokemon data:', error.message);
    throw error;
  }
}

export {
  getPokemons,
  getSpecificPokemonData,
  getRandomPokemonData,
  requestHandler
}