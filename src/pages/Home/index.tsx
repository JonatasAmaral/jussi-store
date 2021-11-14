import React from "react";

import Newsletter from "~/components/Newsletter";

import "./styles.scss";

export function Home() {
	return (
		<div className="home">
			<Newsletter />
		</div>
	);
}

export default Home;
