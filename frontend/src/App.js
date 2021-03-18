import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Register from './pages/Register';
import Login from './pages/Login';
import Home from './pages/Home';
function App() {
	return (
		<div className='App'>
			<Router>
				<Navbar />
				<Switch>
					<Route exact path='/' component={Home} />

					<Route exact path='/login' component={Login}></Route>
					<Route exact path='/register' component={Register}></Route>
				</Switch>
			</Router>
		</div>
	);
}

export default App;
