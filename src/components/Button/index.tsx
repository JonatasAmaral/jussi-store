import React from "react";

import "./styles.scss";

type AllButtonProps = {
	title: string;
	className?: string;
};
type LinkButtonProps = AllButtonProps & {
	url: string;
	action?: () => void;
};
type ActionButtonProps = React.ButtonHTMLAttributes<any> &
	AllButtonProps & {
		url: undefined | null | void;
		action: () => void;
	};
export type ButtonProps = (ActionButtonProps | LinkButtonProps) & {
	className?: string;
};

export function LinkButton({ url, title, ...rest }: LinkButtonProps) {
	return (
		<a href={url} {...rest}>
			{title}
		</a>
	);
}
export function ActionButton({ action, title, ...rest }: ActionButtonProps) {
	return (
		<button onClick={action} {...rest}>
			{title}
		</button>
	);
}

export function Button({
	className,
	title,
	url,
	action,
	...rest
}: ButtonProps) {
	return (
		<>
			{url ? (
				<LinkButton
					className={`button ${className || ""}`}
					title={title}
					url={url}
					action={action || function () {}}
					{...rest}
				/>
			) : (
				<ActionButton
					className={`button ${className || ""}`}
					title={title}
					url={undefined}
					action={action || function () {}}
					{...rest}
				/>
			)}
		</>
	);
}

export default Button;
