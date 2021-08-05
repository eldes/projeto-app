import { FunctionComponent, ReactNode } from "react"

type Prop = {
	nome: string
	preco: number
	id: number
	children?: ReactNode
}

const Produto: FunctionComponent<Prop> = ({nome, preco, id, children}) => {
	return (
		<div>
			<h3>{nome}</h3>
			<p>{preco}</p>
			<p>{id}</p>
			{children}
		</div>
	)
}

export default Produto