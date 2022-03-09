import React from "react";

import "./styles.scss";

type PropsType = {
	num: number;
};

export function SolutionCard({ num }: PropsType) {
	return (
		<div className="solution-card">
			<div className="picture">
				<span>P{num}</span>
			</div>
			<h4>Nome do produto #{num}</h4>
			<p>Descrição do produto #{num}</p>
			<ul>
				<li>Feature 1</li>
				<li>Feature 2</li>
				<li>Feature 3</li>
			</ul>
			<button>Ver Solução</button>
		</div>
	);
}

export default SolutionCard;
