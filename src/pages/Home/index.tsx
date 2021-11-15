import React from "react";

import JussiSession from "~/components/JussiSession";
import Newsletter from "~/components/Newsletter";
import Footer from "~/components/Footer";

import "./styles.scss";

export function Home() {
	return (
		<div className="home">
			<JussiSession />
			<Newsletter />
			<Footer />
		</div>
	);
}

export default Home;
