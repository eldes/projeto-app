import { FunctionComponent, ReactNode } from "react"

type Props = {
	title: string
	children?: ReactNode
}

const ExternalPage: FunctionComponent<Props> = ({title, children}) => {
	return (
		<div className="externalPage">
			<header>
				<h1>Nome do site</h1>
				<nav>
					menu
				</nav>
			</header>
			<main>
				<h2>{title}</h2>
				{children}
			</main>
			<footer>
				Rodapé
			</footer>
		</div>
	)
}

export default ExternalPage