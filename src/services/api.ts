import axios from "axios";

export const api = axios.create({ baseURL: "https://pokeapi.co/api/v2/" });

type pokemonIdentifier = { name: string } | { id: number };
export async function findPokemon(identifier: pokemonIdentifier) {
	const response = await api.get(`pokemon/${identifier.name || identifier.id}`);
	return response.data;
}
export async function findPokemonById(id: number) {
	return await findPokemon({ id });
}
export async function findPokemonByName(name: string) {
	return await findPokemon({ name });
}

export default api;
