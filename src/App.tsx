import { BrowserRouter, Switch, Route } from 'react-router-dom'
import './App.css'
import About from './pages/about'
import Contato from './pages/contato'
import Home from './pages/home'

function App() {
	return (
		<BrowserRouter>
			<Switch>
				<Route path="/" exact component={Home} />
				<Route path="/contato" exact component={Contato} />
				<Route path="/about" exact component={About} />
			</Switch>
		</BrowserRouter>
	)
}

export default App
