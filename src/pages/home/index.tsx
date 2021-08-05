import PaginaComponent, { SecaoEnum } from "../../components/pagina-component"

const Home = () => {
	return (
		<PaginaComponent secao={SecaoEnum.Home} titulo="Home">
			<h2>Bem-vindo!</h2>
			<p>Teste.</p>
		</PaginaComponent>
	)
}

export default Home