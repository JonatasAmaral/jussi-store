import React from "react";

import ContactInfo from "~/components/ContactInfo";

import "./styles.scss";

export function Home() {
	return (
		<div className="home">
			<ContactInfo />
		</div>
	);
}

export default Home;
