import React from "react";
import { FaLongArrowAltRight } from "react-icons/fa";
import Favicon from "~/assets/jussi-dots-separator.svg";

import {
	LogoBarSection,
	LogoBarWrapper,
	LogoBarText,
	Separator,
	LogoBox,
} from "./styles";

import logoBrastemp from "../../assets/logos/logo-brastemp.png";
import logoCompraCerta from "../../assets/logos/logo-compra-certa.png";
import logoConsul from "../../assets/logos/logo-consul.png";
import logoTheBar from "../../assets/logos/logo-thebar.png";

type PropsType = {
	children?: React.ReactNode;
};

export function LogoBar(props: PropsType) {
	return (
		<LogoBarSection>
			<LogoBarWrapper>
				<LogoBarText>Nossas principais lojas VTEX</LogoBarText>
				<Separator>
					<FaLongArrowAltRight />
					<img
						src={Favicon}
						style={{ margin: 0, filter: "saturate(0) brightness(.5)" }}
					/>
				</Separator>
				<LogoBox
					src={logoBrastemp}
					name="Brastemp"
					link="https://www.brastemp.com.br/"
				/>
				<LogoBox src={logoCompraCerta} name="Compra Certa" link="" />
				<LogoBox src={logoConsul} name="Consul" link="https://consul.com.br/" />
				<LogoBox src={logoTheBar} name="The Bar.com" />
			</LogoBarWrapper>
		</LogoBarSection>
	);
}

export default LogoBar;
