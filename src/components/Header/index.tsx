import React, { MouseEvent } from "react";
import { FiSearch, FiShoppingCart, FiMenu } from "react-icons/fi";

import Logo from "./Logo";

import "./styles.scss";

export function Header() {
	return (
		<header>
			<input
				type="checkbox"
				name="mob-menu-is-open"
				id="mob-menu-is-open"
				style={{ display: "none" }}
			/>
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

			<form action="" className="search">
				<input
					id="search-input"
					name="search-input"
					type="text"
					placeholder="Buscar"
				/>
				<label htmlFor="search-input">
					{/* HACK: make label icon look EXACLY the sabe as the one from submit button*/}
					<button className="button" disabled style={{ pointerEvents: "none" }}>
						<FiSearch />
					</button>
				</label>
				<button className="button" type="submit">
					<FiSearch />
				</button>
			</form>

			<a className="login" href="#">
				Login
			</a>
			<button className="button cart">
				<FiShoppingCart />
			</button>
		</header>
	);
}

export default Header;
