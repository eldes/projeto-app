import { FunctionComponent, ReactNodeArray } from "react"
import { Link } from "react-router-dom"

export enum SecaoEnum {
	Home,
	Contato
}

type Props = {
	secao: SecaoEnum
	titulo: string
	children?: ReactNodeArray
}

const PaginaComponent: FunctionComponent<Props> = ({ secao, titulo, children }) => {
	return (
		<div className="pagina">
			<header>
				<h1>{titulo}</h1>
				<nav>
					[<Link to="/">Home</Link> { (secao === SecaoEnum.Home) ? <span>*</span> : <></> }]
					[<Link to="/contato">Contato</Link> { (secao === SecaoEnum.Contato) ? <span>*</span> : <></> }]
				</nav>
				<hr />
			</header>
			<main>
				{children}
			</main>
			<footer>
				<hr />
				<small>Rodapé</small>
			</footer>
		</div>
	)
}

export default PaginaComponent