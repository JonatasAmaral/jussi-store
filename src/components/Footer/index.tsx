import React from "react";

import "./styles.scss";
import companySeal from "~/assets/wppcompany.png";
import SocialIcon, { SocialIconPropsType } from "../SocialIcon";

type PropsType = {
	children?: React.ReactNode;
};

function FooterSocialIcon(props: SocialIconPropsType) {
	return <SocialIcon {...props} scaleMultiplier={1.75}></SocialIcon>;
}

function Footer(props: PropsType) {
	return (
		<footer className="footer">
			<a className="seal" href="https://www.wpp.com/">
				<img src={companySeal} alt="Seal: A wpp company" />
			</a>

			<div className="social">
				<FooterSocialIcon
					url="https://www.facebook.com/agencia.jussi"
					icon="facebook"
				/>
				<FooterSocialIcon
					url="https://www.instagram.com/jussi/"
					icon="instagram"
				/>
				<FooterSocialIcon
					url="https://www.linkedin.com/company/agencia-jussi/mycompany/"
					icon="linkedin"
				/>
			</div>
		</footer>
	);
}

export default Footer;
