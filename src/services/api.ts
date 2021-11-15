import axios from "axios";

export const api = axios.create({ baseURL: "https://pokeapi.co/api/v2/" });

type pokemonIdentifier = { name: string } | { id: number };
export async function findPokemon(identifier: pokemonIdentifier) {
	const response = await api.get(`pokemon/${identifier.id || identifier.name}`);
	return response.data;
}
export async function findPokemonById(id: number) {
	return await findPokemon({ id });
}
export async function findPokemonByName(name: string) {
	return await findPokemon({ name });
}
export async function findEspecies(id: number) {
	const response = await api.get(`pokemon-species/${id}`);
	return response.data;
}
export async function evolutionChain(id: number) {
	const evolutions = [];
	var response = await api.get(`evolution-chain/${id}`);
	evolutions.push(response.data.chain.species);
	evolutions.push(response.data.chain.species.evolves_to[0].species);
	evolutions.push(
		response.data.chain.species.evolves_to[0].evolves_to[0].map(
			(e: any) => e.species
		)
	);

	return evolutions;
}
export default api;
