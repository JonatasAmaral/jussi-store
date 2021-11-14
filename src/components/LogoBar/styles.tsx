import React from "react";
import styled from "styled-components";

export const LogoBarSection = styled.section`
	font-family: "Barlow", sans-serif;
	font-weight: 500;
	background-color: #f2f2f2;
	padding: 1rem 2rem;
	display: flex;
	justify-content: center;
`;
export const LogoBarWrapper = styled.div`
	flex: 1;
	max-width: 1024px;
	height: 100%;

	display: flex;
	justify-content: space-between;
	align-items: center;
	flex-direction: row;
`;
export const LogoBarText = styled.h3`
	font-size: 1rem;
`;
export const Separator = styled.i`
	text-align: center;
`;

type LogoProps = {
	src: string;
	name: string;
	link?: string;
	className?: string;
};
const Logo = ({ src, name, link, className }: LogoProps) =>
	link ? (
		<a className={className} href={link}>
			<img src={src} alt={name} />
		</a>
	) : (
		<span className={className}>
			<img src={src} alt={name} />
		</span>
	);
export const LogoBox = styled(Logo)`
	margin: 0 0.25rem;
`;
