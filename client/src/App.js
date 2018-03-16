import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      api: null
    };
  }
  componentDidMount() {
    console.log('mounted')
    fetch('/api', {
      accept: 'application/json'
    })
    .then(res => {
      return res.json();
    })
    .then(res => {
      this.setState({api:res.check});
    })
    .catch(err => console.log('ERR', err))
  }
  render() {
    return (
      <div className="App">
        {this.state.api}
      </div>
    );
  }
}

export default App;
