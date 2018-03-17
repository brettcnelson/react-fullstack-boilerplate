import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      api: {},
      post: {},
      get: {},
      put: {    },
      delete: {}
    };
  }
  componentDidMount() {
    // check express api proxy feed
    fetch('/api', {
      accept: 'application/json'
    })
    .then(res => res.json())
    .then(data => {
      setTimeout(() => this.setState({api:data.check}), 1000);
    })
    .catch(err => console.log('ERR:', err))
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.api !== this.state.api) {
      // check api POST
      fetch('/api/entries', {
        headers: {
          'Content-Type': 'application/json'
        },
        method: 'post',
        body: JSON.stringify({"database":"default","dbCollection":"entries"})
      })
      .then(res => res.json())
      .then(data => {
        setTimeout(() => this.setState({post:data}), 1000);
      })
     .catch(err => console.log('ERR:', err))
    }
    else if (prevState.post !== this.state.post) {
      // check api GET
      fetch('/api/entries', {
        accept: 'application/json'
      })
      .then(res => res.json())
      .then(res => {
        setTimeout(() => this.setState({get:res}), 1000);
      })
     .catch(err => console.log('ERR:', err))
    }
    else if (prevState.get !== this.state.get) {
      // check api PUT
      fetch('/api/entries/' + this.state.get[this.state.get.length-1]._id, {
          headers: {
            'Content-Type': 'application/json'
          },
          method: 'put',
          body: JSON.stringify({"database":"UPDATED default","dbCollection":"UPDATED entries"})
        })
        .then(res => res.json())
        .then(data => {
          setTimeout(() => this.setState({put:data}), 1000);
        })
       .catch(err => console.log('ERR:', err))
    }
    else if (prevState.put !== this.state.put) {
      // check api DELETE
      fetch('/api/entries/' + this.state.get[this.state.get.length-1]._id, {
        headers: {
          'Content-Type': 'application/json'
        },
        method: 'delete'
      })
      .then(res => res.json())
      .then(res => {
        setTimeout(() => this.setState({delete:res}), 1000);
      })
    }
  }

  render() {
    return (
      <div className="App">
        <div className={'crud ' + (this.state.api ? 'passing' : 'failing')}><code>/api</code></div>
        <div className="check">PROXY</div>
        <div className="check result" dangerouslySetInnerHTML={{__html: this.state.api}}></div>
        <div className={'crud ' + (this.state.post ? 'passing' : 'failing')}>C</div>
        <div className="check">POST</div>
        <div><code>{JSON.stringify(this.state.post)}</code></div>
        <div className={'crud ' + (this.state.get.length ? 'passing' : 'failing')}>R</div>
        <div className="check">GET</div>
        <div><code>{JSON.stringify(this.state.get)}</code></div>
        <div className={'crud ' + (this.state.put ? 'passing' : 'failing')}>U</div>
        <div className="check">PUT</div>
        <div><code>{JSON.stringify(this.state.put)}</code></div>
        <div className={'crud ' + (this.state.delete ? 'passing' : 'failing')}>D</div>
        <div className="check">DELETE</div>
        <div><code>{JSON.stringify(this.state.delete)}</code></div>
      </div>
    );
  }
}

export default App;
