import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      api: null,
      post: null,
      get: [],
      put: null,
      delete: null
    };
  }
  componentDidMount() {
    // check express api proxy feed
    fetch('/api', {
      accept: 'application/json'
    })
    .then(res => res.json())
    .then(data => {
      console.log(data)
      this.setState({api:data.check});
    })
    .catch(err => console.log('ERR:', err))
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('updated', this.state)
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
        this.setState({post:data});
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
        this.setState({get:res});
      })
     .catch(err => console.log('ERR:', err))
    }
    else if (prevState.get !== this.state.get) {
      fetch('/api/entries', {
          headers: {
            'Content-Type': 'application/json'
          },
          method: 'put',
          body: JSON.stringify({"database":"default","dbCollection":"entries"})
        })
        .then(res => res.json())
        .then(data => {
          this.setState({post:data});
        })
       .catch(err => console.log('ERR:', err))
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
        <div className="check result"><code>{JSON.stringify(this.state.post)}</code></div>
        <div className={'crud ' + (this.state.get ? 'passing' : 'failing')}>R</div>
        <div className="check">GET</div>
        <div className="check result">{'entries: ' + this.state.get.length}<div><code>{JSON.stringify(this.state.get[this.state.get.length-1])}</code></div></div>
        <div className={'crud ' + (this.state.delete ? 'passing' : 'failing')}>U</div>
        <div className="check">PUT</div>
        <div className="check result"></div>
        <div className={'crud ' + (this.state.delete ? 'passing' : 'failing')}>D</div>
        <div className="check">DELETE</div>
        <div className="check result"></div>
      </div>
    );
  }
}

export default App;
