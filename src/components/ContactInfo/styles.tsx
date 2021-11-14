import React, { ComponentProps } from "react";
import styled, { ThemeProps } from "styled-components";

type PropsType = {
	email: string;
	className?: string;
};

export function MailOnLink({ email, className }: PropsType) {
	return (
		<a className={className} href={`mailto:${email}`}>
			{email}
		</a>
	);
}

export const ContactInfoSection = styled.section`
	font-family: "Barlow", sans-serif;
	font-weight: 500;
	font-size: 2rem;
	background-color: var(--pink);
	padding: 6em 3rem;
	color: white;
	text-align: center;
`;
export const Callout = styled.h3`
	font-size: inherit;
	max-width: 700px;
	margin: 0 auto 2rem;
	font-weight: bold;
	text-transform: uppercase;
`;
export const ContactCall = styled.p`
	font-size: 1rem;
	line-height: 1.5rem;
	margin: 0 auto;
`;
export const MailLink = styled(MailOnLink)`
	padding: 1rem 0;
	color: white !important;
	font-size: 2rem;

	&:not(:hover) {
		text-decoration: none;
	}
`;
