import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Main from './pages/Main';


class App extends Component {
  render() {
	  return ( 
		<Router>
			<Switch> 
				<Route path='/' component={Main} exact/>
			</Switch> 
		</Router>
	  );
  }
  
}
export default App;