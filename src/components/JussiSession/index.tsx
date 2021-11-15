import React from "react";

import JussiImage from "~/assets/image-jussi.jpg";
import Button from "../Button";

import "./styles.scss";

type PropsType = {
	children?: React.ReactNode;
};

export function JussiSession(props: PropsType) {
	return (
		<section id="sobre-nos">
			<div className="container">
				<div className="text">
					<h3 className="title">Olá, somos a Jüssi</h3>
					<p>
						A Jüssi é uma agência integrante do grupo global WPP que vem há 10
						anos consolidando o pensamento voltado para produtos e resolução de
						problemas. Nosso área dedicada exclusivamente para Produtos Digitais
						é organizada em 6 especialidades: Product Managamenet, User
						Experience Design, SEO, Tecnologia, Agile e User Behavior Analytics.
					</p>
					<Button
						title="Conheça a Jüssi"
						url={undefined}
						action={() => {
							alert("nada");
						}}
					/>
					{/* <Button
						title="Conheça a Jüssi"
						url="https://jussi.com.br/about.html"
					/> */}
				</div>
				<div className="img">
					<img
						src={JussiImage}
						alt="Balcão de atendimento em um escritório da Jussi, de cor branca, com um logo em letra caixa preta, com retroiluminação azul"
					/>
				</div>
			</div>
		</section>
	);
}

export default JussiSession;
