import React from 'react';
import superagent from 'superagent';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      urlValue: '',
    };
  }

  handleSubmit = async event => {
    event.preventDefault();
    let URL = this.state.urlValue;
    let data = await superagent.get(URL);
    let result = data.body;
    console.log(result);
    this.props.handle(result);
  };

  onChangeUrl = event => {
    this.setState({ urlValue: event.target.value });
  };

  getData = event => {
    this.setState({});
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit} id="form">
        {/* <input type="text" onChange={this.onChangeUrl.bind(this)} /> */}
        <input id="url" type="text" onChange={this.onChangeUrl} />
        <div>
          <input type="radio" onSelect={this.getData} />
          <span>GET</span>
          <input type="radio" onSelect={this.postData} />
          <span>POST</span>
          <input type="radio" onSelect={this.putData} />
          <span>PUT</span>
          <input type="radio" onSelect={this.deleteData} />
          <span>DELETE</span>
        </div>
        <button>{this.props.prompt}</button>
        <textarea rows="10" cols="70" />
      </form>
    );
  }
}

export default Form;
