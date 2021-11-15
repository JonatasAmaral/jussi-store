import React from "react";

import "./styles.scss";

type ProductBannerCardProps = {
	title: string;
	src: string;
	alt?: string;
};
export function ProductBannerCard({ title, ...img }: ProductBannerCardProps) {
	return (
		<div className="product-banner-card">
			<img {...img} />
			<button className="button">{title}</button>
		</div>
	);
}

type PropsType = {};
export function Banner() {
	return (
		<section className="hero-banner">
			<div className="text">
				<h1>Criamos lojas que vendem mais.</h1>
				<p>
					A Jüssi é especialista na criação de lojas usando a plataforma VTEX.
					Precisa criar sua loja ou migrar de plataforma?
				</p>
				<a className="button" href="https://jussi.com.br/services.html">
					Veja nossas soluções
				</a>
			</div>

			<div className="products">
				<ProductBannerCard
					title="Mais detalhes"
					src="https://brastemp.vtexassets.com/arquivos/ids/224161/Geladeira-Brastemp-BRO80AK-Frontal-1_0.jpg"
				/>
				<ProductBannerCard
					title="Comprar em 12x"
					src="https://kitchenaid.vtexassets.com/arquivos/ids/164389-800-800"
				/>
				<ProductBannerCard
					title="Adicionar à sacola"
					src="https://m.media-amazon.com/images/I/51k5ECwgOrL._AC_SY500_.jpg"
				/>
			</div>
		</section>
	);
}

export default Banner;
