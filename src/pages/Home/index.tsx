import React from "react";

import Solutions from "~/components/Solutions";
import ContactInfo from "~/components/ContactInfo";
import JussiSession from "~/components/JussiSession";
import Newsletter from "~/components/Newsletter";
import Footer from "~/components/Footer";

import "./styles.scss";

export function Home() {
	return (
		<div className="home">
			<Solutions />
			<ContactInfo />
			<JussiSession />
			<Newsletter />
			<Footer />
		</div>
	);
}

export default Home;
