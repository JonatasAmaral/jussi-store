import React, { useEffect, useState } from "react";
import { findEspecies } from "~/services/api";

import "./index.scss";

export type PokemonProps = {
	name: string;
	id: number;
	image: string;
	moves: string[];
};

export function PokemonCard(props: PokemonProps) {
	const [pokeColor, setPokeColor] = useState("");

	useEffect(() => {
		const setColor = async () => {
			const {
				color: { name: color },
			} = await findEspecies(props.id);
			setPokeColor(color);
		};
		setColor();
	}, []);

	return (
		<div
			className="pokemon-card"
			style={{ "--poke-color": pokeColor } as React.CSSProperties}
		>
			<img src={props.image} alt={`Imagem do pokémon ${props.name}`} />
			<div>
				<h3>{props.name}</h3>
				<span>{props.id}</span>
			</div>

			<div>
				<h4>Ataques</h4>
				<ul>
					{props.moves.map((move) => (
						<li>{move}</li>
					))}
				</ul>
			</div>
		</div>
	);
}

export default PokemonCard;
