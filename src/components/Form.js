import React from 'react';
import superagent from 'superagent';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      urlValue: '',
      selectedMethod: '',
      checked: '',
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

  handleOptionChange = event => {
    this.setState({ selectedMethod: event.target.value, checked: true });
    console.log(this.state.selectedMethod);
  };

  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit} id="form">
          <input id="url" type="text" onChange={this.onChangeUrl} />
          <div>
            <input
              type="radio"
              value="get"
              checked={this.state.selectedMethod === 'get'}
              onChange={this.handleOptionChange}
            />
            <label>GET</label>
            <input
              type="radio"
              value="post"
              checked={this.state.selectedMethod === 'post'}
              onChange={this.handleOptionChange}
            />
            <label>POST</label>
            <input
              type="radio"
              value="put"
              checked={this.state.selectedMethod === 'put'}
              onChange={this.handleOptionChange}
            />
            <label>PUT</label>
            <input
              type="radio"
              value="delete"
              checked={this.state.selectedMethod === 'delete'}
              onChange={this.handleOptionChange}
            />
            <label>DELETE</label>
          </div>
          <button>{this.props.prompt}</button>
          <textarea rows="10" cols="70" />
        </form>
      </>
    );
  }
}

export default Form;
