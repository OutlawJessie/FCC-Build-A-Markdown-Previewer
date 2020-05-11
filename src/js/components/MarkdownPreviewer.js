import React, { Component } from "react";
import ReactDOM from "react-dom";

class Form extends Component {
  constructor() {
    super();

    this.state = {
      value: ""
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const { value } = event.target;
    this.setState(() => {
      return {
        value
      };
    });
  }

  render() {
      return (
    <div>
       <h1>Markdown Previewer</h1>
      <form>
        <textarea
          type="text"
	  id="editor"
          value={this.state.value}
          onChange={this.handleChange}
        />
	      </form>
</div>
    );
  }
}

export default Form;

const wrapper = document.getElementById("root");
wrapper ? ReactDOM.render(<Form />, wrapper) : false;
