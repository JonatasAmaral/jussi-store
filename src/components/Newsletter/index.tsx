import React from "react";

import "./styles.scss";

type PropsType = {
	children?: React.ReactNode;
};

export function Newsletter(props: PropsType) {
	return (
		<section className="newsletter">
			<h3>receba novidades da nossa área de produtos digitais.</h3>
			<form action="">
				<div className="wrapper email">
					<input type="email" required placeholder="Digite seu e-mail" />
					<input type="submit" hidden />
				</div>
				<div className="wrapper send">
					<button type="submit">cadastrar</button>
				</div>
			</form>
		</section>
	);
}

export default Newsletter;
