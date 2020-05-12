import React, { Component } from "react";
import ReactDOM from "react-dom";


function PageTitle() {
    return  <h1>Markdown Previewer</h1>;
}


class Editor extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
	  editorText: 'Will enter markdown text here...'
      };
    this.handleChange = this.handleChange.bind(this);
      
  }

  handleChange(event) {
    this.setState({editorText: event.target.value});
  }
    
  render() {
      return (
	  <div>
	      <h2>Editor</h2>
              <form>
              <textarea
	  id = "editor"
	  type="text"
	  value={this.state.editorText}
	  onChange={this.handleChange} />
	      </form>
	      </div>
    );
  }
}


class Previewer extends React.Component {
  constructor(props) {
    super(props);
      this.state = {
	  markdownText: 'Results will appear here...'
      };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({markdownText: event.target.value});
  }

  render() {
      return (
	  <div>
	      <h2>Previewer</h2>
              <div id="preview">{this.state.markdownText}</div>
	  </div>
    );
  }
}



class App extends Component {
  constructor(props) {
    super(props);
  }
    
  render() {
      return (
	  <div>
              <PageTitle />
	      <Editor />
	      <Previewer />
	  </div>
      )
  }
}

export default App;

const wrapper = document.getElementById("root");
wrapper ? ReactDOM.render(<App />, wrapper) : false;
