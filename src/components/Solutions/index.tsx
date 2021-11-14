import React from "react";
import SolutionCard from "../SolutionCard";

import "./styles.scss";

type PropsType = {
	children?: React.ReactNode;
};

export function Solutions(props: PropsType) {
	return (
		<section className="solutions">
			<h2>Nossas soluções</h2>
			<div className="soluctions-list">
				<SolutionCard num={1} />
				<SolutionCard num={2} />
				<SolutionCard num={3} />
				<SolutionCard num={4} />
			</div>
		</section>
	);
}

export default Solutions;
