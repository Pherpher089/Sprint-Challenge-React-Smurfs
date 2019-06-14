import React, { Component } from 'react';

import Smurf from './Smurf';
import Axios from 'axios';

class Smurfs extends Component {

  deleteSmurf = id =>{
    Axios.delete(`http://localhost:3333/smurfs/${id}`)
      .then(res => console.log(res))
      .catch(err => console.log(err))
  }

  render() {
    return (
      <div className="Smurfs">
        <h1>Smurf Village</h1>
        <ul>
          {this.props.smurfs.map(smurf => {
            return (
              <Smurf
                name={smurf.name}
                id={smurf.id}
                age={smurf.age}
                height={smurf.height}
                key={smurf.id}
                onDelete={this.deleteSmurf}
              />
            );
          })}
        </ul>
      </div>
    );
  }
}

Smurf.defaultProps = {
 smurfs: [],
};

export default Smurfs;
