import React, { FormEvent, MouseEvent } from "react";
import { FiSearch, FiShoppingCart, FiMenu, FiUser, FiX } from "react-icons/fi";
import { findPokemonById, findPokemonByName } from "~/services/api";

import Logo from "./Logo";
import PokemonCard from "../PokemonCard";

import "./styles.scss";

export function Header() {
	const [logged, setLogged] = React.useState(false);
	const [searchQuery, setSearchQuery] = React.useState("");
	const [validQuery, setValidQuery] = React.useState(false);
	const [apiResponseData, setApiResponseData] = React.useState<any>({});
	const [hasData, setHasData] = React.useState(false);

	function handleLogin(e: MouseEvent) {
		e.preventDefault();

		setTimeout(() => {
			setLogged((p) => !p);
		}, 1000);
	}

	async function handleSearch(e: FormEvent) {
		e.preventDefault();

		const query = searchQuery.trim().toLowerCase();
		setSearchQuery(query);

		if (query === "") {
			return;
		}

		try {
			const pokeId = parseInt(query);
			if (!!pokeId) setApiResponseData(await findPokemonById(pokeId));
			else setApiResponseData(await findPokemonByName(query));

			setHasData(true);
		} catch (err) {
			console.error(err);
		}
	}

	return (
		<>
			<header className={`${hasData && "blur"}`} tabIndex={-1}>
				<Logo />
				<nav>
					<ul>
						<li>
							<a href="https://jussi.com.br/services.html">Nossas soluções</a>
						</li>
						<li>
							<a href="https://jussi.com.br/about.html">Conheça a Jüssi</a>
						</li>
					</ul>
				</nav>

				<form action="" className="search" onSubmit={handleSearch}>
					<input
						id="search-input"
						name="search-input"
						type="text"
						placeholder="Buscar um pokémon"
						required
						value={searchQuery}
						onChange={(e) => {
							setValidQuery(e.target.validity.valid);
							setSearchQuery(e.target.value);
						}}
						pattern="([0-9]{1,})|(^[a-zA-Z]{3,15}$)"
						onInvalid={(e) => {
							alert("Digite um número, ou um nome com 3 à 15 letras");
						}}
					/>
					<input type="submit" hidden />
					<label htmlFor="search-input">
						{/* HACK: make label icon look EXACLY the sabe as the one from submit button*/}
						<button
							className="button"
							disabled
							style={{ pointerEvents: "none" }}
						>
							<FiSearch />
						</button>
					</label>
					<button className="button" type="submit" disabled={!validQuery}>
						<FiSearch />
					</button>
				</form>

				<a className="login" href="#" onClick={handleLogin}>
					{logged ? (
						<>
							<FiUser size={20} style={{ paddingRight: 5 }} />
							Logout
						</>
					) : (
						"Login"
					)}
				</a>
				<button className="button cart">
					<FiShoppingCart />
				</button>
			</header>

			{hasData && (
				<div className="search-results">
					<button className="close-overlay" onClick={() => setHasData(false)}>
						<FiX />
					</button>
					<PokemonCard
						name={apiResponseData.name}
						id={apiResponseData.id}
						image={apiResponseData.sprites.front_default}
						moves={apiResponseData.moves
							.filter((i: any, k: number) => k < 3)
							.map((m: any) => m.move.name)}
					/>
				</div>
			)}
		</>
	);
}

export default Header;
