import React, { MouseEvent } from "react";
import { FiSearch, FiShoppingCart } from "react-icons/fi";

import Logo from "./Logo";

import "./styles.scss";

export function Header() {
	return (
		<header>
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
				<button className="button" type="submit">
					<FiSearch />
				</button>
			</form>

			<a className="login" href="#">
				Login
			</a>
			<button className="cart">
				<FiShoppingCart />
			</button>
		</header>
	);
}

export default Header;
