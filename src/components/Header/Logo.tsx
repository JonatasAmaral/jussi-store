import React from "react";

import LogoSVG from "~/logo.svg";

import "./Logo.styles.scss";

type PropsType = {};

export function Header(props: PropsType) {
	return (
		<a href="/" className="logo" aria-label="Link para pagina principal">
			<LogoSVG />
			{/* <img src={LogoSVG} alt="logo" /> */}
		</a>
	);
}

export default Header;
