import React, { Component } from 'react';
import axios from 'axios'
import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';
import NavBar from './components/NavBar'
import {BrowserRouter as Router, Route} from 'react-router-dom';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: [],
    };
  }

  componentDidMount(){
    axios.get('http://localhost:3333/smurfs')
      .then(res => {console.log(res); this.setState({smurfs: res.data})})
      .catch(err => console.log(err));
  }


  //Is this the best way to make sure the state is updated and rerendered?
  componentDidUpdate(){
    axios.get('http://localhost:3333/smurfs')
      .then(res => {
        if(res !== this.state.smurfs)
        {
          this.setState({smurfs: res.data})
        }
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div className="App">
        <NavBar/>
        <Route path='/smurf-form' component={SmurfForm} />
        <Route path= '/' render={props => (<Smurfs smurfs={this.state.smurfs}/>)}/>
      </div>
    );
  }
}

export default App;
