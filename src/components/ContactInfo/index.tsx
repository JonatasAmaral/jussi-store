import React from "react";

import { ContactInfoSection, Callout, ContactCall, MailLink } from "./styles";

type PropsType = {
	children?: React.ReactNode;
};

export function ContactInfo(props: PropsType) {
	// return <section className="contact-info"></section>;
	return (
		<ContactInfoSection>
			<Callout>
				Essa loja foi construída usando uma das nossas soluções da plataforma
				VTEX.
				<br />
				tenha a sua.
			</Callout>
			<div>
				<ContactCall>Entre em contato</ContactCall>
				<MailLink email="comercial@jussi.com.br"></MailLink>
			</div>
		</ContactInfoSection>
	);
}

export default ContactInfo;
