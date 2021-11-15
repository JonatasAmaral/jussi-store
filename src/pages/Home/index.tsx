import React from "react";

import Newsletter from "~/components/Newsletter";
import Footer from "~/components/Footer";

import "./styles.scss";

export function Home() {
	return (
		<div className="home">
			<Newsletter />
			<Footer />
		</div>
	);
}

export default Home;
