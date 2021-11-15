import React, { ReactPropTypes, PropsWithChildren } from "react";

import {
	FaFacebookF,
	FaLinkedinIn,
	FaInstagram,
	FaTwitter,
	FaDiscord,
	FaTwitch,
} from "react-icons/fa";

const iconMapper = {
	facebook: <FaFacebookF />,
	linkedin: <FaLinkedinIn />,
	instagram: <FaInstagram />,
	twitter: <FaTwitter />,
	discord: <FaDiscord />,
	twitch: <FaTwitch />,
};

export type SocialIconPropsType = {
	url: string;
	icon: keyof typeof iconMapper;
	description?: string;
	color?: string;
	scaleMultiplier?: number;
};

export function SocialIcon(props: SocialIconPropsType) {
	const [hasFocus, setHasFocus] = React.useState(false);

	return (
		<a
			onMouseEnter={() => setHasFocus(true)}
			onMouseLeave={() => setHasFocus(false)}
			onFocus={() => setHasFocus(true)}
			onBlur={() => setHasFocus(false)}
			className="social-icon"
			style={{
				color: props.color || "white",
				fontSize: `${props.scaleMultiplier || 1}rem`,
				borderBottom: hasFocus ? "2px solid" : "",
			}}
			href={props.url}
			aria-label={props.description}
			{...props}
		>
			{iconMapper[props.icon]}
		</a>
	);
}

export default SocialIcon;
