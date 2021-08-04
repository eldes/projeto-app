import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import './App.css'
import Contato from './pages/contato'
import Home from './pages/home'

function App() {
	return (
		<>
			<header>
				<h1>Meu site</h1>
				<nav>
					<a href="/">Home</a>
					<a href="/contato">Contato</a>
				</nav>
			</header>
			<main>
				<BrowserRouter>
					<Switch>
						<Route path="/" exact component={Home} />
						<Route path="/contato" exact component={Contato} />
					</Switch>
				</BrowserRouter>
			</main>
			<footer>
				Todos os direitos reservados.
			</footer>
		
		</>
	)
}

export default App
