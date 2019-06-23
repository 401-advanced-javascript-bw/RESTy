import React from 'react';
import './App.css';
import Header from './components/Header.js';
import Form from './components/Form.js';
import './design/app.scss';
import ReactJson from 'react-json-view';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
    };
  }
  handleForm = data => {
    this.setState({ data });
  };

  render() {
    return (
      <>
        <div>
          <Header />
          <Form prompt="go" handle={this.handleForm} />
          <ReactJson src={this.state.data} />
        </div>
      </>
    );
  }
}

export default App;
