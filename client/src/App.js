import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      api: undefined,
      post: undefined,
      get: undefined,
      put: undefined,
      delete: undefined,
      delay:500
    };
  }
  componentDidMount() {
    // check express api proxy feed
    fetch('/api', {
      accept: 'application/json'
    })
    .then(res => res.json())
    .then(data => {
      setTimeout(() => this.setState({api:data}), this.state.delay);
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
        setTimeout(() => this.setState({post:data}), this.state.delay);
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
        setTimeout(() => this.setState({get:res}), this.state.delay);
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
          setTimeout(() => this.setState({put:data}), this.state.delay);
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
        setTimeout(() => this.setState({delete:res}), this.state.delay);
      })
    }
  }

  passFail(stateKey) {
    return 'crud ' + (this.state[stateKey] ? 'passing' : 'failing');
  }

  okay() {
    return (this.state.delete ? <div className="passing okay">&#10004;</div> : <div className="failing okay">&#10060;</div>);
  }

  render() {

    return (
      <div className="App">
        <div className="justify"><code className={this.passFail('api')}>/api</code></div>
        <div className="justify"><div>PROXY</div></div>
        <div className="justify left"><code>{JSON.stringify(this.state.api)}</code></div>
        <div className="justify"><div className={this.passFail('post')}>C</div></div>
        <div className="justify"><div>POST</div></div>
        <div className="justify left"><code>{JSON.stringify(this.state.post)}</code></div>
        <div className="justify"><div className={this.passFail('get')}>R</div></div>
        <div className="justify"><div>GET</div></div>
        <div className="justify left"><code>{JSON.stringify(this.state.get)}</code></div>
        <div className="justify"><div className={this.passFail('put')}>U</div></div>
        <div className="justify"><div>PUT</div></div>
        <div className="justify left"><code>{JSON.stringify(this.state.put)}</code></div>
        <div className="justify"><div className={this.passFail('delete')}>D</div></div>
        <div className="justify"><div>DELETE</div></div>
        <div className="justify left"><code>{JSON.stringify(this.state.delete)}</code></div>
        <div className="justify">{this.okay()}</div>
      </div>
    );
  }
}

export default App;
