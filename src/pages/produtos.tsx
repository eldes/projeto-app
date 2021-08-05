import ExternalPage from "../components/ExternalPage"
import Produto from "../components/Produto"

const Produtos = () => {
	return (
		<ExternalPage title="Produtos">
			<Produto id={1} nome="Impressora" preco={100}>
				<p>Detalhes</p>
				<img />
				<form ><input /></form>
			</Produto>
			<Produto id={2} nome="SSD" preco={400} />
			<Produto id={3} nome="Flash drive" preco={40} />
		</ExternalPage>
	)
}

export default Produtos